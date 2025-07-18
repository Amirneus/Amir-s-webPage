import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Globe, Facebook, Linkedin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! Dr. Nehari will get back to you soon.');
    setFormData({ name: '', email: '', organization: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Get In
            <span className="text-red-600"> Touch</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your leadership capabilities and organizational culture? 
            Let's discuss how we can work together to achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Let's Connect</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Whether you're looking to develop leadership skills, improve team dynamics, 
                or need organizational consulting, I'm here to help. With experience across 
                military, academic, and business sectors, I bring proven methodologies to every engagement.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", value: "drnehari@post.bgu.ac.il", link: "mailto:drnehari@post.bgu.ac.il" },
                { icon: Phone, title: "Phone", value: "054-6248278", link: "tel:0546248278" },
                { icon: MapPin, title: "Location", value: "Tel Aviv, Israel", link: "#" },
                { icon: Globe, title: "Website", value: "www.amirnehari.com", link: "https://www.amirnehari.com" }
              ].map((contact, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{contact.title}</h4>
                    {contact.link !== "#" ? (
                      <a 
                        href={contact.link}
                        className="text-slate-600 hover:text-red-600 transition-colors duration-200"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-slate-600">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => window.open("https://www.facebook.com/profile.php?id=100063473203537", '_blank')}
              >
                <Facebook className="w-5 h-5" />
                Facebook
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => window.open("https://www.linkedin.com/in/%D7%93%D7%A8-%D7%A2%D7%9E%D7%99%D7%A8-%D7%A0%D7%94%D7%A8%D7%99-amir-nehari-phd/", '_blank')}
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
              <p className="text-slate-600">Let's discuss your leadership development needs</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-2">
                    Organization
                  </label>
                  <Input
                    id="organization"
                    name="organization"
                    type="text"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your Organization"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your leadership development needs, team challenges, or organizational goals..."
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-500/25"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}