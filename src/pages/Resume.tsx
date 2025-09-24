import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Download, Mail, Phone, MapPin, Linkedin, Github, Calendar, Award } from 'lucide-react';

const Resume = () => {
  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Pavan_Kumar_Kolipakula_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experiences = [
    {
      title: 'Generalist Fintech - Tech Support',
      company: 'Fintech Council of India',
      period: 'Aug 2024 - Dec 2024',
      location: 'Virtual Mode',
      description: [
        'Improved IAM workflows for better efficiency',
        'Assisted in blockchain-based identity verification and enhanced security operations',
        'Contributed to compliance measures, reducing security risks'
      ]
    }
  ];

  const projects = [
    {
      title: 'Airline Reservation System',
      tech: 'MongoDB, React.js, Node.js, Express.js',
      period: 'Dec 2023',
      description: [
        'Built dynamic airline reservation system with real-time booking and cancellations',
        'Engineered secure backend optimizing database performance for real-time transactions',
        'Integrated secure APIs for user authentication and payment processing'
      ]
    },
    {
      title: 'Agricultural Management System',
      tech: 'HTML, CSS, Django, Python, PostgreSQL',
      period: 'April 2024',
      description: [
        'Developed system for efficient farm management and crop monitoring',
        'Built robust backend for efficient data management and real-time updates',
        'Integrated features for automated record-keeping and market analysis'
      ]
    },
    {
      title: 'Scholarship Management System',
      tech: 'React, Java, Spring Boot, MySQL',
      period: 'Dec 2024',
      description: [
        'Developed system for streamlined scholarship applications and approvals',
        'Integrated features for eligibility verification and document management',
        'Automated application processing for higher efficiency'
      ]
    }
  ];

  const skills = [
    { name: 'Java', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React.js', level: 85 },
    { name: 'Node.js', level: 75 },
    { name: 'Spring Boot', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'AWS', level: 70 },
    { name: 'Git', level: 85 }
  ];

  const certifications = [
    'AWS Certified Cloud Practitioner',
    'Red Hat Certified Enterprise Application Developer',
    'Juniper Networks Certified Associate',
    'Certified Blockchain Professional Fintech Capstone'
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Complete overview of my professional journey, skills, and achievements
          </p>
          <Button 
            onClick={handleDownloadResume}
            className="bg-gradient-primary hover:shadow-glow px-8 py-3"
          >
            <Download className="w-5 h-5 mr-2" />
            Download PDF Resume
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Personal Info & Skills */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="glass hover-glow">
                <CardHeader>
                  <CardTitle className="text-xl gradient-text">Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-sm">9391560710</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm">2200031097cseh@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">Vijayawada, India</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="h-4 w-4 text-primary" />
                    <span className="text-sm">linkedin.com/pavan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github className="h-4 w-4 text-primary" />
                    <span className="text-sm">github.com/pavan</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="glass hover-glow">
                <CardHeader>
                  <CardTitle className="text-xl gradient-text">Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Bachelor of Technology</h3>
                    <p className="text-sm text-muted-foreground">Computer Science & Engineering</p>
                    <p className="text-sm text-muted-foreground">KL University, Vijayawada</p>
                    <p className="text-sm font-medium text-primary">CGPA: 9.3</p>
                    <p className="text-sm text-muted-foreground">2022 - 2026</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">SSC</h3>
                    <p className="text-sm text-muted-foreground">Narayana Institute of Technology</p>
                    <p className="text-sm font-medium text-primary">97%</p>
                    <p className="text-sm text-muted-foreground">2019 - 2020</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Intermediate</h3>
                    <p className="text-sm text-muted-foreground">Sri Chaitanya Junior College</p>
                    <p className="text-sm font-medium text-primary">68.6%</p>
                    <p className="text-sm text-muted-foreground">2020 - 2022</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Skills Progress */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="glass hover-glow">
                <CardHeader>
                  <CardTitle className="text-xl gradient-text">Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Card className="glass hover-glow">
                <CardHeader>
                  <CardTitle className="text-xl gradient-text flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {certifications.map((cert, index) => (
                    <Badge key={index} variant="outline" className="w-full justify-start text-xs p-2">
                      {cert}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Experience & Projects */}
          <div className="lg:col-span-2 space-y-8">
            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="glass hover-glow">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Professional Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Driven and passionate Computer Science undergraduate (2026) with strong backend development 
                    skills in Java, Python, and system design. Solid grasp of data structures, algorithms, and 
                    functional programming principles. Experienced in building scalable, high-performance backend 
                    systems with a focus on reliability and clean code. Quick learner with a deep interest in 
                    fintech innovations and a strong inclination toward solving real-world problems through code. 
                    Excels in fast-paced, high-impact environments with a growth mindset and team-first attitude.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="glass hover-glow">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  {experiences.map((exp, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-6 pb-6 last:pb-0">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold">{exp.title}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary" className="mb-1">
                            <Calendar className="h-3 w-3 mr-1" />
                            {exp.period}
                          </Badge>
                          <p className="text-sm text-muted-foreground flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {exp.location}
                          </p>
                        </div>
                      </div>
                      <ul className="space-y-1 text-muted-foreground">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="text-sm">• {desc}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="glass hover-glow">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Projects</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {projects.map((project, index) => (
                    <div key={index} className="border-l-2 border-secondary/20 pl-6 pb-6 last:pb-0">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold">{project.title}</h3>
                          <p className="text-secondary font-medium text-sm">{project.tech}</p>
                        </div>
                        <Badge variant="outline" className="self-start md:self-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {project.period}
                        </Badge>
                      </div>
                      <ul className="space-y-1 text-muted-foreground">
                        {project.description.map((desc, i) => (
                          <li key={i} className="text-sm">• {desc}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;