import React, { useState } from 'react';

function Experience({ onNext }) {
  const [formData, setFormData] = useState({
    experience1: '',
    experience2: '',
    position1: '',
    position2: '',
    additionalExperience: ''
  });

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
    return Object.values(formData).every(value => value && value.trim() !== '');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Work Experiences</h1>
      <p>Can you talk about your past work experience?</p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <label htmlFor="experience1">Experience 1</label>
            <input type="text" name="experience1" value={formData.experience1} onChange={handleChange} style={{ width: '200px', padding: '4px' }} />
          </div>
          <div>
            <label htmlFor="position1">Position 1</label>
            <input type="text" name="position1" value={formData.position1} onChange={handleChange} style={{ width: '200px', padding: '4px' }} />
          </div>
        </div>
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <label htmlFor="experience2">Experience 2</label>
            <input type="text" name="experience2" value={formData.experience2} onChange={handleChange} style={{ width: '200px', padding: '4px' }} />
          </div>
          <div>
            <label htmlFor="position2">Position 2</label>
            <input type="text" name="position2" value={formData.position2} onChange={handleChange} style={{ width: '200px', padding: '4px' }} />
          </div>
        </div>
        <div style={{ marginBottom: '20px',marginLeft:'-333px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <label htmlFor="additionalExperience"> Experience 3</label><br />
            <input type="text" name="additionalExperience" value={formData.additionalExperience} onChange={handleChange} style={{ width: '200px', padding: '4px', border: '1px dashed #000' }} placeholder="Add new Experience" />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button type="submit" style={{ marginTop: '60px',position:'absolute',marginLeft:'-300px',backgroundColor:'blue',borderRadius:'5px',border: 'blue',padding:'4px',color:'white'}}>Next Step</button>
        </div>
      </div>
    </form>
  );
}

export default Experience;
