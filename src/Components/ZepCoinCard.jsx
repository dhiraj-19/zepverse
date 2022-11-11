import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#151515",
    padding: "40px 0px",
  },
  maincard: {
    padding: "30px",
  },
  card: {
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  media: {
    paddingTop: "70.25%",
  },
  content: {
    backgroundColor: "#151515",
    textAlign: "center",
    color: "#fff",
    padding: "5px 10px !important",
    paddingBottom: "0px !important",
    "& h6": {
      margin: "0",
      fontSize: "32px",
      fontWeight: 600,
      paddingBottom: "12px",
    },
    "& .contents": {
      fontSize: "14px",
      fontWeight: 500,
    },
  },
  heading: {
    fontWeight: "bold",
  },
  subheading: {
    lineHeight: 1.8,
  },
}));

const ZepCoinCard = () => {
  let classes = useStyles();
  return (
    <>
      <section className={classes.main}>
        <Container>
          <Grid container>
            <Grid item md={4} className={classes.maincard}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={
                    "https://zepverse.io/wp-content/uploads/2022/09/11-5.png"
                  }
                />
                <CardContent className={classes.content}>
                  <Typography variant={"h6"}>Nature Around Us</Typography>
                  <Typography className="contents" variant={"caption"}>
                    Zep Coin is a fully decentralised, open-source
                    cryptocurrency built by legends of blockchain and faster
                    than the fastest BEP 20 mechanism, with an influential
                    community. Zep coin is the official currency of Zepverse,
                    the magnificent and futuristic verse where you can get
                    involved in everything from gaming to NFTs.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={4} className={classes.maincard}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={
                    "	https://zepverse.io/wp-content/uploads/2022/09/11-2.png"
                  }
                />
                <CardContent className={classes.content}>
                  <Typography variant={"h6"}>Nature Around Us</Typography>
                  <Typography className="contents" variant={"caption"}>
                    Zep Coin is a fully decentralised, open-source
                    cryptocurrency built by legends of blockchain and faster
                    than the fastest BEP 20 mechanism, with an influential
                    community. Zep coin is the official currency of Zepverse,
                    the magnificent and futuristic verse where you can get
                    involved in everything from gaming to NFTs.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={4} className={classes.maincard}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={
                    "https://zepverse.io/wp-content/uploads/2022/09/11-1.png"
                  }
                />
                <CardContent className={classes.content}>
                  <Typography variant={"h6"}>Nature Around Us</Typography>
                  <Typography className="contents" variant={"caption"}>
                    Zep Coin is a fully decentralised, open-source
                    cryptocurrency built by legends of blockchain and faster
                    than the fastest BEP 20 mechanism, with an influential
                    community. Zep coin is the official currency of Zepverse,
                    the magnificent and futuristic verse where you can get
                    involved in everything from gaming to NFTs.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={4} className={classes.maincard}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={
                    "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
                  }
                />
                <CardContent className={classes.content}>
                  <Typography variant={"h6"}>Nature Around Us</Typography>
                  <Typography className="contents" variant={"caption"}>
                    Zep Coin is a fully decentralised, open-source
                    cryptocurrency built by legends of blockchain and faster
                    than the fastest BEP 20 mechanism, with an influential
                    community. Zep coin is the official currency of Zepverse,
                    the magnificent and futuristic verse where you can get
                    involved in everything from gaming to NFTs.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={4} className={classes.maincard}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={
                    "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
                  }
                />
                <CardContent className={classes.content}>
                  <Typography variant={"h6"}>Nature Around Us</Typography>
                  <Typography className="contents" variant={"caption"}>
                    Zep Coin is a fully decentralised, open-source
                    cryptocurrency built by legends of blockchain and faster
                    than the fastest BEP 20 mechanism, with an influential
                    community. Zep coin is the official currency of Zepverse,
                    the magnificent and futuristic verse where you can get
                    involved in everything from gaming to NFTs.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={4} className={classes.maincard}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={
                    "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
                  }
                />
                <CardContent className={classes.content}>
                  <Typography variant={"h6"}>Nature Around Us</Typography>
                  <Typography className="contents" variant={"caption"}>
                    Zep Coin is a fully decentralised, open-source
                    cryptocurrency built by legends of blockchain and faster
                    than the fastest BEP 20 mechanism, with an influential
                    community. Zep coin is the official currency of Zepverse,
                    the magnificent and futuristic verse where you can get
                    involved in everything from gaming to NFTs.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default ZepCoinCard;
