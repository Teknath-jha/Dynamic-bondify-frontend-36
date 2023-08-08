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
import DashboardTables from './DashboardTables';

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

    const securites = [
        {"id":1, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"completed"},
        {"id":2, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"completed"},
        {"id":3, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"completed"},
        {"id":4, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"pending"},
        {"id":5, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"pending"}
    ]

    const postMatured =[
        {"id":1, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"pending"},
        {"id":2, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"pending"},
        {"id":3, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"pending"},
        {"id":4, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"pending"},
        {"id":5, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"pending"}
    ]

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
                    
                </div>
                <div>
                    <DashboardTables postMaturedData={postMatured} securitiesData={securites}/>
                </div>
            </div>

        </div>
    );
}

export default Dashboard;
