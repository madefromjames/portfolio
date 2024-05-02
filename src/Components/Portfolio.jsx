/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
// import image from "../images/design-desk.jpeg";
import image from "../images/teamwork.jpg";

// const imageAltText = "desktop with books and laptop";
const imageAltText = "Group of people working together with laptop and devices on the table";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Resume Site",
    description:
      "Welcome to my professional space on the web. Here, you'll find a showcase of my journey as a Full Stack Developer, where I blend backend prowess with frontend finesse.",
    url: "https://madefromjames.github.io",
  },
  {
    title: "Creating a Word Jumble Game in Python Using Tkinter GUI",
    description:
      "Collaboration to create a beginner friendly word jumble game uisng python tkinter to help the tools to get started.",
    url: "https://github.com/madefromjames/digital_fortress_python_project",
  },
  {
    title: "Stock Market Web Application",
    description:
      "A financial management tool enabling stock trading, transaction tracking, and cash balance management.",
    url: "https://madefromjames.pythonanywhere.com/",
  },
  {
    title: "Google Search Web Application",
    description: "Video interview to explain basic Google Search Web Application.",
    url: "https://youtu.be/138a5Fl5sZM?si=WGgeR1NjjWMYSrQO",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
