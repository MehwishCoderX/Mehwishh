const testimonials = [
    {
      name: "Dianne Russell",
      company: "Starbucks",
      image: "https://randomuser.me/api/portraits/women/44.jpg", // Replace with actual image
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
    },
    {
      name: "Kristin Watson",
      company: "Louis Vuitton",
      image: "https://randomuser.me/api/portraits/men/45.jpg", // Replace with actual image
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
    },
    {
      name: "Kathryn Murphy",
      company: "McDonald's",
      image: "https://randomuser.me/api/portraits/men/46.jpg", // Replace with actual image
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
    },
  ];
  
  export default function Testimonial() {
    return (
      <section className="px-8 md:px-16 py-16 bg-[#F5FCFF]">
   
        <div className="mb-12 text-start">
          <p className="text-gray-600 font-semibold">Clients Feedback</p>
          <h2 className="text-4xl font-bold text-gray-900">Customer Testimonials</h2>
        </div>
  
        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  bg-[#F5FCFF]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border border-[#006B6A] p-6 rounded-xl transition transform hover:-translate-y-2  bg-[#F5FCFF]"
            >
              {/* Star Ratings */}
              <div className="flex text-[#006B6A] mb-4 text-3xl">
                {"★".repeat(testimonial.rating)}
              </div>
              {/* Review */}
              <p className="text-gray-700">"{testimonial.review}"</p>
              {/* User Info */}
              <div className="flex items-center mt-4  bg-[#F5FCFF]">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border border-gray-300"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  