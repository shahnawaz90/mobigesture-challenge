import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            <h1>Welcome to Mobigesture</h1>
            <ul>
                <li><Link to={"/countries-user"}>Countries by user</Link></li>
                <li><Link to={"/countries-admin"}>Countries by admin</Link></li>
            </ul>
        </>
    )
}
export default Home;