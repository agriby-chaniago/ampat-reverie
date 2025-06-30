import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { supabaseAdmin } from "@/lib/supabase";

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

    try {
      // Save feedback to Supabase
      const { data: feedback, error } = await supabaseAdmin
        .from('feedback')
        .insert({
          user_id: session.user.id,
          rating,
          comment,
          vote
        })
        .select()
        .single();

      if (error) {
        console.error("Error saving feedback:", error);
        return NextResponse.json(
          { message: "Failed to submit feedback" },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { 
          message: "Feedback submitted successfully",
          feedback
        }, 
        { status: 201 }
      );
    } catch (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { message: "Database error" },
        { status: 500 }
      );
    }
    
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
  try {
    const { data: feedbackItems, error } = await supabaseAdmin
      .from('feedback')
      .select(`
        *,
        users:user_id (name, email)
      `)
      .order('submitted_at', { ascending: false });

    if (error) {
      console.error("Error fetching feedback:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ items: feedbackItems });
  } catch (error) {
    console.error("Error in GET feedback:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}