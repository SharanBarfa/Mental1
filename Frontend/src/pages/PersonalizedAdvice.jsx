import React from 'react';

function PersonalizedAdvice({ userMood, stressScore }) {
  const getAdviceContent = () => {
    if (stressScore > 7) {
      return {
        title: "High Stress Management",
        text: "It seems you’re experiencing high stress. Try some relaxation techniques like deep breathing or progressive muscle relaxation. Remember to take breaks throughout your day.",
        videoUrl: "https://www.example.com/stress-relief-video", // Replace with an actual URL
        additionalAdvice: "Consider activities like yoga, meditation, or a walk outside. Even a few minutes can make a big difference."
      };
    } else if (userMood === "sad") {
      return {
        title: "Uplifting Activities",
        text: "Feeling down? Doing something enjoyable like listening to music or calling a friend can help lift your mood. Start with something small.",
        videoUrl: "https://www.example.com/uplifting-activities-video", // Replace with an actual URL
        additionalAdvice: "Try journaling about your feelings or watching a short, feel-good video."
      };
    } else if (userMood === "happy") {
      return {
        title: "Maintain Your Positive Mood",
        text: "You’re in a great mood! Keep up with what makes you feel good. Remember to incorporate these positive activities into your daily routine.",
        videoUrl: "https://www.example.com/maintain-happiness-video", // Replace with an actual URL
        additionalAdvice: "Consider sharing your happiness with others or setting new, uplifting goals to keep this momentum."
      };
    } else {
      return {
        title: "Wellness Advice",
        text: "Keep up the good work! Consistency is key to maintaining mental well-being.",
        additionalAdvice: "Remember to take care of yourself and do something you enjoy each day."
      };
    }
  };

  const { title, text, videoUrl, additionalAdvice } = getAdviceContent();

  return (
    <div className="advice-block">
      <h2>{title}</h2>
      <p>{text}</p>
      {videoUrl && (
        <div className="video-block">
          <p>Watch this video for more tips:</p>
          <iframe
            src={videoUrl}
            title="Advice Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <div className="additional-advice">
        <p>{additionalAdvice}</p>
      </div>
    </div>
  );
}

export default PersonalizedAdvice;



