import React from "react";
import { Grid, Tooltip } from "@mui/material";
import "./contactme.css";
import { FaPhoneAlt } from "react-icons/fa";
import links from "../home/links";
export default function Contactme() {
  return (
    <Grid container className="contactme" p={5}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <div className="contactme-heading">
          <FaPhoneAlt className="contactme-icon" />
          &nbsp;Contact <span style={{ color: "#7303a7" }}>&nbsp;Me</span>
        </div>
        <h3 className="contactme-quote">
          Every mind needs friendly contact with other minds, for food of
          expansion and growth.
        </h3>
      </Grid>
      <Grid
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
        p={3}
        style={{
          textAlign: "center",
        }}
      >
        <h3>My Socials</h3>
        {links.map(({ name, link, src }, index) => (
          <a key={index} href={link} target="blank">
            <Tooltip title={name} placement="bottom-start" arrow>
              <img className="icons" src={src} alt={name} />
            </Tooltip>
          </a>
        ))}
      </Grid>

      <Grid item lg={12} md={12} sm={12} xs={12} p={2}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8831.56634992668!2d88.31044633606088!3d22.48532784795222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027b0ac0ca8a11%3A0x2f15136e95b13381!2sIndia%20Today%20magazine%20stall%2CKolkata-Lokenath%20Paper!5e0!3m2!1sen!2sin!4v1668627706015!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Grid>
    </Grid>
  );
}
