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

export interface Appointment {
  id: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  doctorId: string;
  doctorName: string;
  date: string;
  time: string;
  reason: string;
  notes: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
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

// This array will store all the doctors data
let doctorsData = [
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
  {
    id: "11",
    name: "Dr. Suresh Verma",
    specialty: "Cardiologist",
    city: "Mumbai",
    address: "808 Heart Institute, Powai, Mumbai",
    bio: "Dr. Verma specializes in interventional cardiology with a focus on heart valve disorders. With over 20 years of experience, he has performed more than 5000 cardiac procedures.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    fee: 2200,
    experience: 20,
    phone: "022-12345679",
    email: "dr.verma@example.com",
    availability: {
      days: ["Monday", "Wednesday", "Saturday"],
      hours: "8:00 AM - 2:00 PM",
    },
    rating: 4.9,
    reviews: 187,
  },
  {
    id: "12",
    name: "Dr. Divya Sharma",
    specialty: "Gynecologist",
    city: "Delhi",
    address: "909 Women's Clinic, Greater Kailash, Delhi",
    bio: "Dr. Sharma is a gynecologist with 12 years of experience specializing in high-risk pregnancies, infertility treatments, and women's reproductive health.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    fee: 1700,
    experience: 12,
    phone: "011-23456782",
    email: "dr.divya@example.com",
    availability: {
      days: ["Tuesday", "Thursday", "Friday"],
      hours: "11:00 AM - 7:00 PM",
    },
    rating: 4.8,
    reviews: 104,
  },
  {
    id: "13",
    name: "Dr. Rahul Kapoor",
    specialty: "Orthopedic",
    city: "Bangalore",
    address: "110 Joint Care Center, Koramangala, Bangalore",
    bio: "Dr. Kapoor is an orthopedic surgeon specialized in sports injuries, joint replacements, and spine surgeries with 16 years of practice.",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    fee: 1900,
    experience: 16,
    phone: "080-34567891",
    email: "dr.kapoor@example.com",
    availability: {
      days: ["Monday", "Wednesday", "Friday"],
      hours: "9:00 AM - 5:00 PM",
    },
    rating: 4.7,
    reviews: 132,
  },
  {
    id: "14",
    name: "Dr. Nisha Patel",
    specialty: "Dermatologist",
    city: "Ahmedabad",
    address: "111 Skin & Hair Clinic, Satellite, Ahmedabad",
    bio: "Dr. Patel has 11 years of experience in treating dermatological conditions, specializing in cosmetic dermatology, lasers, and hair restoration.",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    fee: 1400,
    experience: 11,
    phone: "079-45678901",
    email: "dr.nisha@example.com",
    availability: {
      days: ["Tuesday", "Thursday", "Saturday"],
      hours: "10:00 AM - 6:00 PM",
    },
    rating: 4.8,
    reviews: 95,
  },
  {
    id: "15",
    name: "Dr. Rohit Malhotra",
    specialty: "Dentist",
    city: "Pune",
    address: "212 Dental Square, Aundh, Pune",
    bio: "Dr. Malhotra is a cosmetic dentist with 13 years of experience in full-mouth rehabilitation, smile design, and implantology.",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    fee: 1300,
    experience: 13,
    phone: "020-56789012",
    email: "dr.rohit@example.com",
    availability: {
      days: ["Monday", "Wednesday", "Friday", "Saturday"],
      hours: "11:00 AM - 7:00 PM",
    },
    rating: 4.9,
    reviews: 108,
  },
  {
    id: "16",
    name: "Dr. Sunita Agarwal",
    specialty: "Ophthalmologist",
    city: "Chennai",
    address: "313 Eye Care Center, Adyar, Chennai",
    bio: "Dr. Agarwal is an ophthalmologist with 19 years of experience specializing in retinal surgeries, glaucoma treatment, and LASIK procedures.",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
    fee: 1800,
    experience: 19,
    phone: "044-67890123",
    email: "dr.sunita@example.com",
    availability: {
      days: ["Tuesday", "Thursday", "Saturday"],
      hours: "9:00 AM - 3:00 PM",
    },
    rating: 4.7,
    reviews: 142,
  },
  {
    id: "17",
    name: "Dr. Jayant Desai",
    specialty: "Neurologist",
    city: "Mumbai",
    address: "414 Brain Care Institute, Andheri, Mumbai",
    bio: "Dr. Desai is a neurologist with 17 years of experience specializing in epilepsy, movement disorders, and neuro-rehabilitation.",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    fee: 2100,
    experience: 17,
    phone: "022-78901234",
    email: "dr.desai@example.com",
    availability: {
      days: ["Monday", "Wednesday", "Friday"],
      hours: "10:00 AM - 6:00 PM",
    },
    rating: 4.8,
    reviews: 119,
  },
  {
    id: "18",
    name: "Dr. Swati Mishra",
    specialty: "Pediatrician",
    city: "Hyderabad",
    address: "515 Children's Hospital, Banjara Hills, Hyderabad",
    bio: "Dr. Mishra is a pediatrician with 14 years of experience specializing in neonatal care, developmental pediatrics, and childhood infections.",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    fee: 1500,
    experience: 14,
    phone: "040-89012345",
    email: "dr.mishra@example.com",
    availability: {
      days: ["Tuesday", "Thursday", "Saturday"],
      hours: "9:30 AM - 5:30 PM",
    },
    rating: 4.9,
    reviews: 138,
  },
  {
    id: "19",
    name: "Dr. Alok Gupta",
    specialty: "ENT Specialist",
    city: "Kolkata",
    address: "616 ENT Care Center, Salt Lake, Kolkata",
    bio: "Dr. Gupta is an ENT specialist with 16 years of experience in treating ear infections, sinus disorders, and performing cochlear implant surgeries.",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    fee: 1600,
    experience: 16,
    phone: "033-90123456",
    email: "dr.gupta@example.com",
    availability: {
      days: ["Monday", "Wednesday", "Friday"],
      hours: "10:00 AM - 4:00 PM",
    },
    rating: 4.7,
    reviews: 92,
  },
  {
    id: "20",
    name: "Dr. Meenakshi Reddy",
    specialty: "Psychiatrist",
    city: "Bangalore",
    address: "717 Mind Wellness Center, Jayanagar, Bangalore",
    bio: "Dr. Reddy is a psychiatrist with 15 years of experience treating mood disorders, anxiety, ADHD, and providing psychotherapy for a range of mental health conditions.",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
    fee: 1800,
    experience: 15,
    phone: "080-01234567",
    email: "dr.meenakshi@example.com",
    availability: {
      days: ["Tuesday", "Thursday", "Friday"],
      hours: "11:00 AM - 7:00 PM",
    },
    rating: 4.8,
    reviews: 105,
  },
];

// Sample appointments data
let appointmentsData = [
  {
    id: "a1",
    patientName: "Raj Kumar",
    patientPhone: "9876543210",
    patientEmail: "raj@example.com",
    doctorId: "1",
    doctorName: "Dr. Anil Sharma",
    date: "2025-05-10",
    time: "10:30 AM",
    reason: "Regular checkup",
    notes: "Patient has a history of high blood pressure",
    status: "pending",
    createdAt: "2025-05-04T10:30:00Z"
  },
  {
    id: "a2",
    patientName: "Priya Singh",
    patientPhone: "8765432109",
    patientEmail: "priya@example.com",
    doctorId: "2",
    doctorName: "Dr. Priya Patel",
    date: "2025-05-12",
    time: "11:00 AM",
    reason: "Skin rash",
    notes: "Patient is allergic to penicillin",
    status: "approved",
    createdAt: "2025-05-03T15:45:00Z"
  },
  {
    id: "a3",
    patientName: "Amit Verma",
    patientPhone: "7654321098",
    patientEmail: "amit@example.com",
    doctorId: "5",
    doctorName: "Dr. Vikram Singh",
    date: "2025-05-15",
    time: "09:15 AM",
    reason: "Headache and dizziness",
    notes: "",
    status: "pending",
    createdAt: "2025-05-04T09:20:00Z"
  },
  {
    id: "a4",
    patientName: "Sneha Gupta",
    patientPhone: "6543210987",
    patientEmail: "sneha@example.com",
    doctorId: "6",
    doctorName: "Dr. Meera Iyer",
    date: "2025-05-11",
    time: "02:30 PM",
    reason: "Routine gynecological checkup",
    notes: "First visit",
    status: "rejected",
    createdAt: "2025-05-02T14:10:00Z"
  },
  {
    id: "a5",
    patientName: "Vikash Sharma",
    patientPhone: "5432109876",
    patientEmail: "vikash@example.com",
    doctorId: "3",
    doctorName: "Dr. Rajesh Kumar",
    date: "2025-05-14",
    time: "04:00 PM",
    reason: "Child vaccination",
    notes: "6-month vaccines due",
    status: "approved",
    createdAt: "2025-05-01T16:30:00Z"
  }
];

// Export the doctors array from the data
export const doctors = doctorsData;

// Export the appointments array
export const appointments = appointmentsData;

// Add a new doctor to the data
export const addDoctor = (doctor: Doctor) => {
  doctorsData = [doctor, ...doctorsData];
  return doctor;
};

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

// Add a new appointment to the data
export const addAppointment = (appointment: Appointment) => {
  appointmentsData = [appointment, ...appointmentsData];
  return appointment;
};

// Update appointment status
export const updateAppointmentStatus = (id: string, status: 'pending' | 'approved' | 'rejected') => {
  appointmentsData = appointmentsData.map(appointment => 
    appointment.id === id ? { ...appointment, status } : appointment
  );
};

// Get appointments by doctor ID
export const getAppointmentsByDoctorId = (doctorId: string) => {
  return appointmentsData.filter(appointment => appointment.doctorId === doctorId);
};
