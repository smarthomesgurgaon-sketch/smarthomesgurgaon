import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Domain janawasplot.com is verified - use an email on that domain for "from"
const TO_EMAIL = "Kishanpandey844@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "noreply@janawasplot.com";

function formatRow(label: string, value: string | undefined): string {
  if (!value) return "";
  return `<p><strong>${label}:</strong> ${value}</p>`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      whatsapp,
      category,
      applicantType,
      applicantName,
      sonWifeDaughterOf,
      dateOfBirth,
      gender,
      phone,
      aadharNumber,
      panNumber,
      addressLine1,
      addressLine2,
      city,
      state,
      pinCode,
      country,
      accountHolderName,
      bankName,
      accountNo,
      ifscCode,
      plotSize,
      coApplicantName,
      coApplicantSonWifeDaughterOf,
      coApplicantAddress1,
      coApplicantCity,
      coApplicantState,
      coApplicantPinCode,
      coApplicantEmail,
      coApplicantPhone,
      coApplicantAadhar,
      coApplicantPan,
      attachments,
    } = body;

    if (!fullName || !email || !whatsapp) {
      return NextResponse.json(
        { error: "Full Name, Email, and WhatsApp are required" },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 },
      );
    }

    const isFullForm = applicantName && aadharNumber && panNumber;
    const subject = isFullForm
      ? `New Application: ${applicantName} - Avani Greens`
      : `New Lead: ${fullName} - Jan Awas Yojna Plots`;

    let html = `
      <h2>New ${isFullForm ? "Application" : "Lead Request"}</h2>
      <h3>Contact Details (Step 1)</h3>
      ${formatRow("Full Name", fullName)}
      ${formatRow("Email", email)}
      ${formatRow("WhatsApp", whatsapp)}
    `;

    if (isFullForm) {
      html += `
      <hr>
      <h3>Application Details (Step 2)</h3>
      ${formatRow("Category", category)}
      ${formatRow("Applicant Type", applicantType)}
      ${formatRow("Applicant's Name", applicantName)}
      ${formatRow("Son/Wife/Daughter/Of", sonWifeDaughterOf)}
      ${formatRow("Date of Birth", dateOfBirth)}
      ${formatRow("Gender", gender)}
      ${formatRow("Phone", phone || whatsapp)}
      ${formatRow("Aadhar Card Number", aadharNumber)}
      ${formatRow("Pan Card Number", panNumber)}
      <h4>Address</h4>
      ${formatRow("Address Line 1", addressLine1)}
      ${formatRow("Address Line 2", addressLine2)}
      ${formatRow("City", city)}
      ${formatRow("State", state)}
      ${formatRow("Pin Code", pinCode)}
      ${formatRow("Country", country)}
      <h4>Bank Account</h4>
      ${formatRow("Account Holder's Name", accountHolderName)}
      ${formatRow("Bank Name", bankName)}
      ${formatRow("Account No.", accountNo)}
      ${formatRow("IFSC Code", ifscCode)}
      ${formatRow("Plot Size (Sq. Yd)", plotSize)}
      `;
      if (applicantType === "joint" && coApplicantName) {
        html += `
      <h4>Second Applicant</h4>
      ${formatRow("Co-applicant's Name", coApplicantName)}
      ${formatRow("Son/Wife/Daughter/Of", coApplicantSonWifeDaughterOf)}
      ${formatRow("Address", coApplicantAddress1)}
      ${formatRow("City", coApplicantCity)}
      ${formatRow("State", coApplicantState)}
      ${formatRow("Pin Code", coApplicantPinCode)}
      ${formatRow("Email", coApplicantEmail)}
      ${formatRow("Phone", coApplicantPhone)}
      ${formatRow("Aadhaar Card No.", coApplicantAadhar)}
      ${formatRow("Pan No.", coApplicantPan)}
      `;
      }
    }

    if (attachments && attachments.length > 0) {
      html += `<hr><p><strong>Attached documents:</strong> ${attachments.map((a: { filename: string }) => a.filename).join(", ")}</p>`;
    }
    html += `<hr><p><em>Sent from Jan Awas Yojna Plots - Avani Greens</em></p>`;

    const emailPayload: {
      from: string;
      to: string[];
      subject: string;
      html: string;
      attachments?: { filename: string; content: string }[];
    } = {
      from: `Jan Awas Yojna Plots <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      subject,
      html,
    };

    if (attachments && Array.isArray(attachments) && attachments.length > 0) {
      emailPayload.attachments = attachments;
    }

    const { data, error } = await resend.emails.send(emailPayload);

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
