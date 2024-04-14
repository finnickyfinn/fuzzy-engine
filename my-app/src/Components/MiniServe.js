import React from 'react'
import { Router } from 'react-router-dom'
import Laser from '../Assets/Laser.jpeg'
import SkinTreat from '../Assets/SkinTreat.jpeg'
import TruUU from '../Assets/TruUU.webp'
import { Link } from "react-router-dom"


function MiniServe() {
  return (
    <>
        <div className='flex grid-cols-3 gap-20 pb-8 bg-white justify-center '>
            <div className="card w-96 rounded-full bg-amber-50 shadow-2xl">
                <figure className="px-10 pt-10">
                    <img src={Laser} alt="Shoes" className="rounded-full w-72 h-52" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Laser Hair Removal</h2>
                    <div className="card-actions">
                    <Link to ='/Services'><button className="btn btn-primary">Learn More</button></Link>
                    </div>
                </div>
            </div>
            <div className="card w-96 rounded-full bg-amber-50 shadow-2xl">
                <figure className="px-10 pt-10">
                    <img src={SkinTreat} alt="Shoes" className="rounded-full w-72 h-52" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Skin Treatment</h2>
                    <div className="card-actions">
                    <Link to ='/Services'><button className="btn btn-primary">Learn More</button></Link>
                    </div>
                </div>
            </div>
            <div className="card w-96 rounded-full bg-amber-50 shadow-2xl">
                <figure className="px-10 pt-10">
                    <img src={TruUU} alt="Shoes" className="rounded-full w-72 h-52" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">True U WeightLoss</h2>
                    <div className="card-actions">
                    <Link to ='/Services'><button className="btn btn-primary">Learn More</button></Link>
                    </div>
                </div>
            </div>




        </div>
    
    
    
    
    
    
    </>
  )
}

export default MiniServe