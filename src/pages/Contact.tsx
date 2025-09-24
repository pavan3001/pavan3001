import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  MessageCircle,
  Clock,
  CheckCircle
} from 'lucide-react';
import {FaInstagram} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: '2200031097cseh@gmail.com',
      href: 'mailto:2200031097cseh@gmail.com',
      description: 'Feel free to email me anytime'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Vijayawada, India',
      href: '#',
      description: 'Open to remote opportunities'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pavan-kolipakula/',
      color: 'text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/pavan3001',
      color: 'text-gray-400'
    },
    {
      icon: FaInstagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/p_a_v_a_n.04/',
    }
  ];

  const quickActions = [
    {
      icon: MessageCircle,
      title: 'Quick Chat',
      description: 'Schedule a 15-minute call',
      action: 'Schedule Call',
      color: 'bg-primary',
      onClick: undefined
    },
    {
      icon: Mail,
      title: 'Send Email',
      description: 'Direct email communication',
      action: 'Open Email',
      color: 'bg-secondary',
      onClick: () => {
        window.open('mailto:2200031097cseh@gmail.com', '_blank');
      }
    },
    {
      icon: Linkedin,
      title: 'LinkedIn Connect',
      description: 'Connect on LinkedIn',
      action: 'Connect',
      color: 'bg-blue-600',
      onClick: () => {
        window.open('https://www.linkedin.com/in/pavan-kolipakula/', '_blank');
      }
    }
  ];

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
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on exciting projects or discuss opportunities? 
            I'd love to hear from you. Let's build something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="glass hover-glow">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text flex items-center">
                  <Send className="h-6 w-6 mr-3" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="glass border-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="glass border-primary/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="glass border-primary/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or opportunity..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="glass border-primary/20 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:shadow-glow py-3"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="spinner mr-2" />
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Contact Info & Social */}
          <div className="space-y-6">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="glass hover-glow">
                <CardHeader>
                  <CardTitle className="text-xl gradient-text">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start space-x-4 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {info.label}
                        </h3>
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                        <p className="text-xs text-muted-foreground">{info.description}</p>
                      </div>
                    </motion.a>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="glass hover-glow">
                <CardHeader>
                  <CardTitle className="text-xl gradient-text">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {quickActions.map((action, index) => (
                    <motion.div
                      key={action.title}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/5 transition-colors group cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${action.color} text-white`}>
                          <action.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="font-medium group-hover:text-primary transition-colors">
                            {action.title}
                          </h3>
                          <p className="text-xs text-muted-foreground">{action.description}</p>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={action.onClick}
                        type={action.onClick ? 'button' : undefined}
                      >
                        {action.action}
                      </Button>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Card className="glass hover-glow">
                <CardHeader>
                  <CardTitle className="text-xl gradient-text">Social Connect</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-row gap-6 justify-center">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex flex-col items-center p-4 rounded-lg hover:bg-primary/5 transition-colors group"
                      >
                        <social.icon className={`h-6 w-6 mb-2 ${social.color ? social.color : ''} group-hover:scale-110 transition-transform`} />
                        <span className="text-sm font-medium">{social.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="glass hover-glow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-success rounded-full animate-pulse-glow" />
                      <span className="font-semibold text-success">Available for Work</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Currently open to Enterprise Application Developer opportunities, fintech projects, 
                    and exciting collaboration challenges.
                  </p>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>Usually responds within 24 hours</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <Card className="glass hover-glow max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                Let's Build Something <span className="gradient-text">Amazing</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'm always excited to connect with fellow developers and innovators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-primary hover:shadow-glow">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Start a Conversation
                </Button>
                <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <Link to="/Projects">
                  View My Work
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

export default Contact;