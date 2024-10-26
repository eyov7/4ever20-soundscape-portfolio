import React from 'react';
import AnimatedHeader from './components/AnimatedHeader';

const App = () => {
  return (
    <div className="wrapper">
      <header>
        <AnimatedHeader />
        <h1 className="site-title">4ever20</h1>
        <div className="social-links">
          <a href="https://github.com/eyov7" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="https://img.icons8.com/3d-fluency/94/github-logo.png" alt="GitHub" className="social-icon" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/everolivares/" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="https://img.icons8.com/3d-plastilina/69/linkedin--v2.png" alt="LinkedIn" className="social-icon" />
            LinkedIn
          </a>
          <a href="https://soundcloud.com/eyov5" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="https://img.icons8.com/3d-fluency/94/soundcloud.png" alt="SoundCloud" className="social-icon" />
            SoundCloud
          </a>
        </div>
      </header>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#music">Music</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <section id="about" class="box">
        <h2 class="text-shadow-glow">Welcome to 4ever20</h2>
        <p>Hi! I'm currently pursuing my master's degree in data science, exploring the intersection of technology and creativity. This space is where I share my musical journey alongside my academic pursuits.</p>
      </section>
      <section id="resume" class="box">
        <h2 class="text-shadow-glow">My Resume</h2>
        <div class="pdf-container">
          <object
            data="/OctResume2024.docx.pdf"
            type="application/pdf"
            width="100%"
            height="600px"
          >
            <p>Unable to display PDF file. <a href="/OctResume2024.docx.pdf" target="_blank" class="resume-button">Download Instead</a></p>
          </object>
        </div>
        <div id="resume-download" class="flex justify-center items-center p-4">
          <a href="/OctResume2024.docx.pdf" target="_blank" class="resume-button">
            Download Resume
          </a>
        </div>
      </section>
      <section id="music" class="box">
        <h2 class="text-shadow-glow">Featured Tracks</h2>
        <div id="track-list" class="w-full"></div>
      </section>
      <section id="contact" class="box">
        <h2 class="text-shadow-glow">Get in Touch</h2>
        <p>Interested in collaborating on a data science project or music production? Feel free to reach out through any of my social media channels:</p>
        <div class="social-links">
          <a href="https://github.com/eyov7" target="_blank" rel="noopener noreferrer" class="social-link">
            <img src="https://img.icons8.com/3d-fluency/94/github-logo.png" alt="GitHub" class="social-icon" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/everolivares/" target="_blank" rel="noopener noreferrer" class="social-link">
            <img src="https://img.icons8.com/3d-plastilina/69/linkedin--v2.png" alt="LinkedIn" class="social-icon" />
            LinkedIn
          </a>
          <a href="https://soundcloud.com/eyov5" target="_blank" rel="noopener noreferrer" class="social-link">
            <img src="https://img.icons8.com/3d-fluency/94/soundcloud.png" alt="SoundCloud" class="social-icon" />
            SoundCloud
          </a>
        </div>
      </section>
      <footer>
        <p>&copy; 2024 4ever20 | Created with 💜</p>
      </footer>
    </div>
  );
};

export default App;