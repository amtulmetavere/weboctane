

import React, { useEffect, useState } from 'react';
import about from "../assets/about.jpg";
import Cta from "../components/Cta";
import About from '../components/About';
import Cta2 from '../components/Cta2';
import Brands from "../components/Brands";
import bulb from "../assets/bulb.png";


const faqs = [
  {
    question: "PROFESSIONAL INNOVATIVE TEAM:",
    answer:
      "Our company only hires a team who are dedicated and capable enough to enhance your brand and take it up to a next level. Our team will make sure to fulfill all your marketing needs and will provide solution for all of your problems.",
  },
  {
    question: "THOROUGH UNDERSTANDING OF CLIENTS REQUIREMENTS:",
    answer:
      "Our creative team make sure that we properly understand all the things you require and problems you’re facing while marketing to act upon it as accurately as it could be.",
  },
  {
    question: "STRATEGIC SOLUTIONS:",
    answer:
      "We guarantee solutions to all of your problems because our competent team is expert in strategic thinking.",
  },
  {
    question: "CONCEPT TO ACCOMPLISHMENT:",
    answer:
      "Our team’s biggest pro is that we start our work steadily and follow it step by step till the project is completed successfully.",
  },
  {
    question: "TIME DRIVEN:",
    answer:
      "We value time a lot while dealing in our projects and avoid every activity that takes extra time or is wasting the precious time of our clients and opt to deliver the astounding results on time or before it.",
  },
];
const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };



 

 
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', fontFamily: 'Arial, sans-serif', lineHeight: '1.7' }}>


      <About />


      {/* ⭐ Brands Section (Slider) */}
      <Brands />

      {/* What We Do Section */}
      <Cta />

   
   

      {/* Vision/Mission Section */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT SIDE: 2 Rows (Our Value + Our Mission) */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-6 col-span-1">

{/* OUR VALUE */}
<div className="relative flex-1 min-h-[300px] rounded-3xl overflow-hidden shadow-lg">
  <img
    loading="lazy"
    src={about}
    alt="Our Value"
    className="w-full h-full object-cover absolute inset-0"
  />
  <div className="relative z-10 bg-gradient-to-t from-black/90 to-black/30 p-6 h-full flex flex-col justify-end text-white">
    <p className="uppercase font-semibold text-sm mb-2 text-[#e3b843]">Our Value</p>
    <h2 className="text-2xl font-bold leading-snug">
      Build Bold Brands <br /> with <span className="text-[#aa82f3]">WebOctane</span>.
    </h2>
  </div>
</div>

{/* OUR MISSION */}
<div className="flex-1 rounded-3xl bg-gradient-to-br from-[#facc15]/20 via-[#ec4899]/20 to-[#8b5cf6]/20 p-6 shadow-lg flex flex-col justify-between border border-[#444]">
  <div>
    <p className="uppercase font-semibold text-sm text-white mb-2">Our Mission</p>
    <h3 className="text-xl font-semibold text-white mb-2">
      Crafting Experiences, Shaping Perceptions.
    </h3>
    <p className="text-white/90 text-sm">
      We are here all prepared with a team of experts and professionals in different sectors of marketing. Our aim is to fix every problem and query you have related to the business and manage it in a way that it never stops growing.
    </p>
  </div>
</div>

</div>


          {/* RIGHT SIDE: Our Vision */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg row-span-2 lg:col-span-2">
            <img
loading="lazy"
              src={about}
              alt="Our Vision"
              className="w-full h-full object-cover absolute inset-0 z-0"
            />
            <div className="relative z-10 bg-gradient-to-t from-black/90 to-black/30 p-8 h-full flex flex-col justify-between">
              <div>
                <p className="uppercase font-semibold text-sm text-[#e3b843] mb-2">Our Vision</p>
                <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-white">
                  Elevate Your Digital Presence with WebOctane.
                </h3>
                <p className="text-gray-200 text-sm lg:text-base">
                  We aim to be the most impactful digital agency that helps brands grow online through
                  purposeful design, powerful development, and precise marketing strategies.
                </p>
              </div>
             
            </div>
          </div>
        </div>
      </section>
    
      <section className="py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
      <div className="w-full lg:w-1/2 border-2 border-[#e3b843] rounded-xl">
        <img
         src={about}
          alt="why to choose weboctane"
          className="w-full rounded-xl object-cover p-8"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-xl">
          <div className="mb-6">
            <h6 className="text-lg text-center font-medium text-[#e3b843]  lg:text-left uppercase">
            Why Choose Us?
            </h6>
            <div className="w-16 h-1 rounded-full bg-[#e3b843] inline-flex mb-2"></div>
            <h2 className="text-lg text-center text-white  lg:text-left">
            Holding the right set of tools and proficient line of work in marketing and advertising, we are going to handle all of your brand marketing needs and concerns under one roof. Our boat of expertise has professionals who are diligently on the look out to polish off your brand objectives in a planned manner. We ask question that are relevant towards grasping a deeper knowledge about your brand. By our strategic thinking process, we provide appropriate solutions to your brand.
            </h2>
            
          </div>

          <div className="accordion-group">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`accordion py-6 border-b border-gray-700 ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="accordion-toggle group inline-flex items-center justify-between w-full text-lg font-normal leading-8 text-gray-300 transition duration-500 hover:text-[#e3b843]"
                >
                  <h5>{faq.question}</h5>
                  <svg
                    className={`transition duration-300 transform ${
                      activeIndex === index ? "rotate-180 text-[#e3b843]" : ""
                    }`}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <div
                  className={`accordion-content overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="text-base text-gray-400 font-normal pr-4 mt-2">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

                                            

    <Cta2 />
    </div>
  );
};

export default AboutUs;
