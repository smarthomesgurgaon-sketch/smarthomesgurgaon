'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HELPLINE_PHONE = '7840020072';
const HELPLINE_TEL = '+917840020072';
const SUPPORT_EMAIL = 'Kishanpandey844@gmail.com';

export default function Header() {
  const [currentDateTime, setCurrentDateTime] = useState('');

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
              For Any Issue Call on Helpline No. <a href={`tel:${HELPLINE_TEL}`} className="helpline-link">{HELPLINE_PHONE}</a> Or Email : <a href={`mailto:${SUPPORT_EMAIL}`} className="helpline-link">{SUPPORT_EMAIL}</a>
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
              <a href="#" className="nav-link">How To Apply</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
