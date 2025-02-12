import React from "react";
import Button from "./Button";
import AhuseImg from "../assets/project.png";
import DashboardImg from "../assets/project2.png";
import EasyRentImg from "../assets/project3.png";

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
            <h2 className="text-5xl font-bold text-gray-900">My Portfolio</h2>
          </div>

          {/* Visit My Dribbble Button */}
          <Button
            asChild
            className="bg-pink-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-pink-700 transition"
          >
            <a
              href="https://dribbble.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my Dribbble profile"
              className="flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4 12c0-1.36.36-2.632.99-3.722l5.554 5.554c-.035.014-.07.027-.105.04A7.974 7.974 0 014 12zm8 8c-1.628 0-3.137-.489-4.404-1.324a8.011 8.011 0 001.598-2.689l.012-.026 6.436-2.386A7.96 7.96 0 0120 12c0 .5-.05.99-.15 1.466-2.297-.196-4.92.12-7.608 1.107a7.98 7.98 0 01-1.654 3.427C10.282 18.99 11.133 19 12 19zm7.01-4.278a7.981 7.981 0 01-2.936 2.601 7.976 7.976 0 001.825-4.056 7.965 7.965 0 011.111-1.109c.29.852.45 1.773.45 2.726 0 .553-.06 1.091-.18 1.616zM12 4c1.628 0 3.137.489 4.404 1.324a8.01 8.01 0 00-1.598 2.689l-.012.026-6.436 2.386A7.961 7.961 0 014 12c0-.5.05-.99.15-1.466 2.297.196 4.92-.12 7.608-1.107a7.98 7.98 0 011.654-3.427C13.718 5.01 12.867 5 12 5z"/>
              </svg>
              Visit My Dribbble
            </a>
          </Button>
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
                  className="mt-4 inline-flex items-center text-indigo-600 font-medium hover:underline transition"
                  aria-label={`View ${item.title} on Dribbble`}
                >
                  View In Dribbble
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14 3l6 6m0 0l-6 6m6-6H3" />
                  </svg>
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
