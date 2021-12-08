import React from 'react'
import {FaFacebook,FaLinkedin,FaInstagramSquare,FaTwitterSquare} from "react-icons/fa";

import {Link} from "react-router-dom"

const SocialLinks = () => {  

  const state = {
    social: [
      {
        icon: <FaFacebook size={40} />,
        
      },
      {
        icon: <FaLinkedin size={40} />,
      },
        
      {
        icon: <FaInstagramSquare size={40}/>,
        
      },
      {
        icon: <FaTwitterSquare size={40} />,
        
      },
    ],
  };

  


  return (
    <div>
      <section className="social">
        <h6 style={{color:'white',marginBottom:0}}>Connect with us</h6>
        <div className="social-center">
          {state.social.map((item, index) => {
            return (
              <article key={index} className="social">
                <Link><span>{item.icon}</span></Link>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  )
}

export default SocialLinks
