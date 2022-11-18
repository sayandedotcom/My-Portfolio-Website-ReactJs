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
import FIEM from "../../assests/fiem.jpg";
import "./education.css";
export default function Education() {
  return (
    <Grid container p={5}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <div className="education-heading">
          <FaGraduationCap />
          My Educations
        </div>
        <div className="education-quote">
          <h3>
            Education Is Not The Learning Of Facts, But The Training Of The Mind
            To Think.
          </h3>
        </div>
      </Grid>

      <Grid item lg={12} md={12} sm={12} xs={12} p={4}>
        <Timeline position="alternate" sx={{ p: 5 }}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot style={{ padding: "9px" }} variant="outlined">
                <FaGraduationCap style={{ fontSize: "25px" }} />
              </TimelineDot>
              <TimelineConnector
                // sx={{ backgroundColor: "black" }}
                style={{
                  width: "8px",
                }}
                className="line-connector"
              />
            </TimelineSeparator>
            <TimelineContent>
              <div
                style={{
                  backgroundColor: "#0f46a2",
                  color: "white",
                  borderRadius: "25px",
                  fontWeight: "700",
                }}
              >
                College
                <p>Future Institute of Engineering and Management</p>
                <p>Bachelors's in Computer Application</p>
                <p>2020-2023 | Pursuing</p>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot style={{ padding: "9px" }} variant="outlined">
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
            <TimelineContent
              style={{
                backgroundColor: "#0f46a2",
                color: "white",
                borderRadius: "25px",
                fontWeight: "700",
              }}
            >
              High School
              <p>St. Joseph & Mary's School</p>
              <p>Class 11 - Class 12</p>
              <p>2018-2020 | Compleated</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot style={{ padding: "9px" }} variant="outlined">
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
            <TimelineContent
              style={{
                backgroundColor: "#0f46a2",
                color: "white",
                borderRadius: "25px",
                fontWeight: "700",
              }}
            >
              Secondary School
              <p>Gurukul Vidya Mandir Secondary School</p>
              <p>Class 8 - Class 10</p>
              <p>2016-2018 | Compleated</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot style={{ padding: "9px" }} variant="outlined">
                <AutoStoriesIcon style={{ fontSize: "25px" }} />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent
              style={{
                backgroundColor: "#0f46a2",
                color: "white",
                borderRadius: "25px",
                fontWeight: "700",
              }}
            >
              Secondary School
              <p>De Nobili School</p>
              <p>Upto Class 7</p>
              <p>2006-2016 | Compleated</p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Grid>
    </Grid>
  );
}
