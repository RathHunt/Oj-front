import React from "react";
import { Outlet, useNavigation } from "react-router-dom";

import Header from "../components/header";
import RenderNavBar from "../components/navbar";
import Footer from "../components/footer";
import "./root.scss";

function Root() {
    const navigation = useNavigation();
    return (
        <div className="App">
            <Header />
            <div className="document">
                <RenderNavBar />
                <div
                    id="detail"
                    className={navigation.state === "loading" ? "loading" : "" + "body"}
                >
                    <Outlet />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Root;
