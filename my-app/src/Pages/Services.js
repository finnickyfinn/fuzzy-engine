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
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Body Contour</button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Body Contour</h3>
                        <p className="py-4"> Inmode Tone X5 $1800 <br/> Ultra Cavitation $99 <br/> True Cryolipo $240 <br/> Morpheus 8 body $799 per  session ($2149 for 3 sessions)</p>
                    </div>
                </dialog>
            </div>
        </div>
        </div>
        <div className="card hover:ring-2 ring-amber-800/50 w-96 bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
            <img src={Laser} alt="Laser Hair Removal" className="rounded-xl" />
            </figure>
        <div className="card-body flex-grow-0 items-center text-center">
            <div className="card-actions">
            <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>Laser Hair Removal</button>
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Laser Hair Removal</h3>
                        <h1 className='italic'>Prices May Vary Depending On Area</h1>
                        <p className="py-4"><b>Small Areas:</b> chin, upper or lower lip, side burns, nose, fingers, toes, cheeks, or stomach strip <br/><br/>
                                    <b>Medium Areas</b>: underarms, bikini line, hands, abdomen, or (lip & chin) <br/><br/><b> Large Areas:</b> upper legs, lower legs, inner thighs, upper arms, lower arms, upper back, lower back, full neck, or full face <br/><br/><b>XL Areas:</b> full back, abdomen & chest, full legs, full arms, Brazilian, or full butt.
                        </p>
                    </div>
                </dialog>
            </div>
        </div>
        </div>
        <div className="card hover:ring-2 ring-amber-800/50 w-96 bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
            <img src={SkinTreat} alt="Skin Treatments" className="rounded-xl w-72 h-52" />
            </figure>
        <div className="card-body flex-grow-0 items-center text-center">
            <div className="card-actions">
            <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>Skin Treatment</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Skin Treatments</h3>
                        <p className="py-4">Botox $10.99 reg tox/ <br/> Juvederm $550/syr</p>
                    </div>
                </dialog>
            </div>
        </div>
        </div>
        <div className="card hover:ring-2 ring-amber-800/50 w-96 bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
            <img src={FemWell} alt="Feminine Wellness" className="rounded-xl w-72 h-52" />
            </figure>
        <div className="card-body flex-grow-0 items-center text-center">
            <div className="card-actions">
            <button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>Feminine Wellness</button>
                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Feminine Wellness</h3>
                        <p className="py-4">1 - Inmode Vtone $400/session (6 sessions $1750)<br/>2 - Inmode Forma V $500 (3 sessions $1250)<br/>3 - Morpheus 8 vaginal rejuventation 3 sessions $3500</p>
                    </div>
                </dialog>
            </div>
        </div>
        </div>
        <div className="card hover:ring-2 ring-amber-800/50 w-96 bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
            <img src={IVTherapy} alt="IV Therapy" className="rounded-xl w-72 h-52" />
            </figure>
        <div className="card-body flex-grow-0 items-center text-center">
            <div className="card-actions">
            <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>IV Therapy</button>
                <dialog id="my_modal_5" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">IV Therapy Options</h3>
                        <p className="py-4">1 - Performance blend $189 <br/> 2 - True U beauty blend $189 <br/> 3 - True U immunity blend $175 <br/> 4 - True U anti stress blend $189 5-Iron IV $247</p>
                    </div>
                </dialog>
            </div>
        </div>
        </div>
        <div className="card hover:ring-2 ring-amber-800/50 w-96 bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
            <img src={TruUU} alt="True U Weight Loss" className="rounded-xl w-72 h-52" />
            </figure>
        <div className="card-body flex-grow-0 items-center text-center">
            <div className="card-actions">
            <button className="btn" onClick={()=>document.getElementById('my_modal_6').showModal()}>True U Weight Loss</button>
                <dialog id="my_modal_6" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">True U Weight Loss Programs</h3>
                        <p className="py-4"> <b>1 - Bronze $160/wk ($185/wk for tirzepatide)</b> <br/>o   Semaglutide/tirz injections<br/>o   1 complimentary Inbody assessment <br/>o   10% off lipo injections <br/> <b> 2 - Silver plan $267/wk (+$15 for tirz)</b><br/>o   Everything in Bronze plus…<br/>o   Monthly Inbody assessments<br/>o   Custom nutrition plan<br/>o   24/7 Access to Registered Nurse on WhatsAap<br/>o   10% off IV therapy<br/>o   10% body contouring<br/><b>3 - Gold plan $355/wk (+15 for tirz)</b><br/>o   Everything in silver plus…<br/>o   15% off lipo shots<br/>o   15% off IV therapy<br/>o   10% off RF microneedling facial<br/>o   Weekly Inbody assessment<br/>o   Weekly behavior therapy sessions</p>
                    </div>
                </dialog>
            </div>
        </div>
        </div>
        <div className="card hover:ring-2 ring-amber-800/50 w-96 bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
            <img src={LabExam} alt="Lab Exams" className="rounded-xl w-72 h-52" />
            </figure>
        <div className="card-body flex-grow-0 items-center text-center">
            <div className="card-actions">
            <button className="btn" onClick={()=>document.getElementById('my_modal_7').showModal()}>Lab Exams</button>
                <dialog id="my_modal_7" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Lab Exams</h3>
                        <p className="py-4">55 - BMP <br/> 56 - CMP <br/> 57 - Urea <br/> 58 - PSA <br/> 59 - IGF-1 <br/> 60 - SHBG <br/> 61 - LH <br/> 62 - FSH <br/> 63 - Progesterone <br/> 64 - Estradiol <br/> 65 - Estrogen <br/> 66 - Vit D-Labs <br/> 67 - Cortisol <br/> 68 - B12 - Labs <br/> 69 - Ferritin <br/> 70 - Iron-Labs <br/> 71 - Full checkup <br/> 72 - Testosterone-Labs</p>
                    </div>
                </dialog>
            </div>
        </div>
        </div>
        <div className="card hover:ring-2 ring-amber-800/50 w-96 bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
            <img src={Inject} alt="Injections" className="rounded-xl w-72 h-52" />
            </figure>
        <div className="card-body flex-grow-0 items-center text-center">
            <div className="card-actions">
            <button className="btn" onClick={()=>document.getElementById('my_modal_8').showModal()}>Injections</button>
                <dialog id="my_modal_8" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Injection Information</h3>
                        <p className="py-4">1 - Vitamin D $35<br/>2 - Vitamin B12 $35<br/>3 - True U Growth $799 (30 day supply)<br/>4 - Lipo Shots $35<br/>5 - Lipo B Shot $40<br/>6 - Lipo C $45<br/>7 - Gluthatione  $40<br/>8 - Iron IM 189</p>
                    </div>
                </dialog>
            </div>
        </div>
        </div>
        <div className="card hover:ring-2 ring-amber-800/50 w-96 bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
            <img src={SkinCare} alt="Skin Care" className="rounded-xl w-72 h-52" />
            </figure>
        <div className="card-body flex-grow-0 items-center text-center">
            <div className="card-actions">
            <button className="btn" onClick={()=>document.getElementById('my_modal_9').showModal()}>Skin Care</button>
                <dialog id="my_modal_9" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Skin Care</h3>
                        <p className="py-4">1 - Infrared sauna blanket $145 3 sessions<br/>2 - Microneedling $280<br/>3 - True hydrofacial $120<br/>4 - Morpheus 8 RF microneedling Full face$650/session (3 sessions $1750)<br/><b>Add-ons</b><br/>PRP $100<br/>HA skin booster $150<br/>Brightening skin booster $150</p>
                    </div>
                </dialog>
            </div>
        </div>
        </div>
        <div className="card hover:ring-2 ring-amber-800/50 w-96 bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
            <img src={WeightLoss} alt="Wellness Weight Loss" className="rounded-xl w-72 h-52" />
            </figure>
        <div className="card-body flex-grow-0 items-center text-center">
            <div className="card-actions">
            <button className="btn" onClick={()=>document.getElementById('my_modal_10').showModal()}>Wellness Weight Loss</button>
                <dialog id="my_modal_10" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Finally!</h3>
                        <p className="py-4">1 - Consultation + Inbody assessment <br/> 2 - Labs <br/> 3 - MD consultation</p>
                    </div>
                </dialog>
            </div>
        </div>
        </div>
        
    </div>



    
    </>
  )
}

export default Services