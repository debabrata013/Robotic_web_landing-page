import React, { useState } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface TeacherCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const TeacherCard: React.FC<TeacherCardProps> = ({
  name,
  role,
  image,
  bio,
  expertise,
  socials
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div 
      className="h-[400px] w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`
        relative w-full h-full transition-all duration-500 preserve-3d
        ${isFlipped ? 'rotate-y-180' : ''}
      `}>
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden rounded-xl bg-gray-800 overflow-hidden border border-gray-700">
          <div className="h-1/2 overflow-hidden">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-blue-400 mb-3">{role}</p>
            <p className="text-gray-400 text-sm line-clamp-3">{bio}</p>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-4 text-center text-sm text-gray-500">
            Click to see more
          </div>
        </div>
        
        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl bg-gray-800 border border-gray-700 p-6 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-blue-400 mb-4">{role}</p>
          
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-300 mb-2">Areas of Expertise:</h4>
            <div className="flex flex-wrap gap-2">
              {expertise.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-blue-900/50 text-blue-300 text-xs font-medium px-2.5 py-1 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <p className="text-gray-400 text-sm flex-grow">{bio}</p>
          
          <div className="flex justify-center gap-4 mt-4">
            {socials.twitter && (
              <a 
                href={socials.twitter} 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </a>
            )}
            
            {socials.linkedin && (
              <a 
                href={socials.linkedin} 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            )}
            
            {socials.github && (
              <a 
                href={socials.github} 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;