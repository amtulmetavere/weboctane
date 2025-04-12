import React, { useState, useEffect } from 'react';
import Help from '../components/Help';
import Footer from '../assets/footer-bg-1.png';
import GoogleReviewWidget from '../components/GoogleReviewWidget'; 
import Cta2 from '../components/cta2';

const Services = () => {
  

  const checklistItems = [
    { title: "Brand Strategy" },
    { title: "Logo Design & Identity" },
    { title: "Digital Marketing" },
    { title: "Brand Activation" },
    { title: "Brand Consulting" },
    { title: "Creative Design Services" },
    { title: "Content Creation" },
    { title: "Brand Monitoring" },
  ];

  const progressItems = [
    { title: 'Digital Marketing', percent: 91, color: '#facc15' },
    { title: 'E-Commerce Marketing', percent: 87, color: '#38bdf8' },
    { title: 'Web Designing', percent: 84, color: '#a78bfa' },
    { title: 'Social Media', percent: 96, color: '#34d399' },
  ];

  const [progress, setProgress] = useState(progressItems.map(() => 0));

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) =>
        prev.map((p, i) =>
          p < progressItems[i].percent ? p + 1 : p
        )
      );
    }, 20);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-black text-white">
 

      
      <Help />

     
      <section className="relative py-10 px-5 overflow-hidden">
  {/* Background image */}
  <div
    className="absolute inset-0 z-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${Footer})` }}
  ></div>

  {/* Black overlay */}
  <div className="absolute inset-0 z-0 bg-black/80"></div>

  {/* Foreground content */}
  <div className="relative z-10 text-white text-center">
    <h2 className="text-[#FCD535] uppercase text-2xl sm:text-3xl font-bold tracking-wide mb-2">
      What We Do
    </h2>
    <h2 className="text-lg sm:text-xl mb-6">
      Delivering Impact with Strategy
    </h2>

    {/* Grid container */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
      {progressItems.map((item, index) => (
        <div
          key={index}
          className="min-w-[200px] text-center flex-shrink-0 flex-grow-0 basis-auto"
        >
          {/* Circular progress indicator */}
          <div className="relative w-[120px] h-[120px] mx-auto mb-2">
            <svg width="120" height="120">
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="#222"
                strokeWidth="6"
                fill="none"
              />
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke={item.color}
                strokeWidth="6"
                fill="none"
                strokeDasharray={314.16}
                strokeDashoffset={
                  314.16 - (progress[index] / 100) * 314.16
                }
                transform="rotate(-90 60 60)"
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 0.3s ease' }}
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold">
              {Math.round(progress[index])}%
            </div>
          </div>

          <h4
            className="text-[16px] font-bold whitespace-pre-line"
            style={{ color: item.color }}
          >
            {item.title}
          </h4>
          <p className="text-gray-300 text-sm mt-1">
            Empowering your brand
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


            <GoogleReviewWidget />
      <Cta2 />
    </div>
  );
};

export default Services;
