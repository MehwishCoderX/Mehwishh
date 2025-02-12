import React from 'react'
import HeroImg from '../assets/Hero-img.png'


export default function HeroSection() {
    return (
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 bg-[#F5F9FF]">
        <div className="max-w-lg">
          <p className="text-gray-700 font-semibold">Hey, I am John</p>
          <h1 className="text-4xl font-bold text-gray-900 mt-2 leading-tight">
            I create <span className="text-purple-600">product design</span> <br />
            and brand experience
          </h1>
          <p className="text-gray-600 mt-4 leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
            enim in eros elementum tristique. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
          <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition">
            Get In Touch
          </button>
        </div>
  

        <div className="relative mt-10 md:mt-0">

          <div className="absolute -z-10 bg-blue-100 rounded-2xl w-80 h-96 top-6 left-6"></div>
  
         
          <img
            src={HeroImg}
            alt="John"
            className="w-100 rounded-lg"
          />
  
        
         
        </div>
      </section>
    );
  }
  