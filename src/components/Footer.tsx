
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-medical-600">FindMyDoc</h3>
            <p className="text-gray-600">
              Find the best doctors in your city. Book appointments with ease.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-medical-600">Home</Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-600 hover:text-medical-600">Find Doctors</Link>
              </li>
              <li>
                <Link to="/admin" className="text-gray-600 hover:text-medical-600">Admin Panel</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Specialties</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/doctors?specialty=cardiologist" className="text-gray-600 hover:text-medical-600">Cardiologist</Link>
              </li>
              <li>
                <Link to="/doctors?specialty=dermatologist" className="text-gray-600 hover:text-medical-600">Dermatologist</Link>
              </li>
              <li>
                <Link to="/doctors?specialty=pediatrician" className="text-gray-600 hover:text-medical-600">Pediatrician</Link>
              </li>
              <li>
                <Link to="/doctors?specialty=neurologist" className="text-gray-600 hover:text-medical-600">Neurologist</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Cities</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/doctors?city=delhi" className="text-gray-600 hover:text-medical-600">Delhi</Link>
              </li>
              <li>
                <Link to="/doctors?city=mumbai" className="text-gray-600 hover:text-medical-600">Mumbai</Link>
              </li>
              <li>
                <Link to="/doctors?city=bangalore" className="text-gray-600 hover:text-medical-600">Bangalore</Link>
              </li>
              <li>
                <Link to="/doctors?city=chennai" className="text-gray-600 hover:text-medical-600">Chennai</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} FindMyDoc. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-medical-600">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-medical-600">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-medical-600">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
