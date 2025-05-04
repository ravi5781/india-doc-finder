
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { doctors, cities, specialties, addDoctor, appointments } from "@/lib/data";
import Layout from "@/components/Layout";
import { v4 as uuidv4 } from 'uuid';
import { Check, X } from "lucide-react";

const Admin = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [doctorsList, setDoctorsList] = useState(doctors);
  const [appointmentsList, setAppointmentsList] = useState(appointments);
  const [isEditing, setIsEditing] = useState(false);
  
  // Form state
  const [newDoctor, setNewDoctor] = useState({
    id: "",
    name: "",
    specialty: "",
    city: "",
    address: "",
    phone: "",
    email: "",
    fee: "",
    experience: "",
    bio: "",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  });
  
  // Filter doctors based on search term
  const filteredDoctors = doctorsList.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.city.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setNewDoctor({
      ...newDoctor,
      [id]: value,
    });
  };
  
  const handleSelectChange = (field: string, value: string) => {
    setNewDoctor({
      ...newDoctor,
      [field]: value,
    });
  };
  
  const handleAddDoctor = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!newDoctor.name || !newDoctor.specialty || !newDoctor.city) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    // Create new doctor object
    const doctorToAdd = {
      id: isEditing ? newDoctor.id : uuidv4(),
      name: newDoctor.name,
      specialty: specialties.find(s => s.id === newDoctor.specialty)?.name || newDoctor.specialty,
      city: cities.find(c => c.id === newDoctor.city)?.name || newDoctor.city,
      address: newDoctor.address,
      bio: newDoctor.bio || `${newDoctor.name} is a healthcare professional specializing in ${newDoctor.specialty}.`,
      image: newDoctor.image || "https://randomuser.me/api/portraits/men/1.jpg",
      fee: parseInt(newDoctor.fee) || 1000,
      experience: parseInt(newDoctor.experience) || 5,
      phone: newDoctor.phone,
      email: newDoctor.email,
      availability: {
        days: ["Monday", "Wednesday", "Friday"],
        hours: "10:00 AM - 4:00 PM",
      },
      rating: 4.5,
      reviews: 0,
    };
    
    if (isEditing) {
      // Update existing doctor
      const updatedList = doctorsList.map(doctor => 
        doctor.id === doctorToAdd.id ? doctorToAdd : doctor
      );
      setDoctorsList(updatedList);
      
      toast({
        title: "Doctor Updated",
        description: "The doctor information has been updated successfully.",
        duration: 3000,
      });
      setIsEditing(false);
    } else {
      // Add new doctor
      setDoctorsList([doctorToAdd, ...doctorsList]);
      addDoctor(doctorToAdd);
      
      toast({
        title: "Doctor Added",
        description: "The new doctor has been added successfully.",
        duration: 3000,
      });
    }
    
    // Reset form
    setNewDoctor({
      id: "",
      name: "",
      specialty: "",
      city: "",
      address: "",
      phone: "",
      email: "",
      fee: "",
      experience: "",
      bio: "",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    });
  };
  
  const handleEditDoctor = (doctor: any) => {
    // Find specialty and city IDs from names
    const specialtyId = specialties.find(s => s.name === doctor.specialty)?.id || "";
    const cityId = cities.find(c => c.name === doctor.city)?.id || "";
    
    setNewDoctor({
      id: doctor.id,
      name: doctor.name,
      specialty: specialtyId,
      city: cityId,
      address: doctor.address,
      phone: doctor.phone,
      email: doctor.email,
      fee: doctor.fee.toString(),
      experience: doctor.experience.toString(),
      bio: doctor.bio,
      image: doctor.image,
    });
    
    setIsEditing(true);
    
    // Switch to Add Doctor tab
    document.querySelector('[data-value="add"]')?.dispatchEvent(
      new MouseEvent("click", { bubbles: true })
    );
  };
  
  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "CSV Uploaded",
      description: "Your CSV file has been uploaded and processed successfully.",
      duration: 3000,
    });
  };
  
  const handleDeleteDoctor = (id: string) => {
    const updatedDoctors = doctorsList.filter(doctor => doctor.id !== id);
    setDoctorsList(updatedDoctors);
    
    toast({
      title: "Doctor Deleted",
      description: `Doctor with ID ${id} has been deleted successfully.`,
      duration: 3000,
    });
  };
  
  const handleCancelEdit = () => {
    setIsEditing(false);
    setNewDoctor({
      id: "",
      name: "",
      specialty: "",
      city: "",
      address: "",
      phone: "",
      email: "",
      fee: "",
      experience: "",
      bio: "",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    });
  };
  
  const handleUpdateAppointmentStatus = (id: string, status: 'approved' | 'rejected') => {
    const updatedAppointments = appointmentsList.map(appointment => 
      appointment.id === id ? { ...appointment, status } : appointment
    );
    
    setAppointmentsList(updatedAppointments);
    
    toast({
      title: `Appointment ${status === 'approved' ? 'Approved' : 'Rejected'}`,
      description: `The appointment has been ${status}.`,
      duration: 3000,
    });
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
        
        <Tabs defaultValue="doctors">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="doctors">Manage Doctors</TabsTrigger>
            <TabsTrigger value="add">Add Doctor</TabsTrigger>
            <TabsTrigger value="import">Import CSV</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
          </TabsList>
          
          {/* Manage Doctors Tab */}
          <TabsContent value="doctors">
            <Card>
              <CardHeader>
                <CardTitle>Doctors Database</CardTitle>
                <CardDescription>
                  View, edit and manage all doctors in the system.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <Label htmlFor="search">Search</Label>
                  <Input
                    id="search"
                    placeholder="Search by name, specialty or city..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="border rounded-md overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Specialty</TableHead>
                        <TableHead>City</TableHead>
                        <TableHead>Fee</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredDoctors.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center py-8">
                            No doctors found matching your search.
                          </TableCell>
                        </TableRow>
                      ) : (
                        filteredDoctors.map((doctor) => (
                          <TableRow key={doctor.id}>
                            <TableCell className="font-medium">{doctor.name}</TableCell>
                            <TableCell>{doctor.specialty}</TableCell>
                            <TableCell>{doctor.city}</TableCell>
                            <TableCell>₹{doctor.fee}</TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleEditDoctor(doctor)}
                                >
                                  Edit
                                </Button>
                                <Button 
                                  variant="destructive" 
                                  size="sm"
                                  onClick={() => handleDeleteDoctor(doctor.id)}
                                >
                                  Delete
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Add Doctor Tab */}
          <TabsContent value="add">
            <Card>
              <CardHeader>
                <CardTitle>{isEditing ? "Edit Doctor" : "Add New Doctor"}</CardTitle>
                <CardDescription>
                  {isEditing 
                    ? "Edit doctor information in the system by updating the form below." 
                    : "Add a new doctor to the system by filling out the form below."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddDoctor} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Doctor Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Dr. Full Name" 
                        value={newDoctor.name}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="specialty">Specialty</Label>
                      <Select
                        value={newDoctor.specialty}
                        onValueChange={(value) => handleSelectChange("specialty", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select specialty" />
                        </SelectTrigger>
                        <SelectContent>
                          {specialties.map((specialty) => (
                            <SelectItem key={specialty.id} value={specialty.id}>
                              {specialty.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Select
                        value={newDoctor.city}
                        onValueChange={(value) => handleSelectChange("city", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent>
                          {cities.map((city) => (
                            <SelectItem key={city.id} value={city.id}>
                              {city.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input 
                        id="address" 
                        placeholder="Clinic/Hospital Address" 
                        value={newDoctor.address}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        placeholder="Phone Number" 
                        value={newDoctor.phone}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Email Address" 
                        value={newDoctor.email}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="fee">Consultation Fee (₹)</Label>
                      <Input 
                        id="fee" 
                        type="number" 
                        placeholder="Amount in INR" 
                        value={newDoctor.fee}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="experience">Experience (Years)</Label>
                      <Input 
                        id="experience" 
                        type="number" 
                        placeholder="Years of Experience" 
                        value={newDoctor.experience}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio/Description</Label>
                    <Textarea 
                      id="bio" 
                      placeholder="Doctor's bio and qualifications" 
                      rows={4} 
                      value={newDoctor.bio}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="image">Profile Image URL</Label>
                    <Input 
                      id="image" 
                      placeholder="https://example.com/image.jpg" 
                      value={newDoctor.image}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button type="submit" className="bg-medical-600 hover:bg-medical-700">
                      {isEditing ? "Update Doctor" : "Add Doctor"}
                    </Button>
                    
                    {isEditing && (
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Import CSV Tab */}
          <TabsContent value="import">
            <Card>
              <CardHeader>
                <CardTitle>Bulk Import Doctors</CardTitle>
                <CardDescription>
                  Upload a CSV file to add multiple doctors at once.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUpload} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="csv">CSV File</Label>
                    <div className="flex items-center gap-4">
                      <Input id="csv" type="file" accept=".csv" />
                      <Button type="button" variant="outline">
                        Download Template
                      </Button>
                    </div>
                    <p className="text-sm text-gray-500">
                      The CSV file should include columns for name, specialty, city, address, etc.
                    </p>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
                    <h3 className="font-semibold text-amber-800 mb-2">Notes on CSV Import</h3>
                    <ul className="list-disc list-inside text-amber-700 space-y-1 text-sm">
                      <li>The first row should contain column headers.</li>
                      <li>Required columns: name, specialty, city, address, phone, email, fee</li>
                      <li>Specialty must match one of the available specialties in the system.</li>
                      <li>City must match one of the available cities in the system.</li>
                      <li>Images can be referenced by URL in the 'image' column.</li>
                    </ul>
                  </div>
                  
                  <Button type="submit" className="bg-medical-600 hover:bg-medical-700">
                    Upload and Process CSV
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Appointments Tab */}
          <TabsContent value="appointments">
            <Card>
              <CardHeader>
                <CardTitle>Manage Appointments</CardTitle>
                <CardDescription>
                  View and manage all patient appointments in the system.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-md overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Patient</TableHead>
                        <TableHead>Doctor</TableHead>
                        <TableHead>Date & Time</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {appointmentsList.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center py-8">
                            No appointments found.
                          </TableCell>
                        </TableRow>
                      ) : (
                        appointmentsList.map((appointment) => (
                          <TableRow key={appointment.id}>
                            <TableCell className="font-medium">
                              {appointment.patientName}
                              <div className="text-xs text-gray-500">
                                {appointment.patientPhone}
                              </div>
                            </TableCell>
                            <TableCell>{appointment.doctorName}</TableCell>
                            <TableCell>
                              {appointment.date}
                              <div className="text-xs text-gray-500">
                                {appointment.time}
                              </div>
                            </TableCell>
                            <TableCell>
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                appointment.status === 'approved' ? 'bg-green-100 text-green-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                              </span>
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                {appointment.status === 'pending' && (
                                  <>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="bg-green-50 text-green-600 border-green-200 hover:bg-green-100"
                                      onClick={() => handleUpdateAppointmentStatus(appointment.id, 'approved')}
                                    >
                                      <Check className="w-4 h-4 mr-1" /> Approve
                                    </Button>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="bg-red-50 text-red-600 border-red-200 hover:bg-red-100"
                                      onClick={() => handleUpdateAppointmentStatus(appointment.id, 'rejected')}
                                    >
                                      <X className="w-4 h-4 mr-1" /> Reject
                                    </Button>
                                  </>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Admin;
