import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-copyright">
            <p>©2026 Jan Awas Yojna Plots. All Rights Reserved.</p>
          </div>
          <div className="footer-links">
            <Link href="/about" className="footer-link">About Us</Link>
            <Link href="/terms" className="footer-link">Terms & Conditions</Link>
            <Link href="/privacy-policy" className="footer-link">Privacy Policy</Link>
            <Link href="/refund-policy" className="footer-link">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
