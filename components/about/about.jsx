"use client"
import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    "Data Analysis", "Machine Learning", "Statistical Modeling", 
    "Data Visualization", "Python Programming", "SQL & Database Technologies",
    "Natural Language Processing", "Predictive Analytics", "Project Management",
    "Business Intelligence", "Dashboard Development", "Communication & Presentation",
    // Added branding and website design skills
    "Brand Strategy & Identity", "Logo Design", "Website Development",
    "UI/UX Design", "Responsive Web Design", "Visual Identity Systems"
  ];

  // Group skills by category for better organization
  const skillCategories = {
    "Data Science & Analytics": [
      "Data Analysis", "Machine Learning", "Statistical Modeling", 
      "Data Visualization", "Python Programming", "SQL & Database Technologies",
      "Natural Language Processing", "Predictive Analytics"
    ],
    "Design & Development": [
      "Brand Strategy & Identity", "Logo Design", "Website Development",
      "UI/UX Design", "Responsive Web Design", "Visual Identity Systems"
    ],
    "Business & Communication": [
      "Project Management", "Business Intelligence", "Dashboard Development", 
      "Communication & Presentation"
    ]
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - About text */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About KALDESIGNS</h2>
            <div className="w-20 h-1 bg-sky-600 mb-8" style={{ backgroundColor: '#025489' }}></div>
            
            <p className="text-gray-600 mb-6 text-lg">
              Founded in 2020, KALDESIGNS specializes in providing tailored data science, analytics,
              branding, and website design solutions to businesses across various industries. Our mission 
              is to transform complex data into clear, actionable insights while creating compelling 
              visual identities that drive informed decisions and business growth.
            </p>
            
            <p className="text-gray-600 mb-8 text-lg">
              Led by Steven Kalungu Kikwa, our team brings together expertise in data science, machine learning, 
              business analytics, brand strategy, and web design. We pride ourselves on delivering comprehensive, 
              high-quality solutions that not only meet but exceed our clients' expectations, resulting in our 
              100% client retention rate.
            </p>
            
            <div className="flex gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-600" style={{ color: '#025489' }}>5+</div>
                <div className="text-gray-500 text-sm mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-600" style={{ color: '#025489' }}>100%</div>
                <div className="text-gray-500 text-sm mt-1">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-600" style={{ color: '#025489' }}>20+</div>
                <div className="text-gray-500 text-sm mt-1">Completed Projects</div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-block bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              style={{ backgroundColor: '#025489' }}
            >
              Get in Touch
            </a>
          </div>
          
          {/* Right side - Skills & Image */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Our Expertise</h3>
              
              {/* Organized skills by category */}
              <div className="space-y-6">
                {Object.entries(skillCategories).map(([category, categorySkills], catIndex) => (
                  <div key={catIndex}>
                    <h4 className="text-lg font-medium mb-3 text-sky-700" style={{ color: '#025489' }}>
                      {category}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {categorySkills.map((skill, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-sky-600 mr-2 mt-1 flex-shrink-0" style={{ color: '#025489' }} />
                          <span className="text-gray-700">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <img 
                src="assets/images/data.webp" 
                alt="KALDESIGNS team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-bold">Data-Driven Excellence & Creative Design</h4>
                  <p className="text-sm">Transforming businesses through the power of data and visual storytelling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;





