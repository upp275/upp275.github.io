import React, { useState } from 'react';
import projectsData from '../data/projects.json';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', ...new Set(projectsData.projects.map(p => p.category))];
  
  const filteredProjects = filter === 'All' 
    ? projectsData.projects 
    : projectsData.projects.filter(p => p.category === filter);

  const ProjectCard = ({ project }) => (
    <div className="project-card" onClick={() => setSelectedProject(project)}>
      <div className="project-image">
        <img 
          src={project.image} 
          alt={project.title}
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/400x250/3498db/ffffff?text=${project.title}`;
          }}
        />
        <div className="project-overlay">
          <div className="project-links">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              <i className="fab fa-github"></i>
            </a>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <p>Here are some of my recent works</p>
        </div>

        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {selectedProject && (
          <div className="project-modal" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                <i className="fas fa-times"></i>
              </button>
              <img src={selectedProject.image} alt={selectedProject.title} />
              <div className="modal-info">
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.description}</p>
                <div className="modal-tech">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="modal-links">
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <i className="fab fa-github"></i> View Code
                  </a>
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;