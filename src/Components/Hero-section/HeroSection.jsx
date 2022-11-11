import React from "react";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "80%",
    position: "relative",
    "& video": {
      width: "100%",
      margin: "0px",
      padding: "0px",
    },
    "& .overlay": {
      position: "absolute",
      backgroundColor: "#1D1D1D",
      opacity: "0.46%",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 9,
      transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
    },
    "& .content": {
      position: "absolute",
      top: "70%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: "100%",
      height: "100%",
      zIndex: 10,
      "& .first": {
        color: "#FFFFFF",
        fontFamily: "Poppins Sans-serif",
        fontSize: "35px",
        fontWeight: 400,
        margin: "0px",
      },
      "& .secound": {
        color: "#00FF7A",
        fontFamily: "Poppins Sans-serif",
        fontSize: "95px",
        fontWeight: 900,
        margin: "0px",
      },
      "& p": {
        color: "#FFFFFF",
        fontFamily: "Poppins Sans-serif",
        fontSize: "20px",
        fontWeight: 400,
        marginTop: "20px",
      },
    },
  },
}));

const HeroSection = () => {
  const styles = useStyles();
  return (
    <>
      <section className={styles.root}>
        <video autoPlay={true} muted loop id="myVideo">
          <source
            src="assets/videoplayback (4).mp4"
            type="video/mp4"
          />
        </video>
        <div className="overlay"></div>
        <div className="content">
          <Container>
            <Grid container>
              <Grid item md={6}>
                <h2 className="first">Pioneering the near-to-real</h2>
                <h2 className="secound">FutureVerse</h2>
                <h2 className="third">ZEPVERSE</h2>
                <p>
                  The Zepverse is the pioneer of the whole new universe, where
                  you can have countless features and activities curated with
                  futuristic perspective and creativity.
                </p>
              </Grid>
              <Grid item md={6}>
                <img
                  src="https://zepverse.io/wp-content/uploads/2022/11/pose-1-transparent-Medium.png"
                  alt="sideimage"
                />
              </Grid>
            </Grid>
          </Container>
        </div>
      </section>
      
    </>
  );
};

export default HeroSection;
