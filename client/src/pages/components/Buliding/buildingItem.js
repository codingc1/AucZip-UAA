import React, { Component } from "react";
import { fakedata } from "./fakedata";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 375,
    maxHeight: "100%",
    float: "left",
  },
});

const BuildingItem = (props) => {
  const classes = useStyles();
  return (
    <Link to={"/Bdetail/" + props.building.id}>
      {/* // {"/" + props.building.URL}> */}
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.building.b_location}
            height="140"
            image={`${props.building.image}`}
            title={props.building.b_location}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
              {props.building.b_location}
            </Typography>
            {/* <Typography variant="body2" color="textSecondary" component="p"> */}
            <div variant="body2" color="textSecondary">
              {/* <div>{props.building?.id ? props.building.id : ""}</div> */}
              <Typography>{props.building.b_use}</Typography>
              <Typography
              // onClick={() => {
              //   props.handleBuildingTitleClick(props.building)
              //   console.log(props, 'porps is')
              //   props.history.push("/Bdetail");
              // }}
              >
                {props.building.b_evaluation}
              </Typography>
              <Typography>{props.building.b_location}</Typography>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
    </Link>
  );
};

export default withRouter(BuildingItem);
