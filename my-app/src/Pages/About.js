import React from 'react'
import AboutBan from '../Assets/AboutBan.jpeg'
import Founder from '../Assets/Founder.jpeg'

function About() {
  return (
    <>
    <div className="hero h-52" style={{backgroundImage: `url(${AboutBan})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-white font-bold">About Us</h1>
            </div>
        </div>
    </div>
    <div className="hero h-96 bg-white">
        <div className="hero-content flex-col lg:flex-row">
            <img src={Founder} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
                <h1 className="text-5xl font-bold">Meet The Founder</h1>
                <p className="py-6">[Insert short bio speech from owner?]</p>
                <button className="btn btn-primary">Read More</button>
            </div>
        </div>
    </div>
  </>
  )
}

export default About