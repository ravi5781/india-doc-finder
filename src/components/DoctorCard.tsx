
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Doctor } from "@/lib/data";

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-0">
        <div className="relative">
          <img 
            src={doctor.image} 
            alt={doctor.name} 
            className="w-full h-48 object-cover"
          />
          <Badge className="absolute top-2 right-2 bg-medical-600">
            {doctor.specialty}
          </Badge>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-1">{doctor.name}</h3>
          <p className="text-gray-500 mb-2">{doctor.city}</p>
          
          <div className="flex items-center mb-2">
            <div className="flex items-center text-yellow-500 mr-2">
              <Star className="fill-yellow-500 stroke-yellow-500 h-4 w-4" />
              <span className="ml-1 text-sm font-medium">{doctor.rating}</span>
            </div>
            <span className="text-sm text-gray-500">({doctor.reviews} reviews)</span>
          </div>
          
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">{doctor.experience} years exp</span>
            <span className="font-semibold text-medical-700">₹{doctor.fee}</span>
          </div>
          
          <p className="text-sm text-gray-600 line-clamp-2">
            {doctor.bio}
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button 
          variant="outline" 
          className="w-1/2 mr-2 border-medical-600 text-medical-600 hover:bg-medical-50"
        >
          <Link to={`/doctors/${doctor.id}`} className="w-full">
            View Profile
          </Link>
        </Button>
        <Button className="w-1/2 bg-medical-600 hover:bg-medical-700">
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DoctorCard;
