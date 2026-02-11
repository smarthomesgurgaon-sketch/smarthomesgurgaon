'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HELPLINE_PHONE = '7840020074';
const HELPLINE_TEL = '+917840020074';

export default function Header() {
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const date = now.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
      const time = now.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      setCurrentDateTime(`${date} ${time}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      {/* Top Blue Bar */}
      <div className="top-blue-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="date-time">
              <svg className="clock-icon" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>{currentDateTime || '09-02-2026 05:42:30'}</span>
            </div>
            <div className="helpline-text">
              For Any Issue Call on Helpline No. <a href={`tel:${HELPLINE_TEL}`} className="helpline-link">{HELPLINE_PHONE}</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Section */}
      <div className="main-header">
        <div className="container">
          <div className="main-header-content">
            <div className="logo-section">
              <Link href="/">
                <div className="logo-container">
                  <Image src="/images/janawasyojna-logo.webp" alt="Logo" width={100} height={100} />
                </div>
              </Link>
            </div>
            <div className="nav-links">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/news-room" className="nav-link">News Room</Link>
              <Link href="/project/avani-greens/apply" className="nav-link">How To Apply</Link>
            </div>
            <div className="nav-mobile-wrap">
              <button
                type="button"
                className="nav-hamburger"
                onClick={() => setMobileMenuOpen((o) => !o)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
              <div className={`nav-dropdown ${mobileMenuOpen ? "nav-dropdown-open" : ""}`}>
                <Link href="/" className="nav-dropdown-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link href="/news-room" className="nav-dropdown-link" onClick={() => setMobileMenuOpen(false)}>News Room</Link>
                <Link href="/project/avani-greens/apply" className="nav-dropdown-link" onClick={() => setMobileMenuOpen(false)}>How To Apply</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
