import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Star } from "lucide-react";
import prisonGuardImg from "@/assets/project-prison-guard.jpg";
import toyBotsImg from "@/assets/project-toy-bots.jpg";
import laundryShopImg from "@/assets/project-laundry-shop.jpg";
import agentShooterImg from "@/assets/project-agent-shooter.jpg";
import colorPaintImg from "@/assets/project-color-paint.jpg";

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      title: "Prison Guard Survival Escape",
      description: "An immersive survival game with guard mechanics and escape scenarios",
      link: "https://play.google.com/store/apps/details?id=com.ar.prison.survival.police.escape.game",
      image: prisonGuardImg,
      highlighted: true
    },
    {
      title: "Bots Toy Story Fun Games",
      description: "Engaging toy-themed adventure game with bot characters",
      link: "https://play.google.com/store/apps/details?id=com.AdrenalineRush.Toyverse",
      image: toyBotsImg,
      highlighted: true
    },
    {
      title: "Laundry Shop Market Simulator",
      description: "Business simulation game managing a laundry shop",
      link: "https://play.google.com/store/apps/details?id=com.ar.b.rush",
      image: laundryShopImg,
      highlighted: false
    },
    {
      title: "Agent Shooter – Shooting Game",
      description: "Action-packed FPS with agent-based gameplay mechanics",
      link: "https://play.google.com/store/apps/details?id=com.sgs.sniper.agent.agenthunt.shootergame.snipergame.gun.game",
      image: agentShooterImg,
      highlighted: false
    },
    {
      title: "Color Paint ASMR Games",
      description: "Relaxing ASMR coloring game with satisfying paint mechanics",
      link: "https://play.google.com/store/apps/details?id=com.gss.paint.asmr.coloring.game.paintgame.colorgame",
      image: colorPaintImg,
      highlighted: false
    }
  ];

  const handleProjectClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <section id="featured" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            My best work - games that showcase technical excellence and engaging gameplay
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className={`project-card card-hover cursor-pointer group relative overflow-hidden ${
                project.highlighted ? 'ring-2 ring-primary/30' : ''
              }`}
              onClick={() => handleProjectClick(project.link)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {project.highlighted && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center space-x-1 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                    <Star className="h-3 w-3 fill-current" />
                    <span>Featured</span>
                  </div>
                </div>
              )}
              
              {/* Project Image */}
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-muted-foreground font-medium">
                    Unity 3D Game
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;