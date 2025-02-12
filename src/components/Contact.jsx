import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6  rounded-lg ">
      <h2 className="text-2xl font-bold text-center mb-4">Contact Me</h2>
      <p className="text-center text-gray-400 mb-6">Get in touch by filling out the form below.</p>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm">First Name</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required
           className="w-full p-2 rounded border-gray-700 focus:ring-2 focus:ring-purple-500" />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm">Last Name</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required 
          className="w-full p-2 rounded  border border-gray-700 focus:ring-2 focus:ring-purple-500" />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
      <div className="mt-4">
        <label htmlFor="email" className="block text-sm">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
         className="w-full p-2 rounded  border border-gray-700 focus:ring-2 focus:ring-purple-500" />
      </div>

      <div className="mt-4">
        <label htmlFor="phone" className="block text-sm">Phone Number</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required 
        className="w-full p-2 rounded border border-gray-700 focus:ring-2 focus:ring-purple-500" />
      </div>
      </div>

      <div className="mt-4">
        <label htmlFor="topic" className="block text-sm">Choose a Topic</label>
        <select id="topic" name="topic" value={formData.topic} onChange={handleChange} required 
        className="w-full p-2 roundedborder border-gray-700 focus:ring-2 focus:ring-purple-500">
          <option value="">Select one...</option>
          <option value="general">General Inquiry</option>
          <option value="support">Support</option>
          <option value="feedback">Feedback</option>
        </select>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="block text-sm">Message</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="4" 
         className="w-full p-2 rounded  border border-gray-700 focus:ring-2 focus:ring-purple-500"></textarea>
      </div>

      <div className="mt-4 flex items-center">
        <input type="checkbox" id="terms" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} required className="mr-2" />
        <label htmlFor="terms" className="text-sm">I accept the terms</label>
      </div>
      <button type="submit" className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded font-bold focus:ring-2 focus:ring-purple-500">Submit</button>
    </form>
  );
};

export default Contact;
