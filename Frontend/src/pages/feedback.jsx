import React from 'react';
import { Link } from 'react-router-dom';

const Feedback=()=>{
    return(
        <section id="feedback">
                <div className="container">
                    <h2>Your Feedback Matters!</h2>
                    <form id="feedbackForm">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" required />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" required />
                        <label htmlFor="rating">Rating:</label>
                        <div className="rating">
                            <input type="radio" id="star1" name="rating" value="1" required />
                            <label htmlFor="star1" className="star">★</label>
                            <input type="radio" id="star2" name="rating" value="2" />
                            <label htmlFor="star2" className="star">★</label>
                            <input type="radio" id="star3" name="rating" value="3" />
                            <label htmlFor="star3" className="star">★</label>
                            <input type="radio" id="star4" name="rating" value="4" />
                            <label htmlFor="star4" className="star">★</label>
                            <input type="radio" id="star5" name="rating" value="5" />
                            <label htmlFor="star5" className="star">★</label>
                        </div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" rows="4" required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                    <div id="responseMessage" className="hidden"></div>
                </div>
            </section>
    );
};
export default Feedback;