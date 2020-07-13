import React, { useEffect } from "react";
import ObserverWrapper from '@emarketeross/simple-react-intersection-observer'
import Aos from 'aos'
import "aos/dist/aos.css"

function Portfolio (){
    useEffect(()=> {
        Aos.init({duration: 2000})
    }, [])
    const styles= {
        underline: {
          textDecoration: "none"
        }
      }
    return(
       
        <main className="section" id="portfolio">
        <div className="container">
          <div className="notification portfolio-background">
            <p className="title has-text-centered has text-white">Portfolio</p>
            <hr />
            <section className="title columns">
              <div className="title column"data-aos="fade-right">
                <article className="title is-child box">
                  <p className="title is-4 has-text-centered">
                    Let's Guess
                  </p>
                  <p className="subtitle 6">
                  Let’s Guess is an online flash game rendition of the classic “Guess Who?” game. 
                  </p>
                  <p className="subtitle 6">
                  Technologies: React, Bulma, HTML5, Javascript, react router, react context, MongoDB, Mongoose ORM,  Node.js, Passport, RESTful API’s.  
                  </p>
                  <a
                    href="https://letsguess.herokuapp.com/"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                      <ObserverWrapper>
                      <img src="./media/letsguess.jpeg" alt="Lets Guess" />     
                    </ObserverWrapper>
                  </a>
                  <p className="repo-link">
                    <a
                      href="https://github.com/lynseahoss/Lets-Guess"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.underline}
                    >
                      <button type="button" className="button rounded">
                       Click here for Repository
                      </button>
                    </a>
                  </p>
                </article>
              </div>
              <div className="title column"data-aos="fade-left">
                <article className="title is-child box">
                  <p className="title is-4 has-text-centered">ShopByYou</p>
                  <p className="subtitle 6">
                   ShopByYou is a simple, hassle free way for users to shop and sell online.
                  </p>
                  <p className="subtitle 6">
                  Technologies: jQuery, Javascript, node, HTML5, CSS3, Semantic UI, multer, google-cloud bucket, express, express session,
                  mySQL, handlebars, and passport.
                  </p>
                  <a
                    href="https://shopbyyou.herokuapp.com/"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                      <ObserverWrapper>
                      <img src="./media/shopByYou.jpeg" alt="ShopByYou" /> 
                    </ObserverWrapper>
                  </a>

                  <p className="repo-link">
                    <a
                      href="https://github.com/JRivera-31/ShopByYou"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.underline}
                    >
                      <button type="button" className="button rounded">
                        Click here for Repository
                      </button>
                    </a>
                  </p>
                </article>
              </div>
            </section>
            <section className="title columns">
            <div className="title column"data-aos="fade-right">
                <article className="title is-child box">
                  <p className="title is-4 has-text-centered">
                    Groovy Concert Search
                  </p>
                  <p className="subtitle 6">
                    Groovy Concert Search is a concert searching applicaiton, that doubles as an event planner. 
                  </p>
                  <p className="subtitle 6">
                  Technologies: jQuery, Javascript, HTML5, CSS3, and Bulma.
                    pulls information from the ticketMaster API, News API, and Wiki API.  
                  </p>
                  <a
                    href="https://andrewpaulgreer.github.io/Project1/"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                      <ObserverWrapper>
                      <img src="./media/concert.jpeg" alt="concert search" />     
                    </ObserverWrapper>
                  </a>
                  <p className="repo-link">
                    <a
                      href="https://github.com/andrewpaulgreer/Project1"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.underline}
                    >
                      <button type="button" className="button rounded">
                       Click here for Repository
                      </button>
                    </a>
                  </p>
                </article>
              </div>
              <div className="title column"data-aos="fade-left">
                <article className="title is-child box">
                  <p className="title is-4 has-text-centered">Day Planner</p>
                  <p className="subtitle 6">
                   The Day planner, is a quick and easy way to plan out your day. The applicaiton is color coded based on the current hour.
                  </p>
                  <p className="subtitle 6">
                  Technologies: Javascript, HTML5, CSS3, bootstrap, and local storage.
                  </p>
                  <a
                    href="https://andrewpaulgreer.github.io/jQuery-Day-Planner/"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                      <ObserverWrapper>
                      <img src="./media/day-planner.jpeg" alt="day-planner" /> 
                    </ObserverWrapper> 
                  </a>

                  <p className="repo-link">
                    <a
                      href="https://github.com/andrewpaulgreer/jQuery-Day-Planner"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.underline}
                    >
                      <button type="button" className="button rounded">
                        Click here for Repository
                      </button>
                    </a>
                  </p>
                </article>
              </div>
            </section>
            <section className="title columns">
              <div className="title column"data-aos="fade-right">
                <article className="title is-child box">
                  <p className="title is-4 has-text-centered">Eat The Burger</p>
                  <p className="subtitle 6">
                   Eat the Burger is an application that allows a user to create their favorite burgers, and eat them!
                  </p>
                  <p className="subtitle 6">
                  Technologies: Javascript, node, HTML5, CSS3, bootstrap, mySQL, SQL server, express, and handlebars.
                  </p>
                  <a
                    href="https://shielded-anchorage-70351.herokuapp.com/"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                      <ObserverWrapper>
                      <img src="./media/burger-app.jpeg" alt="burger-app" /> 
                    </ObserverWrapper>
                  </a>
                  <p className="repo-link">
                    <a
                      href="https://github.com/andrewpaulgreer/burger-handlebars"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.underline}
                    >
                      <button type="button" className="button rounded">
                        Click here for Repository
                      </button>
                    </a>
                  </p>
                </article>
              </div>
              <div className="title column"data-aos="fade-left">
                <article className="title is-child box">
                  <p className="title is-4 has-text-centered">Weather Dashboard</p>
                  <p className="subtitle 6">
                   In this weather dashboard, a user can type in the city of choice and recieve current weather information and a five day forecast.
                  </p>
                  <p className="subtitle 6">
                  Technologies: Javascript, node, HTML5, CSS3, bootstrap, pulling from openweathermap API.
                  </p>
                  <a
                    href="https://andrewpaulgreer.github.io/weather-dashboard/"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                      <ObserverWrapper>
                      <img src="./media/weather-dashboard.jpeg" alt="weather-dashboard" /> 
                    </ObserverWrapper>
                  </a>

                  <p className="repo-link">
                    <a
                      href="https://github.com/andrewpaulgreer/weather-dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.underline}
                    >
                      <button type="button" className="button rounded">
                        Click here for Repository
                      </button>
                    </a>
                  </p>
                </article>
              </div>
            </section>
          </div>
        </div>
      </main>
    )
}

export default Portfolio