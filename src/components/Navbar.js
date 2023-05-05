import React from "react";
import image from '../images/al3-logo-01.png'

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    color: "black",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "#f79f46",
      borderBottom: "1px solid black",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{ background: '#fff' }} className="pb-2">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          <img src={image} alt="logo" />
        </Typography>
          <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
            </Link>
          <Link to="/pricing" className={classes.link}>
            Pricing
            </Link>
            <Link to="/signin" className={classes.link}>
              SignIn
            </Link>
            
            <Link to="/contactus" className={classes.link}>
            Contact Us
            </Link>
            <Link to="/Cart" className={classes.link}>
            </Link>

          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;