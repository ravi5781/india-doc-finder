
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-medical-600 mb-6">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-medical-600 hover:bg-medical-700">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
