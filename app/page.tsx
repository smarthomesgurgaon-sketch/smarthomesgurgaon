"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadFormModal from "./components/LeadFormModal";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [leadModalOpen, setLeadModalOpen] = useState(false);

  const bannerImages = [
    "/banner/banner-1.webp",
    "/banner/banner-2.webp",
    "/banner/banner-3.webp",
    "/banner/banner-4.webp",
  ];

  // Auto-play slider
  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(sliderInterval);
  }, [bannerImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerImages.length) % bannerImages.length,
    );
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  return (
    <div className="page-wrapper">
      {/* Attention Banner Section */}
      <section className="attention-banner">
        <div className="container">
          <div className="attention-banner-content">
            <div className="attention-banner-text">
              ATTENTION REGISTRATION OPEN !!!! भिवाड़ी नगर में जन आवास योजना के
              अंतर्गत अपना प्लॉट बुक करें *** START DATE OF APPLICATION - 11
              February 2026 *** UNIT ALLOTMENT DATE-28 February 2026***
              Registration Amount is Fully Refundable for Non-Alloted Applicants
              Within 15 Days
            </div>
          </div>
        </div>
      </section>

      {/* Main Banner Section */}
      <section className="banner-section">
        <div className="container">
          {/* Image Slider */}
          <div className="banner-slider-section">
            <div className="banner-slider-container">
              <div className="banner-slider-wrapper">
                {bannerImages.map((image, index) => (
                  <div
                    key={index}
                    className={`banner-slide ${index === currentSlide ? "banner-slide-active" : "banner-slide-hidden"}`}
                  >
                    <Image
                      src={image}
                      alt={`Banner ${index + 1}`}
                      fill
                      className="banner-slide-image"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                className="banner-nav-arrow banner-nav-arrow-left"
                onClick={goToPrevious}
                aria-label="Previous slide"
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                className="banner-nav-arrow banner-nav-arrow-right"
                onClick={goToNext}
                aria-label="Next slide"
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="banner-dots">
                {bannerImages.map((_, index) => (
                  <button
                    key={index}
                    className={`banner-dot ${index === currentSlide ? "banner-dot-active" : ""}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Blue Banner - Below Slider */}
          <div className="blue-banner">
            <div className="banner-content">
              {/* Title and Subtitle */}
              <div className="banner-title-section">
                <h1 className="banner-title">
                  JAN AWAS YOJNA PLOTTED DEVELOPMENT
                </h1>
                <p className="banner-subtitle">
                  APPLICATIONS INVITED FOR THE ALLOTMENT OF READY-FOR-POSSESSION
                  RESIDENTIAL PLOTS UNDER JAN AWAS YOJNA, RAJASTHAN
                </p>
              </div>
            </div>
          </div>

          {/* LIVE/CLOSE Buttons */}
          <div className="button-bar">
            <div className="button-bar-content">
              <button className="btn-live">LIVE</button>
              <button className="btn-close">CLOSE</button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section - Two Columns */}
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            {/* Left Column - Project Details */}
            <div className="project-card">
              <div className="project-details">
                <div className="project-detail-item">
                  <span className="project-label">Project ID:</span>
                  <span className="project-value">76</span>
                </div>

                <div className="project-detail-item">
                  <span className="project-label">RERA Certificate:</span>
                  <span className="project-value">RAJ/P/2018/697</span>
                </div>

                <div className="project-detail-item">
                  <span className="project-label">
                    Completion Certificate Date:
                  </span>
                  <span className="project-value">04-03-2022</span>
                </div>

                <div className="project-detail-item">
                  <span className="project-label">Project Status:</span>
                  <span className="project-value">Ready For Possession</span>
                </div>

                <div className="project-detail-item">
                  <span className="project-label">Project Name:</span>
                  <span className="project-value">Avani Greens</span>
                </div>

                <div className="project-detail-item">
                  <span className="project-label">License Name:</span>
                  <span className="project-value">Hemant Kumar Saiwalia</span>
                </div>

                <div className="project-detail-item">
                  <span className="project-label">Colonizer Name:</span>
                  <span className="project-value">
                    Real Revolution Buildestate Pvt. Ltd.
                  </span>
                </div>

                <div className="project-detail-item">
                  <span className="project-label">Location:</span>
                  <span className="project-value">
                    Village Shahbad, Bhiwadi, Tehsil Tijara, Dist. Alwar
                    Rajasthan
                  </span>
                </div>

                <div className="project-detail-item">
                  <span className="project-label">Total Project Area:</span>
                  <span className="project-value">
                    17.09 Acres (12.32 & 4.77 Acres)
                  </span>
                </div>

                <div className="project-section">
                  <h3 className="project-section-title">
                    APPLICATION WINDOW OF JAN AWAS YOJNA PLOTS
                  </h3>
                  <div className="project-section-details">
                    <div className="project-detail-item">
                      <span className="project-label">
                        Online Application Start Date & Time:
                      </span>
                      <span className="project-value">11-02-2026 00:01</span>
                    </div>
                    <div className="project-detail-item">
                      <span className="project-label">
                        Online Application End Date & Time:
                      </span>
                      <span className="project-value">25-02-2026 23:59</span>
                    </div>
                    <div className="project-detail-item">
                      <span className="project-label">
                        Unit Allotment Date & Time:
                      </span>
                      <span className="project-value">27-02-2026 14:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Actions and Information */}
            <div className="actions-card">
              <div className="actions-content">
                {/* Apply Now Button */}
                <div className="button-group">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M464 0H144c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-96 464H48V256h320v208zm96-96h-48V144c0-26.5-21.5-48-48-48H144V48h320v320z"></path>
                  </svg>
                  <button
                    className="btn-apply"
                    onClick={() => setLeadModalOpen(true)}
                  >
                    Apply Now
                  </button>
                  <span className="registration-close-text">Booking Open</span>
                </div>

                {/* Links List */}
                <div className="links-list">
                  <Link href="/project/avani-greens" className="action-link">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 576 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"></path>
                    </svg>
                    <span className="action-link-text">
                      Project Scheme Information
                    </span>
                  </Link>

                  <Link href="/project/avani-greens" className="action-link">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 384 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"></path>
                    </svg>
                    <span className="action-link-text">Plot Sizes & Cost</span>
                  </Link>

                  <Link href="/project/avani-greens" className="action-link">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 384 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z"></path>
                    </svg>
                    <span className="action-link-text">
                      Scheme Payment Plan
                    </span>
                  </Link>

                  <Link href="/project/avani-greens" className="action-link">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 224h192V32H0v192zM64 96h64v64H64V96zm192-64v192h192V32H256zm128 128h-64V96h64v64zM0 480h192V288H0v192zm64-128h64v64H64v-64zm352-64h32v128h-96v-32h-32v96h-64V288h96v32h64v-32zm0 160h32v32h-32v-32zm-64 0h32v32h-32v-32z"></path>
                    </svg>
                    <span className="action-link-text">Payment QR Code</span>
                  </Link>

                  <Link href="/project/avani-greens" className="action-link">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 640 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zm-132.9 88.7L299.3 420.7c-6.2 6.2-16.4 6.2-22.6 0L171.3 315.3c-10.1-10.1-2.9-27.3 11.3-27.3H248V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3z"></path>
                    </svg>
                    <span className="action-link-text">Download Section</span>
                  </Link>

                  <Link href="/project/avani-greens" className="action-link">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 576 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v48H54a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6v-10h48zm42-336H150a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6V86a6 6 0 0 0-6-6zm6-48c26.51 0 48 21.49 48 48v256c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h384zM264 144c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40zm-72 96l39.515-39.515c4.686-4.686 12.284-4.686 16.971 0L288 240l103.515-103.515c4.686-4.686 12.284-4.686 16.971 0L480 208v80H192v-48z"></path>
                    </svg>
                    <span className="action-link-text">Project Gallery</span>
                  </Link>
                </div>

                <Image
                  src="/images/rera.webp"
                  alt="RERA Exempted"
                  className="rera-exempted-image"
                  width={170}
                  height={100}
                />

                {/* Bank Loan Available Button */}
                <button className="btn-bank-loan">Bank Loan Available</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Airport Project Section */}
      <section className="airport-section">
        <div className="container">
          <div className="airport-layout">
            {/* Left Column - Sidebar */}
            <div className="airport-sidebar">
              {/* Master Plans */}
              <div className="sidebar-section">
                <h3 className="sidebar-header sidebar-header-green">
                  Master Plans
                </h3>
                <ul className="sidebar-list">
                  <li>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>{" "}
                    <a href="/master-plans/BKT-Map.pdf" download>
                      Bhiwadi-Khushkhera-Tapukara 2041
                    </a>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>{" "}
                    <a href="/master-plans/SNB-Map.pdf" download>
                      Shahjahapur-Neemrana-Behror 2041
                    </a>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>{" "}
                    <a
                      href="/master-plans/New-Township-Tijara-map.pdf"
                      download
                    >
                      New Township Tijara
                    </a>
                  </li>
                </ul>
              </div>

              {/* Important Links */}
              <div className="sidebar-section">
                <h3 className="sidebar-header">Important Links</h3>
                <ul className="sidebar-list">
                  <li>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>{" "}
                    <a href="/important-links/BKT-Report.pdf" download>
                      Development of Greenfield International Airport at
                      Bhiwadi, Rajasthan - PUBLIC HEARING REPORT
                    </a>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>{" "}
                    <a
                      href="https://www.bhartiyaaviation.in/greenfieldinfo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Press Information Construction of Greenfield Airports
                    </a>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>{" "}
                    <a
                      href="/important-links/New-Township-Tijara-map-2.pdf"
                      download
                    >
                      Greater Bhiwadi Master Plan - 2031
                    </a>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>{" "}
                    <a
                      href="https://bida.rajasthan.gov.in/content/raj/bida/en/project/Ongoing.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      BIDA Ongoing Projects
                    </a>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>{" "}
                    <a
                      href="/important-links/New-Township-Tijara-map-2.pdf"
                      download
                    >
                      BIDA: Tijara Master Plan 2031
                    </a>
                  </li>
                </ul>
              </div>

              {/* Sector Plan */}
              <div className="sidebar-section">
                <h3 className="sidebar-header">Sector Plan</h3>
                <ul className="sidebar-list">
                  <li>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>{" "}
                    <a href="/sector-plans/BHAGAT-SINGH-COLONY.pdf" download>
                      Bhagat Singh Colony
                    </a>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>{" "}
                    <a
                      href="/sector-plans/COMMERCIAL-B.S.-COLONY-BLOCK-A.pdf"
                      download
                    >
                      Commercial Bhagat Singh Colony Block-A
                    </a>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>{" "}
                    <a
                      href="/sector-plans/COMMERCIAL-B.S.-COLONY-BLOCK-B.pdf"
                      download
                    >
                      Commercial Bhagat Singh Colony Block-B
                    </a>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>{" "}
                    <a href="/sector-plans/COMMERCIAL-SECTOR-2A.pdf" download>
                      Commercial Sector 2A
                    </a>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>{" "}
                    <a href="/sector-plans/COMMERCIAL-SECTOR-3A.pdf" download>
                      Commercial Sector 3A
                    </a>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>{" "}
                    <a
                      href="/sector-plans/COMMERCIAL-SECTOR-6-MAIN-ROAD.pdf"
                      download
                    >
                      Commercial Sector 6 Main Road
                    </a>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>{" "}
                    <a href="/sector-plans/GROUP-HOUSING-SECTOR-5.pdf" download>
                      Group Housing Sector 5
                    </a>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>{" "}
                    <a href="/sector-plans/GROUP-HOUSING-SECTOR-6.pdf" download>
                      Group Housing Sector 6
                    </a>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>{" "}
                    <a href="/sector-plans/SECTOR-1.pdf" download>
                      UIT Sector 1
                    </a>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>{" "}
                    <a href="/sector-plans/SECTOR-2-2A.pdf" download>
                      UIT Sector 2 & 2A
                    </a>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>{" "}
                    <a
                      href="/sector-plans/SECTOR-3-COURT-RESIDENCE.pdf"
                      download
                    >
                      UIT Sector 3 Court & Residence
                    </a>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>{" "}
                    <a href="/sector-plans/SECTOR-3.pdf" download>
                      UIT Sector 3
                    </a>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>{" "}
                    <a href="/sector-plans/SECTOR-5.pdf" download>
                      UIT Sector 5
                    </a>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>{" "}
                    <a href="/sector-plans/SECTOR-6.pdf" download>
                      UIT Sector 6
                    </a>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>{" "}
                    <a href="/sector-plans/SECTOR-8.pdf" download>
                      UIT Sector 8
                    </a>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>{" "}
                    <a href="/sector-plans/SECTOR-9-EXTENSION.pdf" download>
                      UIT Sector 9 Extension
                    </a>
                  </li>
                  <li>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                    </svg>{" "}
                    <a href="/sector-plans/SECTOR-9.pdf" download>
                      UIT Sector 9
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Main Content */}
            <div className="airport-content">
              <h2 className="airport-title">
                भिवाड़ी ग्रीनफील्ड अंतर्राष्ट्रीय हवाई अड्डा
              </h2>

              <div className="airport-intro">
                <p>
                  राजस्थान में एक नई परियोजना राजस्थान के अलवर जिले में भिवाड़ी
                  ग्रीनफील्ड अंतर्राष्ट्रीय हवाई अड्डा विकसित किया जा रहा है। यह
                  हवाई अड्डा दिल्ली-मुंबई इंडस्ट्रियल कॉरिडोर डेवलपमेंट
                  कॉर्पोरेशन (DMICDC) और भारतीय विमानपत्तन प्राधिकरण (AAI) की
                  संयुक्त परियोजना है। इस प्रस्तावित हवाई अड्डे के लिए{" "}
                  <strong>5,086 एकड़ (2,058 हेक्टेयर)</strong> भूमि आवंटित की गई
                  है। यह साइट पूर्व-पश्चिम दिशा में लगभग{" "}
                  <strong>6.2 किमी</strong> और उत्तर-दक्षिण दिशा में{" "}
                  <strong>3.5 किमी</strong> तक फैली हुई है। इस हवाई अड्डे का
                  उद्देश्य क्षेत्र में औद्योगिक और वाणिज्यिक विकास को गति देना
                  है, जिससे <strong>व्यापार और परिवहन</strong> को बढ़ावा मिलेगा।
                </p>
              </div>

              {/* Accordion Sections */}
              <div className="accordion-container">
                {/* Accordion 1: Project Phases */}
                <details className="accordion-item">
                  <summary className="accordion-header">
                    <span className="accordion-icon">
                      <span className="icon-opened">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 448 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                        </svg>
                      </span>
                      <span className="icon-closed">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 448 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                        </svg>
                      </span>
                    </span>
                    <span className="accordion-title">
                      परियोजना के चरण और यात्री क्षमता (MPPA – मिलियन पैसेंजर्स
                      प्रति वर्ष)
                    </span>
                  </summary>
                  <div className="accordion-content">
                    <table className="phases-table">
                      <thead>
                        <tr>
                          <th>चरण</th>
                          <th>निर्माण अवधि</th>
                          <th>अनुमानित यात्री क्षमता (MPPA)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong>चरण 1</strong>
                          </td>
                          <td>2023 – 2027</td>
                          <td>3 MPPA</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>चरण 2</strong>
                          </td>
                          <td>2028 – 2032</td>
                          <td>11 MPPA</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>चरण 3</strong>
                          </td>
                          <td>2033 – 2042</td>
                          <td>30 MPPA</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>चरण 4</strong>
                          </td>
                          <td>2043 – 2052</td>
                          <td>65 MPPA (अधिकतम क्षमता)</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="project-cost-text">
                      परियोजना की <strong>कुल अनुमानित लागत</strong> लगभग{" "}
                      <strong>INR 10,670 करोड़</strong> है।
                    </p>
                  </div>
                </details>

                {/* Accordion 2: Terminal Building Area */}
                <details className="accordion-item">
                  <summary className="accordion-header">
                    <span className="accordion-icon">
                      <span className="icon-opened">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 448 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                        </svg>
                      </span>
                      <span className="icon-closed">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 448 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                        </svg>
                      </span>
                    </span>
                    <span className="accordion-title">
                      यात्री टर्मिनल भवन का निर्माण क्षेत्र (वर्ग मीटर और वर्ग
                      फुट में)
                    </span>
                  </summary>
                  <div className="accordion-content">
                    <table className="phases-table">
                      <thead>
                        <tr>
                          <th>चरण</th>
                          <th>निर्माण क्षेत्र (वर्ग मीटर)</th>
                          <th>निर्माण क्षेत्र (वर्ग फुट)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong>चरण 1</strong>
                          </td>
                          <td>22,500</td>
                          <td>2,42,188</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>चरण 2</strong>
                          </td>
                          <td>90,000</td>
                          <td>9,68,752</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>चरण 3</strong>
                          </td>
                          <td>1,12,500</td>
                          <td>12,10,940</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>चरण 4</strong>
                          </td>
                          <td>2,62,500</td>
                          <td>28,25,526</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </details>

                {/* Accordion 3: Key Project Details */}
                <details className="accordion-item">
                  <summary className="accordion-header">
                    <span className="accordion-icon">
                      <span className="icon-opened">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 448 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                        </svg>
                      </span>
                      <span className="icon-closed">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 448 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                        </svg>
                      </span>
                    </span>
                    <span className="accordion-title">
                      भिवाड़ी ग्रीनफील्ड अंतर्राष्ट्रीय हवाई अड्डा— प्रमुख
                      परियोजना विवरण
                    </span>
                  </summary>
                  <div className="accordion-content">
                    <table className="phases-table">
                      <thead>
                        <tr>
                          <th>
                            <strong>परियोजना का नाम</strong>
                          </th>
                          <th>
                            <strong>
                              भिवाड़ी ग्रीनफील्ड अंतर्राष्ट्रीय हवाई अड्डा
                            </strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong>नवीनतम स्थिति</strong>
                          </td>
                          <td>प्रस्तावित</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>स्वामित्व/विकासकर्ता</strong>
                          </td>
                          <td>
                            दिल्ली-मुंबई इंडस्ट्रियल कॉरिडोर डेवलपमेंट
                            कॉर्पोरेशन (DMICDC), भारतीय विमानपत्तन प्राधिकरण
                            (AAI)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>स्थान</strong>
                          </td>
                          <td>भिवाड़ी, अलवर ज़िला, राजस्थान</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>पिन कोड</strong>
                          </td>
                          <td>301702</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>क्षेत्र</strong>
                          </td>
                          <td>राष्ट्रीय राजधानी क्षेत्र (NCR)</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>अक्षांश (Latitude)</strong>
                          </td>
                          <td>28.006528 (28° 0′ 23.5008″ N)</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>देशांतर (Longitude)</strong>
                          </td>
                          <td>76.784133 (76° 47′ 2.8788″ E)</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>कुल भूमि क्षेत्र</strong>
                          </td>
                          <td>5,086 एकड़</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>निर्माण लागत</strong>
                          </td>
                          <td>INR 6,048 करोड़</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>उपयोग</strong>
                          </td>
                          <td>परिवहन अवसंरचना</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>श्रेणी</strong>
                          </td>
                          <td>हवाई अड्डा टर्मिनल</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>क्षेत्र</strong>
                          </td>
                          <td>सार्वजनिक</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>परियोजना प्रारंभ तिथि</strong>
                          </td>
                          <td>2023</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>परियोजना पूर्ण होने की तिथि</strong>
                          </td>
                          <td>2026</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </details>

                {/* Accordion 4: DMICDC */}
                <details className="accordion-item">
                  <summary className="accordion-header">
                    <span className="accordion-icon">
                      <span className="icon-opened">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 448 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                        </svg>
                      </span>
                      <span className="icon-closed">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 448 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                        </svg>
                      </span>
                    </span>
                    <span className="accordion-title">
                      दिल्ली-मुंबई इंडस्ट्रियल कॉरिडोर डेवलपमेंट कॉर्पोरेशन
                      (DMICDC)
                    </span>
                  </summary>
                  <div className="accordion-content">
                    <p style={{ textAlign: "justify" }}>
                      <strong>दिल्ली-मुंबई इंडस्ट्रियल कॉरिडोर (DMIC)</strong>{" "}
                      की प्रमुख परियोजनाओं के विकास, समन्वय और कार्यान्वयन के
                      लिए <strong>DMICDC</strong> की स्थापना जनवरी 2008 में की
                      गई थी। यह भारत की सबसे महत्वाकांक्षी बुनियादी ढांचा
                      परियोजनाओं में से एक है, जिसका लक्ष्य "स्मार्ट सिटी" के
                      रूप में नए औद्योगिक केंद्रों का निर्माण करना और विभिन्न
                      बुनियादी ढांचा क्षेत्रों में आधुनिक तकनीकों को एकीकृत करना
                      है।
                    </p>
                  </div>
                </details>

                {/* Accordion 5: AAI */}
                <details className="accordion-item">
                  <summary className="accordion-header">
                    <span className="accordion-icon">
                      <span className="icon-opened">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 448 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                        </svg>
                      </span>
                      <span className="icon-closed">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 448 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                        </svg>
                      </span>
                    </span>
                    <span className="accordion-title">
                      भारतीय विमानपत्तन प्राधिकरण (AAI)
                    </span>
                  </summary>
                  <div className="accordion-content">
                    <p style={{ textAlign: "justify" }}>
                      भारतीय विमानपत्तन प्राधिकरण (AAI) की स्थापना{" "}
                      <strong>1 अप्रैल 1995</strong> को{" "}
                      <strong>राष्ट्रीय विमानपत्तन प्राधिकरण (NAA)</strong> और{" "}
                      <strong>अंतरराष्ट्रीय विमानपत्तन प्राधिकरण (IAAI)</strong>{" "}
                      के विलय के बाद हुई थी। AAI का मुख्य कार्य भारत में नागरिक
                      उड्डयन अवसंरचना का विकास, उन्नयन, रखरखाव और प्रबंधन करना
                      है, जिससे हवाई यातायात को सुरक्षित और प्रभावी बनाया जा
                      सके।
                    </p>
                  </div>
                </details>

                {/* Accordion 6: RITES Limited */}
                <details className="accordion-item">
                  <summary className="accordion-header">
                    <span className="accordion-icon">
                      <span className="icon-opened">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 448 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                        </svg>
                      </span>
                      <span className="icon-closed">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 448 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                        </svg>
                      </span>
                    </span>
                    <span className="accordion-title">
                      राइट्स लिमिटेड (RITES Limited)
                    </span>
                  </summary>
                  <div className="accordion-content">
                    <p style={{ textAlign: "justify" }}>
                      <strong>राइट्स लिमिटेड</strong>, 1974 में भारतीय रेलवे के
                      अधीन स्थापित एक सरकारी उपक्रम है। यह एक ISO 9001:2015
                      प्रमाणित कंपनी है, जो परिवहन, अवसंरचना और प्रौद्योगिकी
                      क्षेत्रों में परामर्श सेवाएँ प्रदान करती है। इसकी सेवाएँ{" "}
                      <strong>
                        रेलवे, राजमार्ग, बंदरगाह, हवाई अड्डों, बिजली
                      </strong>{" "}
                      और <strong>शहरी परिवहन प्रणाली</strong> तक फैली हुई हैं।
                      राइट्स लिमिटेड अपनी अंतरराष्ट्रीय परियोजनाओं के तहत
                      स्थानीय कंपनियों और परामर्श फर्मों के साथ सहयोग को
                      प्राथमिकता देता है, जिससे{" "}
                      <strong>स्थानीय संसाधनों का अधिकतम उपयोग</strong> और{" "}
                      <strong>तकनीकी विशेषज्ञता का आदान-प्रदान</strong> किया जा
                      सके।
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadFormModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
      />
    </div>
  );
}
