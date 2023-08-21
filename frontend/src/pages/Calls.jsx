import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dash from "../components/Calls/Dash";
import Video from "../components/Calls/Video";
import Expired from "../components/Calls/Expired";

const Calls = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/calls" Component={Dash} />
                <Route path="/link-expired" Component={Expired} />
                <Route path="/meeting/:id/:user/:time" Component={Video} />
            </Routes>
        </Router>
    </>

    )
}

export default Calls