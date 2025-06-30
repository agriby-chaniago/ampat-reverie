"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { X, Star, ThumbsUp, ThumbsDown, Send } from "lucide-react";

export default function FeedbackPopup() {
  const { data: session, status } = useSession();
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [vote, setVote] = useState(null); // null, "up", or "down"
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Show popup when user scrolls to bottom and is authenticated
  useEffect(() => {
    if (status !== "authenticated") return;
    
    // Function to check if user scrolled to bottom
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        setIsVisible(true);
        // Only show popup if it hasn't been shown before (could use localStorage for persistence)
        if (!sessionStorage.getItem("feedbackShown")) {
          setTimeout(() => {
            setShowPopup(true);
          }, 1000);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [status]);

  const handleClose = () => {
    setShowPopup(false);
    // Remember that we've shown the popup to this user
    sessionStorage.setItem("feedbackShown", "true");
  };

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleVote = (value) => {
    setVote(value);
  };

  const handleSubmit = async () => {
    if (rating === 0 && !comment && vote === null) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rating,
          comment,
          vote
        })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit feedback');
      }
      
      setSubmitSuccess(true);
      setTimeout(() => {
        handleClose();
        setSubmitSuccess(false);
        // Reset form
        setRating(0);
        setComment('');
        setVote(null);
      }, 2000);
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert('Failed to submit feedback: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Don't render anything if user is not authenticated or popup shouldn't be visible
  if (status !== "authenticated" || !isVisible) return null;

  return (
    <>
      {!showPopup && !sessionStorage.getItem("feedbackShown") && (
        <button
          onClick={() => setShowPopup(true)}
          className="fixed bottom-5 right-5 bg-[#102437] text-white p-3 rounded-full shadow-lg z-50 hover:bg-[#1a3b5c] transition-all"
        >
          <Star size={24} />
        </button>
      )}
      
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[20px] p-6 max-w-md w-full shadow-xl animate-in fade-in zoom-in duration-300">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-[Gully] font-bold text-[#102437]">
                Your Feedback
              </h2>
              <button onClick={handleClose} className="p-1 rounded-full hover:bg-gray-100">
                <X size={24} />
              </button>
            </div>
            
            {submitSuccess ? (
              <div className="text-center py-8">
                <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-lg font-medium text-gray-800">Thank you for your feedback!</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Rating Section */}
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">How would you rate Raja Ampat?</label>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <button
                        key={value}
                        onClick={() => handleRatingClick(value)}
                        className={`p-1 rounded-full transition-colors ${
                          rating >= value ? "text-yellow-400" : "text-gray-300"
                        }`}
                      >
                        <Star fill={rating >= value ? "currentColor" : "none"} size={28} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Comment Section */}
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Share your thoughts (optional)</label>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px] resize-none"
                    placeholder="What did you like or dislike about Raja Ampat?"
                  ></textarea>
                </div>

                {/* Vote Section */}
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Would you recommend Raja Ampat?</label>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleVote("up")}
                      className={`flex items-center space-x-1 px-4 py-2 rounded-md border ${
                        vote === "up"
                          ? "bg-green-50 border-green-500 text-green-600"
                          : "border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <ThumbsUp size={18} />
                      <span>Yes</span>
                    </button>
                    <button
                      onClick={() => handleVote("down")}
                      className={`flex items-center space-x-1 px-4 py-2 rounded-md border ${
                        vote === "down"
                          ? "bg-red-50 border-red-500 text-red-600"
                          : "border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <ThumbsDown size={18} />
                      <span>No</span>
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex items-center justify-center w-full py-3 font-[Gully] bg-[#102437] text-white rounded-md hover:bg-[#1a3b5c] transition duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </div>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Submit Feedback
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}