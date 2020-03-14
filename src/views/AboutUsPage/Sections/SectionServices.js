import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(productStyle);

export default function SectionServices(props) {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer>
        <GridItem xs={12} sm={4} md={4}>
          <InfoArea
            title={props.t1}
            icon={props.i1}
            iconColor="warning"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
          <InfoArea
            title={props.t2}
            icon={props.i2}
            iconColor="warning"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
          <InfoArea
            title={props.t3}
            icon={props.i3}
            iconColor="warning"
            vertical
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
