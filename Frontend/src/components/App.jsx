import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import CreatePost from "../pages/CreatePost";
import Login from "../pages/Login";
import Layout from "./Layout";
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
import SignUp from "../pages/SignUp";
import AnxietyQuiz from "../pages/AnxietyQuiz";
import DepressionQuiz from "../pages/DepressionQuiz";
import SupportGroupsMain from "../pages/SupportGroupsMain";
import Ptsd from "../pages/Ptsd";
import PersonalizedAdvice from "../pages/PersonalizedAdvice";

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <>
      <Routes>
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
          <Route path="sign-up" element={<SignUp />} />
          <Route path="createpost" element={<CreatePost isAuth={isAuth} />} />
          <Route path="login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="PersonalizedAdvice" element={<PersonalizedAdvice />} />
        </Route>
      </Routes>
    </>
  );

};

export default App;
