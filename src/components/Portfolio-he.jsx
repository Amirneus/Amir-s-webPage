import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PortfolioHe() {
  const videos = [
    {
      title: "ראיון על הכשרת מנהלים",
      description: "ראיון מקצועי הדן במתודולוגיות הכשרת מנהיגות ושיטות עבודה מומלצות",
      url: "https://youtu.be/fLymEfRJLzw",
      thumbnail: "https://img.youtube.com/vi/fLymEfRJLzw/maxresdefault.jpg",
      type: "ראיון"
    },
    {
      title: "סרטוני הדרכה על הנחיה ומשוב",
      description: "תוכן חינוכי על טכניקות הדרכה יעילות ומתן משוב בונה",
      url: "https://youtu.be/7BSw_dMUmQs",
      thumbnail: "https://img.youtube.com/vi/7BSw_dMUmQs/maxresdefault.jpg",
      type: "הדרכה"
    },
    {
      title: "סדרת פיתוח מנהיגות",
      description: "סדרת וידאו מקיפה על עקרונות מנהיגות ופיתוח ארגוני",
      url: "https://www.youtube.com/watch?v=w9W1XZq91-o",
      thumbnail: "https://img.youtube.com/vi/w9W1XZq91-o/maxresdefault.jpg",
      type: "סדרה"
    }
  ];

  return (
    <section id="portfolio-he" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            פורטפוליו
            <span className="text-red-600"> ודוגמאות עבודה</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            צפו בחומרים מקצועיים, סרטוני הדרכה ויישומים מוצלחים של פרויקטים במגוון ארגונים ומגזרים.
          </p>
        </div>

        {/* Video Portfolio */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">סרטונים מקצועיים</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-red-600 mr-1" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg leading-tight text-right">{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm mb-4 text-right">{video.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-red-50 group-hover:border-red-200"
                    onClick={() => window.open(video.url, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 ml-2" />
                    צפה בסרטון
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-red-50 to-slate-50">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                מוכנים לתוצאות?
              </h3>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                בואו נדבר על איך ניתן להתאים את המתודולוגיות המוכחות הללו לצרכים ולאתגרים הספציפיים שלכם.
              </p>
              <Button 
                onClick={() => document.querySelector("#contact-he").scrollIntoView({ behavior: 'smooth' })}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold text-lg"
              >
                קבע פגישת ייעוץ
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}