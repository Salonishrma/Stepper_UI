import React, { useState } from 'react';

function UserPhoto() {
  const [submitted, setSubmitted] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 30000);
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
    <div style={{ backgroundColor: '#f0f8ff', borderRadius: '5px', padding: '20px', position: 'relative' }}>
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
          
          {uploadedImage && (
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <img src={uploadedImage} alt="Uploaded Preview" style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px' }} />
            </div>
          )}

          <button type="submit" style={{ marginTop: '20px', backgroundColor: 'blue', borderRadius: '5px', border: 'blue', padding: '4px', color: 'white' }}>Submit</button>
        </form>
      )}
    </div>
  );
}

export default UserPhoto;
