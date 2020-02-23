import React from "react";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui icons
import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/latestOffersStyle.js";

// images

// components
import Room from "../components/ItemRoom";

const useStyles = makeStyles(styles);

export default function SectionLatestOffers() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>Low Zone</h2>
        <h4>Levels 26-45</h4>
        <GridContainer>
          <Room title="Studio" height="350px" size={4} id="studioLow" />
          <Room title="One Bedroom" height="350px" size={4} id="oneBedLow" />
          <Room title="Two Bedroom" height="350px" size={4} id="twoBedLow" />
        </GridContainer>

        <h2>High Zone</h2>
        <h4>Levels 46-55</h4>
        <GridContainer>
          <Room title="Studio" height="350px" size={3} id="studioHigh" />
          <Room title="One Bedroom" height="350px" size={3} id="oneBedHigh" />
          <Room title="Two Bedroom" height="350px" size={3} id="twoBedHigh" />
          <Room
            title="Three Bedroom"
            height="350px"
            size={3}
            id="threebedHigh"
          />
        </GridContainer>

        <h2>Penthouse</h2>
        <h4>Levels 56-57</h4>
        <GridContainer>
          <GridItem xs={0} sm={1} md={1}></GridItem>
          <Room title="Three Bedroom Penthouse" height="350px" size={5} />
          <Room title="Four Bedroom Penthouse" height="350px" size={5} />
        </GridContainer>
      </div>
    </div>
  );
}
