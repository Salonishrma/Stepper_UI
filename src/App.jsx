import React, { useState } from 'react';
import PersonalInfo from './Step1';
import Education from './Step2';
import Experience from './Step3';
import UserPhoto from './Step4';

function App() {
  const [currentState, setCurrentState] = useState(1);
  const [personalInfo, setPersonalInfo] = useState({});
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState({});

  const handlePersonalInfoNext = (formData) => {
    if (validateFormData(formData)) {
      setPersonalInfo(formData);
      setCurrentState(2);
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleEducationNext = (formData) => {
    if (validateFormData(formData)) {
      setEducation(formData);
      setCurrentState(3);
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleExperienceNext = (formData) => {
    if (validateFormData(formData)) {
      setExperience(formData);
      setCurrentState(4);
    } else {
      alert('Please fill in all fields.');
    }
  };

  const validateFormData = (formData) => {
    return Object.values(formData).every(value => value && value.trim() !== '');
  };

  const handlePrev = () => {
    if (currentState > 1) {
      setCurrentState(currentState - 1);
    }
  };

  const renderStep = () => {
    switch (currentState) {
      case 1:
        return <PersonalInfo onNext={handlePersonalInfoNext} />;
      case 2:
        return <Education onNext={handleEducationNext}  />;
      case 3:
        return <Experience onNext={handleExperienceNext}  />;
      case 4:
        return <UserPhoto />;
      default:
        return null;
    }
  };

  const getCircleStyle = (step) => {
    return {
      display: 'inline-block',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      background: currentState >= step ? 'white' : 'black',
      marginRight: '8px',
      textAlign: 'center',
      lineHeight: '20px',
      fontWeight: 'bold',
    };
  };

  const stepMessages = {
    1: "Enter your personal information to get closer to companies",
    2: "Get to know better by adding your diploma, certificate, and education life.",
    3: "Help companies get to know you better by telling them about your past experiences.",
    4: "Add your profile picture and let companies find you fast.",
  };

  return (
    <div style={{
      backgroundImage: `url('https://cdn.pixabay.com/photo/2022/09/21/17/02/blue-background-7470781_640.jpg')`,
      backgroundSize: 'auto 100%',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{ border: '5px solid #D3D3D3', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.8)', width: '80%' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '22%', padding: '40px', color: 'grey', borderRight: '2px solid #ccc', background: 'rgb(96, 130, 182)' }}>
            <h1 style={{ color: 'white' }}>indeed</h1>
            <div style={{ marginBottom: '20px', color: 'white' }}>
              <p>Step {currentState}</p>
              <p>{stepMessages[currentState]}</p>
            </div>
            <ol style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px', cursor: 'pointer', color: currentState >= 1 ? 'black' : 'white' }}>
                <div style={getCircleStyle(1)}>1</div> Personal Information
              </li>
              <li style={{ marginBottom: '10px', cursor: 'pointer', color: currentState >= 2 ? 'black' : 'white' }}>
                <div style={getCircleStyle(2)}>2</div> Education
              </li>
              <li style={{ marginBottom: '10px', cursor: 'pointer', color: currentState >= 3 ? 'black' : 'white' }}>
                <div style={getCircleStyle(3)}>3</div> Work Experience
              </li>
              <li style={{ cursor: 'pointer', color: currentState >= 4 ? 'black' : 'white' }}>
                <div style={getCircleStyle(4)}>4</div> User Photo
              </li>
            </ol>
          </div>
          <div style={{ flex: 1, padding: '20px' }}>
            {renderStep()}
            <div style={{ marginTop: '10px', display: 'flex' }}>
              {currentState > 1 && (
                <button type="button" onClick={handlePrev} style={{ marginRight: '10px', marginTop: '50px' }}>
                  Back
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
