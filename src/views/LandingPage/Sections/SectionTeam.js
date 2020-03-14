import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// library used for cool animations
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

import contentStyle from "assets/jss/material-kit-pro-react/views/presentationSections/contentStyle.js";
// images
import grandTaipanLogo from "assets/img/gt.png";

const useStyles = makeStyles(contentStyle);

export default function SectionContent() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={4}>
            <div className={classes.sectionDescription}>
              <h3 className={classes.title}>Grand Taipan</h3>
              <h6 className={classes.description}>About the Developer</h6>
              <h5 className={classes.description}>
                Established in 2016, Grand Taipan’s meteoric rise as a real
                estate developer lies in the workforce’s dedication to giving
                Filipinos a better, multifaceted option for quality living.
                Prepared to meet the challenges of a fast-paced metropolitan
                lifestyle, Grand Taipan is committed to providing future- ready
                structures and systems through continuous innovation.The times
                may be changing, but Grand Taipan takes you to an era of urban
                development yet unexplored.
              </h5>
            </div>
          </GridItem>
          <GridItem md={7} className={classes.mlAuto}>
            <div className={classes.imageContainer}>
              {/*              <div className={classes.animeAreaImg}>
                <ScrollAnimation animateIn="fadeInUp">
                  <img
                    src={presentationiPadComments}
                    alt="iPad comments"
                    className={classes.areaImg}
                  />
                </ScrollAnimation>
              </div>
              <div className={classes.animeInfoImg}>
                <ScrollAnimation animateIn="fadeInUp">
                  <img
                    src={presentationiPadTable}
                    alt="iPad table"
                    className={classes.infoImg}
                  />
                </ScrollAnimation>
              </div>
            */}
              <img
                className={classes.ipadImg}
                src={grandTaipanLogo}
                alt="Grand Taipan"
              />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
