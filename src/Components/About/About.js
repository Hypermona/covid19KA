import React from "react";
import Helmet from "react-helmet";

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
      <Helmet>
        <title>Covid19Karnataka | About</title>
        <meta name="description" content="Home page of covid19karnataka" />
      </Helmet>
      {data.map((item) => (
        <div style={cls.card} key={item.title}>
          <header style={cls.title}>{item.title}</header>
          <section style={cls.body}>{item.body}</section>
        </div>
      ))}
    </>
  );
}

export default About;
