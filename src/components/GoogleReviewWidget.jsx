import { useEffect } from "react";

const GoogleReviewWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.setAttribute("data-elfsight-app-lazy", ""); // Optional, for lazy loading
    document.body.appendChild(script);
  }, []);

  return (
    <section className="w-5/6 justify-self-center px-4 pt-14 bg-[#1a1a1a] m-10 rounded-lg">
    <div className="max-w-8xl mx-auto">
    <div className="text-center mb-15">
    <h2 className="text-sm title-font text-gray-500 font-medium tracking-widest uppercase">What Our Clients Say</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4 capitalize">We take pride in delivering exceptional experiences for our clients</h1>
    
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-[#e3b843] inline-flex"></div>
      </div>
      </div>
    <div className="elfsight-app-ed23b8b1-52b1-4072-9a94-52ec6726ff19  flex justify-center" data-elfsight-app-lazy></div>

    </div>
    </section>
  );
};

export default GoogleReviewWidget;
