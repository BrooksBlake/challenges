import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import "../styles/landing.scss";
import axios from "axios";

const Landing = () => {
  const [display, setDisplay] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://brooksandblake.com/blogapis/wp-json/wp/v2/posts?page=1&limit=8",
      )
      .then((res) => {
        console.log(res.data);
        setDisplay(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const thumbnail = [
    {
      id: 0,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      subtitle: "Nulla quis egestas ipsum. Quisque in mattis lacus.",
      image: require("../assets/images/video-2.png"),
    },
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      subtitle: "Nulla quis egestas ipsum. Quisque in mattis lacus.",
      image: require("../assets/images/video-3.png"),
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
            <Link to="https://brooksandblake.com/blogapis/">
              More News{" "}
              <span>
                <img
                  src={require("../assets/icons/arrow.svg").default}
                  alt="right-arrow"
                />
              </span>
            </Link>
          </p>
        </div>
        <div className="news">
          {display.map((post) => (
            <div className="box" key={post.id}>
              <Link to={post.link}>
                <img src={post.jetpack_featured_media_url} alt="news-image" />
                <h3>{post.title.rendered}</h3>
                <p>
                  {post.excerpt.rendered
                    .replace("<p>", " ")
                    .replace("</p>", " ")}
                </p>
              </Link>
            </div>
          ))}
        </div>
        <div className="videos">
          <div className="head">
            <h1>Category Name</h1>
            <p>
              <Link to="https://brooksandblake.com/blogapis/">
                More Videos{" "}
                <span>
                  <img
                    src={require("../assets/icons/arrow.svg").default}
                    alt="right-arrow"
                  />
                </span>
              </Link>
            </p>
          </div>
          <div className="view">
            <Link to="/singleblog">
              <div className="single">
                <img src={require("../assets/images/video-1.png")} />
                <h3>Donec consequat ipsum ut pretium ullamcorper.</h3>
                <p>
                  Nulla quis egestas ipsum. Quisque in mattis lacus. Sed
                  fermentum magna vitae ante posuere, sit amet posuere libero
                  egestas.
                </p>
              </div>
              <div className="split">
                {thumbnail &&
                  thumbnail.map((video) => (
                    <section key={video.id} className="thumbnail">
                      <img src={video.image} alt="video" />
                      <div>
                        <h3>{video.title}</h3>
                        <p>{video.subtitle} </p>
                      </div>
                    </section>
                  ))}
              </div>
            </Link>
          </div>
        </div>
        <div className="photos">
          <div className="head">
            <h1>Category Name</h1>
            <p>
              <Link to="https://brooksandblake.com/blogapis/">
                More Photos{" "}
                <span>
                  <img
                    src={require("../assets/icons/arrow.svg").default}
                    alt="right-arrow"
                  />
                </span>
              </Link>
            </p>
          </div>
          <div className="photo">
            {picture &&
              picture.map((pic) => (
                <div className="pic-holder" key={pic.id}>
                  <Link to="/singleblog">
                    <img src={pic.image} alt="picture" />

                    <h3>{pic.title}</h3>
                    <p>{pic.subtitle}</p>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
