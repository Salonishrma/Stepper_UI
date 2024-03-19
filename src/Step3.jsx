
import React, { useState, useEffect } from 'react';

function Experience({ onNext, data }) {
  const [formData, setFormData] = useState({
    experience1: '',
    experience2: '',
    position1: '',
    position2: '',
    additionalExperience: ''
  });

  const [showExperience1Alert, setShowExperience1Alert] = useState(false);
  const [showExperience2Alert, setShowExperience2Alert] = useState(false);
  const [showPosition1Alert, setShowPosition1Alert] = useState(false);
  const [showPosition2Alert, setShowPosition2Alert] = useState(false);

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFormData(formData)) {
      onNext(formData);
      console.log("Form data submitted:", formData);
    } else {
      alert('Please fill in all fields.');
    }
  };

  const validateFormData = (formData) => {
    setShowExperience1Alert(!formData.experience1.trim());
    setShowExperience2Alert(!formData.experience2.trim());
    setShowPosition1Alert(!formData.position1.trim());
    setShowPosition2Alert(!formData.position2.trim());

    return Object.values(formData).every(value => value && value.trim() !== '');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Work Experiences</h1>
      <p>Can you talk about your past work experience?</p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ flex: 1, marginRight: '10px' }}>
            <label htmlFor="experience1">Experience 1</label>
            <input type="text" name="experience1" value={formData.experience1} onChange={handleChange} style={{ width: '100%', padding: '4px' }} />
            {showExperience1Alert && <p style={{ fontSize: '12px', color: 'red' }}>Please fill Experience 1.</p>}
          </div>
          <div style={{ flex: 1, marginLeft: '10px' }}>
            <label htmlFor="position1">Position 1</label>
            <input type="text" name="position1" value={formData.position1} onChange={handleChange} style={{ width: '100%', padding: '4px' }} />
            {showPosition1Alert && <p style={{ fontSize: '12px', color: 'red' }}>Please fill Position 1.</p>}
          </div>
        </div>
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ flex: 1, marginRight: '10px' }}>
            <label htmlFor="experience2">Experience 2</label>
            <input type="text" name="experience2" value={formData.experience2} onChange={handleChange} style={{ width: '100%', padding: '4px' }} />
            {showExperience2Alert && <p style={{ fontSize: '12px', color: 'red' }}>Please fill Experience 2.</p>}
          </div>
          <div style={{ flex: 1, marginLeft: '10px' }}>
            <label htmlFor="position2">Position 2</label>
            <input type="text" name="position2" value={formData.position2} onChange={handleChange} style={{ width: '100%', padding: '4px' }} />
            {showPosition2Alert && <p style={{ fontSize: '12px', color: 'red' }}>Please fill Position 2.</p>}
          </div>
        </div>
        <div style={{ marginBottom: '20px', width: '100%' }}>
          <label htmlFor="additionalExperience">Experience 3</label><br />
          <input type="text" name="additionalExperience" value={formData.additionalExperience} onChange={handleChange} style={{ width: '100%', padding: '4px', border: '1px dashed #000' }} placeholder="Add new Experience" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <button type="submit" style={{position:'absolute', backgroundColor: 'blue',padding:'5px',color: 'white', marginLeft: '20px',margintop:'50px', borderRadius: '5px', border: 'blue' }}>Next Step</button>
        </div>
      </div>
    </form>
  );
}

export default Experience;
