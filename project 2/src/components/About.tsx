import React from 'react';
import { Award, Book, Users, Clock } from 'lucide-react';

const stats = [
  { icon: <Users className="h-6 w-6 text-blue-500" />, value: '1,200+', label: 'Students Trained' },
  { icon: <Book className="h-6 w-6 text-blue-500" />, value: '25+', label: 'Specialized Courses' },
  { icon: <Award className="h-6 w-6 text-blue-500" />, value: '96%', label: 'Employment Rate' },
  { icon: <Clock className="h-6 w-6 text-blue-500" />, value: '10+', label: 'Years of Excellence' },
];

const features = [
  {
    title: 'Hands-on Learning',
    description: 'Our curriculum emphasizes practical skills through immersive, project-based learning experiences.',
  },
  {
    title: 'State-of-the-art Labs',
    description: 'Access cutting-edge equipment and technology in our purpose-built robotics laboratories.',
  },
  {
    title: 'Industry Partnerships',
    description: 'Learn from and connect with leading technology companies through our extensive partner network.',
  },
  {
    title: 'Research Opportunities',
    description: 'Participate in groundbreaking robotics research projects alongside our expert faculty.',
  },
];

const About: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Shaping the <span className="text-blue-500">Future</span> of Robotics Education
            </h2>
            
            <p className="text-gray-300 mb-6">
              Founded in 2014, our institution has been at the forefront of robotics education, combining academic rigor with practical innovation. We're dedicated to empowering students with the knowledge and skills needed to advance the field of robotics.
            </p>
            
            <p className="text-gray-300 mb-8">
              Our mission is to inspire and prepare the next generation of robotics engineers, researchers, and entrepreneurs through comprehensive education, cutting-edge research, and real-world applications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800 p-5 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex flex-col items-center text-center hover:border-blue-500 transition-all duration-300"
              >
                <div className="mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
            
            {/* Background decorative element */}
            <div className="absolute -z-10 opacity-10">
              <div className="w-64 h-64 rounded-full bg-blue-500 filter blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;