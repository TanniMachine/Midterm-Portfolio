import React, { useState } from 'react';
import minotesLogo from '../images/minotes-logo-color.png';
import hanafuda from '../images/hanafudalogo.png';
import tewi from '../images/kine.jpeg';
import vortexTerra from '../images/VortexTerraLogo.png';

const Projects = () => {
    const [expandedProject, setExpandedProject] = useState(null);

    const projects = [
        { 
            name: "MiNotes", 
            description: "Video summarizer utilizing AI to provide quick, concise and efficient summaries of videos. Capable of summarizing YouTube URLs or videos uploaded by the user themselves.", 
            image: minotesLogo, 
            tags: ["Video Summarizer Using AI", "Utilizes ChatGPT API", "Coded in Python & JavaScript"],
            url: "https://github.com/yourgithub/minotes"
        },
        { 
            name: "MobileLLaMA", 
            description: "On-device AI model testing.", 
            image: "./images/mobilellama.png", 
            tags: ["AI Model Testing", "GGUF Model Inference", "Runs on Android Devices"],
            url: "https://github.com/yourgithub/mobilellama"
        },
        { 
            name: "Hanafuda", 
            description: "Collectible card game bot coded in Python, and hosted on Discord. Players can collect cards, and subsequently trade cards for other cards, or virtual and real-life currency like USD or PHP.", 
            image: hanafuda, 
            tags: ["Discord Bot", "Collectible Card Game", "Coded in Python"],
            url: "https://github.com/yourgithub/hanafuda"
        },
        { 
            name: "Tewi Pound Machine", 
            description: "Incremental idle game with a unique \"rhythm\" mechanic, wherein players press the spacebar and the left mouse button in tandem to increase their points. Players compete in having the most points possible within 3 minutes, or participate instead in the zen mode where there is no time limit.", 
            image: tewi, 
            tags: ["Idle Game", "Rhythm Mechanics", "Made with HTML, CSS & JavaScript"],
            url: "https://github.com/yourgithub/tewi"
        },
        { 
            name: "VortexTerra", 
            description: "Wiki fan website for Terraria, hosting guides, updates, trailers, general sharing of knowledge for fans of Terraria alike.", 
            image: vortexTerra, 
            tags: ["Terraria Wiki", "Interactive Guides", "Built with HTML, CSS & JavaScript"],
            url: "https://github.com/yourgithub/vortexterra"
        }
    ];

    return (
        <div className="projects">
            <h2>My Projects</h2>
            <ul className="project-list">
                {projects.map((project, index) => (
                    <li 
                        key={index} 
                        className={`project-item ${expandedProject === index ? "expanded" : ""}`}
                    >
                        <button className="project-btn" onClick={() => setExpandedProject(expandedProject === index ? null : index)}>
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                                {project.name}
                            </a>
                        </button>
                        {/* Keep the project details always in the DOM */}
                        <div className={`project-details ${expandedProject === index ? "expanded" : ""}`}>
                            <img src={project.image} alt={project.name} className="project-image" />
                            <p>{project.description}</p>
                            <div className="tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;
