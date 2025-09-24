import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Award, Target } from 'lucide-react';

const About = () => {
  const journey = [
    {
      year: '2022',
      title: 'Started Computer Science Journey',
      location: 'KL University, Vijayawada',
      description: 'Began Bachelor of Technology in Computer Science and Engineering',
      current: false
    },
    {
      year: '2024',
      title: 'Generalist Fintech - Tech Support',
      location: 'Fintech Council of India',
      description: 'Improved IAM workflows, worked on blockchain identity verification, and enhanced security operations',
      current: true
    },
    {
      year: '2024',
      title: 'AWS Certification',
      location: 'Amazon Web Services',
      description: 'Achieved AWS Certified Cloud Practitioner certification',
      current: false
    }
  ];

  const skills = [
    { category: 'Programming', items: ['Java', 'Python', 'JavaScript', 'C'] },
    { category: 'Web Development', items: ['React.js', 'Node.js', 'Express.js', 'Spring Boot'] },
    { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
    { category: 'Cloud & Tools', items: ['AWS', 'Git', 'Docker', 'VS Code'] }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Driven Computer Science undergraduate with a passion for Enterprise Application Developer, 
            fintech innovation, and building scalable systems that make a difference.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="glass hover-glow h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-6 w-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Professional Summary</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate Computer Science undergraduate (2026) with strong backend development skills 
                  in Java, Python, and system design. With a solid grasp of data structures, algorithms, and 
                  functional programming principles, I focus on building scalable, high-performance backend systems.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  My experience includes working with the Fintech Council of India, where I improved IAM workflows, 
                  contributed to blockchain-based identity verification, and enhanced security operations. I have a 
                  deep interest in fintech innovations and excel in fast-paced, high-impact environments.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Backend Development</Badge>
                  <Badge variant="secondary">Fintech</Badge>
                  <Badge variant="secondary">Security</Badge>
                  <Badge variant="secondary">System Design</Badge>
                  <Badge variant="secondary">Problem Solving</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Current Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Education Card */}
            <Card className="glass hover-glow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-lg font-semibold">Education</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Bachelor of Technology</p>
                    <p className="text-sm text-muted-foreground">Computer Science & Engineering</p>
                    <p className="text-sm text-muted-foreground flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      KL University, Vijayawada
                    </p>
                    <p className="text-sm font-medium text-primary">CGPA: 9.3</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Role Card */}
            <Card className="glass hover-glow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-lg font-semibold">Experience</h3>
                </div>
                <div>
                  <p className="font-medium">Generalist Fintech - Tech Support</p>
                  <p className="text-sm text-muted-foreground">Fintech Council of India</p>
                  <p className="text-sm text-muted-foreground">Aug 2024 - Dec 2024</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="glass text-center p-4">
                <p className="text-2xl font-bold text-primary">9.3</p>
                <p className="text-sm text-muted-foreground">CGPA</p>
              </Card>
              <Card className="glass text-center p-4">
                <p className="text-2xl font-bold text-secondary">5+</p>
                <p className="text-sm text-muted-foreground">Certifications</p>
              </Card>
            </div>
          </motion.div>
        </div>

        {/* Career Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="space-y-8">
            {journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className={`glass hover-glow ${item.current ? 'ring-2 ring-primary/20' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge variant={item.current ? "default" : "secondary"} className="bg-primary/10 text-primary">
                            {item.year}
                          </Badge>
                          {item.current && (
                            <Badge className="bg-success/10 text-success border-success/20">
                              Past
                            </Badge>
                          )}
                        </div>``
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-muted-foreground flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {item.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass hover-glow h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-primary">
                      {skillGroup.category}
                    </h3>
                    <div className="space-y-2">
                      {skillGroup.items.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="mr-2 mb-2 border-muted"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;