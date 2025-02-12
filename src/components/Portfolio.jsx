import React from "react";
import { ArrowUpRight } from "lucide-react"; // Import Lucide React arrow
import Button from "./Button";
import AhuseImg from "../assets/Project.png";
import DashboardImg from '../assets/project2.png'
import EasyRentImg from '../assets/project3.png'
import DribbleIcon from '../assets/Social icon.png'

const portfolioItems = [
  {
    id: 1,
    title: "Ahuse",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    imageUrl: AhuseImg,
    link: "https://dribbble.com/",
  },
  {
    id: 2,
    title: "App Dashboard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    imageUrl: DashboardImg,
    link: "https://dribbble.com/",
  },
  {
    id: 3,
    title: "Easy Rent",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    imageUrl: EasyRentImg,
    link: "https://dribbble.com/",
  },
];


const Portfolio = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-gray-500 font-semibold text-lg">Recent Projects</p>
            <h2 className="text-4xl font-bold text-gray-900">My Portfolio</h2>
          </div>

          {/* Visit My Dribbble Button */}
          <a
      href="https://dribbble.com/your-profile"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 bg-[#E62872] text-white  py-3 px-6 rounded-xl shadow-md transition-all hover:bg-[#d4417a] hover:scale-105"
    >
      <img src={ DribbleIcon} alt="Dribbble Icon" className="w-6 h-6" />
      Visit My Dribbble
    </a>
        </div>

        {/* Portfolio Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden transition transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.imageUrl}
                  alt={`Screenshot of ${item.title} project`}
                  className="w-full h-60 object-cover"
                />
              </a>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center  font-medium hover:underline transition group"
                  aria-label={`View ${item.title} on Dribbble`}
                >
                  View In Dribbble
                  <ArrowUpRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
