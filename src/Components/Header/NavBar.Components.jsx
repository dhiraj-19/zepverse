import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import ButtonNav from "./ButtonNav";
import { Container } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  navStyles: {
    "& nav": {
      position: "absolute",
      zIndex: 99,
      width: "100%",
      // padding: "0px 3%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "1200px",
      margin: "0px auto",
      "& .logo": {
        width: "180px",
      },
      "& ul": {
        display: "flex",
        alignItems: "center",
        "& li": {
          display: "inline-block",
          marginLeft: "35px",
          "& a": {
            fontSize: "17px",
            color: "#fff",
          },
        },
      },
    },
  },
}));

const NavBarComponents = () => {
  const styles = useStyles();
  return (
    <>
      <section className={styles.navStyles}>
        <Container>
          <nav>
            <img
              className="logo"
              src="https://zepverse.io/wp-content/uploads/2022/01/zepverse-logo-Medium.png"
              alt="logo"
            />
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/road-map">RoadMap</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <ButtonNav buttoNname="Buy ZEEP Coin" bgColor="#01842EEB" />
              </li>
              <li>
                <ButtonNav buttoNname="$1.2M Giveaway" bgColor="#6D0184EB" />
              </li>
              <li>
                <ButtonNav buttoNname="Free Airdrops" bgColor="#01842EEB" />
              </li>
            </ul>
          </nav>
        </Container>
      </section>
    </>
  );
};

export default NavBarComponents;
