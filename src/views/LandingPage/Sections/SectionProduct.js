import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// library used for cool animations
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

// @material-ui/icons
import FormatPaint from "@material-ui/icons/FormatPaint";
import Dashboard from "@material-ui/icons/Dashboard";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import LocationOn from "@material-ui/icons/LocationOn";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.js";

import tower from "assets/img/verano-main2.png";

const useStyles = makeStyles(featuresStyle);

export default function SectionFeatures({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
        {/* Feature 4 START */}
        <div className={classes.features4}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>Urban Luxury Begins Here</h2>
              <h5 className={classes.description}>
                Verano Greenhills is founded in fresh starts; where one good
                thing ends, something better eventually starts. Combining
                modernity and a holistic approach to city living, this
                development embodies the daily staycation you wish you could
                come home to after a long working day.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={3} className={classes.mlAuto}>
              <ScrollAnimation animateIn="fadeInUp">
                <InfoArea
                  icon={FormatPaint}
                  title="Design and Ambience"
                  description="Verano Greenhills collaborated with Asya Design, the country’s premier architectural firm, and Hirsch Bedner Associates, the world’s top leading hospitality design firm, to bring its vision for a modern, sophisticated residential community to life."
                  iconColor="warning"
                />
                <InfoArea
                  icon={LocationOn}
                  title="Location"
                  description="Located along Annapolis St. near EDSA and Ortigas Avenue, Verano Greenhills makes the daily commute that much easier. CBDs and transport hubs are just a short trip away."
                  iconColor="warning"
                />
              </ScrollAnimation>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={4}>
              <div className={classes.phoneContainer}>
                <img
                  // style={{ height: "120vh" }}
                  src={tower}
                  alt="Verano Luxury Residences"
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={3} className={classes.mrAuto}>
              <ScrollAnimation animateIn="fadeInUp">
                <InfoArea
                  icon={Dashboard}
                  title="Ease and Comfort"
                  description="There are nearby prestigious educational institutions such as Poveda, OB Montessori, Xavier School, Immaculate Conception Academy and La Salle Greenhills. Verano is also located near top medical institutions such as the Medical City and Cardinal Santos Hospital."
                  iconColor="warning"
                />
                <InfoArea
                  icon={ViewCarousel}
                  title="Hotel Amenities"
                  description="Complementing the prime location and modern design, it offers a dual-level amenity deck premium facility that houses a fitness center, pool, study room, mini private theater, game room, function hall and a sky deck."
                  iconColor="warning"
                />
              </ScrollAnimation>
            </GridItem>
          </GridContainer>
        </div>
        {/* Feature 4 END */}
      </div>
    </div>
  );
}
