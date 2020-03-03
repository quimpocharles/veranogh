import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Gesture from "@material-ui/icons/Gesture";
import Build from "@material-ui/icons/Build";
import AccessTime from "@material-ui/icons/AccessTime";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import servicesStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/servicesStyle.js";

const useStyles = makeStyles(servicesStyle);

export default function SectionServices() {
  const classes = useStyles();
  return (
    <div className={classes.services}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>Smart Luxury</h2>
          <h5 className={classes.description}>
            Verano offers a dual-level amenity deck premium facility that houses
            a fitness center, pool, study room, mini private theater, game room,
            function hall and a sky deck.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="24/7 access"
            description={
              <span>
                <p>
                  High-end equipment right outside your doorstep. Any time of
                  the day.
                </p>
              </span>
            }
            icon={AccessTime}
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="Description 2"
            description={
              <span>
                <p>
                  High-end equipment right outside your doorstep. Any time of
                  the day.
                </p>
              </span>
            }
            icon={Build}
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="Description 3"
            description={
              <span>
                <p>
                  High-end equipment right outside your doorstep. Any time of
                  the day.
                </p>
              </span>
            }
            icon="mode_edit"
            iconColor="rose"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
