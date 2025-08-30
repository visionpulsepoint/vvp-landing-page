'use client';

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
    >
      Skip to main content
    </a>
  );
}