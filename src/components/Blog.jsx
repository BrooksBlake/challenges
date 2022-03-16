import React from "react";
import Header from "./Header";
import "../styles/blog.scss";

const Blog = () => {
  const comments = [
    {
      id: 0,
      content:
        "Fusce bibendum fringilla nunc vitae condimentum. Vivamus ante velit, fermentum id mattis sed, venenatis eu nulla. Proin lacus dui, faucibus sit amet maximus et,",
      name: "Felix",
      time: "An hour ago",
    },
    {
      id: 1,
      content:
        "venenatis eu nulla. Proin lacus dui, faucibus sit amet maximus et,",
      name: "Jude",
      time: "3mins ago",
    },
  ];
  const story =[
    {
      id: 0,
      image: require("../assets/images/building.png"),
      content: "Lorem ipsum dolor sit amet elit.",
    },
    {
      id: 1,
      image: require("../assets/images/building.png"),
      content: "Lorem ipsum dolor sit amet elit.",
    },
    {
      id: 2,
      image: require("../assets/images/building.png"),
      content: "Lorem ipsum dolor sit amet elit.",
    },
  ]
  return (
    <div className="blog">
      <Header />
      <div className="mainBlog">
        <div className="cover">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
            iaculis nisi.
          </h1>
          <div className="icons">
            <p>Share this post: </p>
            <span>
              <img
                src={require("../assets/icons/fb-icon.svg").default}
                alt=""
              />
            </span>{" "}
            <span>
              <img
                src={require("../assets/icons/twitter.svg").default}
                alt=""
              />
            </span>{" "}
            <span>
              <img
                src={require("../assets/icons/whatsapp.svg").default}
                alt=""
              />
            </span>{" "}
            <span>
              <img
                src={require("../assets/icons/in-icon.svg").default}
                alt=""
              />
            </span>
          </div>
          <img
            src={require("../assets/images/cover.png")}
            alt="blog-cover"
            className="blog-cover"
          />
          <p className="writer">
            <sub>Financial Writer</sub>
          </p>
          <div className="blog-info">
            <p className="name">
              {" "}
              <img
                src={require("../assets/icons/user-square.svg").default}
                alt="user-icon"
              />{" "}
              <span>Solomon James</span>{" "}
            </p>
            <p className="date">
              {" "}
              <img
                src={require("../assets/icons/calendar.svg").default}
                alt="date"
              />{" "}
              <span>1 March 2022</span>{" "}
            </p>
            <p className="length">
              {" "}
              <img
                src={require("../assets/icons/clock.svg").default}
                alt="clock"
              />{" "}
              <span>6 mins Read</span>{" "}
            </p>
          </div>
        </div>
        <div className="story">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
            iaculis nisi. Praesent varius diam nisi, sit amet mollis dolor
            pharetra sit amet. Suspendisse porttitor viverra nunc nec ultrices.
            Nam venenatis quis massa at tempus. Suspendisse pretium metus magna,
            et interdum dolor gravida luctus. Fusce maximus nisi eros, eu
            malesuada ipsum ultrices vel. Nam in mi finibus, venenatis nisi
            tempor, feugiat massa.
          </p>
          <p>
            Quisque elementum, mi vel sodales luctus, est nunc egestas tortor,
            eget accumsan sapien lorem vitae erat. Curabitur a ex iaculis,
            posuere lorem at, varius urna. Nam iaculis viverra eros porta
            fringilla. Nulla vulputate, orci eu convallis rutrum, metus felis
            euismod quam, quis faucibus mauris dolor eget quam. Proin facilisis
            erat nunc, quis placerat erat tempor ut. Vestibulum fermentum a
            ligula id faucibus.
          </p>
          <p>
            Pellentesque maximus ipsum nunc, eleifend congue nisl faucibus ut.
            Nulla ultricies augue ut viverra congue. Maecenas arcu metus,
            posuere sed orci ut, convallis viverra eros. Proin in neque nisi.
            Proin eu nunc fringilla, dapibus nisi nec, pretium felis. Sed
            aliquam dui est, auctor egestas turpis dictum a. Donec placerat eu
            orci eget cursus. Mauris sodales iaculis mauris et feugiat. In
            aliquam mi lacinia massa egestas rutrum.
          </p>
        </div>
        <div className="reader-comments">
          <h1>Reader Comments</h1>
          <div className="comment-box">
            {comments &&
              comments.map((author) => (
                <div key={author.id} className="comments">
                  <p className="text">{author.content}</p>
                  <div className="extra">
                    <p className="info">
                      <span className="name">{author.name}</span>
                      <span className="time">{author.time}</span>
                    </p>
                    <p className="reply">
                      {" "}
                      <img
                        src={require("../assets/icons/message.svg").default}
                      />{" "}
                      <span>Reply Comment</span>
                    </p>
                  </div>
                </div>
              ))}
            <div className="join"></div>
          </div>
        </div>
        <div className="top-stories">
          <h1>Top Stories</h1>
          <div className="container">
            {story && story.map((story) => (
              <div key={story.id} className="singlestory">
              <img
                src={story.image}
                alt="story-cover"
              />
              <p>{story.content}</p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
