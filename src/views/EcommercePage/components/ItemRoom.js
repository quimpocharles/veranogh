import React from "react";

// core components

import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui icons
import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/latestOffersStyle.js";

// images
import floorPlan from "assets/img/floorplan.png";

const useStyles = makeStyles(styles);

const Room = props => {
	const classes = useStyles();
	return (
		<GridItem md={props.size} sm={props.size}>
			<Card
				product
				plain
				style={{
					height: "500px"
				}}
			>
				<CardHeader image plain>
					<Link to={"/unit/" + props.id}>
						<img
							style={{
								height: props.height
							}}
							src={floorPlan}
							alt="..."
						/>
					</Link>
					<div className={classes.coloredShadow} />
				</CardHeader>
				<CardBody className={classes.textCenter} plain>
					<h4 className={classes.cardTitle}>{props.title}</h4>
				</CardBody>
				<CardFooter plain>
					<Link
						to={"/unit/" + props.id}
						style={{
							width: "100%"
						}}
					>
						<Button block color="warning">
							View Details
						</Button>
					</Link>
				</CardFooter>
			</Card>
		</GridItem>
	);
};

export default Room;
