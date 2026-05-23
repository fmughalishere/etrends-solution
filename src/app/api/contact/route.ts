import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("Form Lead Received:", data);

    return NextResponse.json(
      { message: "Lead captured successfully!" }, 
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Server error occurred." }, 
      { status: 500 }
    );
  }
}