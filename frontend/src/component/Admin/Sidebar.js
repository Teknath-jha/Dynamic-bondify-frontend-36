import React from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";
import "./CSS/Sidebar/Sidebar.css";


const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/admin/dashboard">
                <p>
                    <DashboardIcon /> Dashboard
                </p>
            </Link>
            <Link to="/admin/postmatured">
                <p>
                    Post matured
                </p>
            </Link>
            <Link to="/securities/get">
                <p>
                    Securities
                </p>
            </Link>
            <Link to="/admin/trades">
                <p>
                 Trade
                </p>
            </Link>
            <Link to="/admin/mysecurities">
                <p>
                 My securities
                </p>
            </Link>
            <Link to="/create/trade">
                <p> Create trade</p>
                    </Link>
            
        </div>
    );
};

export default Sidebar;