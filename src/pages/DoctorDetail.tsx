
import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { Phone, Mail, Calendar, Star, MapPin, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Doctor, getDoctorById } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

const DoctorDetail = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    // Simulate API delay
    setLoading(true);
    setTimeout(() => {
      const foundDoctor = id ? getDoctorById(id) : undefined;
      if (foundDoctor) {
        setDoctor(foundDoctor);
      } else {
        setDoctor(null);
      }
      setLoading(false);
      
      // Check if we should automatically open booking
      if (location.state?.bookNow && foundDoctor) {
        handleBookAppointment();
      }
    }, 500);
  }, [id, location.state]);
  
  const handleBookAppointment = () => {
    toast({
      title: "Appointment Request Sent",
      description: `Your appointment request with ${doctor?.name} has been received. We'll contact you shortly to confirm.`,
      duration: 5000,
    });
  };
  
  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-medical-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-4 text-gray-600">Loading doctor profile...</p>
        </div>
      </Layout>
    );
  }
  
  if (!doctor) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Doctor Not Found</h2>
          <p className="mb-8">The doctor you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/doctors">Back to Doctors List</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <Link to="/doctors" className="inline-flex items-center text-medical-600 mb-6 hover:underline">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Doctors
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Doctor Header */}
          <div className="bg-medical-50 p-6 md:p-8 border-b">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:mr-8 mb-6 md:mb-0">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-40 h-40 rounded-full object-cover border-4 border-white shadow"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h1 className="text-3xl font-bold mb-2 md:mb-0">{doctor.name}</h1>
                  <Badge className="bg-medical-600 self-start md:self-auto">
                    {doctor.specialty}
                  </Badge>
                </div>
                
                <div className="flex items-center mb-3">
                  <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-gray-600">{doctor.address}</span>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center">
                    <div className="flex items-center text-yellow-500 mr-1">
                      <Star className="fill-yellow-500 stroke-yellow-500 h-4 w-4" />
                      <span className="ml-1 font-medium">{doctor.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({doctor.reviews} reviews)</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Badge variant="outline" className="border-medical-200 text-medical-700 bg-medical-50">
                      {doctor.experience} years experience
                    </Badge>
                  </div>
                  
                  <div className="font-semibold text-gray-900">
                    Consultation fee: ₹{doctor.fee}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Doctor Content */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 order-2 md:order-1">
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">About</h2>
                  <p className="text-gray-700">
                    {doctor.bio}
                  </p>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Specializations</h2>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-medical-100 text-medical-700 hover:bg-medical-200">
                      {doctor.specialty}
                    </Badge>
                    <Badge className="bg-medical-100 text-medical-700 hover:bg-medical-200">
                      General Medicine
                    </Badge>
                    <Badge className="bg-medical-100 text-medical-700 hover:bg-medical-200">
                      Consultation
                    </Badge>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-4">Education & Experience</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-medical-100 text-medical-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold">Senior {doctor.specialty}</h3>
                        <p className="text-gray-500">Apollo Hospital, {doctor.city}</p>
                        <p className="text-gray-500">2018 - Present</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-medical-100 text-medical-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold">MD in {doctor.specialty}</h3>
                        <p className="text-gray-500">AIIMS, New Delhi</p>
                        <p className="text-gray-500">2012 - 2016</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-medical-100 text-medical-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold">MBBS</h3>
                        <p className="text-gray-500">Maulana Azad Medical College</p>
                        <p className="text-gray-500">2006 - 2012</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-1 order-1 md:order-2">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-medical-600 mr-2" />
                      <span>{doctor.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-medical-600 mr-2" />
                      <span>{doctor.email}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-medical-50 p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-lg font-semibold mb-4">Availability</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-medical-600 mr-2" />
                      <span>{doctor.availability.days.join(", ")}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-medical-600 mr-2" />
                      <span>{doctor.availability.hours}</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-medical-600 hover:bg-medical-700 mb-4"
                  onClick={handleBookAppointment}
                >
                  Book Appointment
                </Button>
                <Button variant="outline" className="w-full border-medical-600 text-medical-600 hover:bg-medical-50">
                  Contact Clinic
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DoctorDetail;
