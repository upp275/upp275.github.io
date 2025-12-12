import React from 'react';

const ResumeForm = ({ resumeData, setResumeData }) => {
  const updatePersonalInfo = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  };

  return (
    <div className="resume-form">
      <h2>Resume Information</h2>
      
      <section className="form-section">
        <h3>Personal Information</h3>
        <input
          type="text"
          placeholder="Full Name"
          value={resumeData.personalInfo.name}
          onChange={(e) => updatePersonalInfo('name', e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={resumeData.personalInfo.email}
          onChange={(e) => updatePersonalInfo('email', e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={resumeData.personalInfo.phone}
          onChange={(e) => updatePersonalInfo('phone', e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={resumeData.personalInfo.location}
          onChange={(e) => updatePersonalInfo('location', e.target.value)}
        />
      </section>
    </div>
  );
};

export default ResumeForm;