import * as React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { Grid } from "@mui/material";
import { FaGraduationCap } from "react-icons/fa";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import "./education.css";
import { useSelector } from "react-redux";
export default function EducationWeb() {
  const darkMode = useSelector((state) => state.theme.value);
  return (
    <Grid
      container
      className={`education ${darkMode ? "education-dark" : "education-light"}`}
    >
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <div className="education-heading">
          <FaGraduationCap className="education-icon" />
          &nbsp;My <span style={{ color: "#7303a7" }}>&nbsp;Educations</span>
        </div>
        <div className="education-quote">
          <h5>
            Education Is Not The Learning Of Facts, But The Training Of The Mind
            To Think.
          </h5>
        </div>
      </Grid>

      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Timeline position="alternate" sx={{ px: 25, py: 8 }}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                className="dot"
                style={{
                  padding: "3px",
                  border: "#0f46a2",
                  borderStyle: "solid",
                  borderWidth: "4.5px",
                }}
                variant="outlined"
              >
                <FaGraduationCap style={{ fontSize: "25px" }} />
              </TimelineDot>
              <TimelineConnector
                style={{
                  height: "190px",
                  width: "8px",
                  backgroundColor: "black",
                }}
              />
            </TimelineSeparator>
            <TimelineContent>
              <div className="education-content-box-right">
                <div className="education-content-text-right">
                  <h2>College</h2>
                  <p>Future Institute of Engineering and Management</p>
                  <p>Bachelors's in Computer Application</p>
                  <p>2020-2023 | Pursuing</p>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                style={{
                  padding: "3px",
                  border: "#0f46a2",
                  borderStyle: "solid",
                  borderWidth: "4.5px",
                }}
                variant="outlined"
              >
                <BusinessCenterIcon style={{ fontSize: "25px" }} />
              </TimelineDot>
              <TimelineConnector
                style={{
                  height: "190px",
                  width: "8px",
                  backgroundColor: "black",
                }}
              />
            </TimelineSeparator>
            <TimelineContent>
              <div className="education-content-box-left">
                <div className="education-content-text-left">
                  <h2>High School</h2>
                  <p>St. Joseph & Mary's School</p>
                  <p>Class 11 - Class 12</p>
                  <p>2018-2020 | Compleated</p>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                style={{
                  padding: "3px",
                  border: "#0f46a2",
                  borderStyle: "solid",
                  borderWidth: "4.5px",
                }}
                variant="outlined"
              >
                <AutoStoriesIcon style={{ fontSize: "25px" }} />
              </TimelineDot>
              <TimelineConnector
                style={{
                  height: "190px",
                  width: "8px",
                  backgroundColor: "black",
                }}
              />
            </TimelineSeparator>
            <TimelineContent>
              <div className="education-content-box-right">
                <div className="education-content-text-right">
                  <h2>Secondary School</h2>
                  <p>Gurukul Vidya Mandir Secondary School</p>
                  <p>Class 8 - Class 10</p>
                  <p>2016-2018 | Compleated</p>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                style={{
                  padding: "3px",
                  border: "#0f46a2",
                  borderStyle: "solid",
                  borderWidth: "4.5px",
                }}
                variant="outlined"
              >
                <AutoStoriesIcon style={{ fontSize: "25px" }} />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <div className="education-content-box-left">
                <div className="education-content-text-left">
                  <h2>Secondary School</h2>
                  <p>De Nobili School</p>
                  <p>Upto Class 7</p>
                  <p>2006-2016 | Compleated</p>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Grid>
    </Grid>
  );
}
