import React from 'react';

const About = () => {
    console.log("About component rendered!");

    return (
        <div className="about">
            <h2>➜ About Me</h2>
            <p>
                I'm a Bachelor of Science in Computer Science graduate from CIIT College of Arts and Technology, 
                with a strong foundation in back-end development. Proficient in C#, C++, Python, HTML5, and CSS, 
                I have experience in building web and software applications, such as MiNotes, a video summarization 
                tool using AI, and Hanafuda, a collectible card game. I am passionate in my work, in my problem-solving, 
                and in my ability to deliver efficient solutions to anything presented to me.
            </p>

            <h2>Expertise</h2>
            <div className="skills-container">
                <div className="skills-box">
                    <h3>Soft Skills</h3>
                    <ul className="skills-list">
                        <li>Active Collaboration</li>
                        <li>Effective Communication</li>
                        <li>Critical Thinking</li>
                        <li>Time Management</li>
                        <li>Proficiency in English</li>
                        <li>Basic American Sign Language</li>
                    </ul>
                </div>

                <div className="skills-box">
                    <h3>Technical Skills</h3>
                    <ul className="skills-list">
                        <li>Python</li>
                        <li>C#</li>
                        <li>C++</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
            </div>

            <h2>Education</h2>
            <div className="education-container">
                <div className="education-header">
                    <h3>CIIT College of Arts and Technology</h3>
                    <span className="education-years">2020 - 2025</span>
                </div>
                <p className="education-degree">Bachelor of Science in Computer Science</p>
                <p className="education-description">
                    Finished my Bachelor's during this time period, of which was also spent developing most of my projects.
                </p>
            </div>
        </div>
    );
};

export default About;
