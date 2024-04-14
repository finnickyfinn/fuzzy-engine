import React from 'react'
import { Link } from "react-router-dom"


function Footer(){
    return(
        <footer className="footer  p-10 bg-base-300 text-base-content">
            <nav>
                <h8 className='footer-title'>Contact Details</h8>
                <a href="tel:+14074126080" className='hover:text-white hover:scale-110 hover:btn pb-2'>407-412-6080</a>
                <a href="mailto:Hello@trueumedspa.com" className='hover:text-white hover:scale-110 hover:btn pb-2 '>Hello@trueumedspa.com</a>
                <a href='https://www.google.com/maps/place/6735+Conroy+Windermere+Rd+STE+110,+Orlando,+FL+32835/@28.4938015,-81.475458,18z/data=!4m6!3m5!1s0x88e77f2a4860b975:0xc1d0e180b09fb267!8m2!3d28.4941884!4d-81.4744787!16s%2Fg%2F11gg6ctcfg?entry=ttu'  className='hover:text-white hover:scale-110 hover:btn pb-2'>6735 Conroy Windermere Rd, Suite 110 , Orlando FL, 32835</a>
                <a className='hover:text-white'>Mon-Fri: 10am-6pm</a>
                <a className='hover:text-white'>Sat: Closed</a>
                <a className='hover:text-white'>Sun: Closed</a>

            </nav>
            <nav>
                <h6 className="footer-title">Services</h6> 
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav> 
            <nav>
                <h6 className="footer-title">Quick Links</h6> 
                <Link className='hover:text-white' to ='/About'>About Us</Link>
                <Link className='hover:text-white' to='/Services'>Services</Link>
            </nav> 
            <nav>
                <h6 className="footer-title">Social</h6> 
                <div className="grid grid-flow-col gap-4">
                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </div>
            </nav>
        </footer>
    )
}


export default Footer