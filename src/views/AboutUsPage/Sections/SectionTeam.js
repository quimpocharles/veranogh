import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Share from "@material-ui/icons/Share";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
// core components
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js";

import dg1 from "assets/img/ktv.jpg";
import dg2 from "assets/img/2.jpg";
import dg3 from "assets/img/kidsroom.jpg";
import dg5 from "assets/img/play-room.jpg";
import dg6 from "assets/img/pool.jpg";

const useStyles = makeStyles(headersStyle);

export default function SectionHeaders() {
  const classes = useStyles();

  return (
    // we've set the className to cd-section so we can make smooth scroll to it
    <div className="cd-section">
      {/* HEADER 3 START */}
      <div>
        <Carousel>
          {/* Carousel 1 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${dg1}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={6}
                    md={6}
                    className={classNames(
                      classes.mlAuto,
                      classes.mrAuto,
                      classes.textCenter
                    )}
                  >
                    <h1 className={classes.title}>KTV Music Room</h1>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 1 END */}
          {/* Carousel 2 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${dg2}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={classNames(
                      classes.mlAuto,
                      classes.mrAuto,
                      classes.textCenter
                    )}
                  >
                    <h1 className={classes.title}>Fitness Center</h1>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 2 END */}
          {/* Carousel 3 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${dg3}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={7}
                    md={7}
                    className={classNames(
                      classes.mlAuto,
                      classes.mrAuto,
                      classes.textCenter
                    )}
                  >
                    <h1 className={classes.title}>Kid{"'"}s Play Room</h1>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 3 END */}

          {/* Carousel 5 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${dg6}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={6}
                    md={6}
                    className={classNames(
                      classes.mlAuto,
                      classes.mrAuto,
                      classes.textCenter
                    )}
                  >
                    <h1 className={classes.title}>Pool Area</h1>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 5 END */}

          {/* Carousel 5 START */}
          <div>
            <div
              className={classes.pageHeader}
              style={{ backgroundImage: `url("${dg5}")` }}
            >
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={6}
                    md={6}
                    className={classNames(
                      classes.mlAuto,
                      classes.mrAuto,
                      classes.textCenter
                    )}
                  >
                    <h1 className={classes.title}>Play Room</h1>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
          {/* Carousel 5 END */}
        </Carousel>
      </div>
      {/* HEADER 3 END */}
    </div>
  );
}
