import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone, Download, ExternalLink, Github, Linkedin, Instagram, MapPin, Calendar, Award, Users, Code, Palette, ChevronDown, ChevronUp } from "lucide-react";

const Index = () => {
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null);

  const experiences = [
    {
      id: "pkl",
      year: "2024",
      title: "Praktik Kerja Lapangan (PKL)",
      company: "SMK Telkom Malang",
      location: "Malang, Indonesia",
      description: "Currently doing my PKL, gaining hands-on experience in software development and business processes.",
      type: "Internship"
    },
    {
      id: "competition",
      year: "2023",
      title: "Business Competition Semifinalist",
      company: "School Level Competition",
      location: "Malang, Indonesia", 
      description: "Participated in business competition, developed business proposal and pitch presentation, reached semifinals.",
      type: "Achievement"
    },
    {
      id: "committee",
      year: "2023",
      title: "Event Committee Member",
      company: "SMK Telkom Malang",
      location: "Malang, Indonesia",
      description: "Security and equipment division, responsible for organizing and communicating with teachers, sponsors, and peers.",
      type: "Leadership"
    }
  ];

  const projects = [
    {
      title: "School Profile Website",
      description: "Designed and built using Flutter, HTML, CSS, and JavaScript",
      tech: ["Flutter", "HTML", "CSS", "JavaScript"],
      type: "Web Development"
    },
    {
      title: "Coffee Shop App Concept", 
      description: "Early concept for a web/app to search, rate, and review coffee shops with a fun spin wheel feature",
      tech: ["UI/UX Design", "Concept"],
      type: "App Design"
    },
    {
      title: "Group Database Project",
      description: "Developed a simple app connected to a MySQL database",
      tech: ["MySQL", "Database Design"],
      type: "Database"
    },
    {
      title: "Graphic Design Works",
      description: "Posters and templates made with Canva for various events and purposes",
      tech: ["Canva", "Graphic Design"],
      type: "Design"
    }
  ];

  const stats = [
    { number: "3+", label: "Years in Tech", icon: Code },
    { number: "10+", label: "Projects Done", icon: ExternalLink },
    { number: "2+", label: "Competitions", icon: Award },
    { number: "50+", label: "Design Works", icon: Palette }
  ];

  const skills = [
    { category: "Development", items: ["HTML", "CSS", "JavaScript", "Flutter", "MySQL"] },
    { category: "Design", items: ["Canva", "Figma", "UI/UX Design", "Graphic Design"] },
    { category: "Soft Skills", items: ["Teamwork", "Communication", "Leadership", "Problem-Solving", "Discipline"] }
  ];

  const toggleExperience = (id: string) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">EF</span>
              </div>
              <span className="font-semibold text-lg">Erlangga Farrel</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="hover:text-primary transition-colors">Home</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button size="sm">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Avatar className="w-16 h-16 mr-4">
                  <AvatarImage src="/lovable-uploads/29d5b6a7-d92e-4a10-b69a-7ce5683e06c2.png" alt="Erlangga Farrel Shaquille" />
                  <AvatarFallback>EF</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-muted-foreground">Hi, I'm Erlangga 👋</p>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Software Engineering Student
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-muted-foreground">
                Based in Malang, Indonesia
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
                I'm passionate about combining IT, creative work, and business. 
                Currently doing my PKL at SMK Telkom Malang, aiming to study Business Digital at Telkom University.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Mail className="w-5 h-5 mr-2" />
                  Let's Talk
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-96 rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <img 
                    src="/lovable-uploads/29d5b6a7-d92e-4a10-b69a-7ce5683e06c2.png" 
                    alt="Erlangga Farrel Shaquille"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-2xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">3+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-primary text-primary-foreground py-6 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Icon className="w-6 h-6 mr-2" />
                      <span className="text-3xl font-bold">{stat.number}</span>
                    </div>
                    <p className="text-primary-foreground/80">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Hello! I'm Erlangga Farrel Shaquille, a student at SMK Telkom Malang currently doing my Praktik Kerja Lapangan (PKL). 
                    I'm the second child of three siblings and the only son, which makes me hold strongly to responsibility — being a good example for my family while always learning and improving myself.
                  </p>
                  <p>
                    I aim to continue my study at Telkom University, majoring in Business Digital. My goal is to combine my curiosity for IT, my interest in creative work, and my passion for business. I believe hard work and persistence will help me reach my dream.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">What I Do</h3>
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Code className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Web Development</h4>
                        <p className="text-muted-foreground text-sm">
                          Building responsive websites using HTML, CSS, JavaScript, and Flutter
                        </p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Palette className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Graphic Design</h4>
                        <p className="text-muted-foreground text-sm">
                          Creating posters, templates, and UI concepts using Canva and Figma
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center">Skills & Competencies</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {skills.map((skillGroup, index) => (
                  <Card key={index} className="p-6">
                    <h4 className="font-semibold mb-4 text-center">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Experience</h2>
            
            <div className="space-y-6">
              {experiences.map((exp) => (
                <Card key={exp.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleExperience(exp.id)}
                      className="w-full p-6 text-left hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <Badge variant="outline">{exp.year}</Badge>
                            <Badge variant="secondary">{exp.type}</Badge>
                          </div>
                          <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                          <p className="text-muted-foreground">{exp.company}</p>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                        {expandedExperience === exp.id ? 
                          <ChevronUp className="w-5 h-5 text-muted-foreground" /> : 
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        }
                      </div>
                    </button>
                    
                    {expandedExperience === exp.id && (
                      <div className="px-6 pb-6 border-t bg-muted/20">
                        <p className="text-muted-foreground pt-4">{exp.description}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Featured Works</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="outline">{project.type}</Badge>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                <ExternalLink className="w-5 h-5 mr-2" />
                See All My Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-16">Certificates & Achievements</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Business Competition Semifinalist</h3>
                <p className="text-muted-foreground">
                  Participated in a business competition and reached the semifinals
                </p>
              </Card>
              
              <Card className="p-8">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">1st Place Potential</h3>
                <p className="text-muted-foreground">
                  Won 1st Place Potential at LPBB Singhasari
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Connect!</h2>
            <p className="text-xl mb-12 text-primary-foreground/80">
              You can find me on various platforms or contact me directly
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 bg-background text-foreground">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Me</h3>
                <p className="text-muted-foreground mb-4">
                  Drop me a line for project discussions or collaborations
                </p>
                <Button className="w-full">
                  <Mail className="w-4 h-4 mr-2" />
                  erlangga.farrel@example.com
                </Button>
              </Card>
              
              <Card className="p-8 bg-background text-foreground">
                <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-muted-foreground mb-4">
                  Quick chat for urgent matters or questions
                </p>
                <Button variant="outline" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </Card>
            </div>

            <div className="flex justify-center space-x-6">
              <Button variant="outline" size="lg" className="bg-background text-foreground hover:bg-muted">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" size="lg" className="bg-background text-foreground hover:bg-muted">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" className="bg-background text-foreground hover:bg-muted">
                <Instagram className="w-5 h-5 mr-2" />
                Instagram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Erlangga Farrel Shaquille. All rights reserved.</p>
            <p className="mt-2 text-sm">Made with ❤️ and dedication</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;