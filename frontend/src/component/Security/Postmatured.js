import React, { useEffect, useState } from "react";
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
    const [selectedRow, setSelectedRow] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    const {
        error: deleteError,
        isDeleted,
        message,
    } = useSelector((state) => state.profile);

    useEffect(() => {
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
        { field: "id", headerName: "ID", minWidth: 170, flex: 0.1,  },

        {
            field: "ISIN",
            headerName: "ISIN",
            minWidth: 200,
        },
        {
            field: "CUSIP",
            headerName: "CUSIP",
            minWidth: 150,
        },
        {
            field: "Issuer",
            headerName: "Issuer",
            minWidth: 150,
        },

        {
            field: "MaturityDate",
            headerName: "MaturityDate",
            minWidth: 150,
        },

        {
            field: "Coupon",
            headerName: "Coupon",
            minWidth: 150,
        },

        {
            field: "Type",
            headerName: "Type",
            minWidth: 150,
        },

        {
            field: "FaceValue",
            headerName: "FaceValue",
            minWidth: 150,
        },

        {
            field: "Status",
            headerName: "Status",
            minWidth: 150,
        },
    ];

    const rows = [
        {"id":1, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"pending"},
        {"id":2, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"pending"},
        {"id":3, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"pending"},
        {"id":4, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"pending"},
        {"id":5, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"pending"},
        {"id":6, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"pending"}
    ]

    // users &&
    //     users.forEach((item) => {
    //         rows.push({
    //             id: item._id,
    //             role: item.role,
    //             email: item.email,
    //             phone:item.phone,
    //             name: item.name,
    //         });
    //     });

    return (
        <>
            <MetaData title={`Security`} />

            <div className="dashboard">
                <SideBar />
                <div className="productListContainer">
                    <h1 id="productListHeading">Security</h1>

                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={6}
                        disableSelectionOnClick
                        className="productListTable"
                        autoHeight
                        onRowClick={handleRowClick}
                    />
                </div>
            </div>
            <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Post Matured Security Reason</DialogTitle>
        <DialogContent>
          {selectedRow && (
            <div>
              {Object.entries(selectedRow).map(([key, value]) => (
                <div key={key}>
                  <strong>{key}:</strong> {value}
                </div>
              ))}
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
          </DialogActions>
      </Dialog>
        </>
    );
};

export default PostMatured;