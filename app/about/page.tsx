'use client';

export default function AboutUsPage() {
  return (
    <div className="page-wrapper">
      {/* About Us Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-card">
            <h1 className="about-title">About Us</h1>
            
            <div className="about-content">
              <h2 className="about-subtitle">Jan Awas Yojana Plots - Chief Minister Jan Awas Yojana (CMJAY), Rajasthan</h2>
              
              <p className="about-paragraph">
                The <strong>Chief Minister Jan Awas Yojana (CMJAY)</strong> is an affordable housing scheme launched by the <strong>Government of Rajasthan</strong> to provide housing for <strong>Economically Weaker Sections (EWS)</strong> and <strong>Lower-Income Groups (LIG)</strong> in both urban and rural areas. The scheme aims to promote affordable housing through <strong>public-private partnerships (PPP)</strong>, <strong>land pooling</strong>, and <strong>developer incentives</strong>.
              </p>

              <h3 className="about-features-title">Key Features of CMJAY:</h3>
              
              <ul className="about-features-list">
                <li>
                  <span className="feature-checkmark">✔</span>
                  <span className="feature-text"><strong>Affordable Housing</strong> – Provides budget-friendly homes for EWS and LIG categories.</span>
                </li>
                <li>
                  <span className="feature-checkmark">✔</span>
                  <span className="feature-text"><strong>Subsidies & Incentives</strong> – Offers financial assistance, interest subsidies, and stamp duty concessions.</span>
                </li>
                <li>
                  <span className="feature-checkmark">✔</span>
                  <span className="feature-text"><strong>Public-Private Partnership (PPP) Model</strong> – Encourages private developers to participate in affordable housing projects.</span>
                </li>
                <li>
                  <span className="feature-checkmark">✔</span>
                  <span className="feature-text"><strong>Land Allotment</strong> – Government provides land at subsidized rates for housing developments.</span>
                </li>
                <li>
                  <span className="feature-checkmark">✔</span>
                  <span className="feature-text"><strong>Urban & Rural Focus</strong> – Covers housing projects in both urban townships and rural areas.</span>
                </li>
                <li>
                  <span className="feature-checkmark">✔</span>
                  <span className="feature-text"><strong>Integration with PMAY</strong> – Works alongside the Pradhan Mantri Awas Yojana (PMAY) to provide additional benefits.</span>
                </li>
              </ul>

              <p className="about-paragraph">
                This initiative plays a crucial role in fulfilling the government's vision of "<strong>Housing for All</strong>" in Rajasthan, ensuring access to <strong>quality homes at affordable prices</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
