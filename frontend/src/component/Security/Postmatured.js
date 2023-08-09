import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@material-ui/data-grid";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
  } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import SideBar from "../Admin/Sidebar";
import { getAllUsers, clearErrors} from "../../actions/userAction";
import { DELETE_USER_RESET } from "../../constants/userConstants";

const PostMatured = () => {
    const dispatch = useDispatch();

    const alert = useAlert();

    const navigate = useNavigate();

    const { error, users } = useSelector((state) => state.allUsers);
    const {user} = useSelector((state) => state.user);
    const [feedTable, setFeedTable] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    const {
        error: deleteError,
        isDeleted,
        message,
    } = useSelector((state) => state.profile);

    useEffect(() => {
        console.log("feedTable State Updated:", feedTable);
    
        // Perform actions that rely on the updated feedTable here
        // For example, mapping over the feedTable data, processing it, etc.
    }, [feedTable]);

    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/securities/get/maturing');
                console.log("API Response:", response.data);
                
                setFeedTable(response.data);
                console.log("feedTable State:", feedTable); // Log the feedTable state
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
          
        console.log(feedTable);
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors());
        }

        if (isDeleted) {
            alert.success(message);
            if(user.isAuthenticated==='true')
                navigate("/admin/users");
            else
                navigate("/login");
            dispatch({ type: DELETE_USER_RESET });
        }
        dispatch(getAllUsers());
    }, [dispatch, alert, error,user,deleteError, navigate, isDeleted, message]);

    const handleRowClick = (params) => {
        setSelectedRow(params.row);
        setOpenModal(true);
      };
    
      const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedRow(null);
      };

    const columns = [
        { field: "securityId", headerName: "securityId", minWidth: 170, flex: 0.1,  },

        {
            field: "isin",
            headerName: "isin",
            minWidth: 200,
        },
        {
            field: "cusip",
            headerName: "cusip",
            minWidth: 150,
        },
        {
            field: "issuer",
            headerName: "issuer",
            minWidth: 150,
        },

        {
            field: "maturityDate",
            headerName: "maturityDate",
            minWidth: 150,
        },

        {
            field: "coupon",
            headerName: "coupon",
            minWidth: 150,
        },

        {
            field: "type",
            headerName: "type",
            minWidth: 150,
        },

        {
            field: "faceValue",
            headerName: "faceValue",
            minWidth: 150,
        },

        {
            field: "status",
            headerName: "status",
            minWidth: 150,
        },
    ];

    const securityReason = ["Administrative Oversight","Lack of Funds","Market Volatility",
    "Legal Disputes",
    "Documentation Issues",
    "Operational Delays",
    "Communication Breakdown",
    "Liquidity Challenges",
    "Counterparty Default",
    "Regulatory Compliance"]

   
    return (
        <>
            {/* Conditional rendering */}
            {feedTable.length ? (
                <div className="dashboard">
                    <SideBar />
                    <div className="productListContainer">
                        <h1 id="productListHeading">Security</h1>

                        <DataGrid
                            getRowId={(feedTable) => feedTable.securityId}
                            rows={feedTable}
                            columns={columns}
                            pageSize={6}
                            disableSelectionOnClick
                            className="productListTable"
                            autoHeight
                            onRowClick={handleRowClick}
                        />
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
            {/* End of conditional rendering */}
        </>
    );
};

export default PostMatured;