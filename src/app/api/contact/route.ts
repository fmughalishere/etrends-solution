import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("Form Data Received:", data);    
    return NextResponse.json({ message: "Success! We will contact you soon." }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong." }, { status: 500 });
  }
}