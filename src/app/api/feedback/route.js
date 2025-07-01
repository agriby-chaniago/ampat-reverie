import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { supabaseAdmin } from "@/lib/supabase";

// For submitting new feedback
export async function POST(request) {
  try {
    console.log("POST /api/feedback called");
    
    // Check authentication
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    console.log("Authenticated user:", session.user.email);
    
    // Parse request body
    const body = await request.json();
    const { rating, comment, vote } = body;
    
    console.log("Feedback data:", { rating, comment, vote });
    
    // Validate data
    if (rating === undefined && !comment && vote === null) {
      return NextResponse.json(
        { message: "No feedback provided" },
        { status: 400 }
      );
    }

    try {
      // IMPORTANT: Declare userData with let, not const
      let userData;
      
      // Get existing user
      const { data: existingUser, error: userError } = await supabaseAdmin
        .from('users')
        .select('id')
        .eq('email', session.user.email)
        .single();
        
      if (userError || !existingUser) {
        console.error("Error finding user:", userError || "User not found");
        
        // Create user record if it doesn't exist
        const { data: newUser, error: createUserError } = await supabaseAdmin
          .from('users')
          .insert({
            email: session.user.email,
            name: session.user.name || session.user.email.split('@')[0]
          })
          .select('id')
          .single();
          
        if (createUserError) {
          console.error("Error creating user:", createUserError);
          return NextResponse.json(
            { message: "Failed to create user record" },
            { status: 500 }
          );
        }
        
        console.log("Created new user:", newUser);
        userData = newUser;
      } else {
        // Assign existing user data
        userData = existingUser;
      }

      console.log("User found/created:", userData);

      // Check if user already submitted feedback
      const { data: existingFeedback, error: checkError } = await supabaseAdmin
        .from('feedback')
        .select('id')
        .eq('user_id', userData.id)
        .maybeSingle();
        
      if (existingFeedback) {
        console.log("User already submitted feedback before");
        return NextResponse.json(
          { message: "You have already submitted feedback" },
          { status: 409 }
        );
      }

      console.log("Saving new feedback...");
      
      // Save feedback to Supabase
      const { data: feedback, error } = await supabaseAdmin
        .from('feedback')
        .insert({
          user_id: userData.id,
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

      console.log("Feedback saved successfully:", feedback);
      
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
        { message: `Database error: ${dbError.message}` },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Feedback submission error:", error);
    return NextResponse.json(
      { message: `Error submitting feedback: ${error.message}` },
      { status: 500 }
    );
  }
}

// For updating existing feedback - similar fix needed here
export async function PUT(request) {
  try {
    console.log("PUT /api/feedback called");
    
    // Check authentication
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    console.log("Authenticated user:", session.user.email);
    
    // Parse request body
    const body = await request.json();
    const { id, rating, comment, vote } = body;
    
    // Validate data
    if (!id) {
      return NextResponse.json(
        { message: "Feedback ID is required" },
        { status: 400 }
      );
    }

    console.log("Update feedback ID:", id);
    
    try {
      // Get user by email, create if doesn't exist
      let userData;
      
      const { data: existingUser, error: userError } = await supabaseAdmin
        .from('users')
        .select('id')
        .eq('email', session.user.email)
        .single();
        
      if (userError || !existingUser) {
        // Create user record if it doesn't exist
        const { data: newUser, error: createUserError } = await supabaseAdmin
          .from('users')
          .insert({
            email: session.user.email,
            name: session.user.name || session.user.email.split('@')[0]
          })
          .select('id')
          .single();
          
        if (createUserError) {
          console.error("Error creating user:", createUserError);
          return NextResponse.json(
            { message: "Failed to create user record" },
            { status: 500 }
          );
        }
        
        userData = newUser;
      } else {
        userData = existingUser;
      }

      // Check if feedback exists and belongs to this user
      const { data: existingFeedback, error: checkError } = await supabaseAdmin
        .from('feedback')
        .select('id, user_id')
        .eq('id', id)
        .single();
        
      if (checkError || !existingFeedback) {
        console.log("Feedback not found");
        return NextResponse.json(
          { message: "Feedback not found" },
          { status: 404 }
        );
      }
      
      if (existingFeedback.user_id !== userData.id) {
        console.log("User trying to update someone else's feedback");
        return NextResponse.json(
          { message: "You can only update your own feedback" },
          { status: 403 }
        );
      }

      console.log("Updating feedback...");
      
      // Update feedback
      const { data: updatedFeedback, error } = await supabaseAdmin
        .from('feedback')
        .update({
          rating,
          comment,
          vote
        })
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error("Error updating feedback:", error);
        return NextResponse.json(
          { message: "Failed to update feedback" },
          { status: 500 }
        );
      }

      console.log("Feedback updated successfully:", updatedFeedback);
      
      return NextResponse.json(
        { 
          message: "Feedback updated successfully",
          feedback: updatedFeedback
        }
      );
    } catch (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { message: `Database error: ${dbError.message}` },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Feedback update error:", error);
    return NextResponse.json(
      { message: `Error updating feedback: ${error.message}` },
      { status: 500 }
    );
  }
}