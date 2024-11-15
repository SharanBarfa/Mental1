import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Nav = () => {
    const navigate = useNavigate();

      const handleLoginClick = () => {
        navigate('/login');
      };

  return (
    <nav className='nav'>
      <img src="/logo.png" alt="logo" height="50px" width="150px" />
      <ul >
        <li><NavLink  to="/">Home</NavLink></li>
        <li><NavLink to="/PersonalizedAdvice">Personalized Advice</NavLink></li>
        <li><NavLink to="#Physiotherepist">Physiotherapist</NavLink></li>
        <li><NavLink to="/quiz">Quiz</NavLink></li>
        <li><NavLink to="/articles">Articles</NavLink></li>
        <li><NavLink to="/Feedback">Feedback</NavLink></li>
        <button onClick={handleLoginClick} className="login_btn">LOGIN</button>
      </ul>

    </nav>
  )
}

export default Nav