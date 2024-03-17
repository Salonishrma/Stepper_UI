import React, { useState } from 'react';

function Step2({ onNext }) {
  const [formData, setFormData] = useState({
    school1: '',
    school2: '',
    newSchool: '',
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
    return Object.values(formData).every((value) => value && value.trim() !== '');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Education</h1>
      <p>Inform companies about your education life</p>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '20px' }}>
          <label>
            School 1
            <div>
              <input type="text" name="school1" value={formData.school1} onChange={handleChange} style={{ width: '50%', padding: '8px', display: 'block' }} />
            </div>
          </label>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>
            School 2
            <div>
              <input type="text" name="school2" value={formData.school2} onChange={handleChange} style={{ width: '50%', padding: '8px', display: 'block' }} />
            </div>
          </label>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>
            New School
            <div>
              <input type="text" name="newSchool" value={formData.newSchool} onChange={handleChange} style={{ width: '50%', padding: '8px', display: 'block' }} placeholder="Add new School" />
            </div>
          </label>
        </div>
      </div>
      <button type="submit" style={{ marginTop: '60px',position:'absolute',marginLeft:'80px',backgroundColor:'blue',borderRadius:'5px',border: 'blue',padding:'4px',color:'white'}}>Next Step</button>
    </form>
  );
}

export default Step2;
