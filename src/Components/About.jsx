/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
// import image from "../images/motion-background.jpg";
import image from "../images/clouds.jpg";

// const imageAltText = "purple and blue abstract background";
const imageAltText = "clouds and mountains background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I’m a backend developer currently studying Harvard Online courses, and I’m venturing into full-stack development. I have a passion for creating web applications.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Python programming",
  "Database management",
  "API development",
  "Server-side scripting",
  "Cloud services integration",
  "Version control with Git",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am eager to utilize my skills in a challenging environment where I can contribute to impactful projects and continue to grow as a developer. I aim to join a team that values innovation, collaboration, and a commitment to excellence.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
