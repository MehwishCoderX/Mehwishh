import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/navlogo.png";
import Button from "./Button";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-8" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-gray-800">
            <li>
              <a href="#" className="text-purple-600 nav-link ">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                About me
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Testimonials
              </a>
            </li>
          </ul>
          <Button variant="outline">Contact Me</Button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg p-4">
            <ul className="flex flex-col space-y-4 text-gray-800">
              <li>
                <a href="#" className=" nav-link text-purple-600 ">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className=" nav-link ">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  About me
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  Testimonials
                </a>
              </li>
              <li>
                <Button variant="outline">Contact Me</Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
