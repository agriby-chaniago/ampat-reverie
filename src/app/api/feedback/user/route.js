import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET(request) {
  try {
    console.log("GET /api/feedback/user called");
    
    // Check authentication
    const session = await getServerSession();
    if (!session) {
      console.log("User not authenticated");
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    console.log("Authenticated user:", session.user.email);

    // Get email from query parameter
    const url = new URL(request.url);
    const email = url.searchParams.get("email");
    
    if (!email) {
      console.log("Email parameter missing");
      return NextResponse.json(
        { message: "Email parameter is required" },
        { status: 400 }
      );
    }
    
    console.log("Looking for feedback for email:", email);

    try {
      // Check if user exists
      let userData;
      
      const { data: existingUser, error: userError } = await supabaseAdmin
        .from('users')
        .select('id')
        .eq('email', email)
        .single();

      if (userError) {
        // Only consider it an error if it's not a "not found" error
        if (userError.code !== 'PGRST116') {
          console.error("Database error finding user:", userError);
          return NextResponse.json(
            { message: "Error checking user" },
            { status: 500 }
          );
        }
        
        // User doesn't exist, but that's okay - return no feedback
        console.log("User doesn't exist yet, returning empty feedback");
        return NextResponse.json({ feedback: null });
      }
      
      if (!existingUser) {
        // User doesn't exist, but that's okay - return no feedback
        console.log("No user found for email:", email);
        return NextResponse.json({ feedback: null });
      }

      console.log("User found with ID:", existingUser.id);

      // Get feedback for this user
      const { data: feedbackData, error: feedbackError } = await supabaseAdmin
        .from('feedback')
        .select('*')
        .eq('user_id', existingUser.id)
        .order('submitted_at', { ascending: false })
        .maybeSingle();

      if (feedbackError) {
        console.error("Error fetching feedback:", feedbackError);
        return NextResponse.json(
          { message: "Failed to fetch feedback data" },
          { status: 500 }
        );
      }

      console.log("Feedback found:", feedbackData ? "Yes" : "No");

      return NextResponse.json({ 
        feedback: feedbackData || null 
      });
    } catch (dbError) {
      console.error("Database operation error:", dbError);
      return NextResponse.json(
        { message: `Database error: ${dbError.message}` },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Feedback retrieval error:", error);
    return NextResponse.json(
      { message: `Error retrieving feedback: ${error.message}` },
      { status: 500 }
    );
    }
}   