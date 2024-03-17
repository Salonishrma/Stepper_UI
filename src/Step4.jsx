import React, { useState } from 'react';

function UserPhoto() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 30000);
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
            <input type="file" accept="image/*" />
          </label>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ marginRight: '10px', border: '1px solid black', padding: '5px', borderRadius: '5px' }}> {/* Added wrapping div with border */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16">
                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
              </svg>
            </div>
            <div style={{ border: '1px solid black', padding: '5px', borderRadius: '5px' }}> {/* Added wrapping div with border */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
              </svg>
            </div>
          </div>



          <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ position: 'relative', textAlign: 'center' }}>
              <img src="https://personalexcellence.co/files/ceo.jpg" alt="Profile" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
              <h2 style={{ marginTop: '-10px',marginleft:'0px', position: 'relative', bottom: '-20px', left: '70%', transform: 'translateX(-50%)' }}>Berktug Mutlu</h2>
            </div>
            <div style={{ position:"absolute"}}>
              <p style={{marginTop: '150px' ,marginLeft:"32px",color: 'blue' }}>Izmir, Turkey <small style={{ color: 'grey' }}>Hiring!</small></p>
            </div>
            <div style={{ marginTop: '100px'}}>
              <p style={{ fontSize: '12px', color: 'grey', marginTop: '50px' }}>17 days left.&nbsp;&nbsp;&nbsp;&nbsp;<strong>94 replies</strong></p>
            </div>
          </div>

          

          <button type="submit"style={{ marginTop: '80px',position:'absolute',marginLeft:'100px',backgroundColor:'blue',borderRadius:'5px',border: 'blue',padding:'4px',color:'white'}}>Submit</button>
        </form>
      )}
    </div>
  );
}

export default UserPhoto;
