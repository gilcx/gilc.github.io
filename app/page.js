import Image from "next/image";
import './home.css'
import ParticlesComponent from "./components/ParticlesComponent";


const phrases = [
  "Game Developer",
  "Problem Solver",
  "Java Developer",
  "C++ Developer",
  "Unity Developer",
  "Python Developer",
  "Cybersecurity enthusiast",
  "Full-stack Developer",
  "Teamplayer",
];

export default function Home() {
  return (
    <div className="body">
      <div className="title">
        <h1>Christopher Gil</h1>
        <h2>is a</h2>
        <h3>Some of my work:</h3>
        <h4>Want to see more?</h4>
      </div>
      
      <ParticlesComponent id="particles"/>
    </div>
    
  );
}
