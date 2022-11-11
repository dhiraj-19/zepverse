import React from "react";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import AboutButton from "./AboutButton";

const useStyles = makeStyles((theme) => ({
  aboutSection: {
    backgroundColor: "#151515",
    padding: "40px 0px",
    "& .heading": {
      "& .first": {
        color: "#FFFFFF",
        fontFamily: "Poppins Sans-serif",
        fontSize: "45px",
        fontWeight: 600,
        margin: "0px",
      },
      "& .secound": {
        color: "#00FF7A",
        fontFamily: "Poppins Sans-serif",
        fontSize: "95px",
        fontWeight: 900,
        margin: "0px",
      },
    },
    "& .video_wrapper": {
      margin: "30px 0px",
    },
    "& p": {
      color: "#FFFFFF",
      fontFamily: "Poppins Sans-serif",
      fontSize: "15px",
      fontWeight: 400,
      // marginTop: "20px",
    },
    "& .buttonSection": {
      margin: "60px 0px 0px 70px",
      display: "flex",
      justifyContent: "center",
    },
  },
}));

const AboutSection = () => {
  const styles = useStyles();
  return (
    <>
      <section className={styles.aboutSection}>
        <Container>
          <div className="heading">
            <h2 className="first">About</h2>
            <h2 className="thirdAbout">ZEPVERSE</h2>
            <p>
              Zepverse is an exotic virtual world for Zepians (the inhabitant of
              Zepverse). The Zepverse is the pioneer of the whole new universe,
              where you can have countless features and activities curated with
              futuristic perspective and creativity. The magnificent scope
              ranges from entertainment to earning. Gaming to watching movies
              with your favourite celebrity, creating & petting creatures of
              imagination like a T-Rex or a Unicorn, making/trading NFTs of
              anyone/anything, operating decentralised banking, shopping, estate
              buying and building, and everything fantastic makes it a class
              apart.
            </p>
          </div>
          <Grid container className="video_wrapper">
            <Grid item md={6}>
              <div className="rightside">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/d-bcbvZrqo4"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Grid>
            <Grid item md={6}>
              <div className="rightside">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/7SmJsUJI-D8"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Grid>
          </Grid>
          <p>
            Zep Coin holders can enjoy this fantastic Zepverse by using their
            Zep Coins. Zepians can create their alternative virtual world based
            on their choices and preferences because Zepverse is all about
            options beyond your imagination. The Zepverse is bridging the gap
            between the virtual and real world by providing realistic use of the
            Zep Coins. Zepians can use their Zep Coins for daily real-world
            shopping and shopping on luxury brands.
          </p>
        </Container>
        <div className="buttonSection">
          <AboutButton buttoNname="Free Airdrops" bgColor="#01842EEB" />
          <AboutButton buttoNname="Free Airdrops" bgColor="#330BEDFC" />
        </div>
      </section>
    </>
  );
};

export default AboutSection;
