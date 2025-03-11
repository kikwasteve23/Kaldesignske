"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef(null);

  // Sample testimonials - replace with your actual client testimonials
  const testimonials = [
    {
      quote: "KALDESIGNS transformed our business data into actionable insights that helped us increase our revenue by 30% within six months. Their expertise in data analytics is exceptional.",
      name: "Massimo Johnson",
      title: "Marketing Director, TechCorp Ltd",
      image: "/assets/images/headshot2.jpg" 
    },
    {
      quote: "The data visualization solutions provided by KALDESIGNS made our complex datasets understandable and accessible to all stakeholders. Their attention to detail and commitment to client satisfaction is remarkable.",
      name: "Michael Williams",
      title: "CEO, DataTrust Solutions",
      image: "/assets/images/headshot1.jpg" //
    },
    {
      quote: "Working with KALDESIGNS on our predictive analytics project was a game-changer for our supply chain management. Their machine learning models helped us optimize inventory and reduce costs significantly.",
      name: "Jessica Chen",
      title: "Operations Manager, GlobalRetail Inc",
      image: "/assets/images/headshot3.jpg" 
    }
  ];

  // Set up auto-scroll
  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto mb-6" style={{ backgroundColor: '#025489' }}></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Don't just take our word for it. See what our clients have to say about working with KALDESIGNS.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-50 rounded-lg p-8 shadow-md relative">
                    <Quote className="absolute top-8 left-8 w-12 h-12 text-sky-200 opacity-50" />
                    
                    <div className="relative z-10">
                      <p className="text-gray-700 text-lg mb-8 italic">"{testimonial.quote}"</p>
                      
                      <div className="flex items-center">
                        <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-gray-500 text-sm">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center focus:outline-none hover:bg-gray-100 transition-colors"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center focus:outline-none hover:bg-gray-100 transition-colors"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-sky-600' : 'bg-gray-300'
                }`}
                style={currentIndex === index ? { backgroundColor: '#025489' } : {}}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;