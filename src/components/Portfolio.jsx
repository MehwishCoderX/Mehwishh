import React from "react";
import AhuseImg from '../assets/project.png'
import DashboardImg from '../assets/project2.png'
import EasyRentImg from '../assets/project3.png'

const portfolioItems = [
  {
    id: 1,
    title: "Ahuse",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    imageUrl:  AhuseImg,
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
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8" id="portfolio-heading">
          My Portfolio
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden"
              role="article"
              aria-labelledby={`portfolio-title-${item.id}`}
            >
              <img
                src={item.imageUrl}
                alt={`Screenshot of ${item.title} project`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 id={`portfolio-title-${item.id}`} className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
                  aria-label={`View ${item.title} on Dribbble`}
                >
                  View In Dribbble →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://dribbble.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-pink-700 transition"
            aria-label="Visit my Dribbble profile"
          >
            Visit My Dribbble
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
