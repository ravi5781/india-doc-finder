
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import SearchForm from "@/components/SearchForm";
import DoctorCard from "@/components/DoctorCard";
import { filterDoctors, Doctor } from "@/lib/data";

const DoctorsList = () => {
  const location = useLocation();
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const cityFilter = queryParams.get("city") || "";
    const specialtyFilter = queryParams.get("specialty") || "";
    
    // Simulate API delay
    setLoading(true);
    setTimeout(() => {
      const filteredDoctors = filterDoctors(cityFilter, specialtyFilter);
      setDoctors(filteredDoctors);
      setLoading(false);
    }, 500);
  }, [location.search]);
  
  return (
    <Layout>
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Find Doctors</h1>
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-xl font-semibold mb-4">Filter Options</h2>
            <SearchForm />
          </div>
          
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-medical-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              <p className="mt-4 text-gray-600">Loading doctors...</p>
            </div>
          ) : (
            <>
              <div className="mb-6 flex justify-between items-center">
                <p className="text-gray-600">
                  {doctors.length === 0
                    ? "No doctors found"
                    : `Found ${doctors.length} doctor${doctors.length === 1 ? "" : "s"}`}
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select className="border rounded py-1 px-2 text-sm">
                    <option>Relevance</option>
                    <option>Rating: High to Low</option>
                    <option>Fee: Low to High</option>
                    <option>Fee: High to Low</option>
                    <option>Experience</option>
                  </select>
                </div>
              </div>
              
              {doctors.length === 0 ? (
                <div className="bg-white rounded-lg shadow p-8 text-center">
                  <h3 className="text-xl font-semibold mb-2">No Doctors Found</h3>
                  <p className="text-gray-600">
                    Try adjusting your search filters to find doctors.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {doctors.map((doctor) => (
                    <DoctorCard key={doctor.id} doctor={doctor} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default DoctorsList;
