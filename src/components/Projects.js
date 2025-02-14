import React from 'react'; 
 
const Projects = () => { 
    console.log("Projects component rendered!");
   return ( 
       <div className="projects"> 
           <h2>My Projects</h2> 
           <ul> 
               <li>Project 1</li> 
               <li>Project 2</li> 
               <li>Project 3</li> 
           </ul> 
       </div> 
   ); 
}; 
 
export default Projects; 