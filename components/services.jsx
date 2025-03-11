"use client"
import React, { useState } from 'react';
import { 
  BarChart4, Database, Brain, LineChart, PieChart, Brush, 
  Layers, Globe, Palette, Code, Layout, Figma
} from 'lucide-react';

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services' },
    { id: 'data', name: 'Data & Analytics' },
    { id: 'design', name: 'Design & Branding' }
  ];

  const services = [
    {
      icon: <Database className="w-12 h-12 text-sky-600" style={{ color: '#025489' }} />,
      title: "Data Analysis",
      description: "We transform raw data into actionable insights through comprehensive data cleaning, analysis, and interpretation.",
      category: "data",
      highlight: true
    },
    {
      icon: <Brain className="w-12 h-12 text-sky-600" style={{ color: '#025489' }} />,
      title: "Machine Learning",
      description: "Leverage the power of ML algorithms to predict trends, automate processes, and gain competitive advantages in your market.",
      category: "data"
    },
    {
      icon: <BarChart4 className="w-12 h-12 text-sky-600" style={{ color: '#025489' }} />,
      title: "Data Visualization",
      description: "Convert complex data into intuitive visual representations that make decision-making clearer and more effective for stakeholders.",
      category: "data"
    },
    {
      icon: <LineChart className="w-12 h-12 text-sky-600" style={{ color: '#025489' }} />,
      title: "Statistical Modeling",
      description: "Develop robust statistical models to identify patterns, relationships, and trends in your business data for strategic planning.",
      category: "data"
    },
    {
      icon: <PieChart className="w-12 h-12 text-sky-600" style={{ color: '#025489' }} />,
      title: "Business Intelligence",
      description: "Transform your data into strategic business insights that drive growth, operational efficiency, and competitive advantage.",
      category: "data"
    },
    {
      icon: <Brush className="w-12 h-12 text-sky-600" style={{ color: '#025489' }} />,
      title: "Custom Data Solutions",
      description: "We create tailored data solutions to address your unique business challenges and requirements with precision and expertise.",
      category: "data"
    },
    {
      icon: <Palette className="w-12 h-12 text-sky-600" style={{ color: '#025489' }} />,
      title: "Brand Identity",
      description: "Develop a distinctive and memorable brand identity that resonates with your audience and sets you apart from competitors.",
      category: "design",
      highlight: true
    },
    {
      icon: <Layers className="w-12 h-12 text-sky-600" style={{ color: '#025489' }} />,
      title: "Logo Design",
      description: "Create impactful, versatile logos that embody your brand values and make a lasting impression across all touchpoints.",
      category: "design"
    },
    {
      icon: <Layout className="w-12 h-12 text-sky-600" style={{ color: '#025489' }} />,
      title: "Website Design",
      description: "Craft beautiful, user-centered websites that provide seamless experiences while effectively communicating your brand message.",
      category: "design"
    },
    {
      icon: <Code className="w-12 h-12 text-sky-600" style={{ color: '#025489' }} />,
      title: "Web Development",
      description: "Build responsive, high-performance websites and web applications that deliver exceptional user experiences across all devices.",
      category: "design"
    },
    {
      icon: <Figma className="w-12 h-12 text-sky-600" style={{ color: '#025489' }} />,
      title: "UI/UX Design",
      description: "Create intuitive interfaces and user experiences that delight your customers and drive engagement with your digital products.",
      category: "design"
    },
    {
      icon: <Globe className="w-12 h-12 text-sky-600" style={{ color: '#025489' }} />,
      title: "Digital Branding",
      description: "Establish a cohesive online presence that builds trust, credibility and connects with your target audience across digital channels.",
      category: "design"
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto mb-6" style={{ backgroundColor: '#025489' }}></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            We offer comprehensive data science, analytics, branding, and website design services to help your business make informed decisions and stand out in the digital landscape.
          </p>
          
          {/* Service category filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {serviceCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-sky-600 text-white shadow-md' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                style={activeCategory === category.id ? {backgroundColor: '#025489'} : {}}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-lg ${service.highlight ? 'ring-2 ring-sky-600' : ''} 
                shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
              style={service.highlight ? {ringColor: '#025489'} : {}}
            >
              <div className="mb-5">
                <div className="p-3 bg-sky-50 inline-block rounded-lg" style={{backgroundColor: 'rgba(2, 84, 137, 0.1)'}}>
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="mt-5 pt-5 border-t border-gray-100">
                <a 
                  href="#contact" 
                  className="text-sky-600 font-medium hover:text-sky-800 inline-flex items-center group transition-colors"
                  style={{color: '#025489'}}
                >
                  Learn more
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-sky-600 to-sky-800 rounded-xl p-8 md:p-12 shadow-lg text-white" style={{background: 'linear-gradient(to right, #025489, #023658)'}}>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your business?</h3>
              <p className="text-sky-100 mb-0">
                Let's collaborate to create data-driven strategies and compelling brand experiences that drive growth.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <a 
                href="#contact" 
                className="inline-block bg-white text-sky-800 px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg hover:bg-gray-100 transition-all"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;