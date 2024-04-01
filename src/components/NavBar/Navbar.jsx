import "./Navbar.css"
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {

    return (
        <>
            <div className="Container">
                <span ><button id="logo">Logo</button></span>


                <div className="logged"  style={{ display: 'flex' }}>
                   
                    <Link to={"/"} style={{ textDecoration: "none" }}>
                        <button className="link">Home </button>
                    </Link >

                    <NavLink to={"/about"} style={{ textDecoration: "none" }}>
                        <button className="link">About</button >
                    </NavLink>

                    <Link to={"/Contact"} style={{ textDecoration: "none" }}>
                        <button className="link">Contact</button >
                    </Link>

                    <Link to={"/Settings"} style={{ textDecoration: "none" }}>
                        <button  className="link">Settings</button >
                    </Link>

                </div>

                <div className="nav">


                    <Link to={"/signupform"} >
                        <button  className="link">Log In</button >
                    </Link>

                    <Link to={"/logout"}>
                        <button id="Btn">Log Out</button>
                    </Link>

                </div>
            </div>
        </>
    );
}

