import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
const Hero = () => {
  const handleHireMe = () => {
    window.open("mailto:ali.raza.buo65@gmail.com", "_blank");
  };
  const handleWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=923054317407", "_blank");
  };
  const handleFreelancer = () => {
    window.open("https://www.freelancer.com/u/AliR7869", "_blank");
  };
  return <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* GTA-style animated sky background */}
      <div className="absolute inset-0 gta-sky" />
      
      {/* Animated clouds */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="cloud cloud-1" />
        <div className="cloud cloud-2" />
        <div className="cloud cloud-3" />
      </div>
      
      {/* Flying birds */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bird bird-1">◦◦</div>
        <div className="bird bird-2">◦◦◦</div>
        <div className="bird bird-3">◦◦</div>
        <div className="bird bird-4">◦</div>
        <div className="bird bird-5">◦◦◦◦</div>
      </div>
      
      {/* Gaming Characters */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="character robot-char">🤖</div>
        <div className="character ninja-char">🥷</div>
        <div className="character warrior-char">⚔️</div>
        <div className="character mage-char">🧙‍♂️</div>
        <div className="character archer-char">🏹</div>
      </div>
      
      {/* Atmospheric particles effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-2 h-2 bg-primary/30 rounded-full animate-bounce" style={{
        animationDelay: '0s',
        animationDuration: '3s'
      }} />
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-accent/40 rounded-full animate-bounce" style={{
        animationDelay: '1s',
        animationDuration: '4s'
      }} />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-bounce" style={{
        animationDelay: '2s',
        animationDuration: '5s'
      }} />
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-accent/30 rounded-full animate-bounce" style={{
        animationDelay: '0.5s',
        animationDuration: '3.5s'
      }} />
      </div>
      
      {/* Atmospheric glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground">Ali Raza</span>
            <span className="block gradient-text">Unity Game Developer/ Game Designer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            who turns ideas into fun, engaging games
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            With 5+ years of experience, I have developed 25+ games ranging from simulators to FPS shooters, 
            puzzle games, and open-world systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button size="lg" onClick={handleHireMe} className="hero-glow group px-8 py-4 text-lg font-semibold">
              Hire Me
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" onClick={handleWhatsApp} className="px-8 py-4 text-lg font-semibold border-primary/30 hover:border-primary">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Me
            </Button>

            <Button variant="secondary" size="lg" onClick={handleFreelancer} className="px-8 py-4 text-lg font-semibold">
              Hire on Freelancer.com
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;