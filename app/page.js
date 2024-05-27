import './home.css';
import DynamicText from './components/DynamicText';
import ParticlesComponent from './components/ParticlesComponent';

export default function Home() {
  return (
    <div className="body">
      <div className="title">
        <h1>Christopher Gil</h1>
        <h2>is a</h2>
        <DynamicText />
        <h3>Here's some of my work:</h3>
        <h4>Want to see more?</h4>
      </div>
      
      <ParticlesComponent id="particles"/>
    </div>
    
  );
}
