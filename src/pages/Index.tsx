
import { Link } from "react-router-dom";
import { Search, Calendar, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SearchForm from "@/components/SearchForm";
import { specialties, cities } from "@/lib/data";

const Index = () => {
  // Get 4 popular specialties and cities for quick links
  const popularSpecialties = specialties.slice(0, 4);
  const popularCities = cities.slice(0, 4);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-medical-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Find the Right Doctor in Your City
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover experienced doctors across India. Search by specialty, read reviews,
                and book appointments easily.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-4">Find Doctors Near You</h3>
                <SearchForm />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <img
                src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg"
                alt="Doctors illustration"
                className="rounded-lg shadow-xl max-h-96 w-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How FindMyDoc Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="bg-medical-100 p-4 rounded-full mb-4">
                <Search className="h-8 w-8 text-medical-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Search Doctors</h3>
              <p className="text-gray-600">
                Find doctors based on specialty, location, and availability across India.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-medical-100 p-4 rounded-full mb-4">
                <Star className="h-8 w-8 text-medical-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Read Reviews</h3>
              <p className="text-gray-600">
                Check ratings and reviews from other patients to find the best doctor for you.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-medical-100 p-4 rounded-full mb-4">
                <Calendar className="h-8 w-8 text-medical-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Book Appointment</h3>
              <p className="text-gray-600">
                Book appointments online with your preferred doctor at convenient times.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Specialties Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Popular Specialties</h2>
          <p className="text-gray-600 mb-10">Find doctors by their medical specialty</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {popularSpecialties.map((specialty) => (
              <Link
                key={specialty.id}
                to={`/doctors?specialty=${specialty.id}`}
                className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-6 text-center"
              >
                <h3 className="font-semibold text-lg mb-2">{specialty.name}</h3>
                <p className="text-sm text-gray-500">Find {specialty.name}s</p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-medical-600 text-medical-600 hover:bg-medical-50">
              <Link to="/doctors">View All Specialties</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Popular Cities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Popular Cities</h2>
          <p className="text-gray-600 mb-10">Find doctors in major cities across India</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {popularCities.map((city) => (
              <Link
                key={city.id}
                to={`/doctors?city=${city.id}`}
                className="bg-gray-50 rounded-lg shadow hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="h-32 bg-gray-200 flex justify-center items-center">
                  <MapPin className="h-12 w-12 text-medical-400" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold">{city.name}</h3>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-medical-600 text-medical-600 hover:bg-medical-50">
              <Link to="/doctors">View All Cities</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-medical-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Doctor?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get started now and discover the best healthcare professionals in your city.
          </p>
          <Button asChild size="lg" className="bg-white text-medical-600 hover:bg-gray-100">
            <Link to="/doctors">Find Doctors Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
