import React, { useState } from 'react';
import { ChevronDown, BookOpen } from 'lucide-react';

const Hero: React.FC = () => {
  const [isRobotHovered, setIsRobotHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full filter blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating circuit lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[10%] left-[5%] w-1 h-20 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-[20%] right-[10%] w-1 h-32 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-float" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-[15%] left-[15%] w-1 h-24 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-[40%] right-[20%] w-1 h-28 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="block">The Future of</span>
              <span className="text-blue-500 block animate-pulse">Robotic Learning</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
              Empowering the next generation of innovators through cutting-edge robotics education and hands-on learning experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-400/20 to-blue-600/0 animate-shimmer"></div>
                <BookOpen className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Explore Programs
              </button>
              <button className="bg-transparent border border-blue-500 text-blue-400 hover:text-white hover:bg-blue-500/20 px-8 py-3 rounded-md font-medium transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div 
              className={`
                relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96
                transition-all duration-500 ease-out animate-float
                ${isRobotHovered ? 'scale-105' : 'scale-100'}
              `}
              onMouseEnter={() => setIsRobotHovered(true)}
              onMouseLeave={() => setIsRobotHovered(false)}
            >
              {/* Robot */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* Robot head */}
                <div className={`
                  w-32 h-32 rounded-2xl bg-gray-800 border-2
                  border-gray-700 relative z-10 mb-4 transition-all duration-300
                  ${isRobotHovered ? 'border-blue-500 shadow-lg shadow-blue-500/20' : ''}
                `}>
                  {/* Robot eyes */}
                  <div className="absolute top-1/3 w-full flex justify-around">
                    <div className={`
                      w-6 h-2 rounded-full transition-all duration-300
                      ${isRobotHovered ? 'bg-blue-400 w-8 h-3 animate-pulse' : 'bg-blue-500'}
                    `}></div>
                    <div className={`
                      w-6 h-2 rounded-full transition-all duration-300
                      ${isRobotHovered ? 'bg-blue-400 w-8 h-3 animate-pulse' : 'bg-blue-500'}
                    `}></div>
                  </div>
                  {/* Robot scanning line */}
                  <div className={`
                    absolute top-0 left-0 w-full h-1 bg-blue-500/50
                    transition-all duration-1000 ease-in-out
                    ${isRobotHovered ? 'translate-y-[120px] opacity-100' : 'translate-y-0 opacity-0'}
                  `}></div>
                  {/* Robot mouth */}
                  <div className={`
                    absolute bottom-1/4 left-1/4 right-1/4 h-1 rounded-full
                    transition-all duration-300
                    ${isRobotHovered ? 'bg-blue-300 h-2 animate-pulse' : 'bg-gray-600'}
                  `}></div>
                </div>
                {/* Robot body */}
                <div className={`
                  w-40 h-48 rounded-2xl bg-gray-800 border-2
                  border-gray-700 relative transition-all duration-300
                  ${isRobotHovered ? 'border-blue-500 shadow-lg shadow-blue-500/20' : ''}
                `}>
                  {/* Robot chest light */}
                  <div className={`
                    absolute top-1/4 left-1/2 transform -translate-x-1/2
                    w-12 h-12 rounded-full transition-all duration-300
                    ${isRobotHovered ? 'bg-blue-500 animate-ping' : 'bg-gray-700'}
                  `}></div>
                  {/* Robot power lines */}
                  <div className="absolute inset-0">
                    <div className={`
                      absolute top-1/2 left-4 right-4 h-[1px]
                      transition-all duration-300
                      ${isRobotHovered ? 'bg-blue-500/50' : 'bg-gray-700/50'}
                    `}></div>
                    <div className={`
                      absolute top-2/3 left-4 right-4 h-[1px]
                      transition-all duration-300
                      ${isRobotHovered ? 'bg-blue-500/50' : 'bg-gray-700/50'}
                    `}></div>
                  </div>
                  {/* Robot buttons/controls */}
                  <div className="absolute bottom-1/4 w-full flex justify-center gap-3">
                    <div className={`
                      w-4 h-4 rounded-full transition-all duration-300
                      ${isRobotHovered ? 'bg-blue-400 animate-pulse' : 'bg-gray-600'}
                    `}></div>
                    <div className={`
                      w-4 h-4 rounded-full transition-all duration-300
                      ${isRobotHovered ? 'bg-green-400 animate-pulse' : 'bg-gray-600'}
                    `}></div>
                    <div className={`
                      w-4 h-4 rounded-full transition-all duration-300
                      ${isRobotHovered ? 'bg-yellow-400 animate-pulse' : 'bg-gray-600'}
                    `}></div>
                  </div>
                </div>
              </div>
              
              {/* Glow effect behind robot */}
              <div className={`
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                w-full h-full rounded-full bg-blue-500/10 filter blur-xl
                transition-all duration-500 animate-pulse
                ${isRobotHovered ? 'scale-110 opacity-70' : 'scale-90 opacity-30'}
              `}></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-blue-500 h-8 w-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;