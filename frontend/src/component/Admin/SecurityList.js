import axios from "axios"
import React, { useEffect,useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import SideBar from "../Admin/Sidebar";
import { getAllUsers, clearErrors} from "../../actions/userAction";
import { DELETE_USER_RESET } from "../../constants/userConstants";

const SecurityList = () => {
    const dispatch = useDispatch();

    const alert = useAlert();

    const navigate = useNavigate();

    const { error, users } = useSelector((state) => state.allUsers);
    const {user} = useSelector((state) => state.user);

    const [feedTable, setFeedTable] = useState([]);

    const {
        error: deleteError,
        isDeleted,
        message,
    } = useSelector((state) => state.profile);

    useEffect(async () => {
        axios.get('http://localhost:8080/api/v1/securities/get')
          .then(response => {
            setFeedTable(response.data);
            console.log(response);
            console.log(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
          
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
            headerName: "Coupon",
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

    // const rows = [
    //     {"id":1, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"completed"},
    //     {"id":2, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"completed"},
    //     {"id":3, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"completed"},
    //     {"id":4, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"pending"},
    //     {"id":5, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"pending"},
    //     {"id":6, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"pending"},
    //     {"id":7, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"pending"},
    //     {"id":8, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"completed"},
    //     {"id":9, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"completed"},
    //     {"id":10, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"completed"},
    //     {"id":11, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"completed"},
    //     {"id":12, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"completed"}
    
    // ]


    return (
        <>
            <MetaData title={`Security`} />

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
                        checkboxSelection
                    />
                </div>
            </div>
        </>
    );
};

export default SecurityList;