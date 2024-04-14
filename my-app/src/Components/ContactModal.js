import React from 'react';
import MedSpaBuild from '../Assets/MedSpaBuild.jpeg'






function ContactModal({ isOpen, closeModal }) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-auto flex items-center justify-center">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative bg-white w-9/12 p-6 rounded-lg">
            <button onClick={closeModal} className="absolute top-0 right-0 m-4 btn-circle btn-outline">X
            </button>
            <div className="mt-4 p-4 border-solid">
            
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={MedSpaBuild} alt="Album"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">Get In Touch With Us</h2>
                        <ul className='pl-2'>

                            <li><a href="mailto:Hello@trueumedspa.com " className='text-lg pl-0 hover:text-white' >Hello@trueumedspa.com</a></li>
                            <li><a href="tel:+14074126080" className='text-lg pl-0 hover:text-white'>407-412-6080</a></li>
                            <li><a href='https://www.google.com/maps/place/6735+Conroy+Windermere+Rd+STE+110,+Orlando,+FL+32835/@28.4938015,-81.475458,18z/data=!4m6!3m5!1s0x88e77f2a4860b975:0xc1d0e180b09fb267!8m2!3d28.4941884!4d-81.4744787!16s%2Fg%2F11gg6ctcfg?entry=ttu' className='text-lg pl-0 hover:text-white'>6735 Conroy Windermere Rd, Suite 110 , Orlando FL, 32835</a></li>
                            <li className='hover:text-white text-lg'>Mon-Fri: 10am-6pm</li>
                            <li className='hover:text-white text-lg'>Sat: Closed</li>
                            <li className='hover:text-white text-lg'>Sun: Closed</li>                   
                        </ul>                        
                    </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactModal;