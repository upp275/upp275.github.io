import React, { useState, useEffect, useRef } from 'react';
import skillsData from '../data/skills.json';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SkillBar = ({ skill, index }) => (
    <div className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className={`skill-progress ${isVisible ? 'animate' : ''}`}
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            animationDelay: `${index * 0.1}s`
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2>Skills & Technologies</h2>
          <p>Here are the technologies I work with</p>
        </div>

        <div className="skills-grid">
          {skillsData.categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.name}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex} 
                    skill={skill} 
                    index={categoryIndex * category.skills.length + skillIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-item">
            <h4>Frontend Focus</h4>
            <p>Creating responsive, interactive user interfaces with modern frameworks and libraries.</p>
          </div>
          <div className="summary-item">
            <h4>Backend Expertise</h4>
            <p>Building robust server-side applications and APIs with scalable architecture.</p>
          </div>
          <div className="summary-item">
            <h4>AI Integration</h4>
            <p>Implementing intelligent features and machine learning capabilities in applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;