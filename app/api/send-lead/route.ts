import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Domain janawasplot.com is verified - use an email on that domain for "from"
const TO_EMAIL = process.env.LEAD_TO_EMAIL || "Kishanpandey844@gmail.com";

function extractEmail(raw: string): string {
  const v = (raw || "").toString().trim();
  const m = v.match(/<([^>]+)>/);
  return (m?.[1] || v).trim();
}

function isValidEmail(v: string): boolean {
  // Good enough for configuration validation; avoids provider schema errors.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((v || "").trim());
}

function formatRow(label: string, value: string | undefined): string {
  if (!value) return "";
  return `<p><strong>${label}:</strong> ${value}</p>`;
}

function getSmtpConfig() {
  const host = (process.env.SMTP_HOST || "").trim();
  const user = (process.env.SMTP_USER || "").trim();
  const pass = (process.env.SMTP_PASS || "").trim();
  const port = Number(process.env.SMTP_PORT || "587");
  const from = (process.env.SMTP_FROM || user || "").trim();

  const isConfigured = Boolean(host && user && pass && from && isValidEmail(extractEmail(from)));

  return {
    isConfigured,
    host,
    user,
    pass,
    port: Number.isFinite(port) ? port : 587,
    from,
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      whatsapp,
      leadStage,
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
      documents,
    } = body;

    if (!fullName || !email || !whatsapp) {
      return NextResponse.json(
        { error: "Full Name, Email, and WhatsApp are required" },
        { status: 400 },
      );
    }

    const smtp = getSmtpConfig();

    const isFullForm = applicantName && aadharNumber && panNumber;
    const isStep1Only = leadStage === "step1";
    const subject = isFullForm
      ? `New Application: ${applicantName} - Avani Greens`
      : isStep1Only
        ? `New Lead (Step 1): ${fullName} - Jan Awas Yojna Plots`
        : `New Lead: ${fullName} - Jan Awas Yojna Plots`;

    let html = `
      <h2>New ${isFullForm ? "Application" : isStep1Only ? "Lead (Step 1)" : "Lead Request"}</h2>
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

    const safeDocs: Array<{
      field: string;
      filename: string;
      mime?: string;
      bytes?: number;
      sizeLabel?: string;
    }> = Array.isArray(documents)
      ? documents
          .filter((d: any) => d && typeof d.field === "string" && typeof d.filename === "string")
          .map((d: any) => ({
            field: d.field,
            filename: d.filename,
            mime: typeof d.mime === "string" ? d.mime : undefined,
            bytes: typeof d.bytes === "number" ? d.bytes : undefined,
            sizeLabel: typeof d.sizeLabel === "string" ? d.sizeLabel : undefined,
          }))
      : [];

    if (safeDocs.length > 0) {
      html += `<hr><p><strong>Documents selected by user:</strong></p><ul>${safeDocs
        .map((d) => {
          const extra = [d.sizeLabel, d.mime].filter(Boolean).join(" • ");
          return `<li><strong>${d.field}</strong>: ${d.filename || "-"}${extra ? ` <em>(${extra})</em>` : ""}</li>`;
        })
        .join("")}</ul>`;
    }

    html += `<hr><p><em>Sent from Jan Awas Yojna Plots - Avani Greens</em></p>`;

    if (!smtp.isConfigured) {
      console.warn("SMTP not configured. Lead captured but email not sent.");
      return NextResponse.json({
        success: true,
        warning: "SMTP not configured; email not sent.",
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.port === 465,
      auth: { user: smtp.user, pass: smtp.pass },
    });

    const STEP1_TO_EMAIL = "kishan.larisarealtech@gmail.com";
    const toList = isStep1Only ? [TO_EMAIL, STEP1_TO_EMAIL] : [TO_EMAIL];

    try {
      await transporter.sendMail({
        from: smtp.from,
        to: toList,
        subject,
        html,
        replyTo: isValidEmail(extractEmail(email)) ? extractEmail(email) : undefined,
      });
    } catch (err) {
      console.error("SMTP send error:", err);
      // Don't block payment; return success with warning.
      return NextResponse.json({
        success: true,
        warning: "Email failed to send, but submission was received.",
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Send lead error:", err);
    // Don't block payment on unexpected backend issues
    return NextResponse.json(
      { success: true, warning: "Submission received, but backend processing failed." },
      { status: 200 },
    );
  }
}
