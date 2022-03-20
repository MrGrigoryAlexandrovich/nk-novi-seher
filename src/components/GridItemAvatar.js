import React from "react";
import { Grid, Avatar } from "@mui/material";
import logo from "../assets/logo.png";

export default function GridItemAvatar() {
  return (
    <Grid item md={6} xs={12} container justifyContent="center">
      <Avatar
        src={logo}
        alt="logo"
        sx={{
          marginTop: 6.25,
          height: "65%",
          width: {
            md: 600,
            xs: 300,
          },
          height: {
            md: 600,
            xs: 300,
          },
        }}
      />
    </Grid>
  );
}
