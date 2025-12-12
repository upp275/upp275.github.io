import React from 'react';
import personalInfo from '../data/personalInfo.json';

const About = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '20+', label: 'Technologies' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Get to know more about who I am and what I do</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Hello! I'm {personalInfo.name.split(' ')[0]}</h3>
            <p>
              I'm a passionate software developer with a strong foundation in modern web technologies 
              and a keen interest in artificial intelligence integration. My journey in technology 
              started with curiosity and has evolved into a career focused on creating innovative 
              solutions that make a difference.
            </p>
            <p>
              I specialize in full-stack development, with expertise in React, Node.js, and various 
              database technologies. I'm particularly excited about the intersection of AI and web 
              development, constantly exploring ways to integrate intelligent features into applications.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community. I believe in continuous 
              learning and staying updated with the latest industry trends.
            </p>

            <div className="about-details">
              <div className="detail-item">
                <strong>Location:</strong> {personalInfo.location}
              </div>
              <div className="detail-item">
                <strong>Email:</strong> {personalInfo.email}
              </div>
              <div className="detail-item">
                <strong>Availability:</strong> Open to opportunities
              </div>
            </div>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;