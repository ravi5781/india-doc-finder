
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cities, specialties } from "@/lib/data";

const SearchForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  const [city, setCity] = useState(queryParams.get("city") || "");
  const [specialty, setSpecialty] = useState(queryParams.get("specialty") || "");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    
    if (city) params.append("city", city);
    if (specialty) params.append("specialty", specialty);
    
    navigate({
      pathname: "/doctors",
      search: params.toString(),
    });
  };
  
  // Clear filters
  const handleClear = () => {
    setCity("");
    setSpecialty("");
    navigate("/doctors");
  };
  
  return (
    <form onSubmit={handleSearch} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select value={city} onValueChange={setCity}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select City" />
          </SelectTrigger>
          <SelectContent>
            {cities.map((cityOption) => (
              <SelectItem key={cityOption.id} value={cityOption.id}>
                {cityOption.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select value={specialty} onValueChange={setSpecialty}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Specialty" />
          </SelectTrigger>
          <SelectContent>
            {specialties.map((specialtyOption) => (
              <SelectItem key={specialtyOption.id} value={specialtyOption.id}>
                {specialtyOption.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <div className="flex space-x-2">
          <Button 
            type="submit" 
            className="flex-1 bg-medical-600 hover:bg-medical-700"
          >
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
          <Button 
            type="button" 
            variant="outline" 
            onClick={handleClear}
            className="border-medical-600 text-medical-600 hover:bg-medical-50"
          >
            Clear
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
