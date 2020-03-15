import React from "react";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui icons
// import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/latestOffersStyle.js";
import pillsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/pillsStyle.js";

// images

// components
import Room from "../components/ItemRoom";
import Floors from "../components/Floors";

import lowZone from "assets/img/low-opt.jpg";
import highZone from "assets/img/high-opt.jpg";
import penthouse from "assets/img/pent-opt.jpg";

const useStyles = makeStyles(pillsStyle);
// const useStyles = makeStyles(styles);

export default function SectionLatestOffers() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer alignItems="center" justify="center">
          <GridItem xs={12} md={10}>
            <NavPills
              alignCenter
              color="warning"
              tabs={[
                {
                  tabButton: "Low Zone",
                  tabContent: (
                    <Floors
                      image={lowZone}
                      size={4}
                      title="Levels 26-45"
                      floor="low"
                    />
                  )
                },
                {
                  tabButton: "High Zone",
                  tabContent: (
                    <Floors
                      image={highZone}
                      size={3}
                      title="Levels 46-55"
                      floor="high"
                    />
                  )
                },
                {
                  tabButton: "Penthouse",
                  tabContent: (
                    <Floors
                      image={penthouse}
                      size={6}
                      title="Levels 56-57"
                      floor="pent"
                    />
                  )
                }
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );

  // return (
  //   <div className={classes.section}>
  //     <div className={classes.container}>
  //       <h2>Low Zone</h2>
  //       <h4>Levels 26-45</h4>
  //       <GridContainer>
  //         {/*          <Room title="Studio" height="350px" size={4} id="studioLow" />
  //         <Room title="One Bedroom" height="350px" size={4} id="oneBedLow" />
  //         <Room title="Two Bedroom" height="350px" size={4} id="twoBedLow" /> */}
  //       </GridContainer>

  //       <h2>High Zone</h2>
  //       <h4>Levels 46-55</h4>
  //       <GridContainer>
  //         {          <Room title="Studio" height="350px" size={3} id="studioHigh" />
  //         <Room title="One Bedroom" height="350px" size={3} id="oneBedHigh" />
  //         <Room title="Two Bedroom" height="350px" size={3} id="twoBedHigh" />
  //         <Room
  //           title="Three Bedroom"
  //           height="350px"
  //           size={3}
  //           id="threebedHigh"
  //         /> }
  //       </GridContainer>

  //       <h2>Penthouse</h2>
  //       <h4>Levels 56-57</h4>
  //       <GridContainer>
  //         <GridItem xs={0} sm={1} md={1}></GridItem>
  //         <Room title="Three Bedroom Penthouse" height="350px" size={5} />
  //         <Room title="Four Bedroom Penthouse" height="350px" size={5} />
  //       </GridContainer>
  //     </div>
  //   </div>
  // );
}
