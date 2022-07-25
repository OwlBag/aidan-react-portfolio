import React from "react";
import aidanPhoto from "../../assets/me/me.jpg"

function About() {
  return (
    <section className='about-me flex-column'>
        <div className="flex-row centered">
            <h1 id="about" className="text-center">About Me</h1>
        </div>
        <div className="d-flex flex-row">
            <img src={aidanPhoto} className="m-2" alt="me!"/>
            <p className="pt-3 mx-5">
                My name is Aidan Christie, I was born April 10, 2003 in Reading Pennsylvania.
                I am studying to become a web developer, and love to program in my free time.
                My dream job is as a game designer/developer, but I'd do it for fun otherwise.
                I'm a big fan of the Pokemon series and would like to develop fan projects/tools related to it.
            </p>
        </div>
    </section>
  );
}

export default About;
