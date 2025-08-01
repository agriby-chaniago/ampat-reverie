"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import {
  X,
  Star,
  ThumbsUp,
  ThumbsDown,
  Send,
  History,
  Edit,
} from "lucide-react";

const SCROLL_THRESHOLD = 50;
const SUCCESS_DISPLAY_DURATION = 2000;
const POPUP_DELAY = 1000;

const useFeedbackState = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [vote, setVote] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [userFeedback, setUserFeedback] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [feedbackChecked, setFeedbackChecked] = useState(false);

  const resetFeedbackState = () => {
    setIsVisible(false);
    setShowPopup(false);
    setRating(0);
    setComment("");
    setVote(null);
    setSubmitSuccess(false);
    setUserFeedback(null);
    setEditMode(false);
  };

  return {
    isVisible,
    setIsVisible,
    showPopup,
    setShowPopup,
    rating,
    setRating,
    comment,
    setComment,
    vote,
    setVote,
    isSubmitting,
    setIsSubmitting,
    submitSuccess,
    setSubmitSuccess,
    currentUser,
    setCurrentUser,
    userFeedback,
    setUserFeedback,
    isLoading,
    setIsLoading,
    editMode,
    setEditMode,
    feedbackChecked,
    setFeedbackChecked,
    resetFeedbackState,
  };
};

const useScrollTracking = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return { scrollDirection };
};
const LoadingSpinner = () => (
  <svg
    className='animate-spin h-8 w-8 text-gray-500'
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
  >
    <circle
      className='opacity-25'
      cx='12'
      cy='12'
      r='10'
      stroke='currentColor'
      strokeWidth='4'
    ></circle>
    <path
      className='opacity-75'
      fill='currentColor'
      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
    ></path>
  </svg>
);

const SuccessMessage = ({ userFeedback, editMode }) => (
  <div className='text-center py-8'>
    <div className='mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4'>
      <svg
        className='w-8 h-8 text-green-600'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M5 13l4 4L19 7'
        ></path>
      </svg>
    </div>
    <p className='text-lg font-medium text-gray-800'>
      {userFeedback && !editMode
        ? "Feedback Anda telah diperbarui!"
        : "Terima kasih atas feedback Anda!"}
    </p>
  </div>
);

const RatingSection = ({ rating, onRatingClick, editMode, userFeedback }) => (
  <div>
    <label className='block text-gray-700 mb-2 font-medium'>
      Bagaimana penilaian Anda tentang Raja Ampat?
    </label>
    <div className='flex space-x-1'>
      {[1, 2, 3, 4, 5].map((value) => (
        <button
          key={value}
          onClick={() => onRatingClick(value)}
          className={`p-1 rounded-full transition-colors ${
            rating >= value ? "text-yellow-400" : "text-gray-300"
          } ${!editMode && userFeedback ? "cursor-default" : "cursor-pointer"}`}
          disabled={!editMode && userFeedback}
        >
          <Star fill={rating >= value ? "currentColor" : "none"} size={28} />
        </button>
      ))}
    </div>
  </div>
);

const CommentSection = ({
  comment,
  onCommentChange,
  editMode,
  userFeedback,
}) => (
  <div>
    <label className='block text-gray-700 mb-2 font-medium'>
      Bagikan pendapat Anda (opsional)
    </label>
    <textarea
      value={comment}
      onChange={onCommentChange}
      className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px] resize-none ${
        !editMode && userFeedback ? "bg-gray-50" : ""
      }`}
      placeholder='Apa yang Anda suka atau tidak suka tentang Raja Ampat?'
      disabled={!editMode && userFeedback}
      readOnly={!editMode && userFeedback}
    ></textarea>
  </div>
);

const VoteSection = ({ vote, onVote, editMode, userFeedback }) => (
  <div>
    <label className='block text-gray-700 mb-2 font-medium'>
      Apakah Anda merekomendasikan Raja Ampat?
    </label>
    <div className='flex space-x-4'>
      <button
        onClick={() => onVote("up")}
        disabled={!editMode && userFeedback}
        className={`flex items-center space-x-1 px-4 py-2 rounded-md border ${
          vote === "up"
            ? "bg-green-50 border-green-500 text-green-600"
            : "border-gray-300 text-gray-700 hover:bg-gray-50"
        } ${!editMode && userFeedback ? "opacity-70 cursor-default" : ""}`}
      >
        <ThumbsUp size={18} />
        <span>Ya</span>
      </button>
      <button
        onClick={() => onVote("down")}
        disabled={!editMode && userFeedback}
        className={`flex items-center space-x-1 px-4 py-2 rounded-md border ${
          vote === "down"
            ? "bg-red-50 border-red-500 text-red-600"
            : "border-gray-300 text-gray-700 hover:bg-gray-50"
        } ${!editMode && userFeedback ? "opacity-70 cursor-default" : ""}`}
      >
        <ThumbsDown size={18} />
        <span>Tidak</span>
      </button>
    </div>
  </div>
);

const SubmitButton = ({ onSubmit, isSubmitting, userFeedback }) => (
  <button
    onClick={onSubmit}
    disabled={isSubmitting}
    className='flex items-center justify-center w-full py-3 font-[Gully] bg-[#102437] text-white rounded-md hover:bg-[#1a3b5c] transition duration-300 disabled:opacity-50'
  >
    {isSubmitting ? (
      <div className='flex items-center'>
        <svg
          className='animate-spin -ml-1 mr-2 h-4 w-4 text-white'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='4'
          ></circle>
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          ></path>
        </svg>
        {userFeedback ? "Memperbarui..." : "Mengirim..."}
      </div>
    ) : (
      <>
        <Send size={18} className='mr-2' />
        {userFeedback ? "Perbarui Feedback" : "Kirim Feedback"}
      </>
    )}
  </button>
);

const FeedbackInfo = ({ userFeedback }) => (
  <div className='pt-2 text-center text-sm text-gray-500 italic'>
    <p>
      Feedback dikirim pada{" "}
      {new Date(userFeedback.submitted_at).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })}
    </p>
    <p className='mt-2'>Klik tombol edit untuk memperbarui feedback Anda.</p>
  </div>
);

export default function FeedbackPopup() {
  const { data: session, status } = useSession();
  const { scrollDirection } = useScrollTracking();

  const {
    isVisible,
    setIsVisible,
    showPopup,
    setShowPopup,
    rating,
    setRating,
    comment,
    setComment,
    vote,
    setVote,
    isSubmitting,
    setIsSubmitting,
    submitSuccess,
    setSubmitSuccess,
    currentUser,
    setCurrentUser,
    userFeedback,
    setUserFeedback,
    isLoading,
    setIsLoading,
    editMode,
    setEditMode,
    feedbackChecked,
    setFeedbackChecked,
    resetFeedbackState,
  } = useFeedbackState();

  const checkExistingFeedback = async () => {
    if (!session?.user?.email) return;

    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/feedback/user?email=${encodeURIComponent(session.user.email)}`
      );

      const contentType = response.headers.get("content-type");

      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Server mengembalikan format yang tidak valid");
      }

      const data = await response.json();

      if (response.ok && data.feedback) {
        setUserFeedback(data.feedback);
        setRating(data.feedback.rating || 0);
        setComment(data.feedback.comment || "");
        setVote(data.feedback.vote || null);
        setIsVisible(true);
      } else {
        setUserFeedback(null);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      resetFeedbackState();
      setFeedbackChecked(false);
    }

    if (
      status === "authenticated" &&
      session?.user?.email &&
      !feedbackChecked
    ) {
      setCurrentUser(session.user.email);
      checkExistingFeedback();
      setFeedbackChecked(true);
    }
  }, [status, session]);

  useEffect(() => {
    if (status !== "authenticated") return;

    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - SCROLL_THRESHOLD;

      if (scrolledToBottom && scrollDirection === "down") {
        setIsVisible(true);

        if (!showPopup) {
          setTimeout(() => {
            setShowPopup(true);
          }, POPUP_DELAY);
        }
      } else {
        setIsVisible(false);

        if (showPopup && scrollDirection === "up") {
          setShowPopup(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [status, showPopup, scrollDirection]);

  const handleClose = () => {
    setShowPopup(false);
    setEditMode(false);
  };

  const handleRatingClick = (value) => {
    if (!editMode && userFeedback) return;
    setRating(value);
  };

  const handleVote = (value) => {
    if (!editMode && userFeedback) return;
    setVote(value);
  };

  const handleCommentChange = (e) => {
    if (!editMode && userFeedback) return;
    setComment(e.target.value);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleSubmit = async () => {
    if (rating === 0 && !comment && vote === null) {
      alert("Please provide a rating, comment or vote before submitting");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/feedback", {
        method: userFeedback && editMode ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: userFeedback?.id,
          rating,
          comment,
          vote,
        }),
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        throw new Error("Server returned invalid format");
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit feedback");
      }

      setUserFeedback(data.feedback);
      setEditMode(false);
      setSubmitSuccess(true);

      setTimeout(() => {
        setSubmitSuccess(false);
        setShowPopup(false);
      }, SUCCESS_DISPLAY_DURATION);
    } catch (error) {
      alert("Failed to submit feedback: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const shouldShowButton =
    status === "authenticated" && isVisible && scrollDirection === "down";

  if (status !== "authenticated") return null;

  return (
    <>
      {shouldShowButton && !showPopup && (
        <button
          onClick={() => setShowPopup(true)}
          className='fixed bottom-5 right-5 bg-[#102437] text-white p-3 rounded-full shadow-lg z-50 hover:bg-[#1a3b5c] transition-all'
          title={userFeedback ? "Lihat Feedback Anda" : "Berikan Feedback"}
        >
          {userFeedback ? <History size={24} /> : <Star size={24} />}
        </button>
      )}

      {showPopup && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4'>
          <div className='bg-white rounded-[20px] p-6 max-w-md w-full shadow-xl animate-in fade-in zoom-in duration-300'>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-2xl font-[Gully] font-bold text-[#102437]'>
                {userFeedback && !editMode
                  ? "Feedback Anda"
                  : "Berikan Feedback"}
              </h2>
              <div className='flex items-center space-x-2'>
                {userFeedback && (
                  <button
                    onClick={toggleEditMode}
                    className='p-1 rounded-full hover:bg-gray-100 text-blue-500'
                    title={editMode ? "Batal Edit" : "Edit Feedback"}
                  >
                    <Edit size={20} />
                  </button>
                )}
                <button
                  onClick={handleClose}
                  className='p-1 rounded-full hover:bg-gray-100'
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {isLoading ? (
              <div className='py-12 flex items-center justify-center'>
                <LoadingSpinner />
              </div>
            ) : submitSuccess ? (
              <SuccessMessage userFeedback={userFeedback} editMode={editMode} />
            ) : (
              <div className='space-y-6'>
                <RatingSection
                  rating={rating}
                  onRatingClick={handleRatingClick}
                  editMode={editMode}
                  userFeedback={userFeedback}
                />

                <CommentSection
                  comment={comment}
                  onCommentChange={handleCommentChange}
                  editMode={editMode}
                  userFeedback={userFeedback}
                />

                <VoteSection
                  vote={vote}
                  onVote={handleVote}
                  editMode={editMode}
                  userFeedback={userFeedback}
                />

                {(editMode || !userFeedback) && (
                  <SubmitButton
                    onSubmit={handleSubmit}
                    isSubmitting={isSubmitting}
                    userFeedback={userFeedback}
                  />
                )}

                {userFeedback && !editMode && (
                  <FeedbackInfo userFeedback={userFeedback} />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
