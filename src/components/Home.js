import React from "react";

function Home () {
    return (
        <section className="hero is-fullheight"id="home">
        <div className="overlay">
          <nav role="navigation" className="nav-container">
            <div className="columns is-centered" id="navComponents">
              <p className="column is-one-fourth" id="aboutMeNav">
                <a href="#aboutMe" className="title has-text-left-mobile nav-text">About me</a>
              </p>
              <p className="column is-one-fourth">
                <a href="#portfolio" className="title has-text-left-mobile nav-text">Portfolio</a>
              </p>
              <p className="column is-one-fourth">
                <a href="#contact" className="title has-text-left-mobile nav-text">Contact</a>
              </p>
            </div>
            </nav>
            <div className= "introduction">
                <h1 className="title is-size-1 is-size-1-mobile has-text-centered has-text-left-mobile page-name">
                  Andrew Greer</h1>
                <h1 className="is-size-1 is-size-1-mobile has-text-centered has-text-left-mobile page-skill">
                  Web developer</h1>   
            </div>
        </div>
      </section>
    )
}

export default Home;