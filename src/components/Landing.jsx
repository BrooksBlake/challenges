import React from "react";
import Header from "./Header";

import "../styles/landing.scss";

const Landing = (props) => {
  const newsBox = [
    {
      id: 0,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      subtitle:
        "Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas.",
      image: require("../assets/images/coffee.png"),
    },
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      subtitle:
        "Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas.",
      image: require("../assets/images/blue.png"),
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      subtitle:
        "Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas.",
      image: require("../assets/images/desert.png"),
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      subtitle:
        "Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas.",
      image: require("../assets/images/key.png"),
    },
  ];
  const thumbnail = [
    {
      id: 0,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      subtitle: "Nulla quis egestas ipsum. Quisque in mattis lacus.",
      image: require("../assets/images/video-2.png")
    },
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      subtitle: "Nulla quis egestas ipsum. Quisque in mattis lacus.",
      image: require("../assets/images/video-3.png")
    },
  ];
  const picture = [
    {
      id: 0,
      title: "Donec consequat ipsum ut pretium ullamcorper.",
      subtitle:
        "Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas.",
      image: require("../assets/images/pic.png"),
    },
    {
      id: 1,
      title: "Donec consequat ipsum ut pretium ullamcorper.",
      subtitle:
        "Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas.",
      image: require("../assets/images/pic2.png"),
    },
    {
      id: 2,
      title: "Donec consequat ipsum ut pretium ullamcorper.",
      subtitle:
        "Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas.",
      image: require("../assets/images/pic3.png"),
    },
    {
      id: 3,
      title: "Donec consequat ipsum ut pretium ullamcorper.",
      subtitle:
        "Nulla quis egestas ipsum. Quisque in mattis lacus. Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas.",
      image: require("../assets/images/pic4.png"),
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
              <div onClick={()=>{props.history.push("/singleblog")}} className="box" key={box.id}>
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
          <div onClick={()=>{props.history.push("/singleblog")}} className="view">
            <div className="single">
              <img src={require("../assets/images/video-1.png")} />
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
        <div className="photos">
          <div className="head">
            <h1>Category Name</h1>
            <p>
              More Photos{" "}
              <span>
                <img
                  src={require("../assets/icons/arrow.svg").default}
                  alt="right-arrow"
                />
              </span>
            </p>
          </div>
          <div className="photo">
            {picture &&
              picture.map((pic) => (
                <div onClick={()=>{props.history.push("/singleblog")}} className="pic-holder" id={pic.id}>
                  <img src={pic.image} alt="picture" />

                  <h3>{pic.title}</h3>
                  <p>{pic.subtitle}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
