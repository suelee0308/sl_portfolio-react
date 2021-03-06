import React from "react";
import "../styles/About.css";
// import photo from "../../../public/images/headshot.jpg"

export default function About({loading}) {
    
    return(
        <div className="AboutMe" id="about">
        { loading ? 
            <div></div>
            : 
            (
            <div className='aboutMeContainer'>
            <div className='aboutMeHeader'>
                <h1>Hi! I'm Sue Lee!</h1>
                <img className='headshot' src='./images/headshot.jpg' alt='headshot' />
                <h2 className='aboutHeader2'>I spend a lot of time in front of the computer.</h2>
            </div>
            <section className="aboutSection">
                <p>
                    I am a full stack web developer with a good eye. I've always had a love for design and user experience. In my 8 years of teaching, this applied to how I operated my classroom. In web development, I've found that this not only applies to UX/UI but also the code itself and how its structured and written.
                </p>
                <p>
                    After graduating with a degree in education from the University of Texas at Austin and teaching little people, I bring leadership and effective communication skills to this world of web development. I am well versed in teamwork and being detail-oriented. I strive daily to make life easier for people - whether that be clients, my students, my family, or my dog.
                </p>
            </section>
            </div>
            )
        }
        </div>
    );
}