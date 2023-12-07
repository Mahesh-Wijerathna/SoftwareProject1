import React from 'react';
import Logo from '../Images/Logo.png';
import '../Home.css';
import Front from '../Images/Front.png';
import Social from '../Images/SocialN.PNG';
import {Link} from "react-router-dom";


function Home() {
  return (
    <div className='home'>
        
      
          
          <Link to="/login"><button>Log In</button></Link>
          
          <Link to="/signup"><button>Sign Up</button></Link>
        
        
    </div>
  )
}

export default Home
