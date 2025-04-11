import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/scrolltotop';
import Whatsapp from './components/Whatsapp';
import Hero from './components/Hero'; // If needed globally, else lazy-load it too

// Normal imports for pages
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Ourclients from './pages/Ourclients';
import Ourprojects from './pages/Ourprojects';
import Services from './pages/Services';
import ServiceDetail from './pages/Servicesdetails';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import CookiePolicy from './pages/CookiePolicy';
import NotFound from './pages/NotFound';
import Blogs from './pages/Blogs';
import BlogsDetails from './pages/Blogsdetails';
import Account from './pages/Account';
import Teams from './pages/Teams';

function App() {
  return (
    <Router>
      <div className="bg-[#000000] min-h-screen">
        <Header />
        <Suspense fallback={<div className="text-white text-center p-10">Loading...</div>}>
          <Routes>
            {/* Redirect root path to /home */}
            <Route path="/" element={<Navigate to="/home" replace />} />

            {/* Static routes with Hero */}
            <Route path="/home" element={<><Hero /><Home /></>} />
            <Route path="/aboutus" element={<><Hero /><Aboutus /></>} />
            <Route path="/blogs" element={<><Hero /><Blogs /></>} />
            <Route path="/contactus" element={<><Hero /><Contactus /></>} />
            <Route path="/ourclients" element={<><Hero /><Ourclients /></>} />
            <Route path="/ourprojects" element={<><Hero /><Ourprojects /></>} />
            <Route path="/services" element={<><Hero /><Services /></>} />
            <Route path="/teams" element={<><Hero /><Teams /></>} />

            {/* Dynamic details route */}
            <Route path="/services/:serviceSlug" element={<><Hero /><ServiceDetail /></>} />
            <Route path="/blog/:id" element={<BlogsDetails />} />

            {/* Extra pages */}
            <Route path="/account" element={<Account />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/termsandconditions" element={<TermsAndConditions />} />
            <Route path="/cookiepolicy" element={<CookiePolicy />} />

            {/* Catch-all for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <ScrollToTopButton />
        <Whatsapp />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
