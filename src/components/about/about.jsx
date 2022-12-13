import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import "./about.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import File from "../../assests/SayanDeCV.pdf";
import PersonIcon from "@mui/icons-material/Person";

export default function About() {
  useEffect(() => {
    document.title = "Sayan De | About Me";
  }, []);
  return (
    <Grid container className="about" p={4}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <div className="about-heading">
          <PersonIcon sx={{ fontSize: "2.5rem" }} className="about-icon" />
          &nbsp;About&nbsp;<span style={{ color: "#7303a7" }}>Me</span>
        </div>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <h3 className="about-essay">
          <span style={{ color: "#7303a7", fontSize: "2rem" }}>
            I'm Sayan De
          </span>{" "}
          <br />
          <br />I am a Passionate Full Stack Developer & Enthusiast who has
          worked with front End technologies & Languages like{" "}
          <span style={{ color: "#ff6d00" }}>HTML</span> ,
          <span style={{ color: "#35c1f1" }}>CSS</span> ,
          <span style={{ color: "#ed6092" }}>SASS</span> ,
          <span style={{ color: "#f7df1e" }}>JavaScript</span>,
          <span style={{ color: "#1b95ea" }}>TypeScript</span> and Front End
          Frameworks like <span style={{ color: "#7fd7e8" }}>React</span> and{" "}
          <span style={{ color: "#3fb27f" }}>Vue</span> .
          <br />
          <br />I have built many projects with{" "}
          <span style={{ color: "#7fd7e8" }}>React</span> and with its libraries
          like <span style={{ color: "#d0021b" }}>React Router</span> ,{" "}
          <span style={{ color: "#7e57c2" }}>Redux</span> ,{" "}
          <span style={{ color: "#7e57c2" }}>Redux Toolkit</span> ,{" "}
          <span style={{ color: "#989799" }}>Redux-Saga</span>,{" "}
          <span style={{ color: "#ff4154" }}>React Query</span> ,{" "}
          <span style={{ color: "blue" }}>Formik</span> ,{" "}
          <span style={{ color: "green" }}>Flux</span> , etc and I have also
          worked on styles with{" "}
          <span style={{ color: "#29b6f6" }}>Material UI</span> ,{" "}
          <span style={{ color: "#673ab7" }}>React Bootstrap</span> , etc and
          motions with <span style={{ color: "blue" }}>Framer Motion</span> . I
          have also had experience with testing React Websites with{" "}
          <span style={{ color: "#99425b" }}>Jest</span> and{" "}
          <span style={{ color: "#99425b" }}>React Testing Library</span> .I
          have also worked with other frameworks like{" "}
          <span style={{ color: "#212121" }}>Next Js</span> and also worked on{" "}
          <span style={{ color: "#7fd7e8" }}>React Native</span>
          for Mobile Applications Developmet. I have also familier with backend
          technologies like <span style={{ color: "#4caf50" }}>
            Node Js
          </span>{" "}
          and <span style={{ color: "7fd7e8" }}>Express Js</span> and{" "}
          <span style={{ color: "#4caf50" }}>Mongo DB</span> .
          <br />
          <br />I have containerized{" "}
          <span style={{ color: "#7fd7e8" }}>React</span> Apps with{" "}
          <span style={{ color: "#2395ec" }}>Docker</span> and deployed on{" "}
          <span style={{ color: "#d4732a" }}>AWS </span>
          for making them production ready. I am comfortable working on Linux
          Environment and also familier with
          <span style={{ color: "#f4511e" }}> Git Version Control System</span>,
          <span style={{ color: "7fd7e8" }}> GitHub</span>,{" "}
          <span style={{ color: "#2380fb" }}>Jira</span> etc.
          <br />
          <br />
          Looking for a challenging role in a reputable organization to use my
          skills and knowledge. Being a fast learner, I would like to learn and
          earn in order to meet the common objectives of the organization as a
          whole by utilizing a positive approach in everything that I do.I am an
          enthusiastic, self-motivated, reliable, responsible, and hard-working
          person. I am a mature team worker and adaptable to all challenging
          situations. I am able to work well both in a team environment as well
          as using my own initiative. I am able to work well under pressure and
          adhere to strict deadlines.
          <br />
          <br />I am a huge Messi and Barcelona FC Fan and played football in
          school level which helped to build my teamwork and leadership
          qualities.
          <br />
          <br />
        </h3>
        <h3 style={{ textAlign: "center" }}>
          Before working on anything on React check for its libraries.{" "}
          <span style={{ fontSize: "1.3rem" }}> ~ Sayan De</span>
        </h3>
        <br />
        <a
          href={File}
          target="blank"
          style={{ textDecoration: "none", display: "inline-block" }}
        >
          <button className="about-button">
            Resume
            <NavigateNextIcon className="about-resume-icon" />
          </button>
        </a>
      </Grid>
    </Grid>
  );
}
