import React from "react";
import "./education.css";
import {
  Timeline,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { Grid } from "@mui/material";
import { FaGraduationCap } from "react-icons/fa";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { useSelector } from "react-redux";
function EducationMobile() {
  const darkMode = useSelector((state) => state.theme.value);
  return (
    <Grid
      container
      className={`education ${darkMode ? "education-dark" : "education-light"}`}
    >
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <div className="education-heading">
          <FaGraduationCap className="education-icon" />
          &nbsp;My{" "}
          <span style={{ color: "rgb(0, 26, 255)" }}>&nbsp;Educations</span>
        </div>
        <p className="education-quote">
          Education Is Not The Learning Of Facts, But The Training Of The Mind
          To Think.
        </p>
      </Grid>

      <Grid item lg={12} md={12} sm={12} xs={12} p={4}>
        <Timeline
          position="right"
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                style={{
                  padding: "3px",
                  borderColor: `${darkMode ? "white" : "#0f46a2"}`,
                  borderStyle: "solid",
                  borderWidth: "4.5px",
                }}
                variant="outlined"
              >
                <FaGraduationCap className="edu-icon" />
              </TimelineDot>
              <TimelineConnector
                style={{
                  height: "190px",
                  width: "8px",
                  backgroundColor: `${darkMode ? "white" : "black"}`,
                }}
              />
            </TimelineSeparator>
            <TimelineContent>
              <div className="education-content-box-right">
                <div className="education-content-text-right">
                  <h2>College</h2>
                  <p>● Future Institute of Engineering and Management</p>
                  <p>● Bachelors's in Computer Application</p>
                  <p>● 2020-2023 | Pursuing</p>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                style={{
                  padding: "3px",
                  borderColor: `${darkMode ? "white" : "#0f46a2"}`,
                  borderStyle: "solid",
                  borderWidth: "4.5px",
                }}
                variant="outlined"
              >
                <BusinessCenterIcon className="edu-icon" />
              </TimelineDot>
              <TimelineConnector
                style={{
                  height: "190px",
                  width: "8px",
                  backgroundColor: `${darkMode ? "white" : "black"}`,
                }}
              />
            </TimelineSeparator>
            <TimelineContent>
              <div className="education-content-box-left">
                <div className="education-content-text-left">
                  <h2>High School</h2>
                  <p>● St. Joseph & Mary's School</p>
                  <p>● Class 11 - Class 12</p>
                  <p>● 2018-2020 | Compleated</p>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                style={{
                  padding: "3px",
                  borderColor: `${darkMode ? "white" : "#0f46a2"}`,
                  borderStyle: "solid",
                  borderWidth: "4.5px",
                }}
                variant="outlined"
              >
                <AutoStoriesIcon className="edu-icon" />
              </TimelineDot>
              <TimelineConnector
                style={{
                  height: "190px",
                  width: "8px",
                  backgroundColor: `${darkMode ? "white" : "black"}`,
                }}
              />
            </TimelineSeparator>
            <TimelineContent>
              <div className="education-content-box-right">
                <div className="education-content-text-right">
                  <h2>Secondary School</h2>
                  <p>● Gurukul Vidya Mandir Secondary School</p>
                  <p>● Class 8 - Class 10</p>
                  <p>● 2016-2018 | Compleated</p>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot
                className="edu-dot"
                style={{
                  padding: "3px",
                  borderColor: `${darkMode ? "white" : "#0f46a2"}`,
                  borderStyle: "solid",
                  borderWidth: "4.5px",
                }}
                variant="outlined"
              >
                <AutoStoriesIcon className="edu-icon" />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <div className="education-content-box-left">
                <div className="education-content-text-left">
                  <h2>Secondary School</h2>
                  <p>● De Nobili School</p>
                  <p>● Upto Class 7</p>
                  <p>● 2006-2016 | Compleated</p>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Grid>
    </Grid>
  );
}
export default EducationMobile;
