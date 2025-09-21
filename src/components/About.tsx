import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Code, Gamepad2, Zap, DollarSign } from "lucide-react";

const About = () => {
  const handleFreelancerProfile = () => {
    window.open("https://www.freelancer.com/u/AliR7869", "_blank");
  };

  const skills = [
    { icon: Code, name: "C# / C++", description: "Advanced programming" },
    { icon: Gamepad2, name: "Unity 3D", description: "Game development" },
    { icon: Zap, name: "Mobile Optimization", description: "Performance tuning" },
    { icon: DollarSign, name: "Ads Integration", description: "AdMob, AppLovin, Integral Ads, Unity Ads" },
  ];

  const companies = [
    "Game District", "Be Pro Games", "Evantus Sol", "Nicko Games", "The Secret Society"
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a Unity Developer with experience at{" "}
              {companies.map((company, index) => (
                <span key={company} className="text-primary font-medium">
                  {company}
                  {index < companies.length - 1 && index < companies.length - 2 ? ", " : ""}
                  {index === companies.length - 2 ? ", and " : ""}
                </span>
              ))}. 
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Skilled in C#/C++, Unity 3D, mobile optimization, multiplayer systems, shaders, AI, and comprehensive ads integration including AdMob, AppLovin, Integral Ads, and Unity Ads. 
              I have successfully published multiple games on Google Play, APKPure, and CaféBazaar stores.
            </p>

            <Button 
              onClick={handleFreelancerProfile}
              className="group px-6 py-3 mt-8"
            >
              <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              Watch my full profile at Freelancer
            </Button>
          </div>

          <div className="grid gap-6 animate-scale-in">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="project-card card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                      <p className="text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;