import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  mainBackground: {
    backgroundColor: "#151515",
    padding: "40px 0px",
  },
  containerback: {
    backgroundImage: "linear-gradient(250deg, #071B2C 50%, #29D3F236 95%)",
    backgroundColor: "transparent",
    padding: "20px 60px !important",
    borderRadius: "30px",
    "& .right": {
      marginBottom: "15px",
      "& h2": {
        color: "#fff",
        fontSize: "60px",
        fontWeight: 600,
        lineHeight: 1,
      },
    },
    "& .devider": {
      marginBottom: "15px",
      "& span": {
        width: "65%",
        height: "2px",
        background: "#fff",
        display: "block",
      },
    },
    "& p": {
      color: "#fff",
    },
    "& .leftside": {
      "& img": {
        width: "78%",
        float: "right",
      },
    },
  },
}));

const KeyUniverse = () => {
  let styles = useStyles();
  return (
    <>
      <section className={styles.mainBackground}>
        <Container className={styles.containerback}>
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item md={6}>
              <div className="right">
                <Typography variant="h2">A Key For Your Universe</Typography>
              </div>
              <div className="devider">
                <span></span>
              </div>
              <Typography variant="body1">
                The Zep Coin is the official currency of Zepverse, a wholesome
                virtual world. You can use your Zep Coin to do everything in
                Zepverse. From gaming, future NFTs, Zep securities & interest,
                decentralised payment gateway, virtual premium shopping,
                entertainment, Zep estate, Zep adult world, and Zep pet. We are
                non-limiters. We keep on evolving and adding newer, splendid
                features.
              </Typography>
            </Grid>
            <Grid item md={6}>
              <div className="leftside">
                <img
                  src="https://zepverse.io/wp-content/uploads/2022/09/2.-Crypto-Medium.png"
                  alt="sfd"
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default KeyUniverse;
