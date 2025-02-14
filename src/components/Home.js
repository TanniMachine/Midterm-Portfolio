import React from 'react'; 
import myPhoto from '../images/pfpTP.png';
 
const Home = () => { 
    console.log("Home component rendered!");
   return ( 
       <div className="home"> 
           <h3>Welcome to My Portfolio</h3> 
           <h2>Hello!</h2>
           <h1>I am Carlos Miguel Morato.</h1>
           <img src={myPhoto} alt="My Portrait" className="profile-photo"/>
           <p className="home-tagline">
                Passionate Back-End Developer | AI & Software Enthusiast | Problem Solver
            </p>
       </div> 
   ); 
}; 
 
export default Home; 