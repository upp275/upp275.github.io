import React, { useState } from 'react';
import experienceData from '../data/experience.json';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const ExperienceItem = ({ item, index }) => (
    <div className="timeline-item" style={{ animationDelay: `${index * 0.2}s` }}>
      <div className="timeline-marker"></div>
      <div className="timeline-content">
        <div className="timeline-header">
          <h3>{item.title}</h3>
          <div className="company-info">
            <span className="company">{item.company}</span>
            <span className="location">{item.location}</span>
          </div>
          <div className="duration">{item.duration}</div>
        </div>
        <p className="description">{item.description}</p>
        <div className="achievements">
          <h4>Key Achievements:</h4>
          <ul>
            {item.achievements.map((achievement, idx) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        </div>
        <div className="technologies">
          {item.technologies.map((tech, idx) => (
            <span key={idx} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );

  const EducationItem = ({ item }) => (
    <div className="education-card">
      <div className="education-header">
        <h3>{item.degree}</h3>
        <div className="school-info">
          <span className="school">{item.school}</span>
          <span className="location">{item.location}</span>
        </div>
        <div className="duration">{item.duration}</div>
        {item.gpa && <div className="gpa">GPA: {item.gpa}</div>}
      </div>
      <p className="description">{item.description}</p>
      <div className="achievements">
        <h4>Achievements:</h4>
        <ul>
          {item.achievements.map((achievement, idx) => (
            <li key={idx}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  const CertificationItem = ({ cert }) => (
    <div className="cert-card">
      <div className="cert-header">
        <h3>{cert.name}</h3>
        <div className="cert-issuer">{cert.issuer}</div>
        <div className="cert-date">{cert.date}</div>
      </div>
      <div className="cert-id">ID: {cert.credentialId}</div>
      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="cert-link">
        View Credential <i className="fas fa-external-link-alt"></i>
      </a>
    </div>
  );

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2>Experience & Education</h2>
          <p>My professional journey and academic background</p>
        </div>

        <div className="experience-tabs">
          <button 
            className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Work Experience
          </button>
          <button 
            className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
          <button 
            className={`tab-btn ${activeTab === 'certifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('certifications')}
          >
            Certifications
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'experience' && (
            <div className="timeline">
              {experienceData.experience.map((item, index) => (
                <ExperienceItem key={item.id} item={item} index={index} />
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="education-grid">
              {experienceData.education.map(item => (
                <EducationItem key={item.id} item={item} />
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="certifications-grid">
              {experienceData.certifications.map(cert => (
                <CertificationItem key={cert.id} cert={cert} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;