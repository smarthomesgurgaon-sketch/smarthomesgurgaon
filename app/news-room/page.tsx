'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NewsRoomPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const newsImages = [
    '/news-room/Janawasyojnaplots-RJ-Bhiwadi-News-Room-1.webp',
    '/news-room/Janawasyojnaplots-RJ-Bhiwadi-News-Room-2.webp',
    '/news-room/Janawasyojnaplots-RJ-Bhiwadi-News-Room-3.webp',
    '/news-room/Janawasyojnaplots-RJ-Bhiwadi-News-Room-4.webp',
    '/news-room/Janawasyojnaplots-RJ-Bhiwadi-News-Room-5.webp',
    '/news-room/Janawasyojnaplots-RJ-Bhiwadi-News-Room-6.webp',
    '/news-room/Janawasyojnaplots-RJ-Bhiwadi-News-Room-7.webp',
    '/news-room/Janawasyojnaplots-RJ-Bhiwadi-News-Room-8.webp',
    '/news-room/Janawasyojnaplots-RJ-Bhiwadi-News-Room-9.webp',
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % newsImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + newsImages.length) % newsImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev + 1) % newsImages.length);
      }
      if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev - 1 + newsImages.length) % newsImages.length);
      }
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, newsImages.length]);

  return (
    <div className="page-wrapper">
      {/* News Room Section */}
      <section className="news-room-section">
        <div className="container">
          <div className="news-room-header">
            <h1 className="news-room-title">News Room</h1>
          </div>

          <div className="news-room-grid">
            {newsImages.map((image, index) => (
              <div 
                key={index} 
                className="news-room-item"
                onClick={() => openLightbox(index)}
              >
                <div className="news-room-image-wrapper">
                  <Image
                    src={image}
                    alt={`News Room ${index + 1}`}
                    width={600}
                    height={800}
                    className="news-room-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox-overlay news-room-lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <button 
              className="lightbox-nav lightbox-nav-prev" 
              onClick={prevImage}
              aria-label="Previous image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <button 
              className="lightbox-nav lightbox-nav-next" 
              onClick={nextImage}
              aria-label="Next image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            <div className="lightbox-image-container">
              <Image
                src={newsImages[currentImageIndex]}
                alt={`News Room ${currentImageIndex + 1}`}
                width={1200}
                height={1600}
                className="lightbox-image"
                priority
              />
            </div>

            <div className="lightbox-counter">
              {currentImageIndex + 1} / {newsImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
