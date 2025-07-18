
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Building, Users, Award } from "lucide-react";

export default function AboutHe() {
  const education = [
    {
      degree: "דוקטורט בפסיכולוגיה תעשייתית-ארגונית",
      institution: "אוניברסיטת בר אילן",
      years: "2005-2010",
      description: "התמחות בפסיכולוגיה תעשייתית/ארגונית עם דגש על מנהיגות ודינמיקה קבוצתית"
    },
    {
      degree: "פיתוח הדרכה",
      institution: "HR+",
      years: "2025",
      description: "מגוון רחב של פתרונות הדרכה"
    },
    {
      degree: "הנחיית קבוצות",
      institution: "אוניברסיטת תל אביב (ביה\"ס לעבודה סוציאלית)",
      years: "2022-2024",
      description: "הכשרה מתקדמת בדינמיקה קבוצתית וטכניקות הנחיה"
    },
    {
      degree: "גישור",
      institution: "מכון גומא-גבים",
      years: "2020",
      description: "מיומנויות לניהול ותקשורת קונפליקטים"
    },
    {
      degree: "אימון עסקי",
      institution: "מכללת Coachme",
      years: "2010",
      description: "הסמכה מקצועית במתודולוגיות אימון עסקי"
    }
  ];

  const organizations = [
    "צה\"ל (צבא ההגנה לישראל)",
    "אוניברסיטת בן גוריון",
    "המרכז האקדמי רופין",
    "שירות בתי הסוהר",
    "משרד הכלכלה והתעשייה",
    "יוזמות עתיד",
    "פארק התעשייה קיסריה (קרן רוטשילד)",
    "פסיפס"
  ];

  const expertise = [
    "פיתוח מנהיגות",
    "התנהגות ארגונית",
    "הנחיית קבוצות",
    "דיבור בפני קהל",
    "מיון והכשרת עובדים",
    "ניהול קונפליקטים",
    "בניית צוות",
    "תכנון אסטרטגי"
  ];

  return (
    <section id="about-he" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            אודות
            <span className="text-red-600"> ד"ר עמיר נהרי</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            מומחה למנהיגות וקבוצות: מרצה, מנחה, מפתח קורסים, יועץ, דובר וכותב.
          </p>
        </div>

        {/* Professional Summary with Photo */}
        <div className="mb-16">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-red-50 to-slate-50">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                
                {/* Content */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-700 mb-4">מצוינות מקצועית</h3>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      עם דוקטורט בפסיכולוגיה תעשייתית-ארגונית ולמעלה מ-15 שנות ניסיון, אני מתמחה בשינוי ארגונים באמצעות פיתוח מנהיגות והנחיה אסטרטגית.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-2xl font-bold text-red-600">15+</div>
                        <div className="text-slate-600">שנות ניסיון</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-2xl font-bold text-red-600">8+</div>
                        <div className="text-slate-600">ארגונים מובילים</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-slate-900">תחומי התמחות</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {expertise.map((skill, index) => (
                        <div key={index} className="flex items-center justify-end gap-2 text-sm text-slate-600">
                          {skill}
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Photo */}
                <div className="text-center lg:text-right order-first lg:order-last">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3957baf31_Amir2025circle.png"
                    alt='ד"ר עמיר נהרי'
                    className="w-48 h-48 rounded-full object-cover shadow-xl mx-auto lg:mx-0 mb-4"
                  />
                  <div className="text-center lg:text-right">
                    <h3 className="text-xl font-bold text-slate-900">ד"ר עמיר נהרי</h3>
                    <p className="text-slate-600">דוקטורט בפסיכולוגיה תעשייתית-ארגונית</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">השכלה אקדמית</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-end gap-3 mb-2">
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <GraduationCap className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>{edu.years}</span>
                    <span>{edu.institution}</span>
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
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">ארגונים ולקוחות</h3>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {organizations.map((org, index) => (
                  <div key={index} className="flex items-center justify-end gap-3 p-4 bg-slate-50 rounded-lg">
                    <span className="text-slate-700 font-medium text-sm text-right">{org}</span>
                    <Building className="w-5 h-5 text-red-600 flex-shrink-0" />
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
              <CardTitle className="flex items-center justify-end gap-2">
                שפות
                <Users className="w-5 h-5 text-red-600" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-red-600 font-medium">שפת אם</span>
                  <span className="text-slate-700">עברית</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-red-600 font-medium">שליטה מלאה</span>
                  <span className="text-slate-700">אנגלית</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-red-600 font-medium">מתקדמים</span>
                  <span className="text-slate-700">צרפתית</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-end gap-2">
                מיומנויות מפתח
                <Award className="w-5 h-5 text-red-600" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-right">
                <div className="text-slate-700">עיצוב סדנאות/קורסים</div>
                <div className="text-slate-700">הנחיית קבוצות</div>
                <div className="text-slate-700">אבחון ארגוני</div>
                <div className="text-slate-700">כתיבה אקדמית ועסקית</div>
                <div className="text-slate-700">אוריינות מחשב (AI, Storyline)</div>
                <div className="text-slate-700">דיבור בפני קהל</div>
                <div className="text-slate-700">מיומנויות תקשורת גבוהות</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
