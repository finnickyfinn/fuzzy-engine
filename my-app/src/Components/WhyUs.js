import React from 'react'
import { Link } from "react-router-dom"
import MedStaff from '../Assets/MedStaff.jpeg'


function WhyUs() {
  return (
    <>
        <div className="hero h-5/6 bg-white">
            <div className="hero-content flex-col lg:flex-row">
                <img src={MedStaff} className="w-96 h-80 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl text-center font-bold">Why Choose Us</h1>
                    <div className="flex flex-col w-full">
                        <div className="divider"></div>
                    </div>
                    <p className="py-6">Welcome to True U Wellness and MedSpa, where excellence intersects with rejuvenation in skincare and wellness. For over 26 years, we've stood as the foremost sanctuary catering to the Atlanta community, delivering unmatched excellence and outcomes in medical spa offerings.
                    <br></br>
                    <br></br>
                    At True U Wellness and MedSpa, we uphold a standard of utilizing only top-tier products and enlisting licensed estheticians with profound expertise in their craft. Our dedicated team is committed to delivering bespoke care and customized therapies, tailored precisely to fulfill the individual needs of every guest.</p>
                    <button className="btn btn-primary"><Link to='/About'>Learn More</Link></button>
                </div>
            </div>
        </div>
    
    
    </>
  )
}

export default WhyUs