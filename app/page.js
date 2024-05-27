import './home.css';
import DynamicText from './components/DynamicText';
import ParticlesComponent from './components/ParticlesComponent';
import Navbar from './components/Navbar.js';
import ProjectCard from './components/ProjectCard.js';

export default function Home() {
  return (
    <div className="body">
      <Navbar/>
      <div className="title">
        <h1>Hi, this is Christopher Gil</h1>
        <h2>I am a</h2>
        <DynamicText />
        <h3>Here&rsquo;s some of my work:</h3>
        
      </div>
      <div className="projects">
        <div className="projectcards">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <h4>Want to see more?</h4>
      </div>
      <ParticlesComponent id="particles"/>
    </div>
    
  );
}
