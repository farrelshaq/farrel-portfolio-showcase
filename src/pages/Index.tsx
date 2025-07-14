import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Mail, Phone, Download, ExternalLink, Github, Linkedin, Instagram, MapPin, Calendar, Award, Users, Code, Palette, ChevronDown, ChevronUp, Copy, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null);
  const { toast } = useToast();


  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
  };

  const experiences = [
    {
      id: "pkl",
      year: "2025",
      title: "Praktik Kerja Lapangan (PKL)",
      company: "SMK Telkom Malang",
      location: "Sidoarjo, Indonesia",
      description: "Currently doing my PKL, gaining hands-on experience in software development and business processes.",
      type: "Internship"
    },
    {
      id: "competition",
      year: "2025",
      title: "Business Competition Semifinalist",
      company: "School Level Competition",
      location: "Malang, Indonesia", 
      description: "Participated in business competition, developed business proposal and pitch presentation, reached semifinals.",
      type: "Achievement"
    },
    {
      id: "committee",
      year: "2024",
      title: "Event Committee Member",
      company: "SMK Telkom Malang",
      location: "Malang, Indonesia",
      description: "Organization Paskibra - Security and equipment division, responsible for organizing and communicating with teachers, sponsors, and peers.",
      type: "Leadership"
    }
  ];

  const projects = [
    {
      title: "School Profile Website",
      description: "Designed and built using Flutter, HTML, CSS, and JavaScript",
      tech: ["Dart", "CSS", "HTML"],
      type: "Web Development"
    },
    {
      title: "Coffee Shop App Idea", 
      description: "Early concept for a web/app to search, rate, and review coffee shops with a fun spin wheel feature",
      tech: ["UI/UX Design", "Concept"],
      type: "Idea Business"
    }
  ];

  const stats = [
    { number: "2", label: "Years in Tech", icon: Code },
    { number: "1", label: "Project Done", icon: ExternalLink },
    { number: "2+", label: "Competitions", icon: Award }
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
              <Button variant="outline" size="sm" onClick={() => window.open('http://github.com/farrelshaq', '_blank')}>
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-primary" />
                      Contact Information
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <p className="text-sm text-muted-foreground">08113889997</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => copyToClipboard('08113889997', 'Phone number')}>
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-sm text-muted-foreground">shaqfarrel@gmail.com</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => copyToClipboard('shaqfarrel@gmail.com', 'Email')}>
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        {/* Animated 3D Background */}
        <div className="absolute inset-0 z-0 animate-background-shift bg-gradient-to-br from-primary/15 via-transparent to-primary/10">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-28 h-28 bg-gradient-to-br from-primary/60 to-primary/40 rounded-xl animate-float-3d shadow-2xl"></div>
          <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-primary/50 to-primary/30 rotate-45 animate-float delay-1000 shadow-xl"></div>
          <div className="absolute bottom-32 left-20 w-32 h-32 bg-gradient-to-br from-primary/55 to-primary/35 rounded-full animate-pulse shadow-2xl"></div>
          <div className="absolute bottom-20 right-40 w-16 h-16 bg-gradient-to-br from-primary/65 to-primary/45 rounded-full animate-orbit"></div>
          
          {/* Additional attractive elements */}
          <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-primary/70 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-1/4 right-1/3 w-8 h-8 bg-primary/60 rotate-12 animate-spin rounded-lg" style={{ animationDuration: '10s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-primary/50 rounded-full animate-ping delay-500"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-15" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #131D4F 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
          
          {/* Gradient orbs */}
          <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-gradient-radial from-primary/30 to-transparent rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-gradient-radial from-primary/25 to-transparent rounded-full animate-float-3d"></div>
        </div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-background/50 z-10"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-8">
                <p className="text-muted-foreground text-lg mb-4 animate-fade-in">Hi, I'm Erlangga Farrel Shaquille 👋🏻</p>
              </div>
              
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-primary/70 to-primary bg-clip-text text-transparent animate-pulse">
                    Software Engineering Student
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/80 rounded-full animate-scale-in"></span>
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-muted-foreground animate-fade-in">
                Based in Malang, Indonesia
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in">
                I'm passionate about combining IT, creative work, and business. 
                Currently doing my PKL at SMK Telkom Malang, aiming to study Digital Business at Telkom University dan saya akan mencari golden tiket untuk masuk ke universitas negeri.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Let's Talk
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2 text-center justify-center">
                        <MessageCircle className="w-6 h-6 text-primary" />
                        Let's Connect!
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6">
                      <div className="text-center">
                        <p className="text-muted-foreground">I'm excited to hear from you! Choose your preferred way to connect:</p>
                      </div>
                      
                      <div className="space-y-4">
                          <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: '#131D4F' }}>
                          <div className="flex items-center gap-3 mb-4">
                            <Phone className="w-6 h-6 text-white" />
                            <div>
                              <p className="font-medium text-white text-lg">WhatsApp</p>
                              <p className="text-white/80">Quick chat for urgent matters or questions</p>
                            </div>
                          </div>
                          <Button 
                            onClick={() => window.open('https://wa.me/08113889997', '_blank')} 
                            className="w-full bg-white text-[#131D4F] hover:bg-gray-100 font-medium"
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Chat on WhatsApp
                          </Button>
                        </div>
                        
                        <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: '#131D4F' }}>
                          <div className="flex items-center gap-3 mb-4">
                            <Mail className="w-6 h-6 text-white" />
                            <div>
                              <p className="font-medium text-white text-lg">Email Me</p>
                              <p className="text-white/80">Drop me a line for project discussions or collaborations</p>
                            </div>
                          </div>
                          <Button 
                            onClick={() => window.open('mailto:shaqfarrel@gmail.com', '_blank')} 
                            className="w-full bg-white text-[#131D4F] hover:bg-gray-100 font-medium"
                          >
                            <Mail className="w-4 h-4 mr-2" />
                            shaqfarrel@gmail.com
                          </Button>
                        </div>
                      </div>
                      
                      <div className="text-center text-sm text-muted-foreground">
                        I typically respond within 24 hours 🚀
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Button variant="outline" size="lg" onClick={() => window.open('/lovable-uploads/2d3ffa1f-945e-4568-a240-9f1d18a49505.png', '_blank')}>
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative animate-float">
                <div className="w-80 h-96 rounded-3xl overflow-hidden border-4 border-primary/30 shadow-2xl animate-pulse-glow">
                  <img 
                    src="/lovable-uploads/29d5b6a7-d92e-4a10-b69a-7ce5683e06c2.png" 
                    alt="Erlangga Farrel Shaquille"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Stats Cards */}
                <div className="absolute -top-6 -left-6 p-4 rounded-2xl shadow-xl animate-float delay-500" style={{ backgroundColor: '#131D4F' }}>
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold flex items-center gap-2">
                      <Code className="w-5 h-5" />
                      2
                    </div>
                    <div className="text-sm">Years in Tech</div>
                  </div>
                </div>
                
                <div className="absolute top-20 -right-8 p-4 rounded-2xl shadow-xl animate-bounce" style={{ backgroundColor: '#131D4F' }}>
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold flex items-center gap-2">
                      <ExternalLink className="w-5 h-5" />
                      1
                    </div>
                    <div className="text-sm">Project Done</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-4 p-4 rounded-2xl shadow-xl animate-pulse" style={{ backgroundColor: '#131D4F' }}>
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      2+
                    </div>
                    <div className="text-sm">Competitions</div>
                  </div>
                </div>
                
                {/* Additional floating elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/60 rounded-full animate-ping"></div>
                <div className="absolute top-1/3 -left-8 w-4 h-4 bg-primary/50 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '6s' }}></div>
                <div className="absolute bottom-1/4 -right-4 w-3 h-3 bg-primary/70 rounded-full animate-bounce delay-700"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-primary text-primary-foreground py-6 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-8">
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
      <section id="about" className="py-20 bg-background">
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
          </div>
        </div>
      </section>

      {/* Skills & Competition Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-8 text-center text-primary-foreground">Skills & Competencies</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="p-6 bg-background/10 border-primary-foreground/20">
                  <h4 className="font-semibold mb-4 text-center text-primary-foreground">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs bg-background/20 text-primary-foreground border-primary-foreground/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-background">
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
                            <Badge variant="secondary" className={
                              exp.type === 'Internship' ? 'bg-primary text-primary-foreground' :
                              exp.type === 'Achievement' ? 'bg-primary text-primary-foreground' :
                              exp.type === 'Leadership' ? 'bg-primary text-primary-foreground' :
                              ''
                            }>{exp.type}</Badge>
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
      <section id="projects" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary-foreground">Featured Works</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-background/10 border-primary-foreground/20">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground">{project.type}</Badge>
                      {project.title === "Coffee Shop App Idea" ? (
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-primary-foreground hover:bg-background/20"
                          onClick={() => window.open('https://drive.google.com/drive/folders/1ayEt4z-qjM6aggXKgYqanXx4PfxCrrgH?usp=sharing', '_blank')}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </Button>
                      ) : project.title === "School Profile Website" ? (
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-primary-foreground hover:bg-background/20"
                          onClick={() => window.open('https://github.com/farrelshaq/Tugas_Akhir', '_blank')}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </Button>
                      ) : (
                        <ExternalLink className="w-5 h-5 text-primary-foreground/60 group-hover:text-primary-foreground transition-colors" />
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-primary-foreground">{project.title}</h3>
                    <p className="text-primary-foreground/80 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs bg-background/20 text-primary-foreground border-primary-foreground/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-16">Certificates & Achievements</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="p-8 cursor-pointer hover:shadow-lg transition-all duration-300 group">
                    <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Business Competition Semifinalist</h3>
                    <p className="text-muted-foreground">
                      Participated in a business competition and reached the semifinals
                    </p>
                    <div className="mt-4 text-center">
                      <Badge variant="outline" className="group-hover:border-primary">Click to view certificate</Badge>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      Business Competition Certificate
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <img 
                      src="/lovable-uploads/20075674-4b1d-416b-b7e7-0ff64c80f07b.png" 
                      alt="Business Competition Certificate"
                      className="w-full h-auto rounded-lg border shadow-lg"
                    />
                    <div className="text-center text-sm text-muted-foreground">
                      Business Competition Semifinalist Certificate
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="p-8 cursor-pointer hover:shadow-lg transition-all duration-300 group">
                    <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">1st Place Potential</h3>
                    <p className="text-muted-foreground">
                      Won 1st Place Potential at LPBB Singhasari
                    </p>
                    <div className="mt-4 text-center">
                      <Badge variant="outline" className="group-hover:border-primary">Click to view certificate</Badge>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      1st Place Potential Certificate
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <img 
                      src="/lovable-uploads/ed444e81-3cc1-4809-8e16-7921b7ed19e3.png" 
                      alt="1st Place Potential Certificate"
                      className="w-full h-auto rounded-lg border shadow-lg"
                    />
                    <div className="text-center text-sm text-muted-foreground">
                      1st Place Potential - LPBB Singhasari Certificate
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
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
                <Button className="w-full" onClick={() => window.open('mailto:shaqfarrel@gmail.com', '_blank')}>
                  <Mail className="w-4 h-4 mr-2" />
                  shaqfarrel@gmail.com
                </Button>
              </Card>
              
              <Card className="p-8 bg-background text-foreground">
                <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-muted-foreground mb-4">
                  Quick chat for urgent matters or questions
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Chat on WhatsApp
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <Phone className="w-5 h-5 text-primary" />
                        WhatsApp Contact
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-green-600" />
                          <div>
                            <p className="font-medium">Phone Number</p>
                            <p className="text-sm text-muted-foreground">08113889997</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" onClick={() => copyToClipboard('08113889997', 'Phone number')}>
                            <Copy className="w-4 h-4" />
                          </Button>
                          <Button size="sm" onClick={() => window.open('https://wa.me/08113889997', '_blank')} className="bg-green-600 hover:bg-green-700">
                            <MessageCircle className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </Card>
            </div>

            <div className="flex justify-center space-x-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="bg-background text-foreground hover:bg-muted">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Linkedin className="w-5 h-5 text-primary" />
                      LinkedIn Profile
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Linkedin className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="font-medium">LinkedIn</p>
                          <p className="text-sm text-muted-foreground">linkedin.com/in/farrelshaq-mar2303/</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => copyToClipboard('https://www.linkedin.com/in/farrelshaq-mar2303/', 'LinkedIn URL')}>
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button size="sm" onClick={() => window.open('https://www.linkedin.com/in/farrelshaq-mar2303/', '_blank')}>
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="bg-background text-foreground hover:bg-muted">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Github className="w-5 h-5 text-primary" />
                      GitHub Profile
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Github className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                        <div>
                          <p className="font-medium">GitHub</p>
                          <p className="text-sm text-muted-foreground">github.com/farrelshaq</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => copyToClipboard('https://github.com/farrelshaq', 'GitHub URL')}>
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button size="sm" onClick={() => window.open('https://github.com/farrelshaq', '_blank')}>
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="bg-background text-foreground hover:bg-muted">
                    <Instagram className="w-5 h-5 mr-2" />
                    Instagram
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Instagram className="w-5 h-5 text-primary" />
                      Instagram Profile
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Instagram className="w-5 h-5 text-pink-600" />
                        <div>
                          <p className="font-medium">Instagram</p>
                          <p className="text-sm text-muted-foreground">instagram.com/farrelshaq/</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => copyToClipboard('https://www.instagram.com/farrelshaq/', 'Instagram URL')}>
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button size="sm" onClick={() => window.open('https://www.instagram.com/farrelshaq/', '_blank')}>
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 Erlangga Farrel Shaquille.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;