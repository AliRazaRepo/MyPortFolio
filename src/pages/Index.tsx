import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProjects";
import AllProjects from "@/components/AllProjects";
import Footer from "@/components/Footer";
import FloatingCharacters from "@/components/FloatingCharacters";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Hero />
      
      {/* Characters floating between sections */}
      <div className="relative">
        <FloatingCharacters section="about" />
        <About />
      </div>
      
      <div className="relative">
        <FloatingCharacters section="projects" />
        <FeaturedProjects />
      </div>
      
      <div className="relative">
        <FloatingCharacters section="all" />
        <AllProjects />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
