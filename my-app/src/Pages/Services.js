import React from 'react'
import { Link } from "react-router-dom"
import SpaHero from '../Assets/SpaHero.jpeg'
import BodyCon from '../Assets/BodyCon.jpeg'
import FemWell from '../Assets/FemWell.webp'
import IVTherapy from '../Assets/IVTherapy.jpeg'
import Laser from '../Assets/Laser.jpeg'
import SkinTreat from '../Assets/SkinTreat.jpeg'
import TruUU from '../Assets/TruUU.webp'
import LabExam from '../Assets/LabEx.webp'
import Inject from '../Assets/Inject.webp'
import SkinCare from '../Assets/SkinCare.jpeg'
import WeightLoss from '../Assets/WeightLoss.avif'

function Services() {
  return (
    <>
     <div className="hero h-80 " style={{backgroundImage: `url(${SpaHero})` }}>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Services</h1>
                <p className="mb-5"></p>
            </div>
        </div>
    </div>
    <div className="flex bg-white py-3 flex-col w-full">
        <div className="divider">Schedule today and find the service for you.</div>
    </div>
    <div class="grid bg-white py-4 px-24 grid-cols-3 gap-8">
        <div className="card flex-grow-0 hover:ring-2 ring-amber-800/50 w-96 bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
            <img src={BodyCon} alt="Body Contour" className="rounded-xl" />
            </figure>
        <div className="card-body flex-grow-0 items-center text-center">
            <div className="card-actions">
            <button className="btn btn-base">Body Contour</button>
            </div>
        </div>
        </div>
        <div className="card hover:ring-2 ring-amber-800/50 w-96 bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
            <img src={Laser} alt="Laser Hair Removal" className="rounded-xl" />
            </figure>
        <div className="card-body flex-grow-0 items-center text-center">
            <div className="card-actions">
            <button className="btn btn-base">Laser Hair Removal</button>
            </div>
        </div>
        </div>
        <div className="card hover:ring-2 ring-amber-800/50 w-96 bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
            <img src={SkinTreat} alt="Skin Treatments" className="rounded-xl w-72 h-52" />
            </figure>
        <div className="card-body flex-grow-0 items-center text-center">
            <div className="card-actions">
            <button className="btn btn-base">Skin Treatments</button>
            </div>
        </div>
        </div>
        <div className="card hover:ring-2 ring-amber-800/50 w-96 bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
            <img src={FemWell} alt="Feminine Wellness" className="rounded-xl" />
            </figure>
        <div className="card-body flex-grow-0 items-center text-center">
            <div className="card-actions">
            <button className="btn btn-base">Feminine Wellness</button>
            </div>
        </div>
        </div>
        <div className="card hover:ring-2 ring-amber-800/50 w-96 bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
            <img src={IVTherapy} alt="IV Therapy" className="rounded-xl h-52" />
            </figure>
        <div className="card-body flex-grow-0 items-center text-center">
            <div className="card-actions">
            <button className="btn btn-base">IV Therapy</button>
            </div>
        </div>
        </div>
        <div className="card hover:ring-2 ring-amber-800/50 w-96 bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
            <img src={TruUU} alt="True U Weight Loss" className="rounded-xl" />
            </figure>
        <div className="card-body flex-grow-0 items-center text-center">
            <div className="card-actions">
            <button className="btn btn-base">True U Weight Loss</button>
            </div>
        </div>
        </div>
        <div className="card hover:ring-2 ring-amber-800/50 w-96 bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
            <img src={LabExam} alt="Lab Exams" className="rounded-xl h-52" />
            </figure>
        <div className="card-body flex-grow-0 items-center text-center">
            <div className="card-actions">
            <button className="btn btn-base">Lab Exams</button>
            </div>
        </div>
        </div>
        <div className="card hover:ring-2 ring-amber-800/50 w-96 bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
            <img src={Inject} alt="Injections" className="rounded-xl" />
            </figure>
        <div className="card-body flex-grow-0 items-center text-center">
            <div className="card-actions">
            <button className="btn btn-base">Injections</button>
            </div>
        </div>
        </div>
        <div className="card hover:ring-2 ring-amber-800/50 w-96 bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
            <img src={SkinCare} alt="Skin Care" className="rounded-xl" />
            </figure>
        <div className="card-body flex-grow-0 items-center text-center">
            <div className="card-actions">
            <button className="btn btn-base">Skin Care</button>
            </div>
        </div>
        </div>
        <div className="card hover:ring-2 ring-amber-800/50 w-96 bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
            <img src={WeightLoss} alt="Wellness Weight Loss" className="rounded-xl" />
            </figure>
        <div className="card-body flex-grow-0 items-center text-center">
            <div className="card-actions">
            <button className="btn btn-base">Wellness Weight Loss</button>
            </div>
        </div>
        </div>
        
    </div>



    
    </>
  )
}

export default Services