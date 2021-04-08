import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Paper
      style={{
        textAlign: "center",
        margin: "50px auto 0 auto",
        padding: "30px",
        backgroundImage: `linear-gradient(to bottom, #ffffff00 , #dee1ec 1000%)`,
      }}
      elevation={0}
      square
    >
      <Typography
        variant="button"
        style={{ padding: "5px", color: "GrayText" }}
      >
        <Link to="/about" style={{ textDecoration: "none", color: "#007bff" }}>
          About
        </Link>
        {" | "}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#dc3545",
            fontWeight: "600",
            fontSize: "1rem",
          }}
        >
          Covid19Karnataka
        </Link>
        {" | "}
        <Link style={{ textDecoration: "none", color: "#007bff" }}>Report</Link>
      </Typography>
      <Typography
        style={{
          padding: "5px",
          color: "GrayText",
          background: "#6c757d10",
          margin: "auto",
          fontFamily: "monospace",
        }}
      >
        “Better to wear a mask than a ventilator; better to stay at home than in
        an ICU.”
      </Typography>
      <div style={{ marginTop: "20px" }}>
        <a
          href="https://www.instagram.com/hyper______________________/"
          target="_blank"
          style={{ textDecoration: "none", color: "red", padding: "0 10px" }}
          rel="noreferrer"
        >
          <InstagramIcon style={{ fontSize: "2rem" }} />
        </a>
        <a
          href="https://github.com/Hypermona"
          target="_blank"
          style={{ textDecoration: "none", color: "black", padding: "0 10px" }}
          rel="noreferrer"
        >
          <GitHubIcon style={{ fontSize: "2rem" }} />
        </a>
      </div>
    </Paper>
  );
}
