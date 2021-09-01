// Import Libs 
import React, { Fragment } from "react";

import Box from "../../Components/Elements/Cadre/box";
import Picture from '../../Components/Elements/About/picture';
const Body = () => {

    return (
        <Fragment>
            <div className="bg-header">
                <div className="fondu"></div>
                <Box/>
            </div>
            <div className="bg-profil">
                <Picture/>
            </div>
            <div className="bg-skill">
                
            </div>
            <div className="bg-project">
                
            </div>
            <div className="bg-contact">
                
            </div>
        </Fragment>
    )
} 
export default Body;