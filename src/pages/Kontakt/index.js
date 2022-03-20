import React from "react";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  FacebookOutlined,
  Instagram,
  MailOutlineOutlined,
  LocalPhoneOutlined,
  PhoneAndroidOutlined,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import GridItemAvatar from "../../components/GridItemAvatar";

const useStyles = makeStyles(() => ({
  list: {
    color: "white",
    left: 30,
    maxWidth: 350,
  },
  icon: {
    paddingLeft: 20,
    color: "white",
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <Grid container>
      <GridItemAvatar />
      <Grid item md={6} xs={12}>
        <Typography
          variant="h4"
          sx={{
            color: "white",
            paddingTop: {
              md: 24,
            },
            paddingLeft: {
              xs: 8,
            },
          }}
        >
          Kontaktirajte nas
        </Typography>

        <List className={classes.list}>
          <ListItem
            button
            component="a"
            href="https://www.facebook.com/nkns1964"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ListItemIcon>
              <FacebookOutlined className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Facebook" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://www.instagram.com/nkns1964/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ListItemIcon>
              <Instagram className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Instagram" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MailOutlineOutlined className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="nknoviseher@gmail.com" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LocalPhoneOutlined className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="+387 32 611 803" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PhoneAndroidOutlined className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              primary="+387 62 231 199
"
            />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
