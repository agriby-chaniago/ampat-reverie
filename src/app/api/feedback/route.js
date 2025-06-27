import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

// For demo purposes, we'll store feedback in memory
// In a real app, you'd use a database
const feedbackItems = [];

export async function POST(request) {
  try {
    // Check if user is authenticated
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    // Parse request body
    const { rating, comment, vote } = await request.json();
    
    // Validate data
    if (rating === undefined && !comment && vote === null) {
      return NextResponse.json(
        { message: "No feedback provided" },
        { status: 400 }
      );
    }

    // Create feedback entry
    const feedback = {
      id: feedbackItems.length + 1,
      userId: session.user.id,
      userName: session.user.name || session.user.email,
      rating,
      comment,
      vote,
      timestamp: new Date(),
    };

    feedbackItems.push(feedback);

    return NextResponse.json(
      { 
        message: "Feedback submitted successfully",
        feedback: feedback
      }, 
      { status: 201 }
    );
  } catch (error) {
    console.error("Feedback submission error:", error);
    return NextResponse.json(
      { message: "Error submitting feedback" },
      { status: 500 }
    );
  }
}

// Optional: GET route to retrieve feedback (for admin purposes)
export async function GET() {
  return NextResponse.json({ items: feedbackItems });
}