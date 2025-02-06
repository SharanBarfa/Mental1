import React from 'react';

const founders = [
  {
    name: 'Sharan Barfa',
    role: 'Front-end Devloper', 
    image: 'https://media.licdn.com/dms/image/v2/D5603AQE1HZMIghBVwg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714290105662?e=1737590400&v=beta&t=qwGvS3G2j5ogV9dnXL6Tii8VZTuA4cDTUZVeMHve2Uo', // Replace with actual image file
  },
  {
    name: 'Sakshi Borse',
    role: 'Back-end Devloper',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQGl_4tMU_u89w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731861951929?e=1737590400&v=beta&t=0ZZw5R02ku5o5E5SFsbZ4-RX9dYskUj5z0TrTgDdX0E', // Replace with actual image file
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
              <img  src={founder.image} alt={founder.name} />
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

  