import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Logo from '../assets/navlogo.png'
export default function Footer() {
  return (
    <footer className="bg-[#F5FCFF] py-20">
      <div className="max-w-6xl mx-auto px-4">
     
        <div className="flex justify-between items-center pb-4">
     
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-8 mr-2" />
           
          </div>

       
          <nav className="space-x-6 text-gray-700 hidden md:flex">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Portfolio</a>
            <a href="#" className="hover:underline">About me</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Testimonials</a>
            <a href="#" className="hover:underline">Portfolio</a>
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-4 text-gray-700">
            <a href="#" className="hover:text-gray-900"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-900"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-900"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-900"><FaLinkedin /></a>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="border-gray-300" />

        {/* Bottom Section: Credits and Policy Links */}
        <div className="flex justify-between items-center text-gray-700 text-sm pt-4">
          <p>Made with <span className="text-pink-500">💖</span> by Airdokan</p>
          <div className="space-x-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
