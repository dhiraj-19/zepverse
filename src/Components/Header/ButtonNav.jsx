import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& button": {
      minWidth: "160px",
      borderColor: "#E8E8E8",
      boxShadow: "0px 0px 10px 0px rgb(0 0 0 / 50%)",
      borderStyle: "none",
      borderRadius: "30px 30px 30px 30px",
      padding: "12px 20px",
      color: "#fff",
      fontSize: "16px",
      cursor: "pointer",
    },
  },
}));

const ButtonNav = (props) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <button style={{ backgroundColor: props.bgColor }}>
        {props.buttoNname}
      </button>
    </div>
  );
};

export default ButtonNav;
