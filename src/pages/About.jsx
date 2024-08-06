
import {Link } from 'react-router-dom'
import bgImg from '/images/aboutbg.png'
export default function About() {
    return (
        <div className="flex flex-col itmes-center">
            <img src={bgImg} className="max-w-full w-full"/>
            <div className="px-16 mb-14 w-[80rem]">
                <h1 className='font-bold text-5xl'>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p className='text-3xl pt-16'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p className='text-lg'>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="bg-[#FFCC8D] pb-8 rounded-md w-[40rem] mx-auto text-center">
                <h2 className='text-3xl font-semibold py-9'>Your destination is waiting.<br />Your van is ready.</h2>
                <Link className="bg-black text-white rounded xl text-2xl px-3 py-5" to="/vans">Explore our vans</Link>
            </div>
        </div>
    )
}