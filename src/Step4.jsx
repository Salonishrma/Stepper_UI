import React, { useState, useEffect } from 'react';

function UserPhoto() {
  const [submitted, setSubmitted] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [photoRequiredError, setPhotoRequiredError] = useState(false);

  useEffect(() => {
    const savedImage = localStorage.getItem('uploadedImage');
    if (savedImage) {
      setUploadedImage(savedImage);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (uploadedImage) {
      localStorage.setItem('uploadedImage', uploadedImage);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 30000);
    } else {
      setPhotoRequiredError(true);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
   
      <div style={{ maxWidth: '100%' }}>
        {submitted ? (
          <div>
            <h2>Thank you for submitting!</h2>
            <p>Your data has been saved.</p>
          </div>
        ) : (
          <div style={{ marginTop: '20px' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex',flexDirection: 'column', alignItems: 'left',backgroundColor: 'rgba(240, 248, 255, 0.5)', borderRadius: '15px', maxWidth: '60%' }}>
              <h2>User Photo</h2>
              <p>Upload your profile picture and show yourself.</p>
              <label style={{ display: 'block', marginBottom: '10px' }}>
                Add Your Photo:
                <input type="file" accept="image/*" onChange={handleImageChange} />
              </label>
            
              {photoRequiredError && (
                <p style={{ color: 'red', marginBottom: '10px' }}>Please upload a photo.</p>
              )}

              {uploadedImage && (
                <div style={{ marginTop: '20px'}}>
                  <img src={uploadedImage} alt="Uploaded Preview" style={{ maxWidth: '100%', height: 'auto', borderRadius: '50%', border: '2px solid black' }} />
                </div> 
              )}
              <div style={{ marginTop: '20px' }}>
                <button type="submit" style={{ backgroundColor: 'black', borderRadius: '5px', border: '2px solid black', padding: '5px 5px', color: 'white' }}>Submit</button>
              </div>
            </form>
          </div>
        )}
      </div>
    
  );
}

export default UserPhoto;
