import React, { useEffect } from 'react';
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';

import { useSelector, useDispatch } from "react-redux";
import { getSecurity } from "../../actions/tradeAction";
import MetaData from "../layout/MetaData";
import Sidebar from "./Sidebar.js";
import { getAllUsers } from '../../actions/userAction';
import "./CSS/Dashboard/Dashboard.css";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const Dashboard = () => {

    const dispatch = useDispatch();

    const { products,productsCount } = useSelector((state) => state.trades);
    const { users } = useSelector((state) => state.allUsers);


    useEffect(() => {
        dispatch(getSecurity());
        dispatch(getAllUsers());
    }, [dispatch]);


    return (
        <div className='dashboard'>
            <MetaData title="Dashboard" />
            <Sidebar />

            <div className="dashboardContainer">

                <div className="dashboardSummaryBox2">
                    <Link to="/admin/securities">
                        <p>Post maturity</p>
                        <p>{products && productsCount}</p>
                    </Link>
                    <Link to="/admin/users">
                        <p>Incomplete</p>
                        <p>{users && users.length }</p>
                    </Link>
                    <Link to="/admin/users">
                        <p>Completed</p>
                        <p>{users && users.length }</p>
                    </Link>
                    <br></br>
                    <p>table 1 n 2</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
