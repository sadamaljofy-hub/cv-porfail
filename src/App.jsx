import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Globe, Mail, Phone, MapPin, Github, Linkedin, Code, Database, Server, Palette, Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react'
import profileImage from './assets/profile.jpg'
import './App.css'

function App() {
  const [language, setLanguage] = useState('ar')
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar')
    document.documentElement.lang = language === 'ar' ? 'en' : 'ar'
    document.documentElement.dir = language === 'ar' ? 'ltr' : 'rtl'
  }

  const content = {
    ar: {
      name: 'صدام عبده الجوفي',
      title: 'طالب تقنية المعلومات | مطور ويب',
      about: 'نبذة عني',
      aboutText: 'طالب متحمس في تقنية المعلومات مع شغف كبير بتطوير الويب والتقنيات الحديثة. أسعى لتطوير مهاراتي باستمرار وبناء حلول تقنية مبتكرة تساهم في تحسين تجربة المستخدم.',
      contact: 'معلومات التواصل',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      location: 'الموقع',
      skills: 'المهارات التقنية',
      education: 'التعليم',
      educationTitle: 'بكالوريوس تقنية المعلومات',
      educationDesc: 'متخصص في تطوير البرمجيات وهندسة الويب',
      experience: 'الخبرات',
      projects: 'المشاريع',
      certifications: 'الشهادات',
      languages: 'اللغات',
      langArabic: 'العربية - اللغة الأم',
      langEnglish: 'الإنجليزية - جيد',
      skillsData: {
        frontend: {
          title: 'تطوير الواجهات الأمامية',
          items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap']
        },
        backend: {
          title: 'تطوير الخلفية',
          items: ['Node.js', 'Python', 'PHP', 'MySQL', 'MongoDB', 'REST APIs']
        },
        tools: {
          title: 'الأدوات والتقنيات',
          items: ['Git & GitHub', 'VS Code', 'Figma', 'WordPress', 'Linux', 'Docker']
        },
        soft: {
          title: 'المهارات الشخصية',
          items: ['حل المشكلات', 'العمل الجماعي', 'التواصل الفعال', 'إدارة الوقت', 'التعلم الذاتي', 'الإبداع']
        }
      },
      projectsData: [
        {
          title: 'موقع تجارة إلكترونية',
          desc: 'منصة تسوق متكاملة مع نظام دفع آمن وإدارة المنتجات',
          tech: 'React, Node.js, MongoDB'
        },
        {
          title: 'تطبيق إدارة المهام',
          desc: 'تطبيق ويب لتنظيم المهام اليومية مع واجهة سهلة الاستخدام',
          tech: 'JavaScript, HTML, CSS'
        },
        {
          title: 'لوحة تحكم تحليلية',
          desc: 'نظام عرض البيانات والإحصائيات بشكل تفاعلي',
          tech: 'React, Chart.js, Tailwind'
        }
      ],
      certificationsData: [
        'شهادة تطوير الويب الكامل - Udemy',
        'شهادة JavaScript المتقدم - Coursera',
        'شهادة React للمطورين - freeCodeCamp'
      ]
    },
    en: {
      name: 'Saddam Abdo Aljofy',
      title: 'IT Student | Web Developer',
      about: 'About Me',
      aboutText: 'Passionate IT student with a strong interest in web development and modern technologies. Continuously seeking to enhance my skills and build innovative technical solutions that improve user experience.',
      contact: 'Contact Information',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      skills: 'Technical Skills',
      education: 'Education',
      educationTitle: 'Bachelor of Information Technology',
      educationDesc: 'Specializing in Software Development and Web Engineering',
      experience: 'Experience',
      projects: 'Projects',
      certifications: 'Certifications',
      languages: 'Languages',
      langArabic: 'Arabic - Native',
      langEnglish: 'English - Good',
      skillsData: {
        frontend: {
          title: 'Frontend Development',
          items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap']
        },
        backend: {
          title: 'Backend Development',
          items: ['Node.js', 'Python', 'PHP', 'MySQL', 'MongoDB', 'REST APIs']
        },
        tools: {
          title: 'Tools & Technologies',
          items: ['Git & GitHub', 'VS Code', 'Figma', 'WordPress', 'Linux', 'Docker']
        },
        soft: {
          title: 'Soft Skills',
          items: ['Problem Solving', 'Teamwork', 'Effective Communication', 'Time Management', 'Self-Learning', 'Creativity']
        }
      },
      projectsData: [
        {
          title: 'E-Commerce Website',
          desc: 'Complete shopping platform with secure payment system and product management',
          tech: 'React, Node.js, MongoDB'
        },
        {
          title: 'Task Management App',
          desc: 'Web application for organizing daily tasks with user-friendly interface',
          tech: 'JavaScript, HTML, CSS'
        },
        {
          title: 'Analytics Dashboard',
          desc: 'Interactive data visualization and statistics display system',
          tech: 'React, Chart.js, Tailwind'
        }
      ],
      certificationsData: [
        'Full Stack Web Development Certificate - Udemy',
        'Advanced JavaScript Certificate - Coursera',
        'React for Developers Certificate - freeCodeCamp'
      ]
    }
  }

  const t = content[language]

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 transition-all duration-500 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Header with Language Toggle */}
      <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-700 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {t.name}
          </h1>
          <Button 
            onClick={toggleLanguage}
            variant="outline"
            className="flex items-center gap-2 hover:bg-gray-800 transition-all duration-300"
          >
            <Globe className="w-4 h-4" />
            {language === 'ar' ? 'English' : 'العربية'}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Hero Section with Profile Image */}
        <section className="text-center mb-16 animate-fade-in">
          <div className="flex flex-col items-center mb-6">
            {/* Profile Image */}
            <div className="relative mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <img 
                src={profileImage} 
                alt={t.name}
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-gray-700 shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse-slow">
              {t.name}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              {t.title}
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Mail className="w-4 h-4" />
              <span>saddam@example.com</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+967 777 123 456</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <MapPin className="w-4 h-4" />
              <span>{language === 'ar' ? 'اليمن' : 'Yemen'}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-6">
            <a href="https://github.com/sadamaljofy-hub" target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-12 animate-fade-in-up">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-blue-400" />
              {t.about}
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              {t.aboutText}
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12 animate-fade-in-up">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-purple-400" />
              {t.education}
            </h3>
            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="text-xl font-semibold text-gray-200 mb-2">{t.educationTitle}</h4>
              <p className="text-gray-400">{t.educationDesc}</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12 animate-fade-in-up">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Code className="w-8 h-8 text-green-400" />
              {t.skills}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Frontend Skills */}
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300">
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2 text-green-400">
                  <Palette className="w-5 h-5" />
                  {t.skillsData.frontend.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {t.skillsData.frontend.items.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30 hover:bg-green-500/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2 text-blue-400">
                  <Server className="w-5 h-5" />
                  {t.skillsData.backend.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {t.skillsData.backend.items.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2 text-purple-400">
                  <Database className="w-5 h-5" />
                  {t.skillsData.tools.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {t.skillsData.tools.items.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700 hover:border-pink-500 transition-all duration-300">
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2 text-pink-400">
                  <Award className="w-5 h-5" />
                  {t.skillsData.soft.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {t.skillsData.soft.items.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm border border-pink-500/30 hover:bg-pink-500/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12 animate-fade-in-up">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-yellow-400" />
              {t.projects}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {t.projectsData.map((project, index) => (
                <div key={index} className="bg-gray-900/50 rounded-xl p-6 border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:scale-105">
                  <h4 className="text-xl font-semibold mb-3 text-yellow-400">{project.title}</h4>
                  <p className="text-gray-400 mb-4 text-sm">{project.desc}</p>
                  <div className="text-xs text-gray-500 font-mono bg-gray-800 px-3 py-2 rounded-lg">
                    {project.tech}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-12 animate-fade-in-up">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Award className="w-8 h-8 text-orange-400" />
              {t.certifications}
            </h3>
            <ul className="space-y-3">
              {t.certificationsData.map((cert, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300 hover:text-orange-400 transition-colors">
                  <span className="text-orange-400 mt-1">▹</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Languages Section */}
        <section className="mb-12 animate-fade-in-up">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Globe className="w-8 h-8 text-cyan-400" />
              {t.languages}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-900/50 rounded-lg p-4 border border-cyan-500/30">
                <p className="text-gray-300">{t.langArabic}</p>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4 border border-cyan-500/30">
                <p className="text-gray-300">{t.langEnglish}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-md border-t border-gray-700 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 {t.name}. {language === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

