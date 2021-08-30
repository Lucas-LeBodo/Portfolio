// Import Libs 
import React, { Fragment } from "react";
import {Link} from 'react-router-dom';

const AddButton = ( {name} ) => {

    return (
        <Fragment>
            <div className="btn add-btn">
                <Link to="#">{name}</Link>
            </div>
        </Fragment>
    )
} 
export default AddButton;