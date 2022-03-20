import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { CopyrightOutlined } from "@mui/icons-material";

const useStyles = makeStyles(() => ({
  footer: {
    display: "flex",
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    height: 40,
    background: "#434343",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  title: {
    paddingLeft: 8,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div
      className={classes.footer}
      onClick={() => window.open("https://cadev.netlify.app/", "mywindow")}
    >
      <CopyrightOutlined />
      <Typography className={classes.title}>CA DEV</Typography>
    </div>
  );
}
