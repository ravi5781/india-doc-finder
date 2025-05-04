
export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  city: string;
  address: string;
  bio: string;
  image: string;
  fee: number;
  experience: number;
  phone: string;
  email: string;
  availability: {
    days: string[];
    hours: string;
  };
  rating: number;
  reviews: number;
}

export interface City {
  id: string;
  name: string;
}

export interface Specialty {
  id: string;
  name: string;
}

export const cities: City[] = [
  { id: "delhi", name: "Delhi" },
  { id: "mumbai", name: "Mumbai" },
  { id: "chennai", name: "Chennai" },
  { id: "kolkata", name: "Kolkata" },
  { id: "bangalore", name: "Bangalore" },
  { id: "hyderabad", name: "Hyderabad" },
  { id: "ahmedabad", name: "Ahmedabad" },
  { id: "pune", name: "Pune" },
];

export const specialties: Specialty[] = [
  { id: "cardiologist", name: "Cardiologist" },
  { id: "dermatologist", name: "Dermatologist" },
  { id: "pediatrician", name: "Pediatrician" },
  { id: "orthopedic", name: "Orthopedic" },
  { id: "neurologist", name: "Neurologist" },
  { id: "psychiatrist", name: "Psychiatrist" },
  { id: "gynecologist", name: "Gynecologist" },
  { id: "ophthalmologist", name: "Ophthalmologist" },
  { id: "dentist", name: "Dentist" },
  { id: "ent", name: "ENT Specialist" },
];

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Anil Sharma",
    specialty: "Cardiologist",
    city: "Delhi",
    address: "123 Heart Center, Connaught Place, Delhi",
    bio: "Dr. Sharma is a leading cardiologist with over 15 years of experience in treating heart diseases. He specializes in interventional cardiology and heart failure management.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    fee: 1500,
    experience: 15,
    phone: "011-12345678",
    email: "dr.sharma@example.com",
    availability: {
      days: ["Monday", "Wednesday", "Friday"],
      hours: "10:00 AM - 4:00 PM",
    },
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "2",
    name: "Dr. Priya Patel",
    specialty: "Dermatologist",
    city: "Mumbai",
    address: "456 Skin Clinic, Bandra West, Mumbai",
    bio: "Dr. Patel is a board-certified dermatologist specializing in cosmetic dermatology and skin cancer treatment with over 10 years of clinical experience.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    fee: 1200,
    experience: 10,
    phone: "022-23456789",
    email: "dr.patel@example.com",
    availability: {
      days: ["Tuesday", "Thursday", "Saturday"],
      hours: "11:00 AM - 7:00 PM",
    },
    rating: 4.9,
    reviews: 98,
  },
  {
    id: "3",
    name: "Dr. Rajesh Kumar",
    specialty: "Pediatrician",
    city: "Bangalore",
    address: "789 Children's Hospital, Indiranagar, Bangalore",
    bio: "Dr. Kumar has been practicing pediatric medicine for 12 years with special focus on childhood development and infectious diseases.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    fee: 1000,
    experience: 12,
    phone: "080-34567890",
    email: "dr.kumar@example.com",
    availability: {
      days: ["Monday", "Tuesday", "Thursday", "Friday"],
      hours: "9:00 AM - 5:00 PM",
    },
    rating: 4.7,
    reviews: 156,
  },
  {
    id: "4",
    name: "Dr. Sanjana Reddy",
    specialty: "Orthopedic",
    city: "Chennai",
    address: "101 Bone & Joint Center, Anna Nagar, Chennai",
    bio: "Dr. Reddy is an orthopedic surgeon with expertise in joint replacement surgeries and sports medicine with 14 years of experience.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    fee: 1800,
    experience: 14,
    phone: "044-45678901",
    email: "dr.reddy@example.com",
    availability: {
      days: ["Monday", "Wednesday", "Friday", "Saturday"],
      hours: "10:30 AM - 6:30 PM",
    },
    rating: 4.6,
    reviews: 87,
  },
  {
    id: "5",
    name: "Dr. Vikram Singh",
    specialty: "Neurologist",
    city: "Kolkata",
    address: "202 Brain & Nerve Center, Park Street, Kolkata",
    bio: "Dr. Singh has 18 years of experience in diagnosing and treating complex neurological disorders including stroke, epilepsy, and multiple sclerosis.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    fee: 2000,
    experience: 18,
    phone: "033-56789012",
    email: "dr.singh@example.com",
    availability: {
      days: ["Tuesday", "Thursday", "Saturday"],
      hours: "9:00 AM - 3:00 PM",
    },
    rating: 4.9,
    reviews: 112,
  },
  {
    id: "6",
    name: "Dr. Meera Iyer",
    specialty: "Gynecologist",
    city: "Hyderabad",
    address: "303 Women's Health Center, Jubilee Hills, Hyderabad",
    bio: "Dr. Iyer is a gynecologist with 16 years of experience specializing in women's reproductive health, fertility treatments, and minimally invasive surgeries.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    fee: 1600,
    experience: 16,
    phone: "040-67890123",
    email: "dr.iyer@example.com",
    availability: {
      days: ["Monday", "Wednesday", "Friday"],
      hours: "10:00 AM - 6:00 PM",
    },
    rating: 4.8,
    reviews: 145,
  },
  {
    id: "7",
    name: "Dr. Amitabh Gupta",
    specialty: "Psychiatrist",
    city: "Delhi",
    address: "404 Mind Wellness Clinic, Hauz Khas, Delhi",
    bio: "Dr. Gupta is a psychiatrist with 13 years of experience helping patients with anxiety, depression, and other mental health conditions through therapy and medication management.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    fee: 1800,
    experience: 13,
    phone: "011-78901234",
    email: "dr.gupta@example.com",
    availability: {
      days: ["Monday", "Tuesday", "Thursday"],
      hours: "11:00 AM - 7:00 PM",
    },
    rating: 4.7,
    reviews: 89,
  },
  {
    id: "8",
    name: "Dr. Lakshmi Nair",
    specialty: "Ophthalmologist",
    city: "Mumbai",
    address: "505 Eye Care Center, Colaba, Mumbai",
    bio: "Dr. Nair is an ophthalmologist with 11 years of experience specializing in cataract surgeries, LASIK procedures, and treatment of retinal diseases.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    fee: 1400,
    experience: 11,
    phone: "022-89012345",
    email: "dr.nair@example.com",
    availability: {
      days: ["Tuesday", "Wednesday", "Friday", "Saturday"],
      hours: "9:30 AM - 5:30 PM",
    },
    rating: 4.8,
    reviews: 102,
  },
  {
    id: "9",
    name: "Dr. Farhan Ahmed",
    specialty: "Dentist",
    city: "Bangalore",
    address: "606 Dental Studio, Koramangala, Bangalore",
    bio: "Dr. Ahmed is a dentist with 9 years of experience specializing in cosmetic dentistry, root canals, and dental implants.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    fee: 1100,
    experience: 9,
    phone: "080-90123456",
    email: "dr.ahmed@example.com",
    availability: {
      days: ["Monday", "Wednesday", "Thursday", "Saturday"],
      hours: "10:00 AM - 8:00 PM",
    },
    rating: 4.6,
    reviews: 78,
  },
  {
    id: "10",
    name: "Dr. Kavita Menon",
    specialty: "ENT Specialist",
    city: "Chennai",
    address: "707 ENT Center, T Nagar, Chennai",
    bio: "Dr. Menon is an ENT specialist with 14 years of experience in diagnosing and treating conditions related to the ear, nose, and throat, including sinus issues and sleep apnea.",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    fee: 1300,
    experience: 14,
    phone: "044-01234567",
    email: "dr.menon@example.com",
    availability: {
      days: ["Tuesday", "Thursday", "Friday", "Saturday"],
      hours: "9:00 AM - 5:00 PM",
    },
    rating: 4.7,
    reviews: 112,
  },
];

// Export a function to filter doctors
export const filterDoctors = (cityFilter: string = "", specialtyFilter: string = "") => {
  return doctors.filter(
    (doctor) =>
      (cityFilter === "" || doctor.city.toLowerCase() === cityFilter.toLowerCase()) &&
      (specialtyFilter === "" || doctor.specialty.toLowerCase() === specialtyFilter.toLowerCase())
  );
};

// Export a function to get a doctor by ID
export const getDoctorById = (id: string): Doctor | undefined => {
  return doctors.find((doctor) => doctor.id === id);
};
