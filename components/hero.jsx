"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, Pause, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  
  useEffect(() => {
    // Set loaded state after component mounts with a slight delay for smoother animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle video playback controls
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle video loaded event
  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  // Scroll to services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ 
        top: window.innerHeight, 
        behavior: 'smooth' 
      });
    }
  };

  // Stats data array for easier maintenance
  const stats = [
    { value: '100%', label: 'Client Satisfaction', description: 'Based on post-project surveys' },
    { value: '20%', label: 'Efficiency Increase', description: 'Average client improvement' },
    { value: '5+', label: 'Years Experience', description: 'In data science & design' },
    { value: '20+', label: 'Completed Projects', description: 'Across various industries' }
  ];

  return (
    <section 
      className="relative w-full min-h-screen max-h-[900px] overflow-hidden" 
      aria-label="Hero section"
      id="hero"
    >
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0 bg-gray-900">
        {/* Show loading background until video is ready */}
        <div className={`absolute inset-0 bg-gradient-to-r from-sky-900/90 to-gray-900 transition-opacity duration-700 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`} aria-hidden="true"></div>
        
        <video 
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoaded}
          className={`w-full h-full object-cover transition-opacity duration-700 ${videoLoaded ? 'opacity-60' : 'opacity-0'}`}
          aria-hidden="true"
          poster="/assets/images/video-poster.jpg"
        >
          <source src="/assets/images/video1.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay gradient for better text visibility */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/60"
          aria-hidden="true"
        ></div>
      </div>

      {/* Video playback controls */}
      <button 
        className="absolute bottom-6 right-6 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
        onClick={togglePlayPause}
        aria-label={isPlaying ? "Pause background video" : "Play background video"}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-start h-full">
        <div className="container mx-auto px-6 lg:px-8 py-12 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-center">
            {/* Text content - takes up 3 columns on large screens */}
            <div className="lg:col-span-3">
              <div 
                className={`transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-700 ease-out`}
              >
                <div 
                  className="inline-block bg-sky-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-md"
                  style={{ backgroundColor: '#025489' }}
                >
                  <span className="flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span>
                    Data Science & Design Solutions
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Transforming <span className="text-sky-400 relative">
                    data
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-400/50 rounded-full"></span>
                  </span> into <span className="text-sky-400 relative">
                    insights
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-400/50 rounded-full"></span>
                  </span>
                  <span className="block mt-2">and building amazing <span className="text-sky-400 relative">
                    brands
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-400/50 rounded-full"></span>
                  </span></span>
                </h1>
                
                <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                  At <span className="font-bold">KALDESIGNS</span>, we create tailored data analysis solutions and compelling brand identities 
                  to help businesses thrive. Our expertise in data science, machine learning, visualization, 
                  and web design unlocks your full potential.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-5">
                  <a 
                    href="#services" 
                    className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-900 group"
                    style={{ backgroundColor: '#025489' }}
                    aria-label="Explore our services"
                  >
                    Explore Our Services
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </a>
                  <a 
                    href="#contact" 
                    className="bg-transparent border-2 border-white hover:border-sky-400 text-white hover:text-sky-400 px-8 py-4 rounded-lg font-medium flex items-center justify-center transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label="Contact us"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            
            {/* Stats section - takes up 2 columns on large screens */}
            <div
              className={`lg:col-span-2 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-700 delay-300 ease-out`}
              aria-label="Company statistics"
            >
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-xl">
                <h3 className="text-white text-xl font-semibold mb-6 flex items-center">
                  <span className="w-10 h-1 bg-sky-400 mr-3"></span>
                  Our Impact
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div 
                      className="text-center hover:bg-white/10 rounded-lg p-4 transition-all duration-300 group"
                      key={index}
                    >
                      <div className="text-3xl md:text-4xl font-bold text-sky-400 mb-2 group-hover:scale-110 transition-transform">{stat.value}</div>
                      <div className="text-gray-300 text-sm mb-1">{stat.label}</div>
                      <div className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity">{stat.description}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="text-center text-white/70 text-sm">
                    Trusted by companies in <span className="font-semibold text-sky-400">finance</span>, <span className="font-semibold text-sky-400">healthcare</span>, and <span className="font-semibold text-sky-400">technology</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 hidden md:block focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-full"
        onClick={scrollToServices}
        aria-label="Scroll to services section"
      >
        <div className="w-10 h-16 rounded-full border-2 border-white/70 flex flex-col items-center justify-start pt-3 opacity-80 hover:opacity-100 transition-all duration-300 hover:border-sky-400 group">
          <ChevronDown className="h-5 w-5 text-white group-hover:text-sky-400 animate-bounce" aria-hidden="true" />
        </div>
      </button>
    </section>
  );
};

export default HeroSection;