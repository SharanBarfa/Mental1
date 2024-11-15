import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home_info from '../components/Home_info';


const Home = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
      setJoke(response.data.setup + ' ' + response.data.punchline);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

    return (
      <div className='home-page'>



<section id="hero">
                <div>
                    <h1>Welcome to Mental Health Assessment</h1>
                    <p>Find the help you need, when you need it.</p>
                    {/* <Link to="/quiz" class="cta-button" replace>Take Quiz</Link> */}
                </div>
                <div>
                    <img src="\person-meditating-357x269.svg" alt="meditation_image" />
                </div>
            </section>
            <section id="video-content">

            </section>
            <section id="physiotherpist">
                <div>

                </div>
            </section>

        <div className='home-allcontent'>
        <div className="random-joke">
          <header className="random-joke-header">
            <blockquote>
              <h2>{joke}</h2>
            </blockquote>
          </header>
        </div>

        <Home_info />
        <div class="mental-health-assessments">
  <h2>Mental Health Assessment Tools</h2>
  <p>By: Christy Gauss, MSW, Natalie Bengert, B.S., and Josie Kincaid, B.S.</p>

  <p>Below is a list of mental health assessments that can be used in educational settings and beyond. This list does not represent an endorsement of any one tool and is not inclusive of all possible tools. This list is simply to assist others in accessing a range of options related to school climate, trauma, anxiety, and other relevant topics.</p>

  <div class="assessment-category">
    <h3>Substance Use</h3>
    <ul>
      <li>CAGE Screen</li>
      <li>CRAFFT 2.0</li>
      <li>ED School Climate Survey (EDSCLS)</li>
    </ul>
  </div>

  <div class="assessment-category">
    <h3>Depression/Mood</h3>
    <ul>
      <li>Children's Depression Inventory 2 (CDI 2)</li>
      <li>Center for Epidemiological Studies Depression Scale for Children (CSE-DC)</li>
      <li>Child Mania Rating Scale, Parent (CMRS-P)</li>
      <li>Parent-Young Mania Rating Scale (P-YMRS)</li>
      <li>Patients Health Questionnaire-9 (PHQ-9)</li>
      <li>Pediatric Symptom Checklist (PSC)</li>
      <li>Revised Child Anxiety Depression Scale (RCADS)</li>
      <li>Strengths and Difficulties Questionnaire (SDQ)</li>
      <li>Student Risk Screening Scale (SRSS)</li>
      <li>Vanderbilt ADHD Diagnostic Rating Scale</li>
      <li>Brief Problem Checklist (BPC)</li>
    </ul>
  </div>

  <div class="assessment-category">
    <h3>School Climate</h3>
    <ul>
      <li>Conditions for Learning (CFL)</li>
      <li>Delaware School Climate Survey</li>
      <li>ED School Climate Survey (EDSCLS)</li>
      <li>School Academic Optimism Scale (SAOS)</li>
      <li>School Climate Measure</li>
    </ul>
  </div>

  <div class="assessment-category">
    <h3>Trauma</h3>
    <ul>
      <li>Foa's Child PTSD Symptom Scale (CPSS)</li>
      <li>Generalized Anxiety Disorder-7 (GAD-7)</li>
      <li>Spence Children's Anxiety Scale (SCAS)</li>
      <li>Traumatic Events Screening/Diagnostic Inventory (TESI)</li>
    </ul>
  </div>

  <div class="assessment-category">
    <h3>Anxiety</h3>
    <ul>
      <li>Generalized Anxiety Disorder-7 (GAD-7)</li>
      <li>Pediatric Symptom Checklist (PSC)</li>
      <li>Penn State Worry Questionnaire for Children (PSWQ-C)</li>
      <li>Revised Child Anxiety Depression Scale (RCADS)</li>
      <li>Spence Children's Anxiety Scale (SCAS)</li>
      <li>Strengths and Difficulties Questionnaire (SDQ)</li>
      <li>Student Risk Screening Scale (SRSS)</li>
      <li>Vanderbilt ADHD Diagnostic Rating Scale</li>
      <li>Multidimensional Anxiety Scale for Children (MASC 2)</li>
      <li>Revised Children's Manifest Anxiety Scale (RCMAS 2)</li>
      <li>Social Phobia and Anxiety Inventory (SPAI)</li>
      <li>Brief Problem Checklist (BPC)</li>
    </ul>
  </div>

  <div class="assessment-category">
    <h3>Academic</h3>
    <ul>
      <li>Identification with School Questionnaire (ISQ)</li>
      <li>School Burnout Inventory (SBI)</li>
      <li>School Academic Optimism Scale (SAOS)</li>
      <li>Student Engagement Instrument (SEI)</li>
      <li>Student Risk Screening Scale (SRSS)</li>
      <li>School Climate Measure</li>
    </ul>
  </div>

  <div class="assessment-category">
    <h3>Disruptive Behavior</h3>
    <ul>
      <li>Pediatric Symptom Checklist (PSC)</li>
      <li>Strengths and Difficulties Questionnaire (SDQ)</li>
      <li>Student Risk Screening Scale (SRSS)</li>
      <li>Vanderbilt ADHD Diagnostic Rating Scale</li>
      <li>Brief Problem Checklist (BPC)</li>
    </ul>
  </div>

  <div class="assessment-category">
    <h3>Global Functioning</h3>
    <ul>
      <li>Delaware School Climate Survey</li>
      <li>ED School Climate Survey (EDSCLS)</li>
      <li>Pediatric Symptom Checklist (PSC)</li>
      <li>Strengths and Difficulties Questionnaire (SDQ)</li>
      <li>Youth Top Problems (YTP)</li>
    </ul>
  </div>

  <div class="assessment-category">
    <h3>Inattention</h3>
    <ul>
      <li>Vanderbilt ADHD Diagnostic Rating Scale</li>
      <li>Pediatric Symptom Checklist (PSC)</li>
    </ul>
  </div>

  <div class="assessment-category">
    <h3>Social Skills</h3>
    <ul>
      <li>Strengths and Difficulties Questionnaire (SDQ)</li>
      <li>Student Risk Screening Scale (SRSS)</li>
      <li>Student's Life Satisfaction Scale (SLSS)</li>
      <li>Two Item Conjoint Screen (TICS)</li>
      <li>Vanderbilt ADHD Diagnostic Rating Scale</li>
      <li>School Climate Measure</li>
    </ul>
  </div>
</div>

        </div>
      </div>
    );
  }; 
export default Home;

