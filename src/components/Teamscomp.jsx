import React from 'react'
import Team1 from '../assets/team1.jpg'
import Team2 from '../assets/team2.jpg'
import {FaFacebookF} from '@react-icons/all-files/fa/FaFacebookF';
import {FaLinkedinIn} from '@react-icons/all-files/fa/FaLinkedinIn';
import {FaInstagram} from '@react-icons/all-files/fa/FaInstagram';
import {FaTwitter} from '@react-icons/all-files/fa/FaTwitter';

const galleryItems = [
  {
    id: 1,
    subtitle: "Lead Frontend Developer",
    title: "Muhammad Ali",
    description: "Ali brings over 6 years of experience in creating elegant and responsive web applications...",
    imageUrl: Team1,
    socials: [
      { icon: <FaFacebookF />, alt: "Facebook", link: "https://facebook.com/muhammad.ali" },
      { icon: <FaLinkedinIn />, alt: "LinkedIn", link: "https://linkedin.com/in/muhammad-ali" },
      { icon: <FaInstagram />, alt: "Instagram", link: "https://instagram.com/muhammad.ali" },
      { icon: <FaTwitter />, alt: "Twitter", link: "https://twitter.com/muhammad_ali" },
    ],
  },
  {
    id: 2,
    subtitle: "Backend Architect",
    title: "Faisal Khan",
    description: "Faisal designs robust backend infrastructures using Node.js, Express, and microservices. His focus is on performance, security, and building systems that scale as your business grows",
    imageUrl: Team2,
    socials: [
      { icon: <FaFacebookF />, alt: "Facebook", link: "https://facebook.com/faisal.khan" },
      { icon: <FaLinkedinIn />, alt: "LinkedIn", link: "https://linkedin.com/in/faisal-khan" },
      { icon: <FaInstagram />, alt: "Instagram", link: "https://instagram.com/faisal.khan" },
      { icon: <FaTwitter />, alt: "Twitter", link: "https://twitter.com/faisal_khan" },
    ],
  },
  {
    id: 3,
    subtitle: "Product Manager",
    title: "Elon Musk",
    description: "Coordinates cross-functional teams to turn ideas into successful products. With a keen eye for detail and strong communication skills, she ensures every project meets business goals and user needs.",
    imageUrl: Team1,
    socials: [
      { icon: <FaFacebookF />, alt: "Facebook", link: "https://facebook.com/elon.musk" },
      { icon: <FaLinkedinIn />, alt: "LinkedIn", link: "https://linkedin.com/in/elon-musk" },
      { icon: <FaInstagram />, alt: "Instagram", link: "https://instagram.com/elon.musk" },
      { icon: <FaTwitter />, alt: "Twitter", link: "https://twitter.com/elonmusk" },
    ],
  },
  {
    id: 4,
    subtitle: "QA & Automation Engineer",
    title: "Abdul Rahman",
    description: "Specializes in automated testing, CI/CD integration, and quality assurance. His proactive approach ensures every release is smooth, stable, and reliable for end users.",
    imageUrl: Team2,
    socials: [
      { icon: <FaFacebookF />, alt: "Facebook", link: "https://facebook.com/abdul.rahman" },
      { icon: <FaLinkedinIn />, alt: "LinkedIn", link: "https://linkedin.com/in/abdul-rahman" },
      { icon: <FaInstagram />, alt: "Instagram", link: "https://instagram.com/abdul.rahman" },
      { icon: <FaTwitter />, alt: "Twitter", link: "https://twitter.com/abdul_rahman" },
    ],
  },
  {
    id: 5,
    subtitle: "QA & Automation Engineer",
    title: "Abdul Rahman",
    description: "Specializes in automated testing, CI/CD integration, and quality assurance. His proactive approach ensures every release is smooth, stable, and reliable for end users.",
    imageUrl: Team2,
    socials: [
      { icon: <FaFacebookF />, alt: "Facebook", link: "https://facebook.com/abdul.rahman" },
      { icon: <FaLinkedinIn />, alt: "LinkedIn", link: "https://linkedin.com/in/abdul-rahman" },
      { icon: <FaInstagram />, alt: "Instagram", link: "https://instagram.com/abdul.rahman" },
      { icon: <FaTwitter />, alt: "Twitter", link: "https://twitter.com/abdul_rahman" },
    ],
  },
  {
    id: 6,
    subtitle: "QA & Automation Engineer",
    title: "Abdul Rahman",
    description: "Specializes in automated testing, CI/CD integration, and quality assurance. His proactive approach ensures every release is smooth, stable, and reliable for end users.",
    imageUrl: Team2,
    socials: [
      { icon: <FaFacebookF />, alt: "Facebook", link: "https://facebook.com/abdul.rahman" },
      { icon: <FaLinkedinIn />, alt: "LinkedIn", link: "https://linkedin.com/in/abdul-rahman" },
      { icon: <FaInstagram />, alt: "Instagram", link: "https://instagram.com/abdul.rahman" },
      { icon: <FaTwitter />, alt: "Twitter", link: "https://twitter.com/abdul_rahman" },
    ],
  },
  {
    id: 7,
    subtitle: "QA & Automation Engineer",
    title: "Abdul Rahman",
    description: "Specializes in automated testing, CI/CD integration, and quality assurance. His proactive approach ensures every release is smooth, stable, and reliable for end users.",
    imageUrl: Team2,
    socials: [
      { icon: <FaFacebookF />, alt: "Facebook", link: "https://facebook.com/abdul.rahman" },
      { icon: <FaLinkedinIn />, alt: "LinkedIn", link: "https://linkedin.com/in/abdul-rahman" },
      { icon: <FaInstagram />, alt: "Instagram", link: "https://instagram.com/abdul.rahman" },
      { icon: <FaTwitter />, alt: "Twitter", link: "https://twitter.com/abdul_rahman" },
    ],
  },
  {
    id: 8,
    subtitle: "QA & Automation Engineer",
    title: "Abdul Rahman",
    description: "Specializes in automated testing, CI/CD integration, and quality assurance. His proactive approach ensures every release is smooth, stable, and reliable for end users.",
    imageUrl: Team2,
    socials: [
      { icon: <FaFacebookF />, alt: "Facebook", link: "https://facebook.com/abdul.rahman" },
      { icon: <FaLinkedinIn />, alt: "LinkedIn", link: "https://linkedin.com/in/abdul-rahman" },
      { icon: <FaInstagram />, alt: "Instagram", link: "https://instagram.com/abdul.rahman" },
      { icon: <FaTwitter />, alt: "Twitter", link: "https://twitter.com/abdul_rahman" },
    ],
  },
  {
    id: 9,
    subtitle: "QA & Automation Engineer",
    title: "Abdul Rahman",
    description: "Specializes in automated testing, CI/CD integration, and quality assurance. His proactive approach ensures every release is smooth, stable, and reliable for end users.",
    imageUrl: Team2,
    socials: [
      { icon: <FaFacebookF />, alt: "Facebook", link: "https://facebook.com/abdul.rahman" },
      { icon: <FaLinkedinIn />, alt: "LinkedIn", link: "https://linkedin.com/in/abdul-rahman" },
      { icon: <FaInstagram />, alt: "Instagram", link: "https://instagram.com/abdul.rahman" },
      { icon: <FaTwitter />, alt: "Twitter", link: "https://twitter.com/abdul_rahman" },
    ],
  },
];

const Teamscomp = ({ limit }) => {
 

  const displayedTeam = limit ? galleryItems.slice(0, limit) : galleryItems;
  return (
    <section className="text-gray-600 body-font w-5/6 justify-self-center">
    <div className="container px-5 py-14 mx-auto">
    <div className="text-center mb-20">
      <h2 className="text-sm title-font text-gray-500 font-medium tracking-widest uppercase">Meet our team</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4 capitalize">We talk a lot about hope helping and teamwork</h1>
      
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-[#e3b843] inline-flex"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 -m-4">
      {displayedTeam.map(item => (
        <div key={item.id} className="p-4">
          <div className="flex relative group overflow-hidden h-120  rounded-[40px]">
            <img
loading="lazy"
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center "
              src={item.imageUrl}
            />

 <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />


<div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
          
            <div className="px-4 py-2  relative z-10 w-full opacity-100 rounded-t-[40px] group-hover:bg-black group-hover:opacity-100 transform translate-y-90 group-hover:translate-y-4 transition-all duration-500 ease-in-out">
            
              <h1 className="bottom-0 relative title-font md:text-2xl lg:text-3xl text-xl font-bold text-white mb-2">
                {item.title}
              </h1>
              <h2 className="bottom-0 relative tracking-widest text-sm title-font font-medium text-gray-400 mb-1">
                {item.subtitle}
              </h2>

              <div className="py-1 relative z-10 w-full max-w-[400px] sm:max-w-[600px] mx-auto opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-4 transition-all duration-500 ease-in-out">
  <p className="leading-relaxed text-xs sm:text-base md:text-md text-ellipsis overflow-hidden break-words">
    {item.description}
  </p>

  <ul className="flex flex-wrap items-center pt-2 gap-2">
    {item.socials.map((social, index) => (
      <li
        key={index}
        className="p-2 bg-white flex items-center justify-center rounded-full hover:scale-110 text-black cursor-pointer hover:text-gray-400 transition"
      >
        <a
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-md"
        >
          {social.icon}
        </a>
      </li>
    ))}
  </ul>
</div>

            </div>
          </div>
        </div>
      ))}

      </div>
    </div>
  </section>
  )
}

export default Teamscomp
