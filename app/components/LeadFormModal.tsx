"use client";

import { useState } from "react";
import styles from "./LeadFormModal.module.css";

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadFormModal({ isOpen, onClose }: LeadFormModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = (formData.fullName || "").trim();
    const email = (formData.email || "").trim();
    const whatsapp = (formData.whatsapp || "").replace(/\D/g, "");
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
      setErrorMsg("Please enter a valid number (at least 10 digits).");
      return;
    }
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit");
      }

      setStatus("success");
      setFormData({ fullName: "", email: "", whatsapp: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>First Step </h2>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {status === "success" ? (
          <div className={styles.success}>
            <p>Thank you! Your application has been submitted successfully.</p>
            <p>We will contact you shortly.</p>
            <button type="button" className={styles.btnClose} onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.formGroup}>
              <label htmlFor="fullName">Full Name *</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                disabled={status === "loading"}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                name="email"
                type="text"
                inputMode="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                disabled={status === "loading"}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="whatsapp">Number *</label>
              <input
                id="whatsapp"
                name="whatsapp"
                type="text"
                inputMode="tel"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="Enter your WhatsApp number"
                disabled={status === "loading"}
              />
            </div>
            {status === "error" && (
              <p className={styles.formError}>{errorMsg}</p>
            )}
            <div className={styles.formActions}>
              <button
                type="button"
                className={`${styles.btn} ${styles.btnSecondary}`}
                onClick={onClose}
                disabled={status === "loading"}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`${styles.btn} ${styles.btnPrimary}`}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Apply Now"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
