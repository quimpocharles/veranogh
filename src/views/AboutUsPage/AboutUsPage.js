/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import FitnessCenter from "@material-ui/icons/FitnessCenter";
import LaptopChromebook from "@material-ui/icons/LaptopChromebook";
import Theaters from "@material-ui/icons/Theaters";
import MusicVideo from "@material-ui/icons/MusicVideo";
import Pool from "@material-ui/icons/Pool";
import VideoGameAsset from "@material-ui/icons/VideogameAsset";
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionDescription from "views/AboutUsPage/Sections/SectionDescription.js";
import SectionTeam from "views/AboutUsPage/Sections/SectionTeam.js";
import SectionServices from "views/AboutUsPage/Sections/SectionServices.js";

import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.js";

const useStyles = makeStyles(aboutUsStyle);

export default function AboutUsPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  return (
    <div className="cd-section" {...rest}>
      <Header
        links={<HeaderLinks dropdownHoverColor="dark" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "dark"
        }}
      />
      <Parallax image={require("assets/img/amm.jpg")} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>Ameneties</h1>
              <h5 className={classes.description} style={{ color: "#fff" }}>
                Complementing{" "}
                <strong
                  style={{
                    fontFamily: "Lemon",
                    letterSpacing: "5px",
                    color: "#BB8E34",
                    fontSize: "20px"
                  }}
                >
                  Verano
                </strong>{" "}
                Greenhills{"'"} modern architectural design is the building{"'"}
                s bi-level amenity area. <em>Maaliwalas</em> is a Filipino term
                that connotes openness, refreshing and breathable – is what we
                are creating on the amenity floor. It takes pride in its high
                ceiling and elegant architectural statements that is finished
                with both light and earth tones.
              </h5>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionServices
            t1="Fitness Center"
            i1={FitnessCenter}
            t2="Study Room"
            i2={LaptopChromebook}
            t3="Private Theater"
            i3={Theaters}
          />

          <SectionTeam />

          <SectionServices
            t1="KTV Music Room"
            i1={MusicVideo}
            t2="Game Room"
            i2={VideoGameAsset}
            t3="Pool Area"
            i3={Pool}
          />
        </div>
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
