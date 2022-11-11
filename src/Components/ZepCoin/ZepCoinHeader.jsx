import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  zepverse: {
    backgroundColor: "#151515",
    "& .heading": {
      textAlign: "center",
      padding: "50px 0px",
      "& .firstheading": {
        margin: "0px",
        color: "#fff",
        fontSize: "45px",
        fontWeight: 600,
      },
      "& p": {
        color: "#fff",
        fontSize: "15px",
        padding: "10px 0px",
      },
    },
  },
}));

const ZepCoinHeader = () => {
  let styles = useStyles();
  return (
    <>
      <section className={styles.zepverse}>
        <Container>
          <div className="heading">
            <h2 className="firstheading">A Key for your Advance Universe</h2>
            <h2 className="thirdAbout">ZEPCOIN</h2>
            <Typography variant="body1">
              Zep coin is an official currency of Zepverse, the magnificent and
              futuristic world. You can enjoy everything from gaming to watching
              movies with your favourite celebrity, creating & petting an
              unimaginable creature like a T-Rex or a Unicorn,
              creating/buying/selling NFTs of yourself, your loved ones or even
              your house pet, owning an estate, using decentralised banking, and
              many more. Zep Coin is an open-source cryptocurrency built by the
              legends of blockchain, using the BEP 20 mechanism. Just like the
              evolving technology ZEP Coin will give you an access to :{" "}
            </Typography>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ZepCoinHeader;
