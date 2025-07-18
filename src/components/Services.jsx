
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  TrendingUp, 
  MessageSquare,
  ArrowRight
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: "Business Consultation",
      description: "Bi-monthly one-on-one sessions with leaders.",
      features: [
        "Goal orientation, vision construction and adjusting work plans",
        "Identifying passions, finding motivation and overcoming concerns and obstacles",
        "Assessing competition and updating marketing strategy",
        "Identifying stakeholders, enhancing relationships and communication"
      ]
    },
    {
      icon: MessageSquare,
      title: "Group Facilitation",
      description: "Expert facilitation services for teams, conflicts, organizational development initiatives, and growth and support groups.",
      features: [
        "Team building workshops",
        "Conflict management and dialogue",
        "Group dynamics optimization",
        "Growth and Support groups",
        "Strategic planning sessions"
      ]
    },
    {
      icon: Users,
      title: "Courses and Workshops",
      description: "Comprehensive training programs covering essential leadership and organizational skills.",
      features: [
        "Organizational resilience and stress management",
        "Team building, Time Management, Know your subordinates",
        "Assertive and effective communication",
        "Strategy: SWOT, Strategy: four foci of vision",
        "Public speaking, How to interview candidates?",
        "Building a work plan, Servant leadership: maintaining the work process",
        "Authentic leadership: no Superman, no Wonder Woman",
        "Change: launch and overcoming resistance"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Professional
            <span className="text-red-600"> Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive leadership and organizational development services backed by 
            academic expertise and real-world experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:shadow-red-500/10 hover:-translate-y-2"
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-slate-600">
                      <ArrowRight className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Workshop Example */}
        <div className="mt-16">
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Example Workshop Syllabus: Time Management (Hebrew)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-slate-300" dir="rtl">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="border border-slate-300 p-4 text-right font-semibold">נושא</th>
                      <th className="border border-slate-300 p-4 text-right font-semibold">פירוט</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 p-4 text-right font-medium">עקרונות ושיטות</td>
                      <td className="border border-slate-300 p-4 text-right">מציאת המניע הפנימי, הריבוע של אייזנאוור, בניית הרגלים, חוק המיקוד, חוק הבוקר, שיטת דורסי</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-4 text-right font-medium">ניהול הזמן של הפרוייקט</td>
                      <td className="border border-slate-300 p-4 text-right">ניהול המטלות אל מול האסטרטגיה, ניהול במסגרת גאנט רב-פרוייקטלי וצוותי, התמודדות עם בלת"מים</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-4 text-right font-medium">טכנולוגיה מועילה ורעילה</td>
                      <td className="border border-slate-300 p-4 text-right">גזלני זמן טכנולוגיים ואפליקציות מסייעות, למשל: forest, detox, up. תובנה מלאכותית – חבר/ה, נודניק/ית, וניתוח תהליכי קשב וריכוז, למשל: reclaim, rize, rescue.</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-4 text-right font-medium">הפסקות וחיזוק החוסן</td>
                      <td className="border border-slate-300 p-4 text-right">פעילויות מאוששות ולא מאוששות, ניצול זמן "מת", דרכי הרפיה והרגעות</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-50 to-purple-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Ready for Results?
            </h3>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals and drive sustainable growth.
            </p>
            <button 
              onClick={() => document.querySelector("#contact").scrollIntoView({ behavior: 'smooth' })}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-500/25"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
