import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function HomeComponent(props) {

  return (
      <Fragment>
          <div className="nav">
            <Link to={"/peoples"}> People </Link>
            <Link to={"/starships"}> StarShip </Link>
          </div>
      </Fragment>
  );
}

export default HomeComponent;