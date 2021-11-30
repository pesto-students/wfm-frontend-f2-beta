import React, { Component } from "react";
import {FaFacebook,FaLinkedin,FaInstagramSquare,FaTwitterSquare} from "react-icons/fa";
// import Title from "./Title";

export default class SocialLinks extends Component {
  state = {
    social: [
      {
        icon: <FaFacebook size={40}/>,        
      },
      {
        icon: <FaLinkedin size={40}/>,
      },
      {
        icon: <FaInstagramSquare size={40}/>,
      },
      {
        icon: <FaTwitterSquare size={40}/>,
      },
    ],
  };

  render() {
    return (
      <section className="social">
          <h4>Connect With Us</h4>
        {/* <Title title="Connect With Us" /> */}
        <div className="social-center">
          {this.state.social.map((item, index) => {
            return (
              <article key={index} className="social">
                <span>{item.icon}</span>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
