"use client";

import { useState, useEffect } from "react";
import { requireAuth } from "@/lib/auth";
import { Star, ThumbsUp, ThumbsDown } from "lucide-react";

export default function FeedbackDashboard() {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadFeedback() {
      try {
        const response = await fetch("/api/feedback");
        if (!response.ok) throw new Error("Failed to load feedback");
        const data = await response.json();
        setFeedback(data.items);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadFeedback();
  }, []);

  if (isLoading) {
    return (
      <div className="p-8 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        <p className="mt-2">Loading feedback...</p>
      </div>
    );
  }

  if (error) {
    return <div className="p-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-[Gully] font-bold mb-8">Feedback Dashboard</h1>
      
      {feedback.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No feedback submitted yet.</p>
      ) : (
        <div className="grid gap-6">
          {feedback.map((item) => (
            <div key={item.id} className="border rounded-lg p-4 bg-white shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">{item.userName}</p>
                  <p className="text-gray-500 text-sm">
                    {new Date(item.timestamp).toLocaleString()}
                  </p>
                </div>
                {item.rating > 0 && (
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < item.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                )}
              </div>
              
              {item.comment && (
                <p className="my-3 text-gray-700">{item.comment}</p>
              )}
              
              {item.vote && (
                <div className="mt-2">
                  <span className="inline-flex items-center gap-1 text-sm">
                    {item.vote === "up" ? (
                      <>
                        <ThumbsUp size={14} className="text-green-600" />
                        <span className="text-green-600">Would recommend</span>
                      </>
                    ) : (
                      <>
                        <ThumbsDown size={14} className="text-red-600" />
                        <span className="text-red-600">Would not recommend</span>
                      </>
                    )}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}