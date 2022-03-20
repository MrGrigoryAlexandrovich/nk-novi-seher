import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Grid } from "@mui/material";
import AppMenu from "./components/AppMenu";
import Home from "./pages/Home";
import Galerija from "./pages/Galerija";
import Kontakt from "./pages/Kontakt";
import Footer from "./components/Footer";

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <AppMenu />
        <Grid container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galerija" element={<Galerija />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </Grid>
      </Router>
      <Footer />
    </React.Fragment>
  );
}
