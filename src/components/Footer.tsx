import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, ExternalLink, ArrowRight } from "lucide-react";

const Footer = () => {
  const handleHireMe = () => {
    window.open("mailto:ali.raza.buo65@gmail.com", "_blank");
  };

  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=923054317407", "_blank");
  };

  const handleFreelancerProfile = () => {
    window.open("https://www.freelancer.com/u/AliR7869", "_blank");
  };

  return (
    <footer className="py-20 px-4 bg-card/50 border-t border-border">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-2">
            Let's build something unforgettable together
            <Heart className="h-6 w-6 text-red-500 fill-current animate-pulse" />
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to turn your game idea into reality? Let's connect and create magic!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            onClick={handleHireMe}
            className="hero-glow group px-8 py-4 text-lg font-semibold"
          >
            Hire Me
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            onClick={handleWhatsApp}
            className="px-8 py-4 text-lg font-semibold border-primary/30 hover:border-primary"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp Me
          </Button>
          
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={handleFreelancerProfile}
            className="px-8 py-4 text-lg font-semibold"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Freelancer Profile
          </Button>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-muted-foreground mb-4">
            Unity 3D Developer • Game Producer • 5+ Years Experience
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 Ali Raza. Built with ❤️ using React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;