import React, { useEffect, useState } from "react";
import { Navbar, Dropdown, Avatar, Button } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";

export default function RenderNavBar() {
    let user = JSON.parse(sessionStorage.getItem("user"));

    const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 768);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <div>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="/">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        {isDesktop ? "Caribbean Online Judge" : "COJ"}
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    {!user ? (
                        <Button.Group>
                            <Button color="gray">
                                <Link to={"/login"}>Login</Link>
                            </Button>
                            <Button color="gray">
                                <Link to={"/register"}>Register</Link>
                            </Button>
                        </Button.Group>
                    ) : (
                        <Dropdown
                            arrowIcon={false}
                            inline={true}
                            label={
                                <Avatar
                                    alt="User settings"
                                    img={user.profilePicture}
                                    rounded={true}
                                />
                            }
                        >
                            <Dropdown.Header>
                                <span className="block text-sm">
                                    {user.username}
                                </span>
                            </Dropdown.Header>
                            <Dropdown.Item>Dashboard</Dropdown.Item>
                            <Dropdown.Item>Settings</Dropdown.Item>
                            <Dropdown.Item>Earnings</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Sign out</Dropdown.Item>
                        </Dropdown>
                    )}

                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/problems"}>Problems</NavLink>
                    <NavLink to={"/contests"}>Contests</NavLink>
                    <NavLink to={"/guides"}>Guides</NavLink>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
