import React from 'react';
import '../styles/Nav.css';

function Nav() {
    return (
        <div className="navbar_nav">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <a className="navbar-brand" href="/"><span style={{ color: 'rgb(0, 149, 255)' }}>Puran Bhujel</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="letter">
                            <a className="nav-link" href="/"><span style={{ color: 'white' }}>HOME</span></a>
                        </li>
                        <li className="letter">
                            <a className="nav-link" href="/projects"><span style={{ color: 'white' }}>PROJECTS</span></a>
                        </li>
                        <li className="letter">
                            <a className="nav-link" href="/contact"><span style={{ color: 'white' }}>CONTACT ME</span></a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <ul className="navbar-nav ml-auto nav-flex-icons">
                            <li className="nav-item">
                                <a className="nav-link waves-effect waves-light" href="https://twitter.com/PuranBhujel7" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link waves-effect waves-light" href="https://github.com/Puranbhujel11" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link waves-effect waves-light" href="https://www.linkedin.com/in/puranbhujel/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </span>
                </div>
            </nav>
        </div>
    );
}

export default Nav;