import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="App">
      <section className="hero">
        <div className="hero-inner">
          <h1>Puran Bhujel</h1>
          <h2>Jr Data Analyts</h2>
          <a href="/contact" className="btn">
            Know More...
          </a>
        </div>
      </section>
      <div className="skills">
        <div className="skils_header">
          <h2>Technologies</h2>
        </div>
        <div className="skills_icons">
          <i class="devicon-html5-plain-wordmark colored"></i>

          <i class="devicon-css3-plain-wordmark colored"></i>

          <i class="devicon-javascript-plain colored"></i>

          <i class="devicon-react-original-wordmark colored"></i>
         
          <i class="devicon-mysql-plain-wordmark colored"></i>

          <i class="devicon-rstudio-plain"></i>

          <i class="devicon-git-plain-wordmark colored"></i>

          <i class="devicon-github-original-wordmark"></i>

          <i class="devicon-visualstudio-plain colored"></i>

          
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg">
            <img className="img" src={require("../../images/puran.png")} alt="Puran"/>
            <ul></ul>
          </div>
          <div className="col-lg">
            <div className="intro-header">
              <h1>About Me</h1>
            </div>
            <p className="intro_paragraph">
              Hello Visitors, Welcome to my little world. I'm a Data driven professional with a broad of
              technical skill sets. I'm passionate about learning new
              technologies. I am open minded and always
              ready to learn new skills by challenging myself whether it's tech 
              related or just life in general. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
