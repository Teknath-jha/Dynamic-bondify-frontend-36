import axios from "axios";
import React, { useEffect,useState } from "react";
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
  } from '@mui/material';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import SideBar from "../Admin/Sidebar";
import { getAllUsers, clearErrors } from "../../actions/userAction";
import { DELETE_USER_RESET } from "../../constants/userConstants";
import { DataGrid } from "@material-ui/data-grid";

const Trade = () => {
    const dispatch = useDispatch();

    const alert = useAlert();
    const navigate = useNavigate();
    const { error, users } = useSelector((state) => state.allUsers);
    const { user } = useSelector((state) => state.user);

    const {
        error: deleteError,
        isDeleted,
        message,
    } = useSelector((state) => state.profile);

    const [feedTable, setFeedTable] = useState([]);
    const [inner, setInner] = useState([]);
    const [selectedRowId, setSelectedRowId] = useState();
    const [openModal, setOpenModal] = useState(false);

    // useEffect(async (state) =>{
    //    console.log("this is feed table  ", feedTable);
    // }, feedTable)

    useEffect(async () => {

        // axios.get('http://localhost:8080/api/v1/trades/get')
        fetch('http://localhost:8080/api/v1/trades/get')
        .then(response => response.json())
        .then(data => {
          setFeedTable(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
        
        
        console.log("feedTable   ", feedTable);

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
            if (user.isAuthenticated === 'true')
                navigate("/admin/users");
            else
                navigate("/login");
            dispatch({ type: DELETE_USER_RESET });
        }
        // dispatch(getAllUsers());
    }, [dispatch, alert, error, user, deleteError, navigate, isDeleted, message]);

  
    const handleRowClick = (params) => {
        setSelectedRowId(params.row.securityId);
       

        // axios.get('http://localhost:8080/api/v1/trades/get')
        fetch(`http://localhost:8080/api/v1/securities/get?securityId=${params.row.securityId}`)
        .then(response => response.json())
        .then(data => {
          setInner(data);
          console.log("Response : "+data);
          console.log("Inner : "+inner);
          console.log("Data : "+data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
        setOpenModal(true);
      };
    
      const handleCloseModal = () => {
        setOpenModal(false);
        // setSelectedRowId(null);
      };
    const columns = [
        { field: "tradeId", headerName: "tradeId", minWidth: 170, flex: 0.1,  },

        {
            field: "bookId",
            headerName: "bookId",
            minWidth: 200,
        },
        {
            field: "counterpartyId",
            headerName: "counterpartyId",
            minWidth: 150,
        },
        {
            field: "securityId",
            headerName: "securityId",
            minWidth: 150,
        },

        {
            field: "quantity",
            headerName: "quantity",
            minWidth: 150,
        },

        {
            field: "status",
            headerName: "status",
            minWidth: 150,
        },

        {
            field: "price",
            headerName: "price",
            minWidth: 150,
        },

        {
            field: "buy_sell",
            headerName: "buy_sell",
            minWidth: 150,
        },

        {
            field: "tradeDate",
            headerName: "tradeDate",
            minWidth: 150,
        },
        {
            field: "settlementDate",
            headerName: "settlementDate",
            minWidth: 150,
        },
    ];


   
    return (
        <>
            <MetaData title={`Security`} />

            <div className="dashboard">
                <SideBar />
                <div className="productListContainer">
                    <h1 id="productListHeading">Security</h1>

                    <DataGrid
                    getRowId={(feedTable) => feedTable.tradeId}
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
            <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Post Matured Security Reason</DialogTitle>
        <DialogContent>
          {selectedRowId && (
            <div>
              {Object.entries(inner[0]).map(([key, value]) => (
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

export default Trade;