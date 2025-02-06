import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const Nav = () => {
    const navigate = useNavigate();
 
    <div className=" text-[#E9E9E9] flex justify-between items-center px-12 h-14 bg-[#151A21]">
    <Link className="text-2xl" to="/">
      Vulnerabilities
    </Link>
   
    </div>
    

      

  return (

 
    <nav className='nav'>
      <img src="\WEB_LOGO.png" alt="logo" height="60px" width="200px" />
      <ul >
        <li><NavLink  to="/">Home</NavLink></li>
        <li><NavLink to="/PersonalizedAdvice">Personalized Advice</NavLink></li>
        {/* <li><NavLink to="#Physiotherepist">Physiotherapist</NavLink></li> */}
        <li><NavLink to="/quiz">Quiz</NavLink></li>
        <li><NavLink to="/articles">Articles</NavLink></li>
        <li><NavLink to="/Feedback">Feedback</NavLink></li>
      
      </ul>

    </nav>
  )
}

export default Nav