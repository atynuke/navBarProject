import "./Navbar.css"
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {

    return (
        <>
            <div className="Container">
                <span id="logo">Logo</span>


                <div className="logged">
                    <Link to={"/logIn"} >
                        <button id="Btn">Log In</button>
                    </Link>
                    <Link to={"/logout"}>
                        <button id="Btn">Log Out</button>
                    </Link>

                </div>

                <div className="nav">

                    <Link to={"/"} style={{ textDecoration: "none" }}>
                        <div className="link">Home</div>
                    </Link >

                    <NavLink to={"/about"} style={{ textDecoration: "none" }}>
                        <div className="link">About</div>
                    </NavLink>

                    <Link to={"/Contact"} style={{ textDecoration: "none" }}>
                        <div className="link">Contact</div>
                    </Link>

                    <Link to={"/signupform"} >
                        <div className="link">Form</div>
                    </Link>

                    <Link to={"/Settings"} style={{ textDecoration: "none" }}>
                        <div className="link">Settings</div>
                    </Link>


                </div>
            </div>
        </>
    );
}

