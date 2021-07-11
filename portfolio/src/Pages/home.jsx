import React, { useState, useEffect, Fragment } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';


// Components 
import About from '../Components/about';


function Home(props) {

  return (
      <Fragment>
          <div className="nav">
            <AnchorLink href={"#About"}> A propos de moi </AnchorLink>
          </div>
          <About />
      </Fragment>
  );
}

export default Home;