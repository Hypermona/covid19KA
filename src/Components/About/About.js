import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

const cls = {
  card: {
    width: "calc(20rem + 10vw)",
    textAlign: "center",
    margin: "auto",
    padding: "2vh",
  },
  title: {
    fontWeight: "600",
    fontSize: "1.5rem",
  },
  body: {
    borderRadius: "5px",
    backgroundImage: `linear-gradient(to bottom, #ffffff00 -50%, red 1000%)`,
    padding: "1vw",
  },
  links: {
    width: "calc(20rem + 10vw)",
    textAlign: "center",
    margin: "auto",
    padding: "10px",
  },
};

const data = [
  {
    title: "Why This Is ?",
    body:
      "Because Corona virus affects all of us.Today it's someone else who is getting infected; tomorrow it could be us. We need to prevent the spread of this virus. We need to document the data so that people with knowledge can use this data to make informed decisions.",
  },
  {
    title: "About Data !",
    body:
      "I am getting all of these data from api.covid19india.org..; they are using state bulletins and official handles to update our numbers. The data is validated by a group of volunteers and published into a Google sheet and an API.",
  },
  {
    title: "About Me",
    body:
      "Hey, there I am Mohana Seraje. I am Currently pursuing my engineering degree in Information Science And Engineering at Sahyadri College of Engineering And Management.",
  },
];

function About() {
  return (
    <>
      {data.map((item) => (
        <div style={cls.card} key={item.title}>
          <header style={cls.title}>{item.title}</header>
          <section style={cls.body}>{item.body}</section>
        </div>
      ))}
      <div style={cls.links}>
        <a
          href="https://www.instagram.com/hyper______________________/"
          target="_blank"
          style={{ textDecoration: "none", color: "red", padding: "0 20px" }}
          rel="noreferrer"
        >
          <InstagramIcon style={{ fontSize: "3rem" }} />
        </a>
        <a
          href="https://github.com/Hypermona"
          target="_blank"
          style={{ textDecoration: "none", color: "black", padding: "0 20px" }}
          rel="noreferrer"
        >
          <GitHubIcon style={{ fontSize: "3rem" }} />
        </a>
      </div>
    </>
  );
}

export default About;
