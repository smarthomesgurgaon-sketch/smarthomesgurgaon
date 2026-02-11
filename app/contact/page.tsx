'use client';

export default function ContactPage() {
  return (
    <div className="page-wrapper">
      {/* Contact Us Section */}
      <section className="about-section contact-page-section">
        <div className="container contact-container">
          <div className="about-card contact-card">
            <h1 className="about-title contact-title">Contact Us</h1>
            <div className="contact-separator" />
            
            <div className="contact-content">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <span className="contact-label">Email:</span>
                  <a href="mailto:Kishanpandey844@gmail.com" className="contact-value">Kishanpandey844@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="contact-label">Phone:</span>
                  <a href="tel:+917840020072" className="contact-value">7840020072</a>
                </div>
              </div>

              <div className="contact-item">
                <div>
                  <span className="contact-label">Address:</span>
                  <span className="contact-value contact-address">The Lifestyle City, SH-25, Vill. Pawti Teh. Tijara (Bhiwadi) Rajasthan, 301411</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="contact-label">Business Hours:</span>
                  <div className="contact-hours">
                    <span className="contact-value">Monday - Friday: 9:00 AM – 6:00 PM</span>
                    <span className="contact-value">Saturday - Sunday: Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
