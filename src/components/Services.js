import React, { Component } from "react";
import { FaWifi, FaHiking, FaShuttleVan, FaAirFreshener } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaWifi />,
        title: "Free Wifi",
        info: "You will get free Wifi with speed of atleast 100Mbps.It will be a strong connection with outside world",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Hiking always means Low stress level,improved mood,enhanced mental wellbeing,reduced risk of hear diseases.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Rides",
        info: "You will get free ride from nearest Bus-stands or Railway Stations.All you need to give us a call and services will be provided.",
      },
      {
        icon: <FaAirFreshener />,
        title: "Free Room Services",
        info: "You will get free Room-services which includes change of bed-sheets and clean bathrooms without any hussles.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="services">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
