import React, { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative bg-gray-800 rounded-xl overflow-hidden shadow-lg h-[400px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        perspective: '1000px',
      }}
    >
      <div 
        className={`
          absolute inset-0 
          transition-all duration-500 ease-out
          ${isHovered ? 'scale-105 opacity-20' : 'scale-100 opacity-80'}
        `}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      <div className={`
        absolute inset-0 bg-gradient-to-t
        from-gray-900 via-gray-900/80 to-transparent
      `}></div>
      
      <div 
        className={`
          relative h-full flex flex-col justify-end p-6
          transform-gpu transition-all duration-500
          ${isHovered ? 'translate-y-0' : 'translate-y-[40%]'}
        `}
      >
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        
        <p className={`
          text-gray-300 mb-4 transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}>
          {description}
        </p>
        
        <div className={`
          flex flex-wrap gap-2 transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}>
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="bg-blue-900/50 text-blue-300 text-xs font-medium px-2.5 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className={`
          mt-4 flex justify-between items-center transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}>
          <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
            View Details
          </button>
          <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
            <span className="text-blue-400 text-lg">→</span>
          </div>
        </div>
      </div>
      
      {/* Blue glow on hover */}
      <div className={`
        absolute inset-0 border-2 rounded-xl transition-all duration-300
        ${isHovered ? 'border-blue-500 shadow-[0_0_15px_rgba(0,191,255,0.3)]' : 'border-transparent'}
      `}></div>
    </div>
  );
};

export default ProjectCard;