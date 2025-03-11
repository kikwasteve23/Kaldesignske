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

  return (
    <section 
      className="relative w-full min-h-screen overflow-hidden" 
      aria-label="Hero section"
      id="hero"
    >
      {/* Background video with improved visibility */}
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
          className={`w-full h-full object-cover transition-opacity duration-700 ${videoLoaded ? 'opacity-80' : 'opacity-20'}`}
          aria-hidden="true"
          poster="/assets/images/video-poster.jpg"
        >
          <source src="/assets/images/video1.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        
        {/* Improved overlay gradient for better video visibility while maintaining text readability */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/10"
          aria-hidden="true"
        ></div>
      </div>

      {/* Enhanced video playback controls */}
      <button 
        className="absolute bottom-6 right-6 z-20 bg-sky-600/80 hover:bg-sky-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg backdrop-blur-sm"
        onClick={togglePlayPause}
        aria-label={isPlaying ? "Pause background video" : "Play background video"}
        style={{ backgroundColor: 'rgba(2, 84, 137, 0.8)' }}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>

      {/* Content with semi-transparent background */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto px-6 lg:px-8 py-12 md:py-24">
          <div className={`max-w-3xl mx-auto text-center transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-700 ease-out`}>
            <div 
              className="inline-block bg-sky-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-md"
              style={{ backgroundColor: '#025489' }}
            >
              <span className="flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span>
                Data Science & Design Solutions
              </span>
            </div>
            
            {/* Text content with subtle backdrop */}
            <div className="backdrop-blur-sm bg-black/30 rounded-2xl p-6 md:p-8 mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                Transforming <span className="text-sky-400 relative inline-block">
                  data
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-400/50 rounded-full"></span>
                </span> into <span className="text-sky-400 relative inline-block">
                  insights
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-400/50 rounded-full"></span>
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-100 mb-10 leading-relaxed">
                At <span className="font-bold">KALDESIGNS</span>, we create tailored solutions 
                that turn complex data into compelling brand stories.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
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
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white hover:border-sky-400 text-white hover:text-sky-400 px-8 py-4 rounded-lg font-medium flex items-center justify-center transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Contact us"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <button 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 hidden md:block focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-full"
        onClick={scrollToServices}
        aria-label="Scroll to services section"
      >
        <div className="w-10 h-16 rounded-full border-2 border-white/70 flex flex-col items-center justify-start pt-3 opacity-80 hover:opacity-100 transition-all duration-300 hover:border-sky-400 group backdrop-blur-sm bg-black/20">
          <ChevronDown className="h-5 w-5 text-white group-hover:text-sky-400 animate-bounce" aria-hidden="true" />
        </div>
      </button>
    </section>
  );
};

export default HeroSection;