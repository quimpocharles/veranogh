import React from "react";
import { SideBySideMagnifier } from "react-image-magnifiers";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Layers from "@material-ui/icons/Layers";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";

import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.js";

import lowZone from "assets/img/low-opt.jpg";

const useStyles = makeStyles(featuresStyle);

const Floors = ({ ...rest }) => {
	const classes = useStyles();
	return (
		<div className="cd-section" {...rest}>
			<div className={classes.container}>
				{/* Feature 3 START */}
				<div className={classes.features3}>
					<GridContainer alignItems="center">
						<GridItem xs={12} sm={6} md={6}>
							<div className={classes.phoneContainer}>
								<SideBySideMagnifier
									imageSrc={lowZone}
									imageAlt="Example"
									transitionSpeedInPlace={0.6}
								/>
							</div>
						</GridItem>
						<GridItem xs={12} sm={6} md={6}>
							<h2 className={classes.title}>Levels 26-45</h2>
							<InfoArea
								className={classes.infoArea}
								icon={Layers}
								title="Choose a Unit"
								iconColor="warning"
							/>
							<GridContainer>
								<GridItem xs={4}>
									<Card profile plain>
										<CardAvatar
											profile
											plain
											style={{
												backgroundColor: "#e6c286",
												height: "50px",
												width: "50px"
											}}
										></CardAvatar>
										<CardBody plain>
											<h4>Studio</h4>
										</CardBody>
									</Card>
								</GridItem>
								<GridItem xs={4}>
									<Card profile plain>
										<CardAvatar
											profile
											plain
											style={{
												backgroundColor: "#8fc5e1",
												height: "50px",
												width: "50px"
											}}
										></CardAvatar>
										<CardBody plain>
											<h4>1-BR</h4>
										</CardBody>
									</Card>
								</GridItem>
								<GridItem xs={4}>
									<Card profile plain>
										<CardAvatar
											profile
											plain
											style={{
												backgroundColor: "#c7da98",
												height: "50px",
												width: "50px"
											}}
										></CardAvatar>
										<CardBody plain>
											<h4>2-BR</h4>
										</CardBody>
									</Card>
								</GridItem>
							</GridContainer>
						</GridItem>
					</GridContainer>
				</div>
				{/* Feature 3 END */}
			</div>
		</div>
	);
};

export default Floors;
