import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    console.log("Contact form received:", body)

    const {
      name,
      email,
      subject,
      message,
    } = body

    if (
      !name?.trim() ||
      !email?.trim() ||
      !subject?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      )
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Gmail environment variables are missing.")

      return NextResponse.json(
        {
          success: false,
          message: "Email server is not configured.",
        },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.GMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: 
      ` You received a new message from your portfolio.

      Name: ${name}
      Email: ${email}
      Subject: ${subject}

      Message:
      ${message}

      --------------------------------
      Sent from my portfolio contact form `,
    })

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    })
  } catch (error) {
    console.error("Contact API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send the message.",
      },
      { status: 500 }
    )
  }
}