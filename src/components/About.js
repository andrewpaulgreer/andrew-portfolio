import React from "react";
import ObserverWrapper from '@emarketeross/simple-react-intersection-observer'

function About (){
    return(
        <main className="section about-main">
        <div className="container">
          <section className="columns">
            <div className="column is-one-quarter">
              <figure className="image">
                <ObserverWrapper>
                <img
                  className="is-rounded"
                  src="/media/andrewgreer.jpeg"
                  alt="profile-pic"
                />
                </ObserverWrapper>
              </figure>
              <div className="content contact-info contact-info">
                <p className="email">
                  <i className="fas fa-envelope-open-text"></i>
                  <a
                    href="mailto: andrewgreer2015@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    andrewgreer2015@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div id="aboutMe" className="is-three-quarters about-me">
              <h4 className="title is-3">A little bit about me:</h4>
              <p className="content is-medium">
                Hi! My name is Andrew Greer, and I am a student for fullstack
                Web Development. I am a fullstack Web Developer, specializing in
                the MERN stack.
              </p>
              <p className="content is-medium">
                I became interested in the software engineering after my past
                experience in technology. My interest initially came from the
                web developer that works for the tech startup company that I
                worked for in College. I am most interested in React, and would
                love to find a role that is heavily React dependant.
              </p>
              <h2 className="content is-medium">
                <strong>Skills:</strong>
              </h2>
              <p className="content is-medium">
              <strong>Front-end:</strong> HTML 5, CSS3, Javascript, React, jQuery, Ajax,RESTful API consumption / creation, handlebars.js, Bootstrap, Bulma.
              </p>
              <p className="content is-medium">
              <strong>Backend:</strong> Node.js, MySQL, Mongodb, MySQL Server, Mongoose, express, sequelize ORM, passport.js.
              </p>
              <nav className="level">
                <div className="level-item has-text-centered">
                  <div>
                    <a
                      href="https://github.com/andrewpaulgreer"
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="resume"
                    >
                      <button className="heading button is-large is-outlined is-rounded" id="github-button">
                        <i className="fab fa-github"></i> GitHub
                      </button>
                    </a>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <a
                      href="https://www.linkedin.com/in/andrewpgreer"
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="resume"
                    >
                      <button className="heading button is-large is-info is-outlined is-rounded">
                        <i className="fab fa-linkedin-in"></i> LinkedIn
                      </button>
                    </a>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <a
                      href="/resume/Andrew-Greer-Dev.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="resume"
                    >
                      <button className="heading button is-large is-outlined is-rounded" id="resumeBtn">
                        <i className="far fa-file"></i> Resume
                      </button>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </section>
        </div>
      </main>
    )
}

export default About;