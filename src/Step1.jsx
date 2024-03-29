
import React, { useState, useEffect } from 'react';

function PersonalInfo({ onNext, data }) {
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem('formData');
    return storedData ? JSON.parse(storedData) : {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      emailAddress: '',
      country: 'India',
      city: 'Mumbai',
    };
  });

  const [showFirstNameAlert, setShowFirstNameAlert] = useState(false);
  const [showLastNameAlert, setShowLastNameAlert] = useState(false);
  const [showPhoneNumberAlert, setShowPhoneNumberAlert] = useState(false);
  const [showEmailAlert, setShowEmailAlert] = useState(false);

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFormData(formData)) {
      console.log("Form data submitted:", formData); 
      onNext(formData);
    }
  };

  const validateFormData = (formData) => {
    setShowFirstNameAlert(!formData.firstName.trim());
    setShowLastNameAlert(!formData.lastName.trim());
    setShowPhoneNumberAlert(!formData.phoneNumber.trim());
    setShowEmailAlert(!formData.emailAddress.trim());

    return Object.values(formData).every((value) => value && value.trim() !== '');
  };

  const countryCityMap = {
    India: ['Mumbai', 'Delhi', 'Bangalore', 'Surat', 'Pune'],
    Nepal: ['Kathmandu', 'Lalitpur', 'Pokhara', 'Ghorahi', 'Butwal', 'Lumbini'],
    China: ['Gansu', 'Guangdong', 'Guizhou', 'Hainan', 'Hebei'],
    Italy: ['Rome', 'Naples', 'Bologna', 'Venice', 'Palermo']
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Your Personal Information</h2>
      <p>Enter your personal information to get closer to companies</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', gap: '-300px',fontSize:"14px" }}>
          <div style={{ flex: 1, marginRight: '20px' }}>
            <label>First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} style={{ width: '70%', padding: '4px' }} />
            {showFirstNameAlert && <p style={{ fontSize: '12px', color: 'red' }}>Please fill first name.</p>}
          </div>
          <div style={{ flex: 1 }}>
            <label>Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} style={{ width: '70%', padding: '4px' }} />
            {showLastNameAlert && <p style={{ fontSize: '12px', color: 'red' }}>Please fill last name.</p>}
          </div>
        </div>
        <div style={{ display: 'flex', gap: '-300px',fontSize:"14px" }}>
          <div style={{ flex: 1, marginRight: '20px' }}>
            <label>Phone Number</label>
            <input type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} style={{ width: '70%', padding: '4px' }} />
            {showPhoneNumberAlert && <p style={{ fontSize: '12px', color: 'red' }}>Please fill phone number.</p>}
          </div>
          <div style={{ flex: 1 }}>
            <label>Email Address</label>
            <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} style={{ width: '70%', padding: '4px' }} />
            {showEmailAlert && <p style={{ fontSize: '12px', color: 'red' }}>Please fill in email address.</p>}
          </div>
        </div>
        <div style={{ display: 'flex', gap: '-300px', alignItems: 'flex-start',fontSize:"14px" }}>
          <div style={{ flex: 1, marginRight: '20px' }}>
            <label>Country</label><br />
            <select name="country" value={formData.country} onChange={handleChange} style={{ width: '75%', padding: '4px' }}>
              {Object.keys(countryCityMap).map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label>City</label><br />
            <select name="city" value={formData.city} onChange={handleChange} style={{ width: '75%', padding: '4px' }}>
              {countryCityMap[formData.country].map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', marginTop: '40px' }}>
        <button type="button">Back</button>
        <button type="submit" style={{ backgroundColor: 'blue', color: 'white', marginLeft: '20px', borderRadius: '5px', border: 'blue' }}>Next Step</button>
      </div>
    </form>
  );
}

export default PersonalInfo;
