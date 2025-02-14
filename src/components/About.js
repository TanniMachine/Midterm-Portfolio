import React from 'react'; 
 
const About = () => { 
    console.log("About component rendered!");
   return ( 
       <div className="about"> 
           <h2>About Me</h2> 
           <p>I'm a Bachelor of Science in Computer Science graduate from CIIT College of Arts and Technology, with a strong foundation in back-end development. Proficient in C#, C++, Python, HTML5, and CSS, I have experience in building web and software applications, such as MiNotes, a video summarization tool using AI, and Hanafuda, a collectible card game. I am passionate in my work, in my problem-solving and in my ability to deliver efficient solutions to anything presented to me.</p>
           <h2>Expertise</h2>
           <h3>SOFT SKILLS</h3>
           <ul class="skills-list h3" data-animate-el>
                            <li>Active Collaboration</li>
                            <li>Effective Communication</li>
                            <li>Critical Thinking</li>
                            <li>Time Management</li>
                            <li>Proficiency in English</li>
                            <li>Basic American Sign Language</li>
                        </ul>
                        <h3 class="text-skill" data-animate-el>
                            TECHNICAL SKILLS
                        </h3>
                        <ul class="skills-list h3" data-animate-el>
                            <li>Python</li>
                            <li>C#</li>
                            <li>C++</li>
                            <li>HTML5</li>
                            <li>CSS</li>
                        </ul>
       </div> 
   ); 
}; 
 
export default About; 