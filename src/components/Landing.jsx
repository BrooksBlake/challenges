import React from "react";
import Header from "./Header";
import Blog from "./Blog";

import "../styles/landing.scss";

const Landing = () => {
  const newsBox = [
    {
      id: 0,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      subtitle:
        "Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas.",
      image: require("../assets/images/coffee.svg").default,
    },
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      subtitle:
        "Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas.",
      image: require("../assets/images/coffee.svg").default,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      subtitle:
        "Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas.",
      image: require("../assets/images/coffee.svg").default,
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      subtitle:
        "Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas.",
      image: require("../assets/images/coffee.svg").default,
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      subtitle:
        "Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas.",
      image: require("../assets/images/coffee.svg").default,
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      subtitle:
        "Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas.",
      image: require("../assets/images/coffee.svg").default,
    },
    {
      id: 6,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      subtitle:
        "Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas.",
      image: require("../assets/images/coffee.svg").default,
    },
  ];
  const thumbnail = [
    {
      id: 0,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      subtitle: "Nulla quis egestas ipsum. Quisque in mattis lacus.",
      image: require("../assets/images/video-2.svg").default,
    },
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      subtitle: "Nulla quis egestas ipsum. Quisque in mattis lacus.",
      image: require("../assets/images/video-3.svg").default,
    },
  ];
  return (
    <div className="landing">
      <Header />
      <div className="content">
        <div className="head">
          <h1>Category Name</h1>
          <p>
            More News{" "}
            <span>
              <img
                src={require("../assets/icons/arrow.svg").default}
                alt="right-arrow"
              />
            </span>
          </p>
        </div>
        <div className="news">
          {newsBox &&
            newsBox.map((box) => (
              <div className="box" key={box.id}>
                <img src={box.image} alt="news-image" />
                <h3>{box.title}</h3>
                <p>{box.subtitle}</p>
              </div>
            ))}
        </div>
        <div className="videos">
          <div className="head">
            <h1>Category Name</h1>
            <p>
              More Videos{" "}
              <span>
                <img
                  src={require("../assets/icons/arrow.svg").default}
                  alt="right-arrow"
                />
              </span>
            </p>
          </div>
          <div className="view">
            <div className="single">
              <img src={require("../assets/images/video-1.svg").default} />
              <h3>Donec consequat ipsum ut pretium ullamcorper.</h3>
              <p>
                Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum
                magna vitae ante posuere, sit amet posuere libero egestas.
              </p>
            </div>
            <div className="split">
              {thumbnail &&
                thumbnail.map((video) => (
                  <section id={video.id} className="thumbnail">
                    <img src={video.image} alt="video" />
                    <div>
                      <h3>{video.title}</h3>
                      <p>{video.subtitle} </p>
                    </div>
                  </section>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
