import React from "react";
import Icon1 from '../assets/product.png'


const expertiseData = [
    {
      title: "Strategy & Direction",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      img: {Icon1} 
    },
    {
      title: "Branding & Logo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      img: "🏷️", 
    },
    {
      title: "UI & UX Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      img: "✏️", 
    },
    {
      title: "Webflow Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      img: "💻", 
    },
  ];
  
  export default function Expertise() {
    return (
      <section className="px-8 md:px-16 py-16 bg-white">
        {/* Section Title */}
        <div className="mb-12">
          <p className="text-gray-600 font-semibold">My Skills</p>
          <h2 className="text-4xl font-bold text-gray-900">My Expertise</h2>
        </div>
  
        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-4xl bg-white p-3 rounded-lg w-fit mb-4">
                <img src={item.img} alt="img" />


              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              {/* Description */}
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  