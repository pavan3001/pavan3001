import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Database, Cloud, ChevronDown, Award, Medal, Server, Activity, HardDrive, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="text-primary text-lg font-medium">Hello, I'm</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Pavan Kumar</span>
              <br />
              <span className="text-foreground">Kolipakula</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Enterprise Application Developer & Computer Science Student passionate about 
              <span className="text-primary font-semibold"> Fintech Innovation</span> and 
              <span className="text-secondary font-semibold"> Scalable Systems</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link to="/projects">
                <Button className="bg-gradient-primary hover:shadow-glow px-8 py-3 text-lg">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button variant="outline" className="px-8 py-3 text-lg border-primary/30 hover:bg-primary/10">
                  Get In Touch
                </Button>
              </Link>
            </motion.div>

            {/* Tech Stack Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-6 mb-16"
            >
              {[
                
                { icon: Code, label: 'Java & Python' },
                { icon: Database, label: 'MongoDB & MySQL & PostgreSQL' },
                { icon: Code, label: 'Spring Boot & Django' },
                { icon: Code, label: 'React.js' },
                { icon: Box, label: 'Material-UI' },  
                { icon: Server, label: 'Node.js' },
                { icon: Server, label: 'Express.js' },
                { icon: Activity, label: 'JUnit' },
                { icon: HardDrive, label: 'Hibernate' }
                
              ].map((tech, index) => (
                <motion.div
                  key={tech.label}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center space-x-2 glass px-4 py-2 rounded-full hover-glow"
                >
                  <tech.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{tech.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.button>
      </section>

      {/* Quick About Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Building the <span className="gradient-text">Future of Finance</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Currently pursuing Computer Science and Engineering  at KL University with a 9.3 CGPA, 
              I specialize in Enterprise Application Developer and have hands-on experience with fintech innovations. 
              My passion lies in creating scalable, secure systems that solve real-world problems.
            </p>
            <Link to="/about">
              <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
                Learn More About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;