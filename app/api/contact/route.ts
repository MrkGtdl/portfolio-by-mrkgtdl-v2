import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, company, inquiry, message } = body;

    if (!name || !email || !inquiry || !message) {
      return NextResponse.json(
        {
          error: "Please complete all required fields.",
        },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
      return NextResponse.json(
        {
          error: "Server email configuration is missing.",
        },
        { status: 500 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL],
      replyTo: email,
      subject: `${inquiry} — Portfolio Inquiry from ${name}`,
      text: `Name: ${name}
Email: ${email}
Company / Organization: ${company || "Not provided"}
Inquiry Type: ${inquiry}

Message:
${message}`,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: "Unable to send your message right now.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong. Please try again.",
      },
      { status: 500 },
    );
  }
}
