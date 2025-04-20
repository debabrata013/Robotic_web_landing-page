// import React, { useState } from 'react';
// import { ChevronDown, BookOpen } from 'lucide-react';

// const Hero: React.FC = () => {
//   const [isRobotHovered, setIsRobotHovered] = useState(false);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full filter blur-xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full filter blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
//       </div>

//       {/* Floating circuit lines */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-full">
//           <div className="absolute top-[10%] left-[5%] w-1 h-20 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-float" style={{ animationDelay: '0s' }}></div>
//           <div className="absolute top-[20%] right-[10%] w-1 h-32 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-float" style={{ animationDelay: '1.5s' }}></div>
//           <div className="absolute bottom-[15%] left-[15%] w-1 h-24 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-float" style={{ animationDelay: '1s' }}></div>
//           <div className="absolute top-[40%] right-[20%] w-1 h-28 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-float" style={{ animationDelay: '2s' }}></div>
//         </div>
//       </div>
      
//       <div className="container mx-auto px-4 z-10">
//         <div className="flex flex-col lg:flex-row items-center justify-between">
//           <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
//               <span className="block">The Future of</span>
//               <span className="text-blue-500 block animate-pulse">Robotic Learning</span>
//             </h1>
//             <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
//               Empowering the next generation of innovators through cutting-edge robotics education and hands-on learning experiences.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center group relative overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-400/20 to-blue-600/0 animate-shimmer"></div>
//                 <BookOpen className="mr-2 h-5 w-5 group-hover:animate-pulse" />
//                 Explore Programs
//               </button>
//               <button className="bg-transparent border border-blue-500 text-blue-400 hover:text-white hover:bg-blue-500/20 px-8 py-3 rounded-md font-medium transition-all duration-300">
//                 Watch Demo
//               </button>
//             </div>
//           </div>
          
//           <div className="lg:w-1/2 flex justify-center">
//             <div 
//               className={`
//                 relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96
//                 transition-all duration-500 ease-out animate-float
//                 ${isRobotHovered ? 'scale-105' : 'scale-100'}
//               `}
//               onMouseEnter={() => setIsRobotHovered(true)}
//               onMouseLeave={() => setIsRobotHovered(false)}
//             >
//               {/* Robot */}
//               <div className="absolute inset-0 flex flex-col items-center justify-center">
//                 {/* Robot head */}
//                 <div className={`
//                   w-32 h-32 rounded-2xl bg-gray-800 border-2
//                   border-gray-700 relative z-10 mb-4 transition-all duration-300
//                   ${isRobotHovered ? 'border-blue-500 shadow-lg shadow-blue-500/20' : ''}
//                 `}>
//                   {/* Robot eyes */}
//                   <div className="absolute top-1/3 w-full flex justify-around">
//                     <div className={`
//                       w-6 h-2 rounded-full transition-all duration-300
//                       ${isRobotHovered ? 'bg-blue-400 w-8 h-3 animate-pulse' : 'bg-blue-500'}
//                     `}></div>
//                     <div className={`
//                       w-6 h-2 rounded-full transition-all duration-300
//                       ${isRobotHovered ? 'bg-blue-400 w-8 h-3 animate-pulse' : 'bg-blue-500'}
//                     `}></div>
//                   </div>
//                   {/* Robot scanning line */}
//                   <div className={`
//                     absolute top-0 left-0 w-full h-1 bg-blue-500/50
//                     transition-all duration-1000 ease-in-out
//                     ${isRobotHovered ? 'translate-y-[120px] opacity-100' : 'translate-y-0 opacity-0'}
//                   `}></div>
//                   {/* Robot mouth */}
//                   <div className={`
//                     absolute bottom-1/4 left-1/4 right-1/4 h-1 rounded-full
//                     transition-all duration-300
//                     ${isRobotHovered ? 'bg-blue-300 h-2 animate-pulse' : 'bg-gray-600'}
//                   `}></div>
//                 </div>
//                 {/* Robot body */}
//                 <div className={`
//                   w-40 h-48 rounded-2xl bg-gray-800 border-2
//                   border-gray-700 relative transition-all duration-300
//                   ${isRobotHovered ? 'border-blue-500 shadow-lg shadow-blue-500/20' : ''}
//                 `}>
//                   {/* Robot chest light */}
//                   <div className={`
//                     absolute top-1/4 left-1/2 transform -translate-x-1/2
//                     w-12 h-12 rounded-full transition-all duration-300
//                     ${isRobotHovered ? 'bg-blue-500 animate-ping' : 'bg-gray-700'}
//                   `}></div>
//                   {/* Robot power lines */}
//                   <div className="absolute inset-0">
//                     <div className={`
//                       absolute top-1/2 left-4 right-4 h-[1px]
//                       transition-all duration-300
//                       ${isRobotHovered ? 'bg-blue-500/50' : 'bg-gray-700/50'}
//                     `}></div>
//                     <div className={`
//                       absolute top-2/3 left-4 right-4 h-[1px]
//                       transition-all duration-300
//                       ${isRobotHovered ? 'bg-blue-500/50' : 'bg-gray-700/50'}
//                     `}></div>
//                   </div>
//                   {/* Robot buttons/controls */}
//                   <div className="absolute bottom-1/4 w-full flex justify-center gap-3">
//                     <div className={`
//                       w-4 h-4 rounded-full transition-all duration-300
//                       ${isRobotHovered ? 'bg-blue-400 animate-pulse' : 'bg-gray-600'}
//                     `}></div>
//                     <div className={`
//                       w-4 h-4 rounded-full transition-all duration-300
//                       ${isRobotHovered ? 'bg-green-400 animate-pulse' : 'bg-gray-600'}
//                     `}></div>
//                     <div className={`
//                       w-4 h-4 rounded-full transition-all duration-300
//                       ${isRobotHovered ? 'bg-yellow-400 animate-pulse' : 'bg-gray-600'}
//                     `}></div>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Glow effect behind robot */}
//               <div className={`
//                 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
//                 w-full h-full rounded-full bg-blue-500/10 filter blur-xl
//                 transition-all duration-500 animate-pulse
//                 ${isRobotHovered ? 'scale-110 opacity-70' : 'scale-90 opacity-30'}
//               `}></div>
//             </div>
//           </div>
//         </div>
        
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <ChevronDown className="text-blue-500 h-8 w-8" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React, { useState, useEffect } from 'react';
import { ChevronDown, BookOpen, Play, Code, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [isRobotHovered, setIsRobotHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  
  // Auto-cycle through features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Detect scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "AI Learning",
      description: "Master artificial intelligence concepts through hands-on projects",
      icon: <Sparkles className="h-6 w-6" />
    },
    {
      title: "Robotics Labs",
      description: "Build and program your own robots in our virtual laboratories",
      // icon: <Robot className="h-6 w-6" />
    },
    {
      title: "Coding Skills",
      description: "Learn programming fundamentals with real-world applications",
      icon: <Code className="h-6 w-6" />
    }
  ];

  return (
    <>
      {/* Sticky navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-blue-500 font-bold text-2xl flex items-center">
                {/* <Robot className="mr-2 h-6 w-6" /> */}
                <span>RoboLearn</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Programs</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden pt-16">
        {/* Animated background elements - enhanced with more elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full filter blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-indigo-500/10 rounded-full filter blur-xl animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        </div>

        {/* Particle grid effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="grid grid-cols-12 grid-rows-6 h-full">
            {Array.from({ length: 72 }).map((_, i) => (
              <div key={i} className="relative">
                <div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-blue-400 rounded-full"
                  style={{
                    animation: `pulse 3s infinite ${Math.random() * 5}s`,
                    opacity: Math.random() * 0.5 + 0.25
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating circuit lines - enhanced with more lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-[10%] left-[5%] w-1 h-20 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-float" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-[20%] right-[10%] w-1 h-32 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-float" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute bottom-[15%] left-[15%] w-1 h-24 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-[40%] right-[20%] w-1 h-28 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-[60%] left-[30%] w-1 h-16 bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent animate-float" style={{ animationDelay: '2.5s' }}></div>
            <div className="absolute top-[30%] left-[70%] w-1 h-24 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-float" style={{ animationDelay: '1.7s' }}></div>
            
            {/* Circuit connections */}
            <div className="absolute top-[30%] left-[5%] w-20 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse" style={{ animationDelay: '3s' }}></div>
            <div className="absolute top-[50%] right-[15%] w-32 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
              {/* Animated text reveal */}
              <div className="overflow-hidden">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2 animate-slide-up">
                  <span className="block">The Future of</span>
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient">Robotic Learning</span>
                </h1>
              </div>
              
              <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Empowering the next generation of innovators through cutting-edge robotics education and hands-on learning experiences.
              </p>
              
              {/* Feature tabs */}
              <div className="mb-8 hidden md:block">
                <div className="flex justify-center lg:justify-start space-x-2 mb-4">
                  {features.map((feature, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded-md transition-all duration-300 flex items-center ${
                        activeFeature === index 
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50' 
                          : 'text-gray-400 hover:text-gray-300'
                      }`}
                      onClick={() => setActiveFeature(index)}
                    >
                      {feature.icon}
                      <span className="ml-2">{feature.title}</span>
                    </button>
                  ))}
                </div>
                <div className="bg-gray-800/50 p-4 rounded-md border border-gray-700/50 backdrop-blur-sm animate-fade-in">
                  <div className="flex items-center mb-2">
                    {features[activeFeature].icon}
                    <h3 className="text-lg font-medium text-white ml-2">{features[activeFeature].title}</h3>
                  </div>
                  <p className="text-gray-300">{features[activeFeature].description}</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-white/20 to-blue-600/0 animate-shimmer"></div>
                  <BookOpen className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Explore Programs
                </button>
                <button className="bg-transparent border border-blue-500 text-blue-400 hover:text-white hover:bg-blue-500/20 px-8 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </div>
              
              {/* Social proof */}
              <div className="mt-8 text-gray-400 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <p className="text-sm mb-2">Trusted by leading institutions</p>
                <div className="flex justify-center lg:justify-start space-x-6">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">MIT</div>
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">CMU</div>
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">NASA</div>
                </div>
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
                {/* Robot - Enhanced with more details */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {/* Robot antennas */}
                  <div className="relative mb-1">
                    <div className={`
                      w-1 h-8 bg-gray-700 absolute left-0 -top-8 rounded-full
                      transition-all duration-300
                      ${isRobotHovered ? 'bg-blue-500' : ''}
                    `}></div>
                    <div className={`
                      w-1 h-6 bg-gray-700 absolute right-0 -top-6 rounded-full
                      transition-all duration-300
                      ${isRobotHovered ? 'bg-blue-500' : ''}
                    `}></div>
                    <div className={`
                      w-2 h-2 rounded-full absolute -top-8 left-0 -translate-x-1/4
                      transition-all duration-300
                      ${isRobotHovered ? 'bg-blue-400 animate-ping' : 'bg-gray-600'}
                    `}></div>
                    <div className={`
                      w-2 h-2 rounded-full absolute -top-6 right-0 translate-x-1/4
                      transition-all duration-300
                      ${isRobotHovered ? 'bg-blue-400 animate-ping' : 'bg-gray-600'}
                    `}></div>
                  </div>
                  
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
                    
                    {/* Robot face details */}
                    <div className="absolute top-1/6 left-1/6 w-2 h-2 rounded-full bg-gray-700"></div>
                    <div className="absolute top-1/6 right-1/6 w-2 h-2 rounded-full bg-gray-700"></div>
                  </div>
                  
                  {/* Robot neck */}
                  <div className={`
                    w-8 h-4 bg-gray-700 rounded-md -mt-2 mb-2 z-0
                    transition-all duration-300
                    ${isRobotHovered ? 'bg-blue-600' : ''}
                  `}></div>
                  
                  {/* Robot body */}
                  <div className={`
                    w-40 h-48 rounded-2xl bg-gray-800 border-2
                    border-gray-700 relative transition-all duration-300
                    ${isRobotHovered ? 'border-blue-500 shadow-lg shadow-blue-500/20' : ''}
                  `}>
                    {/* Robot chest light */}
                    <div className={`
                      absolute top-1/4 left-1/2 transform -translate-x-1/2
                      w-12 h-12 rounded-full border-2 border-gray-700 flex items-center justify-center
                      transition-all duration-300
                      ${isRobotHovered ? 'border-blue-500 animate-spin-slow' : ''}
                    `}>
                      <div className={`
                        w-8 h-8 rounded-full transition-all duration-300
                        ${isRobotHovered ? 'bg-blue-500 animate-ping' : 'bg-gray-700'}
                      `}></div>
                    </div>
                    
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
                    
                    {/* Digital display */}
                    <div className={`
                      absolute bottom-8 left-1/2 transform -translate-x-1/2
                      w-20 h-6 bg-gray-900 rounded-md overflow-hidden
                      transition-all duration-300
                      ${isRobotHovered ? 'border border-blue-500' : 'border border-gray-700'}
                    `}>
                      <div className={`
                        h-full bg-gradient-to-r from-blue-500 to-blue-500
                        transition-all duration-300
                        ${isRobotHovered ? 'w-3/4 animate-pulse' : 'w-1/4'}
                      `}></div>
                    </div>
                  </div>
                  
                  {/* Robot arms */}
                  <div className="absolute top-1/2 left-0 -translate-x-full">
                    <div className={`
                      w-12 h-4 bg-gray-700 rounded-full origin-right
                      transition-all duration-500
                      ${isRobotHovered ? 'rotate-45 bg-blue-600' : ''}
                    `}></div>
                  </div>
                  <div className="absolute top-1/2 right-0 translate-x-full">
                    <div className={`
                      w-12 h-4 bg-gray-700 rounded-full origin-left
                      transition-all duration-500
                      ${isRobotHovered ? '-rotate-45 bg-blue-600' : ''}
                    `}></div>
                  </div>
                </div>
                
                {/* Glow effect behind robot */}
                <div className={`
                  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  w-full h-full rounded-full bg-gradient-to-b from-blue-500/10 to-purple-500/10 filter blur-xl
                  transition-all duration-500 animate-pulse
                  ${isRobotHovered ? 'scale-110 opacity-70' : 'scale-90 opacity-30'}
                `}></div>
                
                {/* Circular rings around robot */}
                <div className={`
                  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  w-full h-full rounded-full border border-blue-500/30
                  transition-all duration-500
                  ${isRobotHovered ? 'scale-110 animate-ping opacity-100' : 'scale-100 opacity-0'}
                `}></div>
                <div className={`
                  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  w-[110%] h-[110%] rounded-full border border-purple-500/20
                  transition-all duration-500
                  ${isRobotHovered ? 'scale-110 animate-ping opacity-100 animation-delay-500' : 'scale-100 opacity-0'}
                `}></div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="text-gray-400 mb-2 text-sm text-center">Scroll to explore</div>
            <div className="flex flex-col items-center">
              <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center p-1">
                <div className="w-1 h-2 bg-blue-500 rounded-full animate-scroll-indicator"></div>
              </div>
              <ChevronDown className="text-blue-500 h-6 w-6 mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Add CSS for custom animations */}
      <style >{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes scroll-indicator {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.5; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-scroll-indicator {
          animation: scroll-indicator 1.5s infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease forwards;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </>
  );
};

export default Hero;