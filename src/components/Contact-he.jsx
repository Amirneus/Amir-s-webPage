import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Globe, Facebook, Linkedin } from "lucide-react";

export default function ContactHe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('תודה על פנייתך! ד"ר נהרי יחזור אליך בהקדם.');
    setFormData({ name: '', email: '', organization: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact-he" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            צרו
            <span className="text-red-600"> קשר</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            מוכנים לשדרג את יכולות המנהיגות והתרבות הארגונית שלכם? בואו נדבר על איך נוכל לעבוד יחד כדי להשיג את מטרותיכם.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8 order-2 lg:order-1">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">שלח/י הודעה</CardTitle>
                <p className="text-slate-600">בואו נדבר על צרכי פיתוח המנהיגות שלכם</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2 text-right">
                        שם מלא *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-right"
                        placeholder="השם שלך"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2 text-right">
                        כתובת אימייל *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-right"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-2 text-right">
                      ארגון
                    </label>
                    <Input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 text-right"
                      placeholder="הארגון שלך"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2 text-right">
                      הודעה *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-none text-right"
                      placeholder="ספרו לי על צרכי פיתוח המנהיגות, אתגרי הצוות, או המטרות הארגוניות שלכם..."
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-500/25"
                  >
                    <Send className="ml-2 w-5 h-5" />
                    שלח הודעה
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">בואו נתחבר</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                בין אם אתם מחפשים לפתח מיומנויות מנהיגות, לשפר דינמיקה צוותית, או זקוקים לייעוץ ארגוני, אני כאן כדי לעזור. עם ניסיון במגזרים צבאיים, אקדמיים ועסקיים, אני מביא מתודולוגיות מוכחות לכל פרויקט.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">אימייל</h4>
                  <a 
                    href="mailto:drnehari@post.bgu.ac.il"
                    className="text-slate-600 hover:text-red-600 transition-colors duration-200"
                  >
                    drnehari@post.bgu.ac.il
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">טלפון</h4>
                  <a 
                    href="tel:0546248278"
                    className="text-slate-600 hover:text-red-600 transition-colors duration-200"
                  >
                    054-6248278
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">מיקום</h4>
                  <p className="text-slate-600">תל אביב, ישראל</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">אתר</h4>
                  <a 
                    href="https://www.amirnehari.com"
                    className="text-slate-600 hover:text-red-600 transition-colors duration-200"
                  >
                    www.amirnehari.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-end gap-4">
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => window.open("https://www.facebook.com/profile.php?id=100063473203537", '_blank')}
              >
                פייסבוק
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => window.open("https://www.linkedin.com/in/%D7%93%D7%A8-%D7%A2%D7%9E%D7%99%D7%A8-%D7%A0%D7%94%D7%A8%D7%99-amir-nehari-phd/", '_blank')}
              >
                לינקדאין
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}