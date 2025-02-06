import React, { useState } from 'react';

const Feedback = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        rating: '',
        message: '',
    });
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setResponseMessage('Thank you for your feedback!');
                setFormData({ name: '', email: '', rating: '', message: '' });
            } else {
                setResponseMessage('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setResponseMessage('Error submitting feedback.');
        }
    };

    return (
        <section id="feedback">
            <div className="container">
                <h2>Your Feedback Matters!</h2>
                <form id="feedbackForm" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

<label htmlFor="rating">Rating:</label>
<div className="rating" style={{ transform: "rotateY(180deg)"}}>
    {[...Array(5)].map((_, index) => (
        <React.Fragment key={index}>
            <input
                type="radio"
                id={`star${index + 1}`}
                name="rating"
                value={index + 1}  // This ensures the value increases from 1 to 5
                checked={formData.rating === String(index + 1)}  // This checks if the selected rating matches
                onChange={handleChange}
                required
                style={{ display: "none"}}  // Hides the radio button, only stars are visible
            />
            <label htmlFor={`star${index + 1}`} className="star">
                ★
            </label>
        </React.Fragment>
    ))}
</div>


                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button type="submit">Submit</button>
                </form>
                {responseMessage && <div id="responseMessage">{responseMessage}</div>}
            </div>
        </section>
    );
};

export default Feedback;
