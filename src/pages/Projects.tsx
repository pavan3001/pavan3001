import ddosImage from '../assets/ddos.jpg';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ExternalLink, Github, Calendar, Code, Database, Globe, Server } from 'lucide-react';
import { Link } from 'react-router-dom';


// Import project images
import airlineImage from '@/assets/airline-project.jpg';
import agriculturalImage from '@/assets/agricultural-project.jpg';
import scholarshipImage from '@/assets/scholarship-project.jpg';
import roxilerstoreImage from '@/assets/roxiler-store-rating.jpg';
import encryptDecryptImage from '../assets/Encypt-Decrypt.jpg';
import keyloggerImage from '../assets/keylogger.jpg';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 4,
      title: 'Roxiler-Store-Rating System',
      description: 'A web app for product reviews and ratings, featuring user authentication, product catalog, and analytics.',
      image: roxilerstoreImage,
      technologies: ['React', 'Node.js','MySQL', 'Vite/Tailwind CSS'],
      category: 'fullstack',
      period: 'Aug 2025',
      features: [
        'User authentication and authorization',
        'Product catalog with search and filter',
        'Rating and review system',
        'Admin dashboard for analytics',
        'Responsive UI design'
      ],
      challenges: 'Implementing a scalable review aggregation and analytics system for large product datasets.',
      outcome: 'Enabled users to make informed purchase decisions and improved product feedback for store owners.',
      githubUrl: 'https://github.com/pavan3001/Roxiler-Store-Rating',
      liveUrl: 'https://roxiler-rating.netlify.app/login',
    },
    {
      id: 3,
      title: 'Scholarship Management System',
      description: 'Streamlined scholarship application and approval system with automated processing and fund disbursement.',
      image: scholarshipImage,
      technologies: ['React', 'Java', 'Spring Boot', 'MySQL'],
      category: 'fullstack',
      period: 'Dec 2024',
      features: [
        'Streamlined application and approval workflow',
        'Automated eligibility verification',
        'Document management system',
        'Real-time status tracking',
        'Automated fund disbursement',
        'Comprehensive reporting dashboard'
      ],
      challenges: 'Creating a flexible eligibility system that can adapt to different scholarship criteria and requirements.',
      outcome: 'Reduced application processing time by 60% and eliminated manual errors in eligibility verification.',
      githubUrl: 'https://github.com/pavan3001/Scholarship-Management-System',
      liveUrl: 'https://scholarship-management-system.netlify.app/',
    },
    {
      id: 2,
      title: 'Agricultural Management System',
      description: 'Comprehensive farm management system for crop monitoring, resource optimization, and automated record-keeping.',
      image: agriculturalImage,
      technologies: ['Django', 'Python', 'PostgreSQL', 'HTML/CSS'],
      category: 'fullstack',
      period: 'April 2024',
      features: [
        'Efficient farm management and crop monitoring',
        'Resource optimization algorithms',
        'Automated record-keeping system',
        'Market analysis integration',
        'Supply chain management features',
        'Real-time data updates and notifications'
      ],
      challenges: 'Designing algorithms for optimal resource allocation while considering weather patterns and market conditions.',
      outcome: 'Improved farm efficiency by 30% through automated processes and data-driven insights.',
      githubUrl: 'https://github.com/pavan3001/Agricultural-Management-system',
      liveUrl: '#'
    },
    {
      id: 1,
      title: 'Airline Reservation System',
      description: 'Dynamic airline reservation system with real-time booking, cancellations, and seat availability management.',
      image: airlineImage,
      technologies: ['MongoDB', 'React.js', 'Node.js', 'Express.js'],
      category: 'fullstack',
      period: 'Dec 2023',
      features: [
        'Real-time booking and cancellation system',
        'Secure backend with optimized database performance',
        'Integrated payment processing and user authentication',
        'Dynamic seat availability tracking',
        'RESTful API design with comprehensive error handling'
      ],
      challenges: 'Implementing real-time seat availability updates while maintaining data consistency across multiple concurrent bookings.',
      outcome: 'Successfully built a scalable system handling concurrent transactions with 99.9% uptime.',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 5,
      title: 'Image-Encryption-and-Decryption',
      description: 'A security-focused app that encrypts and decrypts images with strong cryptography for private, secure image sharing.',
      image: encryptDecryptImage,
  technologies: ['Python', 'File I/O-Encryption', 'Cryptography'],
      category: 'Cybersecurity',
      period: 'May 2024',
      features: [
        'Encrypt images with strong cryptographic algorithms',
        'Decrypt images with user-provided keys',
        'User-friendly GUI for selecting and processing images',
        'Support for multiple image formats',
        'Error handling for invalid keys or corrupted files'
      ],
      challenges: 'Ensuring robust encryption while maintaining image quality and usability.',
      outcome: 'Provided a simple and effective tool for secure image sharing and storage.',
      githubUrl: 'https://github.com/pavan3001/Image-Encryption-and-Decryption',
      liveUrl: '#',
    },
    {
      id: 6,
      title: 'Key Logger',
      description: 'A security tool that records keystrokes on a system for monitoring and analysis. Built for educational and ethical use only.',
      image: keyloggerImage,
      technologies: ['Python', 'Tkinter', 'Cryptography', 'Tkinter'],
      category: 'Cybersecurity',
      period: 'Jun 2024',
      features: [
        'Captures and logs all keystrokes',
        'Saves logs to a file',
        'Simple GUI for starting/stopping logging',
        'Stealth mode operation',
        'Educational and ethical use only'
      ],
      challenges: 'Ensuring the logger runs efficiently in the background without impacting system performance.',
      outcome: 'Provided a demonstration tool for understanding keystroke logging and security awareness.',
      githubUrl: 'https://github.com/pavan3001/keylogger',
      liveUrl: '#',
    },
    {
      id: 7,
      title: 'Distributed Denial-of-Service (DDoS)',
      description: 'A simulation tool to demonstrate the effects and mitigation of DDoS attacks on networked systems. Built for educational and research purposes only.',
      image: ddosImage,
      technologies: ['Python', 'Scapy', 'Scikit-learn', 'Matplotlib'],
      category: 'Cybersecurity',
      period: 'Sep 2024',
      features: [
        'Simulates DDoS attacks on a target server',
        'Configurable attack parameters',
        'Real-time monitoring of attack impact',
        'Educational dashboard for understanding DDoS',
        'Mitigation and defense demonstration'
      ],
      challenges: 'Creating a safe and controlled environment for demonstrating DDoS without causing harm.',
      outcome: 'Helped users understand DDoS vulnerabilities and the importance of network security.',
      githubUrl: 'https://github.com/pavan3001/pavan3001-Distributed-Denial-of-Service-DDoS',
      liveUrl: '#',
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Code },
    { id: 'fullstack', label: 'Full Stack', icon: Globe },
    { id: 'Cybersecurity', label: 'Cybersecurity', icon: Server }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my development work, featuring full-stack applications, 
            backend systems, and innovative solutions to real-world problems.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className={`flex items-center space-x-2 ${
                filter === category.id 
                  ? 'bg-gradient-primary hover:shadow-glow' 
                  : 'border-primary/30 hover:bg-primary/10'
              }`}
            >
              <category.icon className="h-4 w-4" />
              <span>{category.label}</span>
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="glass hover-glow h-full overflow-hidden">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        <Calendar className="h-3 w-3 mr-1" />
                        {project.period}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="flex-1">
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass">
                          <DialogHeader>
                            <DialogTitle className="text-2xl gradient-text">
                              {project.title}
                            </DialogTitle>
                          </DialogHeader>
                          
                          <div className="space-y-6">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-64 object-cover rounded-lg"
                            />
                            
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                  {project.features.map((feature, i) => (
                                    <li key={i} className="text-sm">• {feature}</li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div className="space-y-4">
                                <div>
                                  <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                                  <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                      <Badge key={tech} variant="secondary">{tech}</Badge>
                                    ))}
                                  </div>
                                </div>
                                
                                <div>
                                  <h3 className="text-lg font-semibold mb-2">Timeline</h3>
                                  <Badge variant="outline">
                                    <Calendar className="h-3 w-3 mr-1" />
                                    {project.period}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="text-lg font-semibold mb-2">Challenge & Solution</h3>
                              <p className="text-muted-foreground mb-4">{project.challenges}</p>
                              <p className="text-muted-foreground">{project.outcome}</p>
                            </div>
                            
                            <div className="flex gap-4 pt-4 border-t border-border">
                              <Button 
                                variant="outline" 
                                className="flex-1"
                                onClick={() => window.open(project.githubUrl, '_blank')}
                                type="button"
                                disabled={!project.githubUrl || project.githubUrl === '#'}
                              >
                                <Github className="h-4 w-4 mr-2" />
                                View Code
                              </Button>
                              <Button 
                                className="flex-1 bg-gradient-primary"
                                onClick={() => window.open(project.liveUrl, '_blank')}
                                type="button"
                                disabled={!project.liveUrl || project.liveUrl === '#'}
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Live Demo
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      
                      <Button variant="ghost" size="sm" className="p-2">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-2">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <Card className="glass hover-glow max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                Interested in <span className="gradient-text">Collaborating</span>?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm always excited to work on challenging projects that push the boundaries of technology. 
                Whether it's building scalable backend systems, creating innovative fintech solutions, 
                or tackling complex algorithmic problems, I'm ready to contribute.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gradient-primary hover:shadow-glow">
                <a href="https://github.com/pavan3001" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View All on GitHub
                </a>
              </Button>
              
              <Button asChild variant="outline" className="px-8 py-3 text-lg border-primary/30 hover:bg-primary/10">
                  <Link to="/contact">
                    Let's Connect
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;