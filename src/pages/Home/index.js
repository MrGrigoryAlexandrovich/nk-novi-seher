import React from "react";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Star } from "@mui/icons-material/";
import { makeStyles } from "@mui/styles";
import GridItemAvatar from "../../components/GridItemAvatar";

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 32,
  },
  title: {
    color: "white",
    paddingLeft: 15,
  },
  info: {
    paddingTop: 25,
    paddingLeft: 15,
    color: "white",
  },
  icon: {
    color: "white",
  },
  selekcije: {
    color: "white",
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <GridItemAvatar />
      <Grid item md={6} xs={12}>
        <Typography
          variant="h5"
          className={classes.title}
          sx={{
            paddingTop: {
              md: 17,
            },
          }}
        >
          Nogometni Klub Novi Šeher
        </Typography>
        <Typography variant="body1" className={classes.info}>
          Osnovne informacije
        </Typography>
        <Typography
          variant="body2"
          className={classes.info}
          sx={{
            width: {
              md: 600,
              xs: 370,
            },
          }}
        >
          Nogometni Klub Novi Šeher je amaterski fudbalski/nogometni klub iz
          Novog Šehera,Bosna i Hercegovina.Takmiči se u kantonalnoj ligi ZDK
          (četvrta liga).N.K. Novi Šeher je osnovan 1964 godine i svoje domaće
          utakmice igra na stadionu " Pod Lipićem". Trenutni predsjednik kluba
          je Emrah Đuhera. Boje kluba su bijela i plava. Navijači N.K. Novog
          Šehera su popularni "Lipićari".
        </Typography>

        <Typography variant="body1" className={classes.info}>
          Selekcije
        </Typography>
        <List className={classes.selekcije}>
          <ListItem>
            <ListItemIcon>
              <Star className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Kadeti" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Star className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Juniori" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Star className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Seniori" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
