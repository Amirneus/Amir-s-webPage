import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, FileText, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Articles() {
  const articles = [
    {
      title: "Iron Swords: Interim Summary, Scenarios and Prospects",
      description: "A comprehensive analysis of the psychological and systemic impacts following the October 7th events in Israel, examining organizational resilience and leadership challenges.",
      url: "https://israelithought.co.il/14223/",
      date: "2024",
      category: "Crisis Leadership",
      readTime: "15 min read"
    },
    {
      title: "Resilience During Iron Swords: Helping Soldiers",
      description: "Exploring effective group facilitation strategies for military personnel during unprecedented challenges, drawing from military and organizational psychology research.",
      url: "#",
      date: "2024",
      category: "Group Facilitation",
      readTime: "12 min read"
    },
    {
      title: "Psycho-Systemic Report on Israel: How did we wind up in October 7th?",
      description: "A deep dive into the psychological and structural elements that led to the current situation, examining systemic failures and potential improvements.",
      url: "https://israelithought.co.il/12992/",
      date: "2024",
      category: "Organizational Psychology",
      readTime: "10 min read"
    }
  ];

  const categories = [
    "Crisis Leadership",
    "Group Facilitation", 
    "Organizational Psychology"
  ];

  return (
    <section id="articles" className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Articles &
            <span className="text-red-600"> Publications</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Insights from the field of leadership psychology, organizational development, 
            and crisis management based on research and practical experience.
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
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight group-hover:text-red-600 transition-colors duration-300">
                  {article.title}
                </CardTitle>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <FileText className="w-3 h-3" />
                  {article.readTime}
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
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {article.url === "#" ? "Available Soon" : "Read Full Article"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Profile Section */}
        <div className="mt-16">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-red-700 to-slate-800 text-white">
            <CardContent className="p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="text-center lg:text-left">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3957baf31_Amir2025circle.png"
                    alt="Dr. Amir Nehari"
                    className="w-32 h-32 rounded-full object-cover shadow-xl mx-auto lg:mx-0 mb-4"
                  />
                  <h3 className="text-2xl font-bold text-white mb-2">Dr. Amir Nehari</h3>
                  <p className="text-red-200">PhD in I/O Psychology</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    Professional Writing & Research
                  </h3>
                  <p className="text-xl text-red-100 mb-8">
                    My articles combine academic rigor with practical insights, offering evidence-based 
                    approaches to leadership challenges and organizational development.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white mb-2">Academic</div>
                      <div className="text-red-200">Research-based insights</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white mb-2">Practical</div>
                      <div className="text-red-200">Real-world applications</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white mb-2">Current</div>
                      <div className="text-red-200">Contemporary challenges</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}