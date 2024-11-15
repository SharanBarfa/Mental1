import React, { useState } from 'react';

const adviceData = [
  {
    mood: 'happy',
    title: 'Keep the Joy Alive',
    text: 'Happiness is contagious! Share your joy with others and make their day brighter.',
    videoURL: 'https://www.example.com/happy-video',
    additionalAdvice: 'Try writing down three things you’re grateful for today.'
  },
  {
    mood: 'sad',
    title: 'It’s Okay to Feel Sad',
    text: 'Feeling sad is part of life. Take some time for self-care and reach out to a loved one.',
    videoURL: 'https://www.example.com/sad-video',
    additionalAdvice: 'Listen to calming music or practice mindfulness meditation.'
  },
  {
    mood: 'stressed',
    title: 'Dealing with Stress',
    text: 'Stress is a sign to pause. Breathe deeply, take a break, or go for a walk.',
    videoURL: 'https://www.example.com/stress-video',
    additionalAdvice: 'Use a planner to organize tasks and prioritize self-care.'
  },
  {
    mood: 'excited',
    title: 'Channel Your Excitement',
    text: 'Excitement fuels creativity! Dive into a project or celebrate with friends.',
    videoURL: 'https://www.example.com/excited-video',
    additionalAdvice: 'Write down your goals and visualize success.'
  }
];

const PersonalizedAdvice = () => {
  const [name, setName] = useState('');
  const [mood, setMood] = useState('');
  const [selectedAdvice, setSelectedAdvice] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const advice = adviceData.find((item) => item.mood.toLowerCase() === mood.toLowerCase());
    setSelectedAdvice(advice || {
      title: 'Advice Not Found',
      text: `Sorry ${name}, we don’t have advice for that mood yet.`,
      videoURL: '',
      additionalAdvice: 'Consider exploring our general resources for more help.'
    });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Personalized Advice</h1>
      <form onSubmit={handleFormSubmit} style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Your Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={{ padding: '10px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Your Mood:</label>
          <input
            type="text"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            placeholder="e.g., happy, sad, stressed"
            style={{ padding: '10px', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Get Advice
        </button>
      </form>
      {selectedAdvice && (
        <div
          style={{
            backgroundColor: '#f9f9f9',
            padding: '15px',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}
        >
          <h2>{selectedAdvice.title}</h2>
          <p>{selectedAdvice.text}</p>
          {selectedAdvice.videoURL && (
            <p>
              <a href={selectedAdvice.videoURL} target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF' }}>
                Watch a helpful video
              </a>
            </p>
          )}
          <p><strong>Additional Advice:</strong> {selectedAdvice.additionalAdvice}</p>
        </div>
      )}
    </div>
  );
};

export default PersonalizedAdvice;
