/*eslint-disable*/ import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Layers from "@material-ui/icons/Layers";

import { Link } from "react-router-dom";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.js";

// Sections for this page
import SectionProduct from "./Sections/SectionProduct.js";
import SectionTeam from "./Sections/SectionTeam.js";
import SectionWork from "./Sections/SectionWork.js";

const useStyles = makeStyles(landingPageStyle);

export default function LandingPage({ ...rest }) {
  // React.useEffect(() => {
  //   window.scrollTo(0, 0);
  //   document.body.scrollTop = 0;
  // });
  const classes = useStyles();
  return (
    <div>
      <Header
        color="transparent"
        links={<HeaderLinks dropdownHoverColor="dark" />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "dark"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/veranoLobby.jpg")} filter="dark">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title} style={{ fontFamily: "Lemon" }}>
                Your new home in Greenhills awaits.
              </h1>
              <h4>
                Urban luxury begins here. Think hotel amenities in a premium
                central city home, and you have Verano Greenhills.
              </h4>
              <br />
              <Link to="/units">
                <Button color="warning" size="lg">
                  <Layers className={classes.icon} />
                  VIEW THE FLOORPLAN
                </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionProduct />
          <SectionTeam />
        </div>
        <SectionWork />
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}></div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , Let{"'"}s make websites
              great again.{" "}
              <span className="cqBrand">
                <a
                  href="https://www.linkedin.com/in/charlesquimpo"
                  target="_blank"
                >
                  CQ Studios
                </a>
              </span>
            </div>
          </div>
        }
      />
    </div>
  );
}
