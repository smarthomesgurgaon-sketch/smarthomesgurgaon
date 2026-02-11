'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AvaniGreensPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    '/gallery/gallery-1.webp',
    '/gallery/gallery-2.webp',
    '/gallery/gallery-3.webp',
    '/gallery/gallery-4.webp',
    '/gallery/gallery-5.webp',
    '/gallery/gallery-6.webp',
    '/gallery/gallery-7.webp',
    '/gallery/gallery-8.webp',
    '/gallery/gallery-9.webp',
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
      }
      if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      }
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, galleryImages.length]);

  return (
    <div className="page-wrapper">
      {/* Project Scheme Information Section */}
      <section className="project-info-section">
        <div className="container">
          <div className="project-info-card">
            {/* Title and Go Back */}
            <div className="project-info-header">
              <h1 className="project-info-title">PROJECT SCHEME INFORMATION</h1>
              <Link href="/" className="go-back-link">{"<< GO BACK"}</Link>
            </div>

            <div className='top_section_details'>
              <div className='flex-row'> 
                <div className='label'>TOWN :</div>
                <div className='value'>Bhiwadi</div>
                <div className='label'>TOWN & DISTRICT:</div>
                <div className='value'>Khairthal- Tijara</div>
              </div>
              <div className='flex-row'> 
                <div className='label'>PROJECT ID:</div>
                <div className='value'>76</div>
                <div className='label'>COMPLETION STATUS:</div>
                <div className='value'>Ready For Possession</div>
              </div>
              <div className='flex-row'> 
                <div className='label'>LICENSE NAME</div>
                <div className='value'>HEMANT KUMAR SAIWALIA</div>
                <div className='label'>COLONIZER NAME:</div>
                <div className='value'>Real Revolution Buildestate Pvt. Ltd.</div>
              </div>
                  <div className='flex-full'> 
                <div className='label'>COLONIZER CONTACT DETAILS:</div>
                <div className='value'>
                  <p>B-32 MAHESH NAGAR TONK ROAD JAIPUR Jaipur RJ 302015, mOB: 7840020072</p>
                </div>
              </div>
               <div className='flex-full'> 
                <div className='label'>PROJECT DESCRIPTION:</div>
                <div className='value'>
                  <p>Avani Greens plots, developed by Real Revolution Buildestate Pvt. Ltd, is a premium residential project strategically located on the Alwar bypass road in Bhiwadi. designed to offer a harmonious balance of modern conveniences and serene landscapes, this project caters to homebuyers looking for a luxurious yet affordable living experience.</p>
                  <p>Spanning across a well-planned area, Avani Greens features 300 meticulously designed plots, providing ample space for homeowners to build their dream homes. Whether you are looking for a prime residential plot to construct your ideal house or seeking a high-value investment opportunity, Avani Greens is the perfect choice.</p>
                </div>
              </div>

                 <div className='flex-row'> 
                <div className='label'>TOTAL SITE AREA (ACRES.):</div>
                <div className='value'>17.09 ACRES (12.32 & 4.77 ACRES)</div>
                <div className='label'>SCHEME CATEGORY:</div>
                <div className='value'>Jan Awas Yojna Plots</div>
              </div>

                 <div className='flex-row'> 
                <div className='label'>PROJECT NAME:</div>
                <div className='value'>Avani Greens</div>
                <div className='label'>RERA Registration Number:</div>
                <div className='value'>RAJ/P/2018/697</div>
              </div>

                 <div className='flex-row'> 
                <div className='label'>ONLINE APPLICATION START DATE:</div>
                <div className='value'>11-02-2026 00:01</div>
                <div className='label'>ONLINE APPLICATION END DATE:</div>
                <div className='value'>25-02-2026 23:59</div>
              </div>

                 <div className='flex-row'> 
                <div className='label'>UNIT ALLOTMENT DATE & TIME:</div>
                <div className='value'>27-02-2026 14:00</div>
                <div className='label'>REGISTRATION AMOUNT:</div>
                <div className='value'>RS. 11,000/-</div>
              </div>
            </div>

            {/* Unit Sizes & Cost Section */}
            <div className="unit-cost-section">

              <h2 className="unit-cost-title">UNIT SIZES & COST (SCHEME PAYMENT PLAN)</h2>
              
              {/* Table 1: Government Employees & Female Applicants */}
              <div className="payment-table-container">
                <h3 className="payment-table-title">PRICE FOR GOVERNMENT EMPLOYEES & FEMALE APPLICANTS</h3>
                <div className="table-wrapper">
                  <table className="payment-table">
                    <thead>
                      <tr>
                        <th>NO. OF UNITS</th>
                        <th>PLOT AREA (SQ.YD)</th>
                        <th>RATE PER (SQ.YD)</th>
                        <th>REGISTRATION AMOUNT (RS)</th>
                        <th>10% ON ALLOTMENT (LESS REGISTRATION AMOUNT) (RS)</th>
                        <th>30% WITHIN 30 DAYS FROM ALLOTMENT (RS)</th>
                        <th>60% WITHIN 60 DAYS FROM ALLOTMENT (RS)</th>
                        <th>TOTAL COST (RS)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>13</td>
                        <td>50</td>
                        <td>13990</td>
                        <td>11000</td>
                        <td>58950</td>
                        <td>209850</td>
                        <td>419700</td>
                        <td>699500</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>80</td>
                        <td>13990</td>
                        <td>11000</td>
                        <td>100920</td>
                        <td>335760</td>
                        <td>671520</td>
                        <td>1119200</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>138</td>
                        <td>13990</td>
                        <td>11000</td>
                        <td>182062</td>
                        <td>579186</td>
                        <td>1158372</td>
                        <td>1925620</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>160</td>
                        <td>13990</td>
                        <td>11000</td>
                        <td>212840</td>
                        <td>671520</td>
                        <td>1343040</td>
                        <td>2238400</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>170</td>
                        <td>13990</td>
                        <td>11000</td>
                        <td>226830</td>
                        <td>713490</td>
                        <td>1426980</td>
                        <td>2378300</td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>200</td>
                        <td>13990</td>
                        <td>11000</td>
                        <td>268800</td>
                        <td>839400</td>
                        <td>1678800</td>
                        <td>2798000</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>220</td>
                        <td>13990</td>
                        <td>11000</td>
                        <td>296780</td>
                        <td>923340</td>
                        <td>1846680</td>
                        <td>3087800</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>270</td>
                        <td>13990</td>
                        <td>11000</td>
                        <td>366730</td>
                        <td>1133190</td>
                        <td>2266380</td>
                        <td>3777300</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 2: General Applicants */}
              <div className="payment-table-container">
                <h3 className="payment-table-title">PRICE FOR GENERAL APPLICANTS</h3>
                <div className="table-wrapper">
                  <table className="payment-table">
                    <thead>
                      <tr>
                        <th>NO. OF UNITS</th>
                        <th>PLOT AREA (SQ.YD)</th>
                        <th>RATE PER (SQ.YD)</th>
                        <th>REGISTRATION AMOUNT (RS)</th>
                        <th>10% ON ALLOTMENT (LESS REGISTRATION AMOUNT) (RS)</th>
                        <th>30% WITHIN 30 DAYS FROM ALLOTMENT (RS)</th>
                        <th>60% WITHIN 60 DAYS FROM ALLOTMENT (RS)</th>
                        <th>TOTAL COST (RS)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>13</td>
                        <td>50</td>
                        <td>14990</td>
                        <td>11000</td>
                        <td>63950</td>
                        <td>224850</td>
                        <td>449700</td>
                        <td>749500</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>80</td>
                        <td>14990</td>
                        <td>11000</td>
                        <td>108920</td>
                        <td>359760</td>
                        <td>719520</td>
                        <td>1199200</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>138</td>
                        <td>14990</td>
                        <td>11000</td>
                        <td>195862</td>
                        <td>620586</td>
                        <td>1241172</td>
                        <td>2068620</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>160</td>
                        <td>14990</td>
                        <td>11000</td>
                        <td>228840</td>
                        <td>719520</td>
                        <td>1439040</td>
                        <td>2398400</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>170</td>
                        <td>14990</td>
                        <td>11000</td>
                        <td>243830</td>
                        <td>764490</td>
                        <td>1528980</td>
                        <td>2548300</td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>200</td>
                        <td>14990</td>
                        <td>11000</td>
                        <td>288800</td>
                        <td>899400</td>
                        <td>1798800</td>
                        <td>2998000</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>220</td>
                        <td>14990</td>
                        <td>11000</td>
                        <td>318780</td>
                        <td>989340</td>
                        <td>1978680</td>
                        <td>3297800</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>270</td>
                        <td>14990</td>
                        <td>11000</td>
                        <td>393730</td>
                        <td>1214190</td>
                        <td>2428380</td>
                        <td>4047300</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Important Information Text */}
              <div className="important-info-text">
                <p>NO GST APPLICABLE</p>
                <p>EDC/IDC CHARGES (INCLUDED)</p>
                <p>PLC CHARGES WILL BE APPLICABLE AS PER ACTUAL</p>
                <p>OTHER CHARGES APPLICABLE AS PER ACTUAL</p>
                <p>POSSESSION CHARGES, MAINTENANCE CHARGES & STAMP DUTY AND REGISTRATION FEES IN RAJASTHAN (AS APPLICABLE)</p>
                <p>PAYMENT PLAN IS 10:30:60. FOR DETAILED INFO REFER APPLICATION FORM.</p>
              </div>

              {/* PLC Chart Table */}
              <div className="payment-table-container">
                <h3 className="payment-table-title">PLC Chart</h3>
                <div className="table-wrapper">
                  <table className="payment-table">
                    <thead>
                      <tr>
                        <th>PLC Chart</th>
                        <th>Preference</th>
                        <th>Percentage</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>PLC Chart</td>
                        <td>18 Mtrs (60 Ft) / 12 Mtrs (40 Ft) Road Facing</td>
                        <td>7.5%</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>Corner Facing</td>
                        <td>7.5%</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>Park Facing</td>
                        <td>7.5%</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>Any 2 PLCs (If Applicable)</td>
                        <td>10%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Download Section */}
              <div className="payment-table-container">
                <h3 className="payment-table-title">Download Section</h3>
                <div className="table-wrapper">
                  <table className="payment-table">
                    <thead>
                      <tr>
                        <th>SR. NO.</th>
                        <th>Document Type</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1.</td>
                        <td>SCHEME SITE PLAN</td>
                        <td>APPROVED</td>
                        <td><a href="/downloads/Scheme Site Plan (1).pdf" download className="download-link">DOWNLOAD</a></td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td>SCHEME BROCHURE</td>
                        <td>APPROVED</td>
                        <td><a href="/downloads/Scheme-Broucher.pdf" download className="download-link">DOWNLOAD</a></td>
                      </tr>
                      <tr>
                        <td>3.</td>
                        <td>COMPLETION CERTIFICATE-A</td>
                        <td>APPROVED</td>
                        <td><a href="/downloads/Completion-Certificate-Avani-Greens-A.pdf" download className="download-link">DOWNLOAD</a></td>
                      </tr>
                      <tr>
                        <td>4.</td>
                        <td>COMPLETION CERTIFICATE-B</td>
                        <td>APPROVED</td>
                        <td><a href="/downloads/Completion-Certificate-Avani-Greens-A (1).pdf" download className="download-link">DOWNLOAD</a></td>
                      </tr>
                      <tr>
                        <td>5.</td>
                        <td>PROJECT CLUSTER PLAN</td>
                        <td>APPROVED</td>
                        <td><a href="/downloads/Project-cluster-plan.pdf" download className="download-link">DOWNLOAD</a></td>
                      </tr>
                      <tr>
                        <td>6.</td>
                        <td>OTHER RELATED DOCUMENTS</td>
                        <td>APPROVED</td>
                        <td><a href="/downloads/90A-Adianth-2.pdf" download className="download-link">DOWNLOAD</a></td>
                      </tr>
                      <tr>
                        <td>7.</td>
                        <td>BANK APPROVAL</td>
                        <td>APPROVED</td>
                        <td><a href="/downloads/hdfc.pdf" download className="download-link">DOWNLOAD</a></td>
                      </tr>
                      <tr>
                        <td>8.</td>
                        <td>RERA CERTIFICATE</td>
                        <td>APPROVED</td>
                        <td><a href="/downloads/RERA CERTIFICATE.pdf" download className="download-link">DOWNLOAD</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Project Gallery Section */}
              <div className="gallery-section">
                <h3 className="payment-table-title">Project Gallery</h3>
                <div className="gallery-grid">
                  {galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className="gallery-item"
                      onClick={() => openLightbox(index)}
                    >
                      <Image
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        width={300}
                        height={200}
                        className="gallery-image"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="project-note">
            <p>NOTE: REGISTRATION AMOUNT IS FULLY REFUNDABLE TO NON ALLOTTEES</p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <div className="lightbox-image-container">
              <Image
                src={galleryImages[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                width={1200}
                height={800}
                className="lightbox-image"
              />
            </div>
            <button className="lightbox-nav lightbox-next" onClick={nextImage}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            <div className="lightbox-counter">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
