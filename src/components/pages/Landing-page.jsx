import React from "react";
import Header from "../Layout/header";  // or "../layout/Header" if capital H
import './style/Landing-page.css';
import landingCover from '../../assets/landingcover.png';
import instaMockup from '../../assets/insta mock.png';
import pinterestMockup from '../../assets/pinterestmock.png';
 import tiktokMockup from '../../assets/titktokmock.png';
 import twitterMockup from '../../assets/twittermock.png';
 import fbMockup from '../../assets/fbmok.png';
 import Sectionend from '../../assets/sectiondone.png';

export default function LandingPage() {
  return (
    <>
    
      <div className="landing-container" style={{ backgroundImage: `url(${landingCover})` }}>
        <Header />
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="heading">
              Meet with <span className="the">Soci</span>
              <span className="chat">alvi</span>
              <span className="bot">Ai</span>
            </h1>
            
            <h2 className="subheading">
              Your AI Marketing Manager
            </h2>
            
            <p className="hero-description">
              Transform your social media presence with AI-powered content creation. 
              Automatically reach the right audience, generate engaging posts, and create 
              high-converting social media ads that drive results.
            </p>
            
            <div className="cta-section">
              <button className="explore-btn primary-btn">
                <span>Start Free Trial</span>
                <svg className="btn-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="secondary-btn">
                Watch Demo
              </button>
            </div>
            
            <div className="trust-indicators">
              <span className="trust-text">Trusted by 10,000+ marketers worldwide</span>
            </div>
          </div>
      
          {/* IMAGE ROW BELOW TRUSTED */}
          <div className="trusted-img-row">
            {/* Left images */}
            <div className="side-img left">
              <img src="https://via.placeholder.com/120" alt="" />
              <img src="https://via.placeholder.com/120" alt="" />
            </div>

            {/* Center row */}
            <div className="center-row">
            <img src={tiktokMockup} alt="Instagram Mockup" /> 
            <img src={fbMockup} alt="Instagram Mockup" />
             <img src={twitterMockup} alt="Instagram Mockup" />
            <img src={instaMockup} alt="Instagram Mockup" />
            <img src={pinterestMockup} alt="Instagram Mockup" />

            </div>

            {/* Right images */}
            <div className="side-img right">
              <img src="https://via.placeholder.com/120" alt="" />
              <img src="https://via.placeholder.com/120" alt="" />
            </div>
          </div>
<img src={Sectionend} alt="sectionendimg" className="endimg"/>
        </section>
      </div>
    </>
  );
}