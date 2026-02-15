"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const PLOT_SIZES = ["50", "80", "138", "160", "170", "200", "220", "270"];

export default function AvaniGreensApplyPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [step1Data, setStep1Data] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
  });

  const [step2Data, setStep2Data] = useState({
    category: "general",
    applicantType: "sole",
    applicantName: "",
    sonWifeDaughterOf: "",
    dateOfBirth: "",
    gender: "",
    phone: "",
    aadharNumber: "",
    panNumber: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pinCode: "",
    country: "India",
    accountHolderName: "",
    bankName: "",
    accountNo: "",
    ifscCode: "",
    plotSize: "",
    coApplicantName: "",
    coApplicantSonWifeDaughterOf: "",
    coApplicantAddress1: "",
    coApplicantAddress2: "",
    coApplicantCity: "",
    coApplicantState: "",
    coApplicantPinCode: "",
    coApplicantCountry: "India",
    coApplicantEmail: "",
    coApplicantPhone: "",
    coApplicantAadhar: "",
    coApplicantPan: "",
    termsAccepted: false,
  });

  const [docFiles, setDocFiles] = useState<
    Record<string, { file: File; size: string }>
  >({});

  const setErrorMsgRef = useRef(setErrorMsg);
  setErrorMsgRef.current = setErrorMsg;
  const stepRef = useRef(step);
  stepRef.current = step;

  useEffect(() => {
    const handleInvalid = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      const target = e.target;
      if (target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement) {
        target.setCustomValidity("");
      }
      const currentStep = stepRef.current;
      const msg = currentStep === 1
        ? "Please fill all contact details correctly (Name, Email, Phone)."
        : currentStep === 2
          ? "Please fill all application details correctly. Check phone numbers (10 digits), Aadhar (12 digits), PAN (10 characters), and other required fields."
          : "Please select a plot size and accept the terms.";
      setErrorMsgRef.current(msg);
    };
    document.addEventListener("invalid", handleInvalid, true);
    return () => document.removeEventListener("invalid", handleInvalid, true);
  }, []);

  useEffect(() => {
    const container = formRef.current;
    if (!container) return;
    const inputs = container.querySelectorAll("input, select, textarea");
    const clearValidity = (el: EventTarget | Element) => {
      if (el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement) {
        el.setCustomValidity("");
      }
    };
    const handlers: Array<{ el: Element; h: () => void }> = [];
    inputs.forEach((el) => {
      clearValidity(el);
      const h = () => clearValidity(el);
      el.addEventListener("input", h);
      el.addEventListener("change", h);
      el.addEventListener("blur", h);
      handlers.push({ el, h });
    });
    return () => {
      handlers.forEach(({ el, h }) => {
        el.removeEventListener("input", h);
        el.removeEventListener("change", h);
        el.removeEventListener("blur", h);
      });
    };
  }, [step]);

  const handleDocFileChange = (
    field: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const size =
        file.size < 1024
          ? `${file.size}B`
          : `${(file.size / 1024).toFixed(1)}KB`;
      setDocFiles((prev) => ({ ...prev, [field]: { file, size } }));
    }
  };

  const removeDocFile = (field: string) => {
    setDocFiles((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
    const input = document.getElementById(field) as HTMLInputElement;
    if (input) input.value = "";
  };

  const handleStep1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStep1Data((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleStep2Change = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const target = e.target;
    const value =
      target.type === "checkbox"
        ? (target as HTMLInputElement).checked
        : target.value;
    setStep2Data((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleStep1Next = (e?: React.FormEvent) => {
    e?.preventDefault?.();
    const name = (step1Data.fullName || "").trim();
    const email = (step1Data.email || "").trim();
    const whatsapp = (step1Data.whatsapp || "").replace(/\D/g, "");
    if (!name) {
      setErrorMsg("Please enter your full name.");
      return;
    }
    if (!email) {
      setErrorMsg("Please enter your email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!whatsapp || whatsapp.length < 10) {
      setErrorMsg("Please enter a valid WhatsApp/Phone number (at least 10 digits).");
      return;
    }
    setErrorMsg("");
    setStep(2);
  };

  const handleStep2Next = (e?: React.FormEvent) => {
    e?.preventDefault?.();
    const trim = (s: string) => (s || "").toString().trim();
    const digits = (s: string) => (s || "").toString().replace(/\D/g, "");
    if (!trim(step2Data.applicantName)) {
      setErrorMsg("Please enter Applicant's Name.");
      return;
    }
    if (!trim(step2Data.sonWifeDaughterOf)) {
      setErrorMsg("Please enter Son/Wife/Daughter/Of.");
      return;
    }
    if (!trim(step2Data.dateOfBirth)) {
      setErrorMsg("Please enter Date of Birth.");
      return;
    }
    if (!trim(step2Data.gender)) {
      setErrorMsg("Please select Gender.");
      return;
    }
    const phone = digits(step2Data.phone || step1Data.whatsapp);
    if (!phone || phone.length < 10) {
      setErrorMsg("Please enter a valid Phone/Mobile number (at least 10 digits).");
      return;
    }
    const aadhar = digits(step2Data.aadharNumber);
    if (!aadhar || aadhar.length !== 12) {
      setErrorMsg("Please enter a valid 12-digit Aadhar Card Number.");
      return;
    }
    const pan = (step2Data.panNumber || "").replace(/\s/g, "").toUpperCase();
    if (!pan || pan.length !== 10) {
      setErrorMsg("Please enter a valid 10-character Pan Card Number.");
      return;
    }
    if (!trim(step2Data.addressLine1)) {
      setErrorMsg("Please enter Address Line 1.");
      return;
    }
    if (!trim(step2Data.city)) {
      setErrorMsg("Please enter City.");
      return;
    }
    if (!trim(step2Data.state)) {
      setErrorMsg("Please enter State.");
      return;
    }
    const pin = digits(step2Data.pinCode);
    if (!pin || pin.length !== 6) {
      setErrorMsg("Please enter a valid 6-digit Pin Code.");
      return;
    }
    if (!trim(step2Data.accountHolderName)) {
      setErrorMsg("Please enter Account Holder's Name.");
      return;
    }
    if (!trim(step2Data.bankName)) {
      setErrorMsg("Please enter Bank Name.");
      return;
    }
    if (!digits(step2Data.accountNo)) {
      setErrorMsg("Please enter Account No.");
      return;
    }
    if (!trim(step2Data.ifscCode)) {
      setErrorMsg("Please enter IFSC Code.");
      return;
    }
    if (step2Data.applicantType === "joint") {
      if (!trim(step2Data.coApplicantName)) {
        setErrorMsg("Please enter Co-applicant's Name.");
        return;
      }
      if (!trim(step2Data.coApplicantSonWifeDaughterOf)) {
        setErrorMsg("Please enter Co-applicant Son/Wife/Daughter/Of.");
        return;
      }
      if (!trim(step2Data.coApplicantAddress1)) {
        setErrorMsg("Please enter Co-applicant Address Line 1.");
        return;
      }
      if (!trim(step2Data.coApplicantCity)) {
        setErrorMsg("Please enter Co-applicant City.");
        return;
      }
      if (!trim(step2Data.coApplicantState)) {
        setErrorMsg("Please enter Co-applicant State.");
        return;
      }
      const coPin = digits(step2Data.coApplicantPinCode);
      if (!coPin || coPin.length !== 6) {
        setErrorMsg("Please enter a valid Co-applicant 6-digit Pin Code.");
        return;
      }
      const coEmail = trim(step2Data.coApplicantEmail);
      if (!coEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(coEmail)) {
        setErrorMsg("Please enter a valid Co-applicant Email.");
        return;
      }
      const coPhone = digits(step2Data.coApplicantPhone);
      if (!coPhone || coPhone.length < 10) {
        setErrorMsg("Please enter a valid Co-applicant Phone (at least 10 digits).");
        return;
      }
      const coAadhar = digits(step2Data.coApplicantAadhar);
      if (!coAadhar || coAadhar.length !== 12) {
        setErrorMsg("Please enter a valid Co-applicant 12-digit Aadhaar Card No.");
        return;
      }
      const coPan = (step2Data.coApplicantPan || "").replace(/\s/g, "").toUpperCase();
      if (!coPan || coPan.length !== 10) {
        setErrorMsg("Please enter a valid Co-applicant 10-character Pan No.");
        return;
      }
    }
    const requiredDocs = ["aadhaarCard", "panCard", "photo", "cancelledCheque"];
    const missing = requiredDocs.filter((d) => !docFiles[d]);
    if (missing.length > 0) {
      setErrorMsg(
        "Please upload all required documents: Aadhaar Card, Pan Card, Photo, and Cancelled Cheque.",
      );
      return;
    }
    setErrorMsg("");
    setStep(3);
  };

  const fileToBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(",")[1] || "");
      };
      reader.onerror = reject;
    });

  const validateStep2Data = (): string | null => {
    const trim = (s: string) => (s || "").toString().trim();
    const digits = (s: string) => (s || "").toString().replace(/\D/g, "");
    if (!trim(step2Data.applicantName)) return "Applicant's Name is required.";
    if (!trim(step2Data.sonWifeDaughterOf)) return "Son/Wife/Daughter/Of is required.";
    if (!trim(step2Data.dateOfBirth)) return "Date of Birth is required.";
    if (!trim(step2Data.gender)) return "Gender is required.";
    const phone = digits(step2Data.phone || step1Data.whatsapp);
    if (!phone || phone.length < 10) return "Phone/Mobile must be at least 10 digits.";
    const aadhar = digits(step2Data.aadharNumber);
    if (!aadhar || aadhar.length !== 12) return "Aadhar Card Number must be 12 digits.";
    const pan = (step2Data.panNumber || "").replace(/\s/g, "").toUpperCase();
    if (!pan || pan.length !== 10) return "Pan Card Number must be 10 characters.";
    if (!trim(step2Data.addressLine1)) return "Address Line 1 is required.";
    if (!trim(step2Data.city)) return "City is required.";
    if (!trim(step2Data.state)) return "State is required.";
    const pin = digits(step2Data.pinCode);
    if (!pin || pin.length !== 6) return "Pin Code must be 6 digits.";
    if (!trim(step2Data.accountHolderName)) return "Account Holder's Name is required.";
    if (!trim(step2Data.bankName)) return "Bank Name is required.";
    if (!digits(step2Data.accountNo)) return "Account No. is required.";
    if (!trim(step2Data.ifscCode)) return "IFSC Code is required.";
    if (step2Data.applicantType === "joint") {
      if (!trim(step2Data.coApplicantName)) return "Co-applicant's Name is required.";
      if (!trim(step2Data.coApplicantSonWifeDaughterOf)) return "Co-applicant Son/Wife/Daughter/Of is required.";
      if (!trim(step2Data.coApplicantAddress1)) return "Co-applicant Address Line 1 is required.";
      if (!trim(step2Data.coApplicantCity)) return "Co-applicant City is required.";
      if (!trim(step2Data.coApplicantState)) return "Co-applicant State is required.";
      const coPin = digits(step2Data.coApplicantPinCode);
      if (!coPin || coPin.length !== 6) return "Co-applicant Pin Code must be 6 digits.";
      const coEmail = trim(step2Data.coApplicantEmail);
      if (!coEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(coEmail)) return "Co-applicant Email is invalid.";
      const coPhone = digits(step2Data.coApplicantPhone);
      if (!coPhone || coPhone.length < 10) return "Co-applicant Phone must be at least 10 digits.";
      const coAadhar = digits(step2Data.coApplicantAadhar);
      if (!coAadhar || coAadhar.length !== 12) return "Co-applicant Aadhaar must be 12 digits.";
      const coPan = (step2Data.coApplicantPan || "").replace(/\s/g, "").toUpperCase();
      if (!coPan || coPan.length !== 10) return "Co-applicant Pan must be 10 characters.";
    }
    const requiredDocs = ["aadhaarCard", "panCard", "photo", "cancelledCheque"];
    const missing = requiredDocs.filter((d) => !docFiles[d]);
    if (missing.length > 0) return "Please upload all documents: Aadhaar Card, Pan Card, Photo, Cancelled Cheque.";
    return null;
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault?.();
    if (!step2Data.plotSize) {
      setErrorMsg("Please select a plot size.");
      return;
    }
    if (!step2Data.termsAccepted) {
      setErrorMsg(
        "You must accept the Terms and Conditions and Privacy Policy",
      );
      return;
    }
    const step2Error = validateStep2Data();
    if (step2Error) {
      setErrorMsg(`${step2Error} Please go back to Step 2 to fix.`);
      return;
    }
    setStatus("loading");
    setErrorMsg("");

    try {
      const attachments: { filename: string; content: string }[] = [];
      if (docFiles.aadhaarCard) {
        attachments.push({
          filename: `aadhaar_${docFiles.aadhaarCard.file.name}`,
          content: await fileToBase64(docFiles.aadhaarCard.file),
        });
      }
      if (docFiles.panCard) {
        attachments.push({
          filename: `pan_${docFiles.panCard.file.name}`,
          content: await fileToBase64(docFiles.panCard.file),
        });
      }
      if (docFiles.photo) {
        attachments.push({
          filename: `photo_${docFiles.photo.file.name}`,
          content: await fileToBase64(docFiles.photo.file),
        });
      }
      if (docFiles.cancelledCheque) {
        attachments.push({
          filename: `cheque_${docFiles.cancelledCheque.file.name}`,
          content: await fileToBase64(docFiles.cancelledCheque.file),
        });
      }

      const sanitize = (s: string) =>
        (s || "").toString().trim().replace(/\s+/g, " ");
      const sanitizeDigits = (s: string) =>
        (s || "").toString().replace(/\D/g, "");
      const payload = {
        ...step1Data,
        fullName: sanitize(step1Data.fullName),
        email: sanitize(step1Data.email),
        whatsapp: sanitizeDigits(step1Data.whatsapp) || step1Data.whatsapp,
        ...step2Data,
        applicantName: sanitize(step2Data.applicantName),
        aadharNumber: sanitizeDigits(step2Data.aadharNumber) || step2Data.aadharNumber,
        panNumber: (step2Data.panNumber || "").toString().replace(/\s/g, "").toUpperCase(),
        phone: sanitizeDigits(step2Data.phone || step1Data.whatsapp) || step2Data.phone || step1Data.whatsapp,
        addressLine1: sanitize(step2Data.addressLine1),
        addressLine2: sanitize(step2Data.addressLine2),
        city: sanitize(step2Data.city),
        state: sanitize(step2Data.state),
        pinCode: sanitizeDigits(step2Data.pinCode) || step2Data.pinCode,
        accountHolderName: sanitize(step2Data.accountHolderName),
        bankName: sanitize(step2Data.bankName),
        accountNo: sanitizeDigits(step2Data.accountNo) || step2Data.accountNo,
        ifscCode: (step2Data.ifscCode || "").toString().replace(/\s/g, "").toUpperCase(),
        coApplicantAadhar: step2Data.coApplicantAadhar
          ? sanitizeDigits(step2Data.coApplicantAadhar)
          : step2Data.coApplicantAadhar,
        coApplicantPan: step2Data.coApplicantPan
          ? (step2Data.coApplicantPan + "").replace(/\s/g, "").toUpperCase()
          : step2Data.coApplicantPan,
        coApplicantPhone: step2Data.coApplicantPhone
          ? sanitizeDigits(step2Data.coApplicantPhone)
          : step2Data.coApplicantPhone,
        attachments,
      };
      const res = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit");
      }

      window.location.href = "https://payments.cashfree.com/forms/avani";
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <div className="page-wrapper">
      <section className="project-info-section">
        <div className="container">
          <div className="project-info-card">
            <div className="project-info-header">
              <h1 className="project-info-title">
                Registration for Jan Awas Yojna Plotted Development, Rajasthan
              </h1>
              <Link href="/project/avani-greens" className="go-back-link">
                {"<< GO BACK"}
              </Link>
            </div>

            <div
              ref={formRef}
              className="apply-form-steps"
              onKeyDown={(e) => {
                if (e.key === "Enter") e.preventDefault();
              }}
            >
              <div className="apply-progress-wrap">
                <span className="apply-progress-label">
                  Step {step} of 3 -
                </span>
                <div className="apply-progress-bar">
                  <div
                    className={`apply-progress-fill ${step === 3 ? "apply-progress-full" : ""}`}
                    style={{
                      width: step === 1 ? "33.33%" : step === 2 ? "66.66%" : "100%",
                    }}
                  >
                    <span className="apply-progress-percent">
                      {step === 1 ? "33%" : step === 2 ? "67%" : "100%"}
                    </span>
                  </div>
                </div>
              </div>

              {step === 1 && (
                <div className="apply-form">
                  <h3 className="apply-section-title">
                    Step 1: Contact Details
                  </h3>
                  <p className="apply-section-desc">
                    Please provide your basic contact information to proceed.
                  </p>

                  {errorMsg && (
                    <p className="apply-form-error">{errorMsg}</p>
                  )}
                  <div className="apply-form-grid">
                    <div className="apply-form-group">
                      <label htmlFor="fullName">Full Name *</label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={step1Data.fullName}
                        onChange={handleStep1Change}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="apply-form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="text"
                        inputMode="email"
                        autoComplete="email"
                        value={step1Data.email}
                        onChange={handleStep1Change}
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="apply-form-group">
                      <label htmlFor="whatsapp">WhatsApp / Phone *</label>
                      <input
                        id="whatsapp"
                        name="whatsapp"
                        type="text"
                        inputMode="tel"
                        autoComplete="tel"
                        value={step1Data.whatsapp}
                        onChange={handleStep1Change}
                        placeholder="Enter your WhatsApp number"
                      />
                    </div>
                  </div>

                  <div className="apply-form-actions">
                    <button
                      type="button"
                      className="btn-apply-next"
                      onClick={handleStep1Next}
                    >
                      Next →
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="apply-form">
                  {/* Category */}
                  <div className="apply-form-block">
                    <h4 className="apply-block-title">Category</h4>
                    <div className="apply-radio-group">
                      <label className="apply-radio-label">
                        <input
                          type="radio"
                          name="category"
                          value="general"
                          checked={step2Data.category === "general"}
                          onChange={handleStep2Change}
                        />
                        General
                      </label>
                      <label className="apply-radio-label">
                        <input
                          type="radio"
                          name="category"
                          value="government"
                          checked={step2Data.category === "government"}
                          onChange={handleStep2Change}
                        />
                        Central/State Government Employee
                      </label>
                      <label className="apply-radio-label">
                        <input
                          type="radio"
                          name="category"
                          value="female"
                          checked={step2Data.category === "female"}
                          onChange={handleStep2Change}
                        />
                        Female
                      </label>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="apply-form-block">
                    <h4 className="apply-block-title">Personal Information</h4>

                    <div className="apply-radio-group apply-mb">
                      <label className="apply-radio-label">
                        <input
                          type="radio"
                          name="applicantType"
                          value="sole"
                          checked={step2Data.applicantType === "sole"}
                          onChange={handleStep2Change}
                        />
                        Sole
                      </label>
                      <label className="apply-radio-label">
                        <input
                          type="radio"
                          name="applicantType"
                          value="joint"
                          checked={step2Data.applicantType === "joint"}
                          onChange={handleStep2Change}
                        />
                        Joint
                      </label>
                    </div>

                    <div className="apply-form-grid">
                      <div className="apply-form-group">
                        <label>Applicant&apos;s Name *</label>
                        <input
                          name="applicantName"
                          type="text"
                          value={step2Data.applicantName}
                          onChange={handleStep2Change}
                          placeholder="Applicant's Name"
                        />
                      </div>
                      <div className="apply-form-group">
                        <label>Son/Wife/Daughter/Of *</label>
                        <input
                          name="sonWifeDaughterOf"
                          type="text"
                          value={step2Data.sonWifeDaughterOf}
                          onChange={handleStep2Change}
                          placeholder="Son/Wife/Daughter/Of"
                        />
                      </div>
                      <div className="apply-form-group">
                        <label>Date of Birth *</label>
                        <input
                          name="dateOfBirth"
                          type="date"
                          value={step2Data.dateOfBirth}
                          onChange={handleStep2Change}
                        />
                      </div>
                      <div className="apply-form-group">
                        <label>Gender *</label>
                        <select
                          name="gender"
                          value={step2Data.gender}
                          onChange={handleStep2Change}
                        >
                          <option value="">Select</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="apply-form-group">
                        <label>Email *</label>
                        <input
                          name="email"
                          type="text"
                          inputMode="email"
                          value={step1Data.email}
                          readOnly
                          className="readonly"
                        />
                      </div>
                      <div className="apply-form-group">
                        <label>Phone/Mobile *</label>
                        <input
                          name="phone"
                          type="text"
                          inputMode="tel"
                          value={step2Data.phone || step1Data.whatsapp}
                          onChange={handleStep2Change}
                          placeholder="Phone/Mobile"
                        />
                      </div>
                      <div className="apply-form-group">
                        <label>Aadhar Card Number *</label>
                        <input
                          name="aadharNumber"
                          type="text"
                          inputMode="numeric"
                          value={step2Data.aadharNumber}
                          onChange={handleStep2Change}
                          placeholder="Aadhar Card Number"
                          maxLength={12}
                        />
                      </div>
                      <div className="apply-form-group">
                        <label>Pan Card Number *</label>
                        <input
                          name="panNumber"
                          type="text"
                          value={step2Data.panNumber}
                          onChange={handleStep2Change}
                          placeholder="Pan Card Number"
                          maxLength={10}
                        />
                      </div>
                    </div>

                    <h5 className="apply-sub-title">Address</h5>
                    <div className="apply-form-grid">
                      <div className="apply-form-group apply-full">
                        <label>Address Line 1 *</label>
                        <input
                          name="addressLine1"
                          type="text"
                          value={step2Data.addressLine1}
                          onChange={handleStep2Change}
                          placeholder="Address Line 1"
                        />
                      </div>
                      <div className="apply-form-group apply-full">
                        <label>Address Line 2</label>
                        <input
                          name="addressLine2"
                          type="text"
                          value={step2Data.addressLine2}
                          onChange={handleStep2Change}
                          placeholder="Address Line 2"
                        />
                      </div>
                      <div className="apply-form-group">
                        <label>City *</label>
                        <input
                          name="city"
                          type="text"
                          value={step2Data.city}
                          onChange={handleStep2Change}
                          placeholder="City"
                        />
                      </div>
                      <div className="apply-form-group">
                        <label>State *</label>
                        <input
                          name="state"
                          type="text"
                          value={step2Data.state}
                          onChange={handleStep2Change}
                          placeholder="State"
                        />
                      </div>
                      <div className="apply-form-group">
                        <label>Pin Code *</label>
                        <input
                          name="pinCode"
                          type="text"
                          inputMode="numeric"
                          value={step2Data.pinCode}
                          onChange={handleStep2Change}
                          placeholder="Pin Code"
                          maxLength={6}
                        />
                      </div>
                      <div className="apply-form-group">
                        <label>Country</label>
                        <select
                          name="country"
                          value={step2Data.country}
                          onChange={handleStep2Change}
                        >
                          <option value="India">India</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Bank Account Details */}
                  <div className="apply-form-block">
                    <h4 className="apply-block-title">Bank Account Details</h4>
                    <div className="apply-form-grid">
                      <div className="apply-form-group">
                        <label>Account Holder&apos;s Name *</label>
                        <input
                          name="accountHolderName"
                          type="text"
                          value={step2Data.accountHolderName}
                          onChange={handleStep2Change}
                          placeholder="Account Holder's Name"
                        />
                      </div>
                      <div className="apply-form-group">
                        <label>Bank Name *</label>
                        <input
                          name="bankName"
                          type="text"
                          value={step2Data.bankName}
                          onChange={handleStep2Change}
                          placeholder="Bank Name"
                        />
                      </div>
                      <div className="apply-form-group">
                        <label>Account No. *</label>
                        <input
                          name="accountNo"
                          type="text"
                          inputMode="numeric"
                          value={step2Data.accountNo}
                          onChange={handleStep2Change}
                          placeholder="Account No."
                        />
                      </div>
                      <div className="apply-form-group">
                        <label>IFSC Code *</label>
                        <input
                          name="ifscCode"
                          type="text"
                          value={step2Data.ifscCode}
                          onChange={handleStep2Change}
                          placeholder="IFSC Code"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Documents Upload */}
                  <div className="apply-form-block">
                    <h4 className="apply-block-title">Documents Upload</h4>
                    <div className="apply-doc-grid">
                      <div className="apply-doc-field">
                        <label>
                          Aadhaar Card{" "}
                          <span className="required-asterisk">*</span>
                          <span
                            className="apply-doc-info-icon"
                            title="Upload Aadhaar Card"
                          >
                            i
                          </span>
                        </label>
                        <div className="apply-doc-input-wrap">
                          <input
                            type="file"
                            id="aadhaarCard"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) =>
                              handleDocFileChange("aadhaarCard", e)
                            }
                            className="apply-doc-file-input"
                          />
                          <label
                            htmlFor="aadhaarCard"
                            className="apply-doc-choose-btn"
                          >
                            Choose File
                          </label>
                        </div>
                        {docFiles.aadhaarCard && (
                          <div className="apply-doc-file-display">
                            <span className="apply-doc-file-type">
                              {docFiles.aadhaarCard.file.name
                                .split(".")
                                .pop()
                                ?.toLowerCase() || "pdf"}
                            </span>
                            <div className="apply-doc-file-info">
                              <span className="apply-doc-file-name">
                                {docFiles.aadhaarCard.file.name}
                              </span>
                              <div className="apply-doc-progress-bar">
                                <div
                                  className="apply-doc-progress-fill"
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <span className="apply-doc-file-status">
                                <span>100% Completed</span>
                                <span>{docFiles.aadhaarCard.size}</span>
                              </span>
                            </div>
                            <button
                              type="button"
                              className="apply-doc-remove"
                              onClick={() => removeDocFile("aadhaarCard")}
                              aria-label="Remove"
                            >
                              ×
                            </button>
                          </div>
                        )}
                      </div>
                      <div className="apply-doc-field">
                        <label>
                          Pan Card <span className="required-asterisk">*</span>
                          <span
                            className="apply-doc-info-icon"
                            title="Upload Pan Card"
                          >
                            i
                          </span>
                        </label>
                        <div className="apply-doc-input-wrap">
                          <input
                            type="file"
                            id="panCard"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) => handleDocFileChange("panCard", e)}
                            className="apply-doc-file-input"
                          />
                          <label
                            htmlFor="panCard"
                            className="apply-doc-choose-btn"
                          >
                            Choose File
                          </label>
                        </div>
                        {docFiles.panCard && (
                          <div className="apply-doc-file-display">
                            <span className="apply-doc-file-type">
                              {docFiles.panCard.file.name
                                .split(".")
                                .pop()
                                ?.toLowerCase() || "pdf"}
                            </span>
                            <div className="apply-doc-file-info">
                              <span className="apply-doc-file-name">
                                {docFiles.panCard.file.name}
                              </span>
                              <div className="apply-doc-progress-bar">
                                <div
                                  className="apply-doc-progress-fill"
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <span className="apply-doc-file-status">
                                <span>100% Completed</span>
                                <span>{docFiles.panCard.size}</span>
                              </span>
                            </div>
                            <button
                              type="button"
                              className="apply-doc-remove"
                              onClick={() => removeDocFile("panCard")}
                              aria-label="Remove"
                            >
                              ×
                            </button>
                          </div>
                        )}
                      </div>
                      <div className="apply-doc-field">
                        <label>
                          Photo <span className="required-asterisk">*</span>
                          <span
                            className="apply-doc-info-icon"
                            title="Upload Photo"
                          >
                            i
                          </span>
                        </label>
                        <div className="apply-doc-input-wrap">
                          <input
                            type="file"
                            id="photo"
                            accept=".jpg,.jpeg,.png"
                            onChange={(e) => handleDocFileChange("photo", e)}
                            className="apply-doc-file-input"
                          />
                          <label
                            htmlFor="photo"
                            className="apply-doc-choose-btn"
                          >
                            Choose File
                          </label>
                        </div>
                        {docFiles.photo && (
                          <div className="apply-doc-file-display">
                            <span className="apply-doc-file-type">
                              {docFiles.photo.file.name
                                .split(".")
                                .pop()
                                ?.toLowerCase() || "jpg"}
                            </span>
                            <div className="apply-doc-file-info">
                              <span className="apply-doc-file-name">
                                {docFiles.photo.file.name}
                              </span>
                              <div className="apply-doc-progress-bar">
                                <div
                                  className="apply-doc-progress-fill"
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <span className="apply-doc-file-status">
                                <span>100% Completed</span>
                                <span>{docFiles.photo.size}</span>
                              </span>
                            </div>
                            <button
                              type="button"
                              className="apply-doc-remove"
                              onClick={() => removeDocFile("photo")}
                              aria-label="Remove"
                            >
                              ×
                            </button>
                          </div>
                        )}
                      </div>
                      <div className="apply-doc-field">
                        <label>
                          Cancelled Cheque{" "}
                          <span className="required-asterisk">*</span>
                          <span
                            className="apply-doc-info-icon"
                            title="Upload Cancelled Cheque"
                          >
                            i
                          </span>
                        </label>
                        <div className="apply-doc-input-wrap">
                          <input
                            type="file"
                            id="cancelledCheque"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={(e) =>
                              handleDocFileChange("cancelledCheque", e)
                            }
                            className="apply-doc-file-input"
                          />
                          <label
                            htmlFor="cancelledCheque"
                            className="apply-doc-choose-btn"
                          >
                            Choose File
                          </label>
                        </div>
                        {docFiles.cancelledCheque && (
                          <div className="apply-doc-file-display">
                            <span className="apply-doc-file-type">
                              {docFiles.cancelledCheque.file.name
                                .split(".")
                                .pop()
                                ?.toLowerCase() || "pdf"}
                            </span>
                            <div className="apply-doc-file-info">
                              <span className="apply-doc-file-name">
                                {docFiles.cancelledCheque.file.name}
                              </span>
                              <div className="apply-doc-progress-bar">
                                <div
                                  className="apply-doc-progress-fill"
                                  style={{ width: "100%" }}
                                />
                              </div>
                              <span className="apply-doc-file-status">
                                <span>100% Completed</span>
                                <span>{docFiles.cancelledCheque.size}</span>
                              </span>
                            </div>
                            <button
                              type="button"
                              className="apply-doc-remove"
                              onClick={() => removeDocFile("cancelledCheque")}
                              aria-label="Remove"
                            >
                              ×
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Second Applicant */}
                  {step2Data.applicantType === "joint" && (
                    <div className="apply-form-block apply-form-block-no-border">
                      <h4 className="apply-block-title">Second Applicant</h4>
                      <div className="apply-form-grid">
                        <div className="apply-form-group">
                          <label>Co-applicant&apos;s Name *</label>
                          <input
                            name="coApplicantName"
                            type="text"
                            value={step2Data.coApplicantName}
                            onChange={handleStep2Change}
                            placeholder="Co-applicant's Name"
                          />
                        </div>
                        <div className="apply-form-group">
                          <label>Son/Wife/Daughter/Of *</label>
                          <input
                            name="coApplicantSonWifeDaughterOf"
                            type="text"
                            value={step2Data.coApplicantSonWifeDaughterOf}
                            onChange={handleStep2Change}
                            placeholder="Son/Wife/Daughter/Of"
                          />
                        </div>
                        <div className="apply-form-group apply-full">
                          <label>Address Line 1 *</label>
                          <input
                            name="coApplicantAddress1"
                            type="text"
                            value={step2Data.coApplicantAddress1}
                            onChange={handleStep2Change}
                            placeholder="Address Line 1"
                          />
                        </div>
                        <div className="apply-form-group apply-full">
                          <label>Address Line 2</label>
                          <input
                            name="coApplicantAddress2"
                            type="text"
                            value={step2Data.coApplicantAddress2}
                            onChange={handleStep2Change}
                            placeholder="Address Line 2"
                          />
                        </div>
                        <div className="apply-form-group">
                          <label>City *</label>
                          <input
                            name="coApplicantCity"
                            type="text"
                            value={step2Data.coApplicantCity}
                            onChange={handleStep2Change}
                            placeholder="City"
                          />
                        </div>
                        <div className="apply-form-group">
                          <label>State *</label>
                          <input
                            name="coApplicantState"
                            type="text"
                            value={step2Data.coApplicantState}
                            onChange={handleStep2Change}
                            placeholder="State"
                          />
                        </div>
                        <div className="apply-form-group">
                          <label>Pin Code *</label>
                          <input
                            name="coApplicantPinCode"
                            type="text"
                            inputMode="numeric"
                            value={step2Data.coApplicantPinCode}
                            onChange={handleStep2Change}
                            placeholder="Pin Code"
                            maxLength={6}
                          />
                        </div>
                        <div className="apply-form-group">
                          <label>Email *</label>
                          <input
                            name="coApplicantEmail"
                            type="text"
                            inputMode="email"
                            value={step2Data.coApplicantEmail}
                            onChange={handleStep2Change}
                            placeholder="Email"
                          />
                        </div>
                        <div className="apply-form-group">
                          <label>Phone/Mobile *</label>
                          <input
                            name="coApplicantPhone"
                            type="text"
                            inputMode="tel"
                            value={step2Data.coApplicantPhone}
                            onChange={handleStep2Change}
                            placeholder="Phone/Mobile"
                          />
                        </div>
                        <div className="apply-form-group">
                          <label>Aadhaar Card No. *</label>
                          <input
                            name="coApplicantAadhar"
                            type="text"
                            inputMode="numeric"
                            value={step2Data.coApplicantAadhar}
                            onChange={handleStep2Change}
                            placeholder="Aadhaar Card No."
                            maxLength={12}
                          />
                        </div>
                        <div className="apply-form-group">
                          <label>Pan No. *</label>
                          <input
                            name="coApplicantPan"
                            type="text"
                            value={step2Data.coApplicantPan}
                            onChange={handleStep2Change}
                            placeholder="Pan No."
                            maxLength={10}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {errorMsg && (
                    <p className="apply-form-error">{errorMsg}</p>
                  )}
                  <div className="apply-form-actions apply-form-actions-two">
                    <button
                      type="button"
                      className="btn-apply-prev"
                      onClick={() => {
                        setErrorMsg("");
                        setStep(1);
                      }}
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      className="btn-apply-next"
                      onClick={handleStep2Next}
                    >
                      Next →
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="apply-form apply-step-three">
                  <h3 className="apply-step3-title">
                    {step2Data.category === "general"
                      ? "PRICE FOR GENERAL APPLICANTS"
                      : "PRICE FOR GOVERNMENT EMPLOYEES & FEMALE APPLICANTS"}
                  </h3>

                  <div className="apply-step3-table-wrap">
                    <div className="table-wrapper">
                      <table className="payment-table apply-step3-table">
                        <thead>
                          <tr>
                            <th>No. of Units</th>
                            <th>Plot Area (SQ.YD)</th>
                            <th>Rate Per (Sq.Yd)</th>
                            <th>Registration Amount (Rs)</th>
                            <th>
                              10% On Allotment (Less Registration Amount) (Rs)
                            </th>
                            <th>30% Within 30 Days From Allotment (Rs)</th>
                            <th>60% Within 60 Days From Allotment (Rs)</th>
                            <th>Total Cost (RS)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {step2Data.category === "general" ? (
                            <>
                              <tr>
                                <td>13</td>
                                <td>50</td>
                                <td>14990</td>
                                <td>11000</td>
                                <td>63950</td>
                                <td>224850</td>
                                <td>449700</td>
                                <td className="apply-total-bold">749500</td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>80</td>
                                <td>14990</td>
                                <td>11000</td>
                                <td>108920</td>
                                <td>359760</td>
                                <td>719520</td>
                                <td className="apply-total-bold">1199200</td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>138</td>
                                <td>14990</td>
                                <td>11000</td>
                                <td>195862</td>
                                <td>620586</td>
                                <td>1241172</td>
                                <td className="apply-total-bold">2068620</td>
                              </tr>
                              <tr>
                                <td>9</td>
                                <td>160</td>
                                <td>14990</td>
                                <td>11000</td>
                                <td>228840</td>
                                <td>719520</td>
                                <td>1439040</td>
                                <td className="apply-total-bold">2398400</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>170</td>
                                <td>14990</td>
                                <td>11000</td>
                                <td>243830</td>
                                <td>764490</td>
                                <td>1528980</td>
                                <td className="apply-total-bold">2548300</td>
                              </tr>
                              <tr>
                                <td>11</td>
                                <td>200</td>
                                <td>14990</td>
                                <td>11000</td>
                                <td>288800</td>
                                <td>899400</td>
                                <td>1798800</td>
                                <td className="apply-total-bold">2998000</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>220</td>
                                <td>14990</td>
                                <td>11000</td>
                                <td>318780</td>
                                <td>989340</td>
                                <td>1978680</td>
                                <td className="apply-total-bold">3297800</td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>270</td>
                                <td>14990</td>
                                <td>11000</td>
                                <td>393730</td>
                                <td>1214190</td>
                                <td>2428380</td>
                                <td className="apply-total-bold">4047300</td>
                              </tr>
                            </>
                          ) : (
                            <>
                              <tr>
                                <td>13</td>
                                <td>50</td>
                                <td>13990</td>
                                <td>11000</td>
                                <td>58950</td>
                                <td>209850</td>
                                <td>419700</td>
                                <td className="apply-total-bold">699500</td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>80</td>
                                <td>13990</td>
                                <td>11000</td>
                                <td>100920</td>
                                <td>335760</td>
                                <td>671520</td>
                                <td className="apply-total-bold">1119200</td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>138</td>
                                <td>13990</td>
                                <td>11000</td>
                                <td>182062</td>
                                <td>579186</td>
                                <td>1158372</td>
                                <td className="apply-total-bold">1925620</td>
                              </tr>
                              <tr>
                                <td>9</td>
                                <td>160</td>
                                <td>13990</td>
                                <td>11000</td>
                                <td>212840</td>
                                <td>671520</td>
                                <td>1343040</td>
                                <td className="apply-total-bold">2238400</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>170</td>
                                <td>13990</td>
                                <td>11000</td>
                                <td>226830</td>
                                <td>713490</td>
                                <td>1426980</td>
                                <td className="apply-total-bold">2378300</td>
                              </tr>
                              <tr>
                                <td>12</td>
                                <td>200</td>
                                <td>13990</td>
                                <td>11000</td>
                                <td>268800</td>
                                <td>839400</td>
                                <td>1678800</td>
                                <td className="apply-total-bold">2798000</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>220</td>
                                <td>13990</td>
                                <td>11000</td>
                                <td>296780</td>
                                <td>923340</td>
                                <td>1846680</td>
                                <td className="apply-total-bold">3087800</td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>270</td>
                                <td>13990</td>
                                <td>11000</td>
                                <td>366730</td>
                                <td>1133190</td>
                                <td>2266380</td>
                                <td className="apply-total-bold">3777300</td>
                              </tr>
                            </>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <h4 className="apply-select-size-title">
                    Select Size <span className="required-asterisk">*</span>
                  </h4>
                  <div className="apply-plot-sizes apply-plot-sizes-grid">
                    {PLOT_SIZES.map((size) => (
                      <label key={size} className="apply-plot-size-simple">
                        <input
                          type="radio"
                          name="plotSize"
                          value={size}
                          checked={step2Data.plotSize === size}
                          onChange={handleStep2Change}
                        />
                        {size} Sq. Yd
                      </label>
                    ))}
                  </div>

                  <div className="apply-step3-disclaimers">
                    <p className="apply-disclaimer-red">NO GST APPLICABLE</p>
                    <p className="apply-disclaimer-red">
                      {step2Data.category === "general"
                        ? "NO EDC/IDC CHARGES"
                        : "NO EDC/IDC CHARGES FOR GOVERNMENT EMPLOYEES & FEMALES"}
                    </p>
                    <p>PLC CHARGES WILL BE APPLICABLE AS PER ACTUAL.</p>
                    <p>OTHER CHARGES APPLICABLE AS PER ACTUAL</p>
                    <p>
                      POSSESSION CHARGES, MAINTENANCE CHARGES, REGISTERY & STAMP
                      DUTY CHARGES IN RAJASTHAN (AS APPLICABLE)
                    </p>
                    <p>
                      PAYMENT PLAN IS 10:30:60. FOR DETAILED INFO REFER
                      APPLICATION FORM.
                    </p>
                  </div>

                  <div className="apply-terms-label">
                    <label style={{ cursor: "pointer" }}>
                      <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={step2Data.termsAccepted}
                        onChange={handleStep2Change}
                      />
                      <span>
                        I have read and agree to the{" "}
                        <Link href="/terms" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                          Terms and Conditions
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                          Privacy Policy
                        </Link>
                      </span>
                    </label>
                  </div>

                  {(errorMsg || status === "error") && (
                    <p className="apply-form-error">{errorMsg}</p>
                  )}

                  <div className="apply-form-actions apply-form-actions-two">
                    <button
                      type="button"
                      className="btn-apply-prev"
                      onClick={() => {
                        setErrorMsg("");
                        setStep(2);
                      }}
                      disabled={status === "loading"}
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      className="btn-apply-submit"
                      disabled={status === "loading"}
                      onClick={() => handleSubmit()}
                    >
                      {status === "loading" ? "Submitting..." : "Submit & Pay"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
