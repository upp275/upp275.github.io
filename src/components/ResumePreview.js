import React from 'react';

const ResumePreview = ({ resumeData }) => {
  const { personalInfo } = resumeData;

  return (
    <div className="resume-preview">
      <h2>Resume Preview</h2>
      <div className="preview-content">
        <div className="preview-header">
          <h1>{personalInfo.name || 'Your Name'}</h1>
          <div className="contact-info">
            <p>{personalInfo.email}</p>
            <p>{personalInfo.phone}</p>
            <p>{personalInfo.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;