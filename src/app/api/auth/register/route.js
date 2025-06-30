import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    
    // Basic validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    try {
      // Check if user already exists in Supabase
      const { data: existingUser, error: checkError } = await supabaseAdmin
        .from('users')
        .select('id')
        .eq('email', email)
        .maybeSingle();
      
      if (checkError) {
        console.error("Error checking user:", checkError);
        return NextResponse.json(
          { message: "Error checking user existence" },
          { status: 500 }
        );
      }
      
      if (existingUser) {
        return NextResponse.json(
          { message: "User already exists" },
          { status: 409 }
        );
      }

      // Hash the password
      const hashedPassword = await hash(password, 10);

      // Insert user into Supabase
      const { data: newUser, error: insertError } = await supabaseAdmin
        .from('users')
        .insert({
          name,
          email,
          password: hashedPassword
          // created_at will be set automatically by Supabase
        });

      if (insertError) {
        console.error("Error creating user:", insertError);
        return NextResponse.json(
          { message: "Failed to create user" },
          { status: 500 }
        );
      }

      // Fetch the newly created user
      const { data: createdUser, error: fetchError } = await supabaseAdmin
        .from('users')
        .select('id, name, email, created_at')
        .eq('email', email)
        .single();

      if (fetchError) {
        console.error("Error fetching created user:", fetchError);
      }

      return NextResponse.json(
        { 
          message: "User created successfully", 
          user: createdUser || { name, email }
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
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "Error creating user" },
      { status: 500 }
    );
  }
}