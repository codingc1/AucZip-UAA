import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import BuildingItem from "../Buliding/buildingItem";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  tableHeader: {
    fontSize: "2rem",
    textAlign: "left",
  },
});

const BuildingInfo = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.tableHeader}>주목할 투자 상품</div>
      <div>
        {/* <th className={classes.tableHeader}>
          <td>주목할 투자 상품</td>
        </th> */}
        <div>
          <div>
            <BuildingItem
              building={props.buildings[4]}
              key={props.buildings[4].id}
              handleBuildingTitleClick={props.handleBuildingTitleClick}
            />
          </div>
          <div>
            <BuildingItem
              building={props.buildings[3]}
              key={props.buildings[3].id}
              handleBuildingTitleClick={props.handleBuildingTitleClick}
            />
          </div>
          <div>
            <BuildingItem
              building={props.buildings[2]}
              key={props.buildings[2].id}
              handleBuildingTitleClick={props.handleBuildingTitleClick}
            />
          </div>
          <div>
            <BuildingItem
              building={props.buildings[1]}
              key={props.buildings[1].id}
              handleBuildingTitleClick={props.handleBuildingTitleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingInfo;
