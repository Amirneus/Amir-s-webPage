
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  TrendingUp, 
  MessageSquare,
  ArrowLeft
} from "lucide-react";

export default function ServicesHe() {
  const services = [
    {
      icon: TrendingUp,
      title: "ייעוץ עסקי",
      description: "פגישות אישיות דו-חודשיות עם מנהלים.",
      features: [
        "הכוונת מטרות, בניית חזון והתאמת תכניות עבודה",
        "זיהוי תשוקות, מציאת מוטיבציה והתגברות על חששות ומכשולים",
        "הערכת תחרות ועדכון אסטרטגיה שיווקית",
        "זיהוי בעלי עניין, שיפור מערכות יחסים ותקשורת"
      ]
    },
    {
      icon: MessageSquare,
      title: "הנחיית קבוצות",
      description: "שירותי הנחיה מקצועיים לצוותים, קונפליקטים, יוזמות פיתוח ארגוני וקבוצות צמיחה ותמיכה.",
      features: [
        "סדנאות גיבוש צוות",
        "ניהול קונפליקטים ודיאלוג",
        "אופטימיזציה של דינמיקה קבוצתית",
        "קבוצות צמיחה ותמיכה",
        "מפגשי תכנון אסטרטגי"
      ]
    },
    {
      icon: Users,
      title: "קורסים וסדנאות",
      description: "תכניות הכשרה מקיפות המכסות מיומנויות מנהיגות וארגון חיוניות.",
      features: [
        "חוסן ארגוני והתמודדות עם לחצים",
        "בניית צוות, ניהול זמן, הכר את פקודיך",
        "תקשורת אסרטיבית ויעילה",
        "אסטרטגיה: SWOT, אסטרטגיה: ארבעת מוקדי החזון",
        "דיבור בפני קהל, איך מראיינים מועמדים?",
        "בניית תכנית עבודה, מנהיגות משרתת: שמירה על תהליך העבודה",
        "מנהיגות אותנטית: לא סופרמן, לא וונדר וומן",
        "שינוי: השקה והתגברות על התנגדות"
      ]
    }
  ];

  return (
    <section id="services-he" className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            שירותים
            <span className="text-red-600"> מקצועיים</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            שירותי מנהיגות ופיתוח ארגוני מקיפים, מגובים במומחיות אקדמית וניסיון מהשטח.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:shadow-red-500/10 hover:-translate-y-2 text-right"
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ml-auto">
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
                      <ArrowLeft className="w-3 h-3 text-red-500 mt-1.5 flex-shrink-0" />
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
              <CardTitle className="text-2xl text-center">דוגמה לסילבוס סדנה: ניהול זמן</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-slate-300 text-right">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="border border-slate-300 p-4 font-semibold">נושא</th>
                      <th className="border border-slate-300 p-4 font-semibold">פירוט</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 p-4 font-medium">עקרונות ושיטות</td>
                      <td className="border border-slate-300 p-4 text-right">מציאת המניע הפנימי, הריבוע של אייזנאוור, בניית הרגלים, חוק המיקוד, חוק הבוקר, שיטת דורסי</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-4 font-medium">ניהול הזמן של הפרוייקט</td>
                      <td className="border border-slate-300 p-4 text-right">ניהול המטלות אל מול האסטרטגיה, ניהול במסגרת גאנט רב-פרוייקטלי וצוותי, התמודדות עם בלת"מים</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-4 font-medium">טכנולוגיה מועילה ורעילה</td>
                      <td className="border border-slate-300 p-4 text-right">גזלני זמן טכנולוגיים ואפליקציות מסייעות, למשל: forest, detox, up. תובנה מלאכותית – חבר/ה, נודניק/ית, וניתוח תהליכי קשב וריכוז, למשל: reclaim, rize, rescue.</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-4 font-medium">הפסקות וחיזוק החוסן</td>
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
              מוכנים לתוצאות?
            </h3>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              בואו נדבר על איך השירותים שלנו יכולים לעזור לכם להשיג את המטרות שלכם ולהניע צמיחה בת קיימא.
            </p>
            <button 
              onClick={() => document.querySelector("#contact-he").scrollIntoView({ behavior: 'smooth' })}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-500/25"
            >
              התחילו היום
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
