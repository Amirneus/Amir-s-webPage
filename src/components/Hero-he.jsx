
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Award, BookOpen, Facebook, Linkedin, FileText } from "lucide-react";

export default function HeroHe() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact-he");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home-he" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-slate-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-400/10 to-slate-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-slate-400/10 to-red-400/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-right">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
              <Award className="w-4 h-4" />
              דוקטורט בפסיכולוגיה תעשייתית-ארגונית
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                הכשרת מנהלים/ות:
                <span className="block text-blue-700">
                  איך לנווט בין אנשים, פרויקטים ופוליטיקה ארגונית
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                מסייע ללקוחות לגבש אסטרטגיה, להתמקד, להתארגן, לנתח, להניע, להניע את עצמם ולתקשר ישירות.
                <br />
                לצדך ותמיד בצד שלך.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row-reverse gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-500/25"
              >
                <ArrowLeft className="mr-2 w-5 h-5" />
                תיאום פגישת ייעוץ חינם
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open("https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/cb2457e7d_AmirNehariPhD.pdf", '_blank')}
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200"
              >
                <FileText className="ml-2 w-5 h-5" />
                צפייה בקורות חיים
              </Button>
              <Button 
                variant="outline"
                onClick={() => document.querySelector("#portfolio-he").scrollIntoView({ behavior: 'smooth' })}
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200"
              >
                צפייה בפורטפוליו
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-end gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() => window.open("https://www.facebook.com/profile.php?id=100063473203537", '_blank')}
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() => window.open("https://www.linkedin.com/in/%D7%93%D7%A8-%D7%A2%D7%9E%D7%99%D7%A8-%D7%A0%D7%94%D7%A8%D7%99-amir-nehari-phd/", '_blank')}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
              <div className="flex items-center justify-end gap-3">
                <div className="text-right">
                  <div className="font-semibold text-slate-900">מומחה אקדמי</div>
                  <div className="text-slate-600 text-sm">אוניברסיטת בן גוריון</div>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <div className="flex items-center justify-end gap-3">
                <div className="text-right">
                  <div className="font-semibold text-slate-900">יועץ לצה"ל</div>
                  <div className="text-slate-600 text-sm">חוסן ומנהיגות</div>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative order-first lg:order-last">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3957baf31_Amir2025circle.png"
                  alt='ד"ר עמיר נהרי'
                  className="w-80 h-80 rounded-full object-cover shadow-2xl"
                />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">ד"ר עמיר נהרי</h3>
              <p className="text-xl text-slate-600">מנחה קבוצות ויועץ ארגוני</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
