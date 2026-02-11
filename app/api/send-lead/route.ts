import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Domain janawasplot.com is verified - use an email on that domain for "from"
const TO_EMAIL = "Kishanpandey844@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "noreply@janawasplot.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, whatsapp } = body;

    if (!fullName || !email || !whatsapp) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: `Jan Awas Yojna Plots <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      subject: `New Lead: ${fullName} - Jan Awas Yojna Plots`,
      html: `
        <h2>New Lead Request</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <hr>
        <p><em>Sent from Jan Awas Yojna Plots website</em></p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Send lead error:", err);
    return NextResponse.json({ error: "Failed to send lead" }, { status: 500 });
  }
}
