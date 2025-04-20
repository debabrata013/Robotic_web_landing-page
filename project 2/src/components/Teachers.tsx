import React from 'react';
import TeacherCard from './TeacherCard';

const teachers = [
  {
    id: 1,
    name: 'Dr. Sarah Chen',
    role: 'Director of Robotics',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg',
    bio: 'Dr. Chen has over 15 years of experience in advanced robotics and AI systems. She previously worked at NASA developing autonomous rovers and joined our institution to inspire the next generation of robotics engineers.',
    expertise: ['AI Systems', 'Autonomous Navigation', 'Robotics Engineering'],
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    id: 2,
    name: 'Prof. Marcus Johnson',
    role: 'Lead Instructor',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    bio: 'Prof. Johnson specializes in robotic mechanics and control systems. With a background in both industrial robotics and academia, he brings practical knowledge and theoretical expertise to the classroom.',
    expertise: ['Mechanical Design', 'Control Systems', 'Industrial Automation'],
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    id: 3,
    name: 'Aisha Patel, MSc',
    role: 'Computer Vision Specialist',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    bio: 'Aisha is an expert in computer vision and sensing technologies for robotics. Her research focuses on enabling robots to perceive and understand complex environments through advanced visual processing algorithms.',
    expertise: ['Computer Vision', 'Sensor Fusion', 'Deep Learning'],
    socials: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    id: 4,
    name: 'Dr. James Rodriguez',
    role: 'Robotics Research Lead',
    image: 'https://images.pexels.com/photos/2474307/pexels-photo-2474307.jpeg',
    bio: 'With a PhD in robotics from MIT, Dr. Rodriguez leads our research initiatives. He has published numerous papers on swarm robotics and bio-inspired design, bringing cutting-edge research into our educational programs.',
    expertise: ['Swarm Robotics', 'Bio-inspired Design', 'Research Methods'],
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  }
];

const Teachers: React.FC = () => {
  return (
    <section className="py-20 bg-gray-950" id="teachers">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Meet Our <span className="text-blue-500">Instructors</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our team of experts combines academic excellence with industry experience to provide unparalleled robotics education.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map(teacher => (
            <TeacherCard 
              key={teacher.id}
              name={teacher.name}
              role={teacher.role}
              image={teacher.image}
              bio={teacher.bio}
              expertise={teacher.expertise}
              socials={teacher.socials}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;