import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Steven Kalungu Kikwa",
    role: "Founder & Lead Data Scientist",
    description: "Passionate about transforming data into actionable insights. Steven leads our data science initiatives with expertise in machine learning, statistical modeling, and strategic business intelligence.",
    image: "/assets/kalungu.jpg",
    linkedin: "www.linkedin.com/in/kalungu-steve-a056b6149",
    github: "https://github.com/kikwasteve23",
    specialty: "Data Science & ML"
  },
  {
    name: "Julius Charles",
    role: "Software Engineer",
    description: "Full-stack developer with a passion for creating scalable, user-centric applications. Julius brings innovative solutions to complex technical challenges with modern web technologies.",
    image: "/assets/charles.jpg",
    linkedin: "https://www.linkedin.com/in/julius-charles-24b91b89/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=ke",
    github: "https://github.com/janedoe",
    specialty: "Full-Stack Development"
  },
];

const Team = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="team">
      <div className="container mx-auto px-6 text-center">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Meet Our Team
          </h2>
          <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: '#025489' }}></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Talented individuals working together to deliver exceptional results
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500 p-8 hover:-translate-y-1"
            >
              {/* Profile Image with Gradient Border */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full p-1" style={{ background: '#025489' }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-white"
                  />
                </div>
                {/* Specialty Badge */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <span className="inline-block text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md" style={{ background: '#025489' }}>
                    {member.specialty}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="font-semibold text-lg" style={{ color: '#025489' }}>
                    {member.role}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-left">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-4 pt-4">
                  <a
                    href={`https://${member.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-2 text-white hover:shadow-lg px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: '#025489' }}
                  >
                    <Linkedin size={18} />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'rgba(2, 84, 137, 0.02)' }}></div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Team;