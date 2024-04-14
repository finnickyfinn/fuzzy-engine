import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import WelCarBg from '../Assets/WelCarBG.jpeg'
import WelCaro1 from '../Assets/WelCaro1.jpeg'
import WelCaro2 from '../Assets/WelCaro2.jpeg'
import WelCaro3 from '../Assets/WelCaro3.jpeg'
import WelCaro4 from '../Assets/WelCaro4.avif'

function WelcomeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4); // Assuming there are 4 items in the carousel
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="carousel w-full relative pb-10 bg-white overflow-hidden">
      <div className="carousel-inner flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        <div id="slide1" className="carousel-item relative w-full">
          <div className="hero h-96 bg-base-200" style={{backgroundImage:`url(${WelCarBg})`}} >
            <div className="hero-content bg-opacity-100 flex-col lg:flex-row">
              <img src={WelCaro1} className="max-w-sm rounded-lg shadow-2xl" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
              <div>
                <h1 className="text-5xl font-bold">Take A Step In The True U Direction</h1>
                <p className="py-6">Here At True U MedSpa, we believe that true beauty shines from within. Our mission is to empower individuals to embrace their unique selves and enhance their natural beauty through personalized aesthetic treatments and wellness solutions.</p>
                <button className="btn btn-primary"><Link to='/Services'>Get Started</Link></button>
              </div>
            </div>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={WelCaro2} className="w-full h-96" alt="Slide 2" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={WelCaro3} className="w-full h-96" alt="Slide 3" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
        <div className="hero h-96 " style={{backgroundImage: `url(${WelCaro4})`}}>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">The Biggest Journey Starts With The Smallest Step</h1>
                <button className="btn btn-primary">Book Consultation</button>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>


    </>
    
  );
}

export default WelcomeCarousel;