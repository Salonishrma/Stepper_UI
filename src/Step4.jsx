import React, { useState } from 'react';

function UserPhoto() {
  const [submitted, setSubmitted] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [photoRequiredError, setPhotoRequiredError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (uploadedImage) {
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
    <div style={{ backgroundColor: 'rgba(240, 248, 255, 0.5)', borderRadius: '5px', padding: '2px', position: 'relative', width: '100%', height: '100%' }}>
      {submitted ? (
        <div style={{ textAlign: 'center' }}>
          <h2>Thank you for submitting!</h2>
          <p>Your data has been saved.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>User Photo</h2>
          <p>Upload your profile picture and show yourself.</p>
          <label>
            Add Your Photo:
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </label>
          
          {photoRequiredError && (
            <p style={{ color: 'red' }}>Please upload a photo.</p>
          )}

          {uploadedImage && (
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <img src={uploadedImage} alt="Uploaded Preview" style={{ maxWidth: '50%', height: 'auto', borderRadius: '5px' }} />
            </div>
          )}

          <button type="submit" style={{ marginRight:"20px",marginTop: '100px', backgroundColor: 'black', borderRadius: '5px', border: 'blue', padding: '4px', color: 'white' }}>Submit</button>
        </form>
      )}
    </div>
  );
}

export default UserPhoto;
