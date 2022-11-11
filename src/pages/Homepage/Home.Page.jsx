import React from "react";
import { makeStyles } from "@mui/styles";
import HeroSection from "../../Components/Hero-section/HeroSection";
import AboutSection from "../../Components/AbutSection/AboutSection";
import ZepCoinFeatures from "../../Components/ZepCoin/ZepCoinFeatures";
import ZepCoinCard from "../../Components/ZepCoinCard";
import KeyUniverse from "../../Components/KeyUniverse";

const useStyles = makeStyles((theme) => ({
  root: {
    // position: "relative",
    // top: "20%",
  },
  aboutSection: {
    backgroundColor: "#151515",
  },
}));

const HomePage = () => {
  const styles = useStyles();
  return (
    <>
      <div className={styles.root}>
        <HeroSection />
      </div>
      <AboutSection />
      <ZepCoinFeatures />
      <ZepCoinCard />
      <KeyUniverse/>
    </>
  );
};

export default HomePage;
