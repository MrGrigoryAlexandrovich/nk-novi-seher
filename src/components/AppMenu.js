import React from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  AppBar,
  IconButton,
  Drawer,
  Container,
  Divider,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Menu,
  Close,
  HomeOutlined,
  PhotoCameraOutlined,
  ContactPhoneOutlined,
} from "@mui/icons-material";
import { makeStyles, styled } from "@mui/styles";
import "../index.css";

const useStyles = makeStyles({
  appbar: {
    position: "static",
    borderBottom: "1px solid black",
  },
  appBarContainer: {
    height: 65,
  },
  routerLink: {
    textDecoration: "none",
  },
  mobileBox: {
    flexGrow: 1,
    textAlign: "center",
    height: "100%",
  },
  desktopBox: {
    height: "98%",
    flexGrow: 1,
    justifyContent: "center",
  },
  drawer: {
    width: 240,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: 240,
      boxSizing: "border-box",
    },
  },
});

const navigationLink = {
  height: 65.5,
  textDecoration: "none",
};

const navigationButton = {
  color: "white",
  width: 100,
  padding: 20,
};

const DrawerHeader = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  padding: (0, 8),
  justifyContent: "flex-end",
}));

export default function AppMenu() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar className={classes.appbar}>
      <Container maxWidth="xl" className={classes.appBarContainer}>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
          }}
          className={classes.mobileBox}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleDrawerOpen}
            color="inherit"
          >
            <Menu />
          </IconButton>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                <Close />
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              <ListItem
                button
                component={NavLink}
                to="/"
                onClick={handleDrawerClose}
              >
                <ListItemIcon>
                  <HomeOutlined />
                </ListItemIcon>
                <ListItemText primary={"Početna"} />
              </ListItem>
              <ListItem
                button
                component={NavLink}
                to="/galerija"
                onClick={handleDrawerClose}
              >
                <ListItemIcon>
                  <PhotoCameraOutlined />
                </ListItemIcon>
                <ListItemText primary={"Galerija"} />
              </ListItem>
              <ListItem
                button
                component={NavLink}
                to="/kontakt"
                onClick={handleDrawerClose}
              >
                <ListItemIcon>
                  <ContactPhoneOutlined />
                </ListItemIcon>
                <ListItemText primary={"Kontakt"} />
              </ListItem>
            </List>
          </Drawer>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
          }}
          className={classes.desktopBox}
        >
          <NavLink to="/" style={navigationLink} activeclassname="active">
            <Button style={navigationButton}>Početna</Button>
          </NavLink>
          <NavLink
            to="/galerija"
            style={navigationLink}
            activeclassname="active"
          >
            <Button style={navigationButton}>Galerija</Button>
          </NavLink>
          <NavLink
            to="/kontakt"
            style={navigationLink}
            activeclassname="active"
          >
            <Button style={navigationButton}>Kontakt</Button>
          </NavLink>
        </Box>
      </Container>
    </AppBar>
  );
}
