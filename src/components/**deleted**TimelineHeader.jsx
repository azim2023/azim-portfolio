// src/components/TimelineHeader.jsx
import React from 'react';

const timelineYears = [2025, 2024, 2023, 2022];

export default function TimelineHeader() {
  return (
    <nav className="sticky top-16 z-30 bg-gray-100/90 backdrop-blur-md shadow-sm -mx-4 rounded-md">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex justify-center items-center gap-8 py-3">
          {timelineYears.map((year) => (
            <a 
              key={year}
              href={`#year-${year}`} 
              className="font-semibold text-gray-600 hover:text-brand transition-colors"
            >
              {year}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}