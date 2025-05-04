
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-medical-600">FindMyDoc</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className="text-sm font-medium transition-colors hover:text-medical-600"
          >
            Home
          </Link>
          <Link 
            to="/doctors" 
            className="text-sm font-medium transition-colors hover:text-medical-600"
          >
            Find Doctors
          </Link>
          <Link 
            to="/admin" 
            className="text-sm font-medium transition-colors hover:text-medical-600"
          >
            Admin
          </Link>
          <Button asChild className="bg-medical-600 hover:bg-medical-700">
            <Link to="/doctors">
              Book Appointment
            </Link>
          </Button>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <Button 
          variant="ghost" 
          className="p-0 md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>
        
        {/* Mobile Navigation Menu */}
        <div className={cn(
          "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden",
          isMenuOpen ? "slide-in-from-top-80" : "hidden"
        )}>
          <div className="relative z-20 grid gap-6 rounded-md bg-background p-4 shadow-md">
            <Link 
              to="/" 
              className="flex items-center py-2 text-lg font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/doctors" 
              className="flex items-center py-2 text-lg font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Doctors
            </Link>
            <Link 
              to="/admin" 
              className="flex items-center py-2 text-lg font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Admin
            </Link>
            <Button asChild className="bg-medical-600 hover:bg-medical-700">
              <Link 
                to="/doctors"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
