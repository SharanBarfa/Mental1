import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
// import Login from "../pages/Login";
import Layout from "./layout";
import Home from "../pages/Home";
import Articles from "../pages/Articles";
import Anxiety from "../pages/Anxiety";
import Depression from "../pages/Depression";
import PanicDisorder from "../pages/PanicDisorder";
import BipolarArticle from "../pages/BipolarArticle";
import Schizophrenia from "../pages/Schizophrenia";
import Psychosis from "../pages/Psychosis";
import Quiz from "../pages/Quiz";
import Feedback from "../pages/feedback";
import Relax from "../pages/Relax";
import ptsd from "../pages/Ptsd";
import Volunteer from "../pages/Volunteer";
import ContactUs from "../pages/ContactUs";
// import SignUp from "../pages/SignUp";
import AnxietyQuiz from "../pages/AnxietyQuiz";
import DepressionQuiz from "../pages/DepressionQuiz";
import SupportGroupsMain from "../pages/SupportGroupsMain";
import Ptsd from "../pages/Ptsd";
import PersonalizedAdvice from "../pages/PersonalizedAdvice";
import axios from "axios";
// import SignUp from "./Signup";
// import Signup from "../pages/SignUp";
import login from "../pages/login";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
      axios.get('http://localhost:5000/user', { withCredentials: true })
          .then(response => {
              if (response.data.user) {
                  setIsLoggedIn(true);
              } else {
                  setIsLoggedIn(false);
              }
          })
          .catch(() => setIsLoggedIn(false));
  }, []);

  return (
    <>
      <Routes>
      <Route path="/home" element={<Home />} />
      {/* <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                  <Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
                  <Route path="/signup" element={isLoggedIn ? <Navigate to="/home" /> : <SignUp setIsLoggedIn={setIsLoggedIn} />} /> */}
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ptsd" element={<Ptsd/>} />
          <Route path="articles" element={<Articles />} />
          <Route path="anxiety" element={<Anxiety />} />
          <Route path="depression" element={<Depression />} />
          <Route path="panicdisorder" element={<PanicDisorder />} />
          <Route path="bipolar-article" element={<BipolarArticle />} />
          <Route path="schizophrenia" element={<Schizophrenia />} />
          <Route path="psychosis" element={<Psychosis />} />
          <Route path="support-groups" element={<SupportGroupsMain />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="Feedback" element={<Feedback />} />
          <Route path="anxiety-quiz" element={<AnxietyQuiz />} />
          <Route path="depression-quiz" element={<DepressionQuiz />} />
          <Route path="relax" element={<Relax />} />
         
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="ContactUs" element={<ContactUs />} />
          {/* <Route path="sign-up" element={<SignUp />} /> */}
          {/* <Route path="createpost" element={<CreatePost isAuth={isAuth} />} /> */}
          {/* <Route path="login" element={<Login setIsAuth={setIsAuth} />} /> */}
          <Route path="PersonalizedAdvice" element={<PersonalizedAdvice />} />

          {/* <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} /> */}
        </Route>
      </Routes>
    </>
  );

};

export default App;
