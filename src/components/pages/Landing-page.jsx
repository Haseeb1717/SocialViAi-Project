import React from "react";
import Header from "../Layout/header";  // or "../layout/Header" if capital H
import './style/Landing-page.css';

import landingCover from '../../assets/landingcover.png';


export default function LandingPage() {
  return (
    <>
<div className="landing-container" style={{ backgroundImage: `url(${landingCover})` }}>
  <Header />
  <section className="hero-section">...</section>
</div>

    </>
  );
}
