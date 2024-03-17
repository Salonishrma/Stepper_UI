import React, { useState, useEffect } from 'react';

function PersonalInfo({ onNext, data }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    country: 'India',
    city: 'Jaipur',
  });

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
    return Object.values(formData).every((value) => value && value.trim() !== '');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Your Personal Information</h1>
      <p>Enter your personal information to get closer to companies</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1, marginRight: '20px' }}>
            <label>First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} style={{ width: '70%', padding: '4px' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label>Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} style={{ width: '70%', padding: '4px' }} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: 1, marginRight: '20px' }}>
            <label>Phone Number</label>
            <input type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} style={{ width: '70%', padding: '4px' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label>Email Address</label>
            <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} style={{ width: '70%', padding: '4px' }} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
          <div style={{ flex: 1, marginRight: '20px' }}>
            <label>Country</label><br />
            <select name="country" value={formData.country} onChange={handleChange} style={{ width: '75%', padding: '4px' }}>
              <option value="China">China</option>
              <option value="India">India</option>
              <option value="Nepal">Nepal</option>
              <option value="Italy">Italy</option>
              <option value="Russia">Russia</option>
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label>City</label><br />
            <select name="city" value={formData.city} onChange={handleChange} style={{ width: '75%', padding: '4px' }}>
              <option value="Mumbai">Mumbai</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Kathmandu">Kathmandu</option>
              <option value="Moscow">Moscow</option>
              <option value="Samara">Samara</option>
            </select>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', marginTop: '400px' }}>
        <button type="button">Back</button>
        <button type="submit" style={{ backgroundColor: 'blue', color: 'white', marginLeft: '20px',borderRadius: '5px', border: 'blue' }}>Next Step</button>
      </div>
    </form>
  );
}

export default PersonalInfo;
