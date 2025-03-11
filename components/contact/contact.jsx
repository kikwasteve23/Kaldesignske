"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Check, AlertCircle, Loader } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    submitted: false,
    success: false,
    message: ''
  });

  const mapRef = useRef(null);

  // Initialize the Google Map
  useEffect(() => {
    // Instead of using Google Maps API which requires a key, we'll use an iframe with Google Maps embed
    if (mapRef.current) {
      // Create an iframe with the embedded map
      const iframe = document.createElement('iframe');
      
      // Updated location to show Ruiru town instead of Ruiru-Kiambu Road
      const mapURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.347421747054!2d36.9522833871635!3d-1.1460650763899571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3fc87e3ab26d%3A0xe4bbf0ec95cc4e3a!2sRuiru!5e0!3m2!1sen!2ske!4v1710462235271!5m2!1sen!2ske";
      
      // Set iframe attributes
      iframe.src = mapURL;
      iframe.width = "100%";
      iframe.height = "100%";
      iframe.frameBorder = "0";
      iframe.style.border = "0";
      iframe.allowFullscreen = "";
      iframe.setAttribute("loading", "lazy");
      iframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
      
      // Clear the map container and append the iframe
      mapRef.current.innerHTML = '';
      mapRef.current.appendChild(iframe);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFormStatus({
      isSubmitting: true,
      submitted: false,
      success: false,
      message: ''
    });

    try {
      // Create a form element to submit directly to formsubmit.co
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://formsubmit.co/stevenkikwa@gmail.com';
      form.style.display = 'none';
      
      // Add form data as hidden inputs
      const nameInput = document.createElement('input');
      nameInput.type = 'hidden';
      nameInput.name = 'name';
      nameInput.value = formData.name;
      form.appendChild(nameInput);
      
      const emailInput = document.createElement('input');
      emailInput.type = 'hidden';
      emailInput.name = 'email';
      emailInput.value = formData.email;
      form.appendChild(emailInput);
      
      const subjectInput = document.createElement('input');
      subjectInput.type = 'hidden';
      subjectInput.name = '_subject';
      subjectInput.value = `${formData.subject}`;
      form.appendChild(subjectInput);
      
      const messageInput = document.createElement('input');
      messageInput.type = 'hidden';
      messageInput.name = 'message';
      messageInput.value = formData.message;
      form.appendChild(messageInput);
      
      // Add formatting options
      const formatInput = document.createElement('input');
      formatInput.type = 'hidden';
      formatInput.name = '_template';
      formatInput.value = 'box';
      form.appendChild(formatInput);
      
      // Add redirect back to site
      const redirectInput = document.createElement('input');
      redirectInput.type = 'hidden';
      redirectInput.name = '_next';
      redirectInput.value = window.location.href;
      form.appendChild(redirectInput);
      
      // Add honeypot field to prevent spam
      const honeypotInput = document.createElement('input');
      honeypotInput.type = 'hidden';
      honeypotInput.name = '_honey';
      honeypotInput.value = '';
      form.appendChild(honeypotInput);
      
      // Append the form to the document body
      document.body.appendChild(form);
      
      // Submit the form
      form.submit();
      
      // Show the success message
      setFormStatus({
        isSubmitting: false,
        submitted: true,
        success: true,
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clean up the form element
      setTimeout(() => {
        document.body.removeChild(form);
      }, 1000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      
      setFormStatus({
        isSubmitting: false,
        submitted: true,
        success: false,
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly via email.'
      });
    }
    
    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus(prev => ({
        ...prev,
        submitted: false,
        message: ''
      }));
    }, 5000);
  };

  // Function to open WhatsApp with predefined message
  const openWhatsApp = () => {
    const phone = "+254745751939";
    const message = "Hello, I'd like to inquire about your services.";
    const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto mb-6" style={{ backgroundColor: '#025489' }}></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Have a project in mind or want to learn more about our services? Reach out to us and let's discuss how we can help transform your data and design needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-full mr-4" style={{backgroundColor: 'rgba(2, 84, 137, 0.1)'}}>
                    <Mail className="w-6 h-6 text-sky-700" style={{ color: '#025489' }} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                    <a 
                      href="mailto:stevenkikwa@gmail.com" 
                      className="text-gray-600 hover:text-sky-600 transition-colors"
                      style={{color: '#025489'}}
                    >
                      stevenkikwa@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-full mr-4" style={{backgroundColor: 'rgba(2, 84, 137, 0.1)'}}>
                    <Phone className="w-6 h-6 text-sky-700" style={{ color: '#025489' }} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Phone</h4>
                    <a 
                      href="tel:+254745751939" 
                      className="text-gray-600 hover:text-sky-600 transition-colors"
                    >
                      +254 745 751 939
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-sky-100 p-3 rounded-full mr-4" style={{backgroundColor: 'rgba(2, 84, 137, 0.1)'}}>
                    <MapPin className="w-6 h-6 text-sky-700" style={{ color: '#025489' }} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Location</h4>
                    <address className="text-gray-600 not-italic">
                      Ruiru Town,<br />
                      Kiambu, 00232, Kenya
                    </address>
                  </div>
                </div>
                
                {/* WhatsApp Button */}
                <div className="pt-4">
                  <button
                    onClick={openWhatsApp}
                    className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </button>
                </div>
              </div>
            </div>
            
            {/* Real Google Map */}
            <div className="h-64 w-full">
              <div ref={mapRef} className="w-full h-full"></div>
            </div>
            
            {/* Business Hours */}
            <div className="p-8 bg-gray-50">
              <h4 className="font-semibold text-gray-900 mb-4">Business Hours</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-700">Monday - Friday:</div>
                <div className="text-gray-700">8:00 AM - 6:00 PM</div>
                <div className="text-gray-700">Saturday:</div>
                <div className="text-gray-700">9:00 AM - 3:00 PM</div>
                <div className="text-gray-700">Sunday:</div>
                <div className="text-gray-700">Closed</div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Send us a Message</h3>
            
            {formStatus.submitted && (
              <div className={`p-4 mb-6 rounded-lg flex items-center ${
                formStatus.success ? 'bg-green-50 text-green-800 border border-green-200' : 
                'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {formStatus.success ? 
                  <Check className="w-5 h-5 mr-2 flex-shrink-0" /> : 
                  <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                }
                <span>{formStatus.message}</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                  placeholder="Subject of your message"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
                  className="w-4 h-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
                />
                <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                  I agree to the <a href="#" className="text-sky-600 hover:underline">privacy policy</a> and consent to being contacted regarding my inquiry.
                </label>
              </div>
              
              <button
                type="submit"
                disabled={formStatus.isSubmitting}
                className="w-full bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors"
                style={{ backgroundColor: '#025489' }}
              >
                {formStatus.isSubmitting ? (
                  <>
                    <Loader className="animate-spin mr-2 w-5 h-5" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
            </form>
            
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 text-sm">
                Prefer to reach out directly? Email us at{' '}
                <a 
                  href="mailto:stevenkikwa@gmail.com" 
                  className="text-sky-600 font-medium hover:underline"
                  style={{color: '#025489'}}
                >
                  stevenkikwa@gmail.com
                </a>{' '}
                or{' '}
                <button
                  onClick={openWhatsApp}
                  className="text-green-600 font-medium hover:underline inline"
                >
                  message us on WhatsApp
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;