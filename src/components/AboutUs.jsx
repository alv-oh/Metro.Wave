import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AboutUs = () => {
  return (
    <section className="container-fluid">
        <Navbar/>
      <div className="justify-content-center">
        <h1>About Us</h1>
        <p>
          .At MetroWave, we bridge people and technology.Founded on a passion for innovation, we source and deliver the latest smartphones, laptops, accessories, and gadgets — making cutting-edge tech more accessible than ever.
          We believe technology should empower you, not complicate your life. That’s why we handpick trusted brands, offer transparent pricing, and deliver fast — so you can stay ahead, effortlessly.
          Whether you're a professional, gamer, creator, or everyday user, MetroWave is your go-to tech partner for quality, speed, and reliability.
          MetroWave — Ride the Future.
        </p>

        {/* Reviews Section */}
        <section className="reviews">
          <h2>Customer Reviews</h2>
          <div className="review">
            <p>"Amazing products and fast delivery!" 
                <br /> <strong>John D.</strong></p>
          </div>
          <div className="review">
            <p>"Great customer service, highly recommend!" 
                <br /> <strong>Sarah L.</strong></p>
          </div>
          <div className="review">
            <p>"Best prices for quality electronics." 
                <br /> <strong>Michael K.</strong></p>
          </div>
        </section>

        {/* Location Section */}
        <section className="location">
          <h2>Our Location</h2>
          <p>Visit our store at:</p>
          <p><strong>123 Tech Street, Nairobi, Kenya</strong></p>
          <img src="images/nairobi.jpeg" alt="" />
        </section>
        <Footer/>
      </div>
    </section>
  );
};

export default AboutUs;
