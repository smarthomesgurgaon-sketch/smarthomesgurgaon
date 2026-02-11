'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="header">
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
