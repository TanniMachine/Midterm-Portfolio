import React from 'react'; 
 
const About = () => { 
    console.log("About component rendered!");
   return ( 
       <div className="about"> 
           <h2>About Me</h2> 
           <p>This section contains information about me.</p> 
       </div> 
   ); 
}; 
 
export default About; 