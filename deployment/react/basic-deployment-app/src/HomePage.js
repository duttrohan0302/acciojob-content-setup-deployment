import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return(
        <div>
            <h1>Welcome to the HomePage</h1>
            <h2>Go to <Link to={"/counter"} >Counter</Link></h2>
            <h2>Go to <Link to={"/dummy"} >Dummy Page</Link></h2>
            <h2>Go to <Link to={"/404"} >404</Link></h2>

        </div>
    )
}

export default HomePage;