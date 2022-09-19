import React from "react";
import { Link } from "react-router-dom";

const DummyComponent = () => {
    return(
        <div>
            <h1>Dummy Page</h1>
            <h2>Go to <Link to={"/"} >Home</Link></h2>
        </div>
    )
}

export default DummyComponent;