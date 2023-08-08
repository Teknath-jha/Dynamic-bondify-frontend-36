import React from "react";
import "./CSS/Fotter.css";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="midFooter">
                <p>Copyrights {new Date().getFullYear()} &copy; Team 36</p>
            </div>

        </footer>
    );
};

export default Footer;