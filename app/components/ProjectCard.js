import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ imagePath, title }) => {
  return (
    <div className="project-card">
      <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
        <img
          className="w-full object-cover object-end aspect-w-16 aspect-h-9"
          src={imagePath}
          alt={title}
        />
        <div className="p-6">
          <h4 className="project-title">{title}</h4>
          {/* Other content */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;