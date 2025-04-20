import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Filter } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Autonomous Navigation Robot',
    description: 'A wheeled robot capable of mapping and navigating complex environments using advanced sensor fusion and machine learning algorithms.',
    image: 'https://images.pexels.com/photos/8566549/pexels-photo-8566549.jpeg',
    technologies: ['AI', 'Computer Vision', 'Sensors']
  },
  {
    id: 2,
    title: 'Robotic Arm for Precision Assembly',
    description: 'Multi-jointed robotic arm designed for high-precision industrial assembly tasks with haptic feedback systems.',
    image: 'https://images.pexels.com/photos/8566460/pexels-photo-8566460.jpeg',
    technologies: ['Precision Mechanics', 'Control Systems', 'Haptics']
  },
  {
    id: 3,
    title: 'Drone Swarm Coordination',
    description: 'System for coordinating multiple autonomous aerial drones for synchronized flight patterns and collaborative tasks.',
    image: 'https://images.pexels.com/photos/442589/pexels-photo-442589.jpeg',
    technologies: ['Swarm Intelligence', 'Flight Control', 'Networking']
  },
  {
    id: 4,
    title: 'Humanoid Robot Assistant',
    description: 'Bipedal humanoid robot designed to assist in human environments with natural language processing and object manipulation.',
    image: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg',
    technologies: ['Humanoid Design', 'NLP', 'Locomotion']
  }
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'AI', 'Mechanics', 'Vision'];

  return (
    <section className="py-20 bg-gray-900" id="projects">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Featured <span className="text-blue-500">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Discover our cutting-edge robotics projects that blend innovation, technology, and practical application.
            </p>
          </div>
          
          <div className="flex items-center mt-6 md:mt-0">
            <Filter className="h-5 w-5 text-gray-400 mr-2" />
            <div className="flex gap-2">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`
                    px-4 py-2 rounded-md text-sm font-medium transition-colors
                    ${activeFilter === filter 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}
                  `}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map(project => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-transparent border border-blue-500 text-blue-400 hover:text-white hover:bg-blue-500/20 px-8 py-3 rounded-md font-medium transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;