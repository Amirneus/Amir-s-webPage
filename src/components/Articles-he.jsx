import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, FileText, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ArticlesHe() {
  const articles = [
    {
      title: "חרבות ברזל: סיכום ביניים, תרחישים והמשך",
      description: "ניתוח מקיף של ההשפעות הפסיכולוגיות והמערכתיות בעקבות אירועי ה-7 באוקטובר בישראל, הבוחן חוסן ארגוני ואתגרי מנהיגות.",
      url: "https://israelithought.co.il/14223/",
      date: "2024",
      category: "מנהיגות במשבר",
      readTime: "קריאה של 15 דקות"
    },
    {
      title: "חוסן בחרבות ברזל: סיוע לחיילים",
      description: "בחינת אסטרטגיות הנחיית קבוצות יעילות לאנשי צבא במהלך אתגרים חסרי תקדים, תוך הסתמכות על מחקרים בפסיכולוגיה צבאית וארגונית.",
      url: "#",
      date: "2024",
      category: "הנחיית קבוצות",
      readTime: "קריאה של 12 דקות"
    },
    {
      title: "דוח פסיכו-מערכתי על ישראל: איך הגענו ל-7 באוקטובר?",
      description: "צלילה עמוקה למרכיבים הפסיכולוגיים והמבניים שהובילו למצב הנוכחי, תוך בחינת כשלים מערכתיים ושיפורים אפשריים.",
      url: "https://israelithought.co.il/12992/",
      date: "2024",
      category: "פסיכולוגיה ארגונית",
      readTime: "קריאה של 10 דקות"
    }
  ];

  const categories = [
    "מנהיגות במשבר",
    "הנחיית קבוצות", 
    "פסיכולוגיה ארגונית"
  ];

  return (
    <section id="articles-he" className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            מאמרים
            <span className="text-red-600"> ופרסומים</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            תובנות מתחום פסיכולוגיית המנהיגות, הפיתוח הארגוני וניהול משברים, המבוססות על מחקר וניסיון מעשי.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <div key={index} className="px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-medium">
              {category}
            </div>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group text-right">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    {article.date}
                    <Calendar className="w-3 h-3" />
                  </div>
                  <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">
                    {article.category}
                  </span>
                </div>
                <CardTitle className="text-xl leading-tight group-hover:text-red-600 transition-colors duration-300">
                  {article.title}
                </CardTitle>
                <div className="flex items-center justify-end gap-2 text-xs text-slate-500">
                  {article.readTime}
                  <FileText className="w-3 h-3" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  {article.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-red-50 group-hover:border-red-200 transition-colors duration-300"
                  onClick={() => article.url !== "#" ? window.open(article.url, '_blank') : null}
                  disabled={article.url === "#"}
                >
                  <ExternalLink className="w-4 h-4 ml-2" />
                  {article.url === "#" ? "זמין בקרוב" : "קרא מאמר מלא"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Profile Section */}
        <div className="mt-16">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-red-700 to-slate-800 text-white">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-right">
                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    כתיבה ומחקר מקצועיים
                  </h3>
                  <p className="text-xl text-red-100 mb-8">
                    המאמרים שלי משלבים קפדנות אקדמית עם תובנות מעשיות, ומציעים גישות מבוססות ראיות לאתגרי מנהיגות ופיתוח ארגוני.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white mb-2">אקדמי</div>
                      <div className="text-red-200">תובנות מבוססות מחקר</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white mb-2">מעשי</div>
                      <div className="text-red-200">יישומים בעולם האמיתי</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white mb-2">עדכני</div>
                      <div className="text-red-200">אתגרים עכשוויים</div>
                    </div>
                  </div>
                </div>
                <div className="text-center lg:text-right order-first lg:order-last">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3957baf31_Amir2025circle.png"
                    alt='ד"ר עמיר נהרי'
                    className="w-32 h-32 rounded-full object-cover shadow-xl mx-auto lg:mx-0 mb-4"
                  />
                  <h3 className="text-2xl font-bold text-white mb-2">ד"ר עמיר נהרי</h3>
                  <p className="text-red-200">דוקטורט בפסיכולוגיה תעשייתית-ארגונית</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}