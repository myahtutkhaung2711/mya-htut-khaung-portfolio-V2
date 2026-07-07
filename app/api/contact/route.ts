import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { contactSchema } from "@/lib/validation";
import { ContactEmail } from "@/emails/contact-email";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot (spam protection)
    if (body.company && body.company.trim() !== "") {
      return NextResponse.json(
        { message: "Spam detected." },
        { status: 400 }
      );
    }

    // Validate request
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          message: "Validation failed.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = result.data;

    const response = await resend.emails.send({
      from: "Mya Htut Khaung <contact@myahtutkhaung.dev>"
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `📩 ${subject}`,
      text: `
    Name: ${name}
    Email: ${email}

    ${message}
      `,
    });

    if (response.error) {
      console.error(response.error);

      return NextResponse.json(
        {
          message: "Unable to send email.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "Message sent successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Internal server error.",
      },
      {
        status: 500,
      }
    );
  }
}