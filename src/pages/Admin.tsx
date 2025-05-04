
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
import { doctors, cities, specialties } from "@/lib/data";
import Layout from "@/components/Layout";

const Admin = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter doctors based on search term
  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.city.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleAddDoctor = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Doctor Added",
      description: "The new doctor has been added successfully.",
      duration: 3000,
    });
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
    toast({
      title: "Doctor Deleted",
      description: `Doctor with ID ${id} has been deleted successfully.`,
      duration: 3000,
    });
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
        
        <Tabs defaultValue="doctors">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="doctors">Manage Doctors</TabsTrigger>
            <TabsTrigger value="add">Add Doctor</TabsTrigger>
            <TabsTrigger value="import">Import CSV</TabsTrigger>
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
                                <Button variant="outline" size="sm">
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
                <CardTitle>Add New Doctor</CardTitle>
                <CardDescription>
                  Add a new doctor to the system by filling out the form below.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddDoctor} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Doctor Name</Label>
                      <Input id="name" placeholder="Dr. Full Name" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="specialty">Specialty</Label>
                      <Select>
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
                      <Select>
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
                      <Input id="address" placeholder="Clinic/Hospital Address" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Phone Number" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Email Address" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="fee">Consultation Fee (₹)</Label>
                      <Input id="fee" type="number" placeholder="Amount in INR" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="experience">Experience (Years)</Label>
                      <Input id="experience" type="number" placeholder="Years of Experience" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio/Description</Label>
                    <Textarea id="bio" placeholder="Doctor's bio and qualifications" rows={4} required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="image">Profile Image URL</Label>
                    <Input id="image" placeholder="https://example.com/image.jpg" />
                  </div>
                  
                  <Button type="submit" className="bg-medical-600 hover:bg-medical-700">
                    Add Doctor
                  </Button>
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
        </Tabs>
      </div>
    </Layout>
  );
};

export default Admin;
