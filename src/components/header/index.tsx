import "./header.scss";
import COJLogo from "../../img/logo.svg";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header flex flex-row justify-center overflow-hidden bg-blue-600">
            <div className="flex flex-col items-center justify-center">
                <Link to={"/"}>
                    <img
                        src={COJLogo}
                        className="logo inline-block"
                        alt="logo"
                    />
                </Link>

                <div className="slogan font-bold italic text-white">
                    Thinking better!
                </div>
            </div>
            <div>
                <div className="i18n text-right">
                    {/* TODO remake using i18n next */}
                    <a className="NotoColorEmoji" href="/?lang=en">
                        🇺🇸
                    </a>{" "}
                    <a className="NotoColorEmoji" href="/?lang=es">
                        🇪🇸
                    </a>
                </div>
            </div>
        </div>
    );
}
