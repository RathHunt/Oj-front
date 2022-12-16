import React from "react";
import { Link } from "react-router-dom";
import './footer.scss'

export default function Footer() {
    /* TODO make footer */
    return (
        <div className="footer flex  justify-center overflow-hidden bg-blue-600">
            <div>
                <p >
                    <a href="ipvce.lt.rimed.cu">IPVCE Luis Urquiza Jorge</a>
                    <br />
                    2022 | COJ reborn v1.0
                    <br />
                    In case of any question or comment, please{" "}
                    <Link to={"about"}>
                        <u>contact us</u>
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
}
