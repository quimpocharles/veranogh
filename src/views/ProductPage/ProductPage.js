/*eslint-disable*/
import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ArrowBack from "@material-ui/icons/ArrowBack";

// @material-ui/icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import LocalShipping from "@material-ui/icons/LocalShipping";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import AccountCircle from "@material-ui/icons/AccountCircle";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import Accordion from "components/Accordion/Accordion.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Tooltip from "@material-ui/core/Tooltip";

import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.js";

// images
import product1 from "assets/img/room.jpg";
import product2 from "assets/img/studio2.jpeg";
import product3 from "assets/img/studio3.jpeg";
import product4 from "assets/img/veranoLobby.jpg";

const useStyles = makeStyles(productStyle);

export default function ProductPage(props) {
  const [colorSelect, setColorSelect] = React.useState("0");
  const [sizeSelect, setSizeSelect] = React.useState("0");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [area, setArea] = useState("");
  const classes = useStyles();

  let roomTitle;
  let roomDescription;
  let room;

  console.log(props.match.params.id);

  if (props.match.params.id === "studioLow") {
    roomTitle = "Studio";
    roomDescription = [
      "Living/Dining : 5.38sqm",
      "Kitchen/Hallway : 6.85sqm",
      "Bedroom : 10.28sqm",
      "Common Toilet and Batch : 4.24sqm",
      "Total Area: 26.75sqm",
      "View: Manila Bay",
      "Unit E - 25.33sqm",
      "Unit H - 25.26sqm",
      "Unit I - 25.17sqm",
      "Unit J - 25.17sqm",
      "Unit K - 24.87sqm",
      "Unit M - 27.30sqm",
      "Unit P - 26.74sqm"
    ];

    room = roomDescription.map(oneRoom => {
      return <p>{oneRoom}</p>;
    });
  }

  const images = [
    {
      original: product3,
      thumbnail: product3
    },
    {
      original: product3,
      thumbnail: product3
    },
    {
      original: product3,
      thumbnail: product3
    },
    {
      original: product3,
      thumbnail: product3
    }
  ];
  return (
    <div className={classes.productPage}>
      <Header
        links={<HeaderLinks dropdownHoverColor="dark" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 100,
          color: "dark"
        }}
      />
      <Parallax
        image={require("assets/img/room.jpg")}
        filter="dark"
        className={classes.pageHeader}
      ></Parallax>
      <div className={classNames(classes.section, classes.sectionGray)}>
        <div className={classes.container}>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <GridContainer>
              <GridItem md={6} sm={6} vertical>
                <ImageGallery
                  showFullscreenButton={false}
                  showPlayButton={false}
                  startIndex={3}
                  items={images}
                />
              </GridItem>
              <GridItem md={6} sm={6}>
                <h2 className={classes.title}>{roomTitle}</h2>
                <Accordion
                  active={0}
                  activeColor="warning"
                  collapses={[
                    {
                      title: "Unit A",
                      content: (
                        <ul>
                          <li>Living/Dining : 5.38sqm</li>
                          <li>Kitchen/Hallway : 6.85sqm</li>
                          <li>Bedroom : 10.28sqm</li>
                          <li>Common Toilet and Batch : 4.24sqm</li>
                          <li>Total Area: 26.75sqm</li>
                          <li>View: Manila Bay</li>
                        </ul>
                      )
                    },
                    {
                      title: "Unit E",
                      content: (
                        <ul>
                          <li>Living/Bedroom : 11.64sqm</li>
                          <li>Kitchen : 5.37sqm</li>
                          <li>Dining : 4.88sqm</li>
                          <li>Common Toilet and Batch : 3.44sqm</li>
                          <li>Total Area: 25.33sqm</li>
                          <li>View: Quezon City</li>
                        </ul>
                      )
                    },
                    {
                      title: "Unit H",
                      content: (
                        <ul>
                          <li>Living/Bedroom : 9.30sqm</li>
                          <li>Kitchen/Hallway : 5.08sqm</li>
                          <li>Dining : 7.38sqm</li>
                          <li>Common Toilet and Batch : 3.51sqm</li>
                          <li>Total Area: 25.27sqm</li>
                          <li>View: Sierra Madre</li>
                        </ul>
                      )
                    },
                    {
                      title: "Unit I",
                      content: (
                        <ul>
                          <li>Living/Bedroom : 9.57sqm</li>
                          <li>Kitchen/Hallway : 5.53sqm</li>
                          <li>Dining : 6.66sqm</li>
                          <li>Common Toilet and Batch : 3.41sqm</li>
                          <li>Total Area: 25.17sqm</li>
                          <li>View: Sierra Madre</li>
                        </ul>
                      )
                    },
                    {
                      title: "Unit J",
                      content: (
                        <ul>
                          <li>Living/Bedroom : 9.16sqm</li>
                          <li>Kitchen/Hallway : 5.55sqm</li>
                          <li>Dining : 7.05sqm</li>
                          <li>Common Toilet and Batch : 3.41sqm</li>
                          <li>Total Area: 25.17sqm</li>
                          <li>View: Sierra Madre</li>
                        </ul>
                      )
                    },
                    {
                      title: "Unit M",
                      content: (
                        <ul>
                          <li>Living/Bedroom : 8.91sqm</li>
                          <li>Kitchen/Hallway : 5.08sqm</li>
                          <li>Dining : 8.55sqm</li>
                          <li>Common Toilet and Batch : 3.54sqm</li>
                          <li>Accu Deck : 1.22sqm</li>
                          <li>Total Area: 27.30sqm</li>
                          <li>View: Ortigas</li>
                        </ul>
                      )
                    },
                    {
                      title: "Unit P",
                      content: (
                        <ul>
                          <li>Bedroom : 10.27sqm</li>
                          <li>Living/Dining : 5.61sqm</li>
                          <li>Kitchen/Hallway : 6.77sqm</li>
                          <li>Common Toilet and Batch : 4.09sqm</li>
                          <li>Total Area: 26.74sqm</li>
                          <li>View: Manila Bay</li>
                        </ul>
                      )
                    }
                  ]}
                />
                <GridContainer className={classes.pullRight}>
                  <Link to="/units">
                    <Button color="secondary" className={classes.floatRight}>
                      <ArrowBack />
                      Browse More Units
                    </Button>
                  </Link>
                  <HashLink to="/#contact">
                    <Button color="warning" className={classes.navButton}>
                      <AccountCircle className={classes.icons} /> TALK WITH A
                      PROPERTY MANAGER
                    </Button>
                  </HashLink>
                </GridContainer>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
