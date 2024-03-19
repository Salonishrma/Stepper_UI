import React, { useState, useEffect } from 'react';

function Step2({ onNext, data }) {
  const [formData, setFormData] = useState({
    school1: '',
    school2: '',
    newSchool: '',
  });

  const [showSchool1Alert, setShowSchool1Alert] = useState(false);
  const [showSchool2Alert, setShowSchool2Alert] = useState(false);
  const [showNewSchoolAlert, setShowNewSchoolAlert] = useState(false);

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
    }
  };

  const validateFormData = (formData) => {
    setShowSchool1Alert(!formData.school1.trim());
    setShowSchool2Alert(!formData.school2.trim());
    setShowNewSchoolAlert(!formData.newSchool.trim());

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
              {showSchool1Alert && <p style={{ fontSize: '12px', color: 'red' }}>Please fill in School 1.</p>}
            </div>
          </label>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>
            School 2
            <div>
              <input type="text" name="school2" value={formData.school2} onChange={handleChange} style={{ width: '50%', padding: '8px', display: 'block' }} />
              {showSchool2Alert && <p style={{ fontSize: '12px', color: 'red' }}>Please fill in School 2.</p>}
            </div>
          </label>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>
            New School
            <div>
              <input type="text" name="newSchool" value={formData.newSchool} onChange={handleChange} style={{ width: '50%', padding: '8px', display: 'block' }} placeholder="Add new School" />
              {showNewSchoolAlert && <p style={{ fontSize: '12px', color: 'red' }}>Please fill in New School.</p>}
            </div>
          </label>
        </div>
      </div>
      <button type="submit" style={{ backgroundColor: 'blue', color: 'white', marginLeft: '80px', position: "absolute", marginTop: "6px", padding: '5px', borderRadius: '5px', border: 'blue' }}>Next Step</button>
    </form>
  );
}

export default Step2;
