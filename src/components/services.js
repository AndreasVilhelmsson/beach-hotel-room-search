import React, { useState } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./title";

function Services() {
  const [info, setInfo] = useState({
    services: [
      {
        icon: <FaCocktail />,
        title: "Evening",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias numquam illum amet."
      },
      {
        icon: <FaHiking />,
        title: "Adveture",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae ratione, qui tempore cum magnam soluta!"
      },
      {
        icon: <FaShuttleVan />,
        title: "Travel",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, porro."
      },
      {
        icon: <FaBeer />,
        title: "Party",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A animi suscipit perspiciatis iusto unde officia!"
      }
    ]
  });

  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {info.services.map((item, index) => {
          return (
            <article key={index} className="service">
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

export default Services;
