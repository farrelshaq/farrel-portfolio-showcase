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

  useEffect(() => {
    // Load Spline script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://cdn.spline.design/@splinetool/hana-viewer@1.0.42/hana-viewer.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

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
      tech: ["Flutter", "HTML", "CSS", "JavaScript"],
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
        {/* Spline 3D Background */}
        <div className="absolute inset-0 z-0">
          <hana-viewer 
            url="https://prod.spline.design/6JcERGoYOdLE490c-ynl/scene.hanacode"
            style={{ 
              width: '100%', 
              height: '100%', 
              filter: 'hue-rotate(220deg) saturate(1.3) brightness(0.8)',
            }}
          />
        </div>
        
        {/* Floating geometric elements */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-primary/20 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-blue-500/30 rounded-lg animate-bounce delay-300"></div>
          <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-primary/40 rounded-full animate-ping delay-1000"></div>
        </div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[1px] z-10"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-8">
                <p className="text-muted-foreground text-lg mb-4 animate-fade-in">Hi, I'm Erlangga 👋🏻</p>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent animate-pulse">
                    Software Engineering Student
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/80 via-blue-400 to-primary/80 rounded-full animate-scale-in"></span>
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-muted-foreground animate-fade-in">
                Based in Malang, Indonesia
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in">
                I'm passionate about combining IT, creative work, and business. 
                Currently doing my PKL at SMK Telkom Malang, aiming to study Business Digital at Telkom University.
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
                        <div className="flex items-center justify-between p-4 border rounded-lg bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
                          <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-green-600" />
                            <div>
                              <p className="font-medium">WhatsApp</p>
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
                        
                        <div className="flex items-center justify-between p-4 border rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
                          <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-blue-600" />
                            <div>
                              <p className="font-medium">Email</p>
                              <p className="text-sm text-muted-foreground">shaqfarrel@gmail.com</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" onClick={() => copyToClipboard('shaqfarrel@gmail.com', 'Email')}>
                              <Copy className="w-4 h-4" />
                            </Button>
                            <Button size="sm" onClick={() => window.open('mailto:shaqfarrel@gmail.com', '_blank')} className="bg-blue-600 hover:bg-blue-700">
                              <Mail className="w-4 h-4" />
                            </Button>
                          </div>
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
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-primary to-blue-600 text-primary-foreground p-4 rounded-2xl shadow-lg animate-bounce">
                  <div className="text-center">
                    <div className="text-2xl font-bold">2</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                </div>
                
                {/* Additional floating elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-400/20 rounded-full animate-ping"></div>
                <div className="absolute -bottom-8 -left-8 w-8 h-8 bg-primary/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
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
            <p>&copy; 2024 Erlangga Farrel Shaquille. All rights reserved.</p>
            <p className="mt-2 text-sm">Made with ❤️ and dedication</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;