import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useMemo } from "react";
import antiTerrorismImg from "@/assets/project-anti-terrorism-robot.jpg";
import rescuePrincessImg from "@/assets/project-rescue-princess.jpg";
import pizzaDeliveryImg from "@/assets/project-pizza-delivery.jpg";
import policeBusRobotImg from "@/assets/project-police-bus-robot.jpg";
import armyTruckRobotImg from "@/assets/project-army-truck-robot.jpg";
import horseRobotImg from "@/assets/project-horse-robot.jpg";
import tukTukImg from "@/assets/project-tuk-tuk.jpg";
import virtualGrannyImg from "@/assets/project-virtual-granny.jpg";
import slingshotMasterImg from "@/assets/project-slingshot-master.jpg";
import armyCommandoImg from "@/assets/project-army-commando.jpg";
import farmingSimImg from "@/assets/project-farming-sim.jpg";
import dragonRobotBikeImg from "@/assets/project-dragon-robot-bike.jpg";
import crocodileRobotImg from "@/assets/project-crocodile-robot.jpg";
import excavatorRobotImg from "@/assets/project-excavator-robot.jpg";
import multiRobotImg from "@/assets/project-multi-robot.jpg";
import yozzarImg from "@/assets/project-yozzar.jpg";
import carParkingImg from "@/assets/project-car-parking.jpg";
import shooting2023Img from "@/assets/project-shooting-2023.jpg";
import metroBusImg from "@/assets/project-metro-bus.jpg";
import jetFighterImg from "@/assets/project-jet-fighter.jpg";
import jamMasterImg from "@/assets/project-jam-master.jpg";
import gunSimulatorImg from "@/assets/project-gun-simulator.jpg";
import cityTruckImg from "@/assets/project-city-truck.jpg";

const AllProjects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const allProjects = [
    {
      title: "Anti-Terrorism Robot Shooting Game",
      description: "FPS shooter with robot combat mechanics",
      link: "https://m.apkpure.com/anti-terrorism-robot-shooting-game-fps-shooter/com.ibs.robot.warrior.counter.terrorist.shooting",
      image: antiTerrorismImg,
      category: "Action"
    },
    {
      title: "Rescue Princess Rope Cut Game",
      description: "Puzzle game with rope cutting mechanics",
      link: "https://apkpure.net/rescue-princess-rope-cut-game/com.sgs.cutropegame.ropegame.rescuegames.rescueprincess.puzzlerope",
      image: rescuePrincessImg,
      category: "Puzzle"
    },
    {
      title: "Pizza Delivery Boy",
      description: "Simulation game about pizza delivery service",
      link: "https://apkpure.net/pizza-delivery-boy/com.obg.pizzadeliveryboy.deliveryboy.pizzagames.pizzadelivery.pizzaboygames.pizzahero",
      image: pizzaDeliveryImg,
      category: "Simulation"
    },
    {
      title: "Police Bus Robot Car Games",
      description: "Transform robot car game with police theme",
      link: "https://cafebazaar.ir/app/com.police.robot.bus.transform.robot.transformation.game?l=en",
      image: policeBusRobotImg,
      category: "Action"
    },
    {
      title: "Army Truck Robot Car Game",
      description: "Military-themed robot transformation game",
      link: "https://play.google.com/store/apps/details?id=com.multi.robot.games.army.truck.robot.cargame",
      image: armyTruckRobotImg,
      category: "Action"
    },
    {
      title: "Horse Robot Game",
      description: "Animal robot transformation gameplay",
      link: "https://cafebazaar.ir/app/com.horserobotgame.robotgame.robot.transformgame.multirobots?l=en",
      image: horseRobotImg,
      category: "Action"
    },
    {
      title: "Tuk Tuk City Driver Auto Rickshaw",
      description: "3D driving simulator with rickshaw vehicles",
      link: "https://apkpure.com/tuk-tuk-city-driver-auto-rickshaw-3d-simulator-19/com.lfg.tuk.driving.racing.games.rickshaw.simulator.chingchi",
      image: tukTukImg,
      category: "Simulation"
    },
    {
      title: "Virtual Super Granny – Happy Family",
      description: "Family simulation with grandmother character",
      link: "https://apkpure.com/virtual-super-granny-happy-family-grand-mother-3d/com.lfg.virtual.granny.happy.family.grand.mother/download",
      image: virtualGrannyImg,
      category: "Simulation"
    },
    {
      title: "Slingshot Master",
      description: "Physics-based slingshot gameplay",
      link: "https://apkpure.com/slingshot-master/com.gns.slingshot.master",
      image: slingshotMasterImg,
      category: "Arcade"
    },
    {
      title: "Army Commando Counter Attack FPS",
      description: "Military FPS with commando operations",
      link: "https://www.apkshub.com/down/com.gns.army.commando.counterattack.fps.snipergame_1.0.13_mod",
      image: armyCommandoImg,
      category: "Action"
    },
    {
      title: "Farming Simulation 2023",
      description: "Modern farming and agriculture simulator",
      link: "https://apkpure.com/farming-simulation-2023/com.gns.farmersim19.free.farming.modernfarmer.game/download/1.0.28",
      image: farmingSimImg,
      category: "Simulation"
    },
    {
      title: "Dragon Robot Bike Game",
      description: "Fantasy robot bike transformation game",
      link: "https://play.google.com/store/apps/details?id=com.rlg.dragon.robot.bike.game.frog.gangster.game",
      image: dragonRobotBikeImg,
      category: "Action"
    },
    {
      title: "Animal Crocodile Robot Games",
      description: "Animal-themed robot transformation",
      link: "https://apkpure.com/animal-crocodile-robot-games/com.rlg.euro.train.robot.transform.traingames/download/5.0",
      image: crocodileRobotImg,
      category: "Action"
    },
    {
      title: "Mechanical Excavator Robot Game",
      description: "Construction vehicle robot game",
      link: "https://play.google.com/store/apps/details?id=com.rlg.mechanical.excavator.robot.flying.transforme",
      image: excavatorRobotImg,
      category: "Simulation"
    },
    {
      title: "Multi Robot Transform Jet Tank Game",
      description: "Multiple vehicle transformation system",
      link: "https://play.google.com/store/apps/details?id=com.rlg.multi.robot.transform.jetgame.tankgames&h",
      image: multiRobotImg,
      category: "Action"
    },
    {
      title: "Yozzar",
      description: "Unique gaming experience with custom mechanics",
      link: "https://apkpure.net/yozzar/com.Ranglerz.YouZaar",
      image: yozzarImg,
      category: "Adventure"
    },
    {
      title: "Car Parking 3D 2022",
      description: "Modern car parking simulation game",
      link: "https://cafebazaar.ir/app/com.beprogames.carparkinggame.modercargames.CarParking3D2022?l=en",
      image: carParkingImg,
      category: "Simulation"
    },
    {
      title: "Games 2023 – Shooting",
      description: "Modern shooting game with 2023 features",
      link: "https://apkpure.com/games-2023-shooting-2023/com.dgamesforfree.snipershootergames",
      image: shooting2023Img,
      category: "Action"
    },
    {
      title: "Metro Bus Simulation",
      description: "Public transport bus simulation",
      link: "https://cafebazaar.ir/app/com.beprogames.metro.bus.simulation.bus.game?l=en",
      image: metroBusImg,
      category: "Simulation"
    },
    {
      title: "Jet Fighter Shooting – Modern Jet Air Combat",
      description: "Air combat simulator with modern jets",
      link: "https://apkpure.com/id/jet-fighter-shooting-modern-je/com.beprogames.modernplanewar.aircombat.jetfightergame",
      image: jetFighterImg,
      category: "Action"
    },
    {
      title: "Jam Master – Car Parking Game",
      description: "Strategic car parking puzzle game",
      link: "https://apkpure.com/jam-master-car-parking-game/com.BeProGames.CarParkingJamMaster3d/download",
      image: jamMasterImg,
      category: "Puzzle"
    },
    {
      title: "Gun Games Simulator: FPS Games Offline",
      description: "Offline FPS with multiple weapon systems",
      link: "https://play.google.com/store/apps/details?id=com.lf.frontline.elite.war.free.apps",
      image: gunSimulatorImg,
      category: "Action"
    },
    {
      title: "City Truck Driving Simulator",
      description: "Urban truck driving simulation",
      link: "https://apkfab.com/city-truck-driving-simulator/com.pickle.CityTruckDrivingSimulator#google_vignette",
      image: cityTruckImg,
      category: "Simulation"
    }
  ];

  const filteredProjects = useMemo(() => {
    if (!searchTerm) return allProjects;
    
    return allProjects.filter(project =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, allProjects]);

  const handleProjectClick = (link: string) => {
    window.open(link, "_blank");
  };

  const categories = ["All", ...Array.from(new Set(allProjects.map(p => p.category)))];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            All Projects
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Complete portfolio of 23+ games across multiple platforms and genres
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card border-border"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="project-card card-hover cursor-pointer group h-full"
              onClick={() => handleProjectClick(project.link)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
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
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full font-medium">
                    {project.category}
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                </div>
                <CardTitle className="text-base group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0 flex-1">
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllProjects;