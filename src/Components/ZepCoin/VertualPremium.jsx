import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  zepversefeatures: {
    backgroundColor: "#151515",
    padding: "50px 0px",
    "& .heading": {
      "& h2": {
        margin: "0px",
        color: "#fff",
        fontSize: "36px",
        fontWeight: 600,
      },
    },
    "& .subHeading": {
      "& h2": {
        margin: "0px",
        color: "#fff",
        fontSize: "22px",
        fontWeight: 200,
        lineHeight: "1.5em",
      },
    },
    "& .devider": {
      padding: "20px 0px",
      "& span": {
        width: "20%",
        height: "4px",
        background: "#fff",
        display: "block",
      },
    },
    "& .pra": {
      "& p": {
        color: "#fff",
        fontSize: "15px",
        padding: "10px 0px",
      },
    },
  },
}));

const VertualPremium = (props) => {
  const styles = useStyles();
  return (
    <>
      <section className={styles.zepversefeatures}>
        <Container>
          <Grid container>
            <Grid item md={6}>
              <div className="iframe">
                <iframe
                  width="560"
                  height="250"
                  src="https://www.youtube.com/embed/6Y52kPCB9bE"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Grid>
            <Grid item md={6}>
              <div className="heading">
                <Typography variant="h2">VIRTUAL PREMIUM SHOPPING​​</Typography>
              </div>
              <div className="subHeading">
                <Typography variant="h2">
                  VIRTUAL SHOPPING EXPERIENCE​​
                </Typography>
              </div>
              <div className="devider">
                <span></span>
              </div>
              <div className="pra">
                <Typography>
                  Adding to its wide range of features, it collaborates with
                  multiple top-notch luxury brands and entitles a virtual
                  premium shopping experience. This feature enables all the Zep
                  Coin holders to use their coins in the real world by shopping
                  on luxury brands with Zep Coins.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default VertualPremium;
