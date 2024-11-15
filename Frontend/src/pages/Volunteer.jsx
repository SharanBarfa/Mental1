import React from 'react';

const founders = [
  {
    name: 'Sharan Barfa',
    role: 'Front-end Devloper', 
    image: ' https://in.linkedin.com/in/sharan-barfa', // Replace with actual image file
  },
  {
    name: 'Sakshi Borse',
    role: 'Back-end Devloper',
    image: '', // Replace with actual image file
  }

];

const Volunteer = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <div className="founders">
        {founders.map((founder, index) => (
          <div key={index} className="founder">
            <div className="founder-image">
              <img src={founder.image} alt={founder.name} />
            </div>
            <div className="founder-details">
              <h3>{founder.name}</h3>
              <p>{founder.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteer;

  