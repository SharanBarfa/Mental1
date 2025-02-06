import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';



// import { useAuthStore } from "../store/authStore";
// const Header = () => {
//   const { isAuthenticated } = useAuthStore();
//   const handleLoginClick = () => {
//     navigate('/login');
//   };


//   return (
//     <div className=" text-[#E9E9E9] flex justify-between items-center px-12 h-14 bg-[#151A21]">
//       <Link className="text-2xl" to="/">
//         Vulnerabilities
//       </Link>
//       <div className="flex justify-center items-center gap-8 text-[1.1rem]">
//         {isAuthenticated ? (
//           <NavLink to={"/dashboard"}>Profile</NavLink>
//         ) : (
//           <NavLink to={"/login"}>Login</NavLink>
//         )}
//       </div>
//       <nav className='nav'>
//       <img src="\WEB_LOGO.png" alt="logo" height="60px" width="200px" />
//       <ul >
//         <li><NavLink  to="/">Home</NavLink></li>
//         <li><NavLink to="/PersonalizedAdvice">Personalized Advice</NavLink></li>
//         {/* <li><NavLink to="#Physiotherepist">Physiotherapist</NavLink></li> */}
//         <li><NavLink to="/quiz">Quiz</NavLink></li>
//         <li><NavLink to="/articles">Articles</NavLink></li>
//         <li><NavLink to="/Feedback">Feedback</NavLink></li>
//         <button onClick={handleLoginClick} className="login_btn">LOGIN</button>
//       </ul>

//     </nav>


//     </div>
//   );
// };
// export default Header;

const Nav = () => {
    const navigate = useNavigate();
    <div className=" text-[#E9E9E9] flex justify-between items-center px-12 h-14 bg-[#151A21]">
    <Link className="text-2xl" to="/">
      Vulnerabilities
    </Link>
    {/* <div className="flex justify-center items-center gap-8 text-[1.1rem]">
      {isAuthenticated ? (
        <NavLink to={"/dashboard"}>Profile</NavLink>
      ) : (
        // <NavLink to={"/login"}>Login</NavLink>
      )}
    </div> */}
  </div>
      const handleLoginClick = () => {
        navigate('/login');
      };

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
        <button onClick={handleLoginClick} className="login_btn">LOGIN</button>
      </ul>

    </nav>
  )
}

export default Nav