
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Building, Users, Award } from "lucide-react";

export default function About() {
  const education = [
    {
      degree: "PhD in I/O Psychology",
      institution: "Bar Ilan University",
      years: "2005-2010",
      description: "Specialized in Industrial/Organizational Psychology with focus on leadership and group dynamics"
    },
    {
      degree: "Coursware Development",
      institution: "HR+",
      years: "2025",
      description: "A wide range of training solutions"
    },
    {
      degree: "Group Facilitation",
      institution: "Tel Aviv University (School of Social Work)",
      years: "2022-2024",
      description: "Advanced training in group dynamics and facilitation techniques"
    },
    {
      degree: "Mediation",
      institution: "Gome-Gevim Institute",
      years: "2020",
      description: "Skills for managing and communicating conflict"
    },
    {
      degree: "Business Coaching",
      institution: "Coachme College",
      years: "2010",
      description: "Professional certification in business coaching methodologies"
    }
  ];

  const organizations = [
    "IDF (Israel Defense Forces)",
    "Ben Gurion University",
    "Ruppin Academic Center",
    "Israeli Prison Service",
    "Ministry of Economy and Industry",
    "Yozmot Atid",
    "Caesarea Industrial Park (Rotschild Foundation)",
    "Psifas"
  ];

  const expertise = [
    "Leadership Development",
    "Organizational Behavior",
    "Group Facilitation",
    "Public Speaking",
    "HR Selection & Training",
    "Conflict Management",
    "Team Building",
    "Strategic Planning"
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            About
            <span className="text-red-600"> Dr. Amir Nehari</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Leadership and groups professional: trainer, facilitator, course creator, lecturer, 
            public speaker, and writer.
          </p>
        </div>

        {/* Professional Summary with Photo */}
        <div className="mb-16">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-red-50 to-slate-50">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Photo */}
                <div className="text-center lg:text-left">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3957baf31_Amir2025circle.png"
                    alt="Dr. Amir Nehari"
                    className="w-48 h-48 rounded-full object-cover shadow-xl mx-auto lg:mx-0 mb-4"
                  />
                  <div className="text-center lg:text-left">
                    <h3 className="text-xl font-bold text-slate-900">Dr. Amir Nehari</h3>
                    <p className="text-slate-600">PhD in I/O Psychology</p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-700 mb-4">Professional Excellence</h3>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      With a PhD in Industrial/Organizational Psychology and over 15 years of experience, 
                      I specialize in transforming organizations through leadership development and strategic facilitation.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-2xl font-bold text-red-600">15+</div>
                        <div className="text-slate-600">Years Experience</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-2xl font-bold text-red-600">8+</div>
                        <div className="text-slate-600">Organizations</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-slate-900">Core Expertise</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {expertise.map((skill, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Academic Background</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <GraduationCap className="w-6 h-6 text-red-600" />
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>{edu.institution}</span>
                    <span>{edu.years}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Organizations */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Organizations & Clients</h3>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {organizations.map((org, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                    <Building className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium text-sm">{org}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Languages & Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-red-600" />
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Hebrew</span>
                  <span className="text-red-600 font-medium">Native</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">English</span>
                  <span className="text-red-600 font-medium">Fully Fluent</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">French</span>
                  <span className="text-red-600 font-medium">Advanced</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-red-600" />
                Key Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-slate-700">Workshop/Course Design</div>
                <div className="text-slate-700">Group Facilitation</div>
                <div className="text-slate-700">Organizational Diagnosis</div>
                <div className="text-slate-700">Academic & Business Writing</div>
                <div className="text-slate-700">Computer Literacy (AI, Storyline)</div>
                <div className="text-slate-700">Public Speaking</div>
                <div className="text-slate-700">Strong Communication Skills</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
