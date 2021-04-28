import React from 'react';
import {Link} from "react-router-dom";
import Button from '../Button/Button';
import "./pages.css";

function Start() {
    return (
        <div>
            <div className="container w3-container w3-center w3-animate-opacity">
                <div className="jumbotron">
                    <div className="h1">
                        Monster Hunter Rise Bestiary
                    </div>
                    <div className="h2">
                        Your one-stop-shop for all monster information.
                    </div>
                    <Link to="/menu"
                        className={
                            window.location.pathname === "/menu"
                    }>
                    <Button>
                        Begin
                    </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Start;