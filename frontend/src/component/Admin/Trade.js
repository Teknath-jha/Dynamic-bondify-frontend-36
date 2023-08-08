import React, { useEffect } from "react";
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
            if (user.isAuthenticated === 'true')
                navigate("/admin/users");
            else
                navigate("/login");
            dispatch({ type: DELETE_USER_RESET });
        }
        dispatch(getAllUsers());
    }, [dispatch, alert, error, user, deleteError, navigate, isDeleted, message]);

    const rows = [
        {
            "id": 1, "BookID": 1, "CounterpartyID": 1, "SecurityID": 10, "Quantity": "3", "Status": "completed", "Price": 88000, "Buy_Sell": "Buy", "TradeDate": "01-01-2023", "SettlementDate": "01-05-2023", "securities": [{ "id": 1, "ISIN": "123456", "CUSIP": "78904563", "Issuer": "Dog", "MaturityDate": "01-01-2023", "Coupon": "hello", "Type": "Government", "FaceValue": "89000", "Status": "completed" },
            { "id": 2, "ISIN": "123456", "CUSIP": "78904563", "Issuer": "Dog", "MaturityDate": "01-01-2023", "Coupon": "hello", "Type": "Government", "FaceValue": "89000", "Status": "completed" }]
        },
        {
            "id": 2, "BookID": 1, "CounterpartyID": 1, "SecurityID": 10, "Quantity": "3", "Status": "completed", "Price": 88000, "Buy_Sell": "Buy", "TradeDate": "01-01-2023", "SettlementDate": "01-05-2023", "securities": [{ "id": 1, "ISIN": "123456", "CUSIP": "78904563", "Issuer": "Dog", "MaturityDate": "01-01-2023", "Coupon": "hello", "Type": "Government", "FaceValue": "89000", "Status": "completed" },
            { "id": 2, "ISIN": "123456", "CUSIP": "78904563", "Issuer": "Dog", "MaturityDate": "01-01-2023", "Coupon": "hello", "Type": "Government", "FaceValue": "89000", "Status": "completed" }]
        },
        {
            "id": 3, "BookID": 1, "CounterpartyID": 1, "SecurityID": 10, "Quantity": "3", "Status": "completed", "Price": 88000, "Buy_Sell": "Buy", "TradeDate": "01-01-2023", "SettlementDate": "01-05-2023", "securities": [{ "id": 1, "ISIN": "123456", "CUSIP": "78904563", "Issuer": "Dog", "MaturityDate": "01-01-2023", "Coupon": "hello", "Type": "Government", "FaceValue": "89000", "Status": "completed" },
            { "id": 2, "ISIN": "123456", "CUSIP": "78904563", "Issuer": "Dog", "MaturityDate": "01-01-2023", "Coupon": "hello", "Type": "Government", "FaceValue": "89000", "Status": "completed" }]
        },
        {
            "id": 4, "BookID": 1, "CounterpartyID": 1, "SecurityID": 10, "Quantity": "3", "Status": "completed", "Price": 88000, "Buy_Sell": "Buy", "TradeDate": "01-01-2023", "SettlementDate": "01-05-2023", "securities": [{ "id": 1, "ISIN": "123456", "CUSIP": "78904563", "Issuer": "Dog", "MaturityDate": "01-01-2023", "Coupon": "hello", "Type": "Government", "FaceValue": "89000", "Status": "completed" },
            { "id": 2, "ISIN": "123456", "CUSIP": "78904563", "Issuer": "Dog", "MaturityDate": "01-01-2023", "Coupon": "hello", "Type": "Government", "FaceValue": "89000", "Status": "completed" }]
        },
        {
            "id": 5, "BookID": 1, "CounterpartyID": 1, "SecurityID": 10, "Quantity": "3", "Status": "completed", "Price": 88000, "Buy_Sell": "Buy", "TradeDate": "01-01-2023", "SettlementDate": "01-05-2023", "securities": [{ "id": 1, "ISIN": "123456", "CUSIP": "78904563", "Issuer": "Dog", "MaturityDate": "01-01-2023", "Coupon": "hello", "Type": "Government", "FaceValue": "89000", "Status": "completed" },
            { "id": 2, "ISIN": "123456", "CUSIP": "78904563", "Issuer": "Dog", "MaturityDate": "01-01-2023", "Coupon": "hello", "Type": "Government", "FaceValue": "89000", "Status": "completed" }]
        },
        {
            "id": 6, "BookID": 1, "CounterpartyID": 1, "SecurityID": 10, "Quantity": "3", "Status": "completed", "Price": 88000, "Buy_Sell": "Buy", "TradeDate": "01-01-2023", "SettlementDate": "01-05-2023", "securities": [{ "id": 1, "ISIN": "123456", "CUSIP": "78904563", "Issuer": "Dog", "MaturityDate": "01-01-2023", "Coupon": "hello", "Type": "Government", "FaceValue": "89000", "Status": "completed" },
            { "id": 2, "ISIN": "123456", "CUSIP": "78904563", "Issuer": "Dog", "MaturityDate": "01-01-2023", "Coupon": "hello", "Type": "Government", "FaceValue": "89000", "Status": "completed" }]
        },
        {
            "id": 7, "BookID": 1, "CounterpartyID": 1, "SecurityID": 10, "Quantity": "3", "Status": "completed", "Price": 88000, "Buy_Sell": "Buy", "TradeDate": "01-01-2023", "SettlementDate": "01-05-2023", "securities": [{ "id": 1, "ISIN": "123456", "CUSIP": "78904563", "Issuer": "Dog", "MaturityDate": "01-01-2023", "Coupon": "hello", "Type": "Government", "FaceValue": "89000", "Status": "completed" },
            { "id": 2, "ISIN": "123456", "CUSIP": "78904563", "Issuer": "Dog", "MaturityDate": "01-01-2023", "Coupon": "hello", "Type": "Government", "FaceValue": "89000", "Status": "completed" }]
        },
        {
            "id": 8, "BookID": 1, "CounterpartyID": 1, "SecurityID": 10, "Quantity": "3", "Status": "completed", "Price": 88000, "Buy_Sell": "Buy", "TradeDate": "01-01-2023", "SettlementDate": "01-05-2023", "securities": [{ "id": 1, "ISIN": "123456", "CUSIP": "78904563", "Issuer": "Dog", "MaturityDate": "01-01-2023", "Coupon": "hello", "Type": "Government", "FaceValue": "89000", "Status": "completed" },
            { "id": 2, "ISIN": "123456", "CUSIP": "78904563", "Issuer": "Dog", "MaturityDate": "01-01-2023", "Coupon": "hello", "Type": "Government", "FaceValue": "89000", "Status": "completed" }]
        },
        {
            "id": 9, "BookID": 1, "CounterpartyID": 1, "SecurityID": 10, "Quantity": "3", "Status": "completed", "Price": 88000, "Buy_Sell": "Buy", "TradeDate": "01-01-2023", "SettlementDate": "01-05-2023", "securities": [{ "id": 1, "ISIN": "123456", "CUSIP": "78904563", "Issuer": "Dog", "MaturityDate": "01-01-2023", "Coupon": "hello", "Type": "Government", "FaceValue": "89000", "Status": "completed" },
            { "id": 2, "ISIN": "123456", "CUSIP": "78904563", "Issuer": "Dog", "MaturityDate": "01-01-2023", "Coupon": "hello", "Type": "Government", "FaceValue": "89000", "Status": "completed" }]
        },
        {
            "id": 10, "BookID": 1, "CounterpartyID": 1, "SecurityID": 10, "Quantity": "3", "Status": "completed", "Price": 88000, "Buy_Sell": "Buy", "TradeDate": "01-01-2023", "SettlementDate": "01-05-2023", "securities": [{ "id": 1, "ISIN": "123456", "CUSIP": "78904563", "Issuer": "Dog", "MaturityDate": "01-01-2023", "Coupon": "hello", "Type": "Government", "FaceValue": "89000", "Status": "completed" },
            { "id": 2, "ISIN": "123456", "CUSIP": "78904563", "Issuer": "Dog", "MaturityDate": "01-01-2023", "Coupon": "hello", "Type": "Government", "FaceValue": "89000", "Status": "completed" }]
        },
        {
            "id": 11, "BookID": 1, "CounterpartyID": 1, "SecurityID": 10, "Quantity": "3", "Status": "completed", "Price": 88000, "Buy_Sell": "Buy", "TradeDate": "01-01-2023", "SettlementDate": "01-05-2023", "securities": [{ "id": 1, "ISIN": "123456", "CUSIP": "78904563", "Issuer": "Dog", "MaturityDate": "01-01-2023", "Coupon": "hello", "Type": "Government", "FaceValue": "89000", "Status": "completed" },
            { "id": 2, "ISIN": "123456", "CUSIP": "78904563", "Issuer": "Dog", "MaturityDate": "01-01-2023", "Coupon": "hello", "Type": "Government", "FaceValue": "89000", "Status": "completed" }]
        },


    ]

    function Row(props) {
        const { row } = props;
        const [open, setOpen] = React.useState(false);

        return (
            <React.Fragment>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <TableCell>
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.id}
                    </TableCell>
                    {/* <TableCell align="right">{row.id}</TableCell> */}
                    <TableCell align="center">{row.BookID}</TableCell>
                    <TableCell align="center">{row.CounterpartyID}</TableCell>
                    <TableCell align="center">{row.SecurityID}</TableCell>
                    <TableCell align="center">{row.Quantity}</TableCell>
                    <TableCell align="center">{row.Status}</TableCell>
                    <TableCell align="center">{row.Price}</TableCell>
                    <TableCell align="center">{row.Buy_Sell}</TableCell>
                    <TableCell align="center">{row.TradeDate}</TableCell>
                    <TableCell align="center">{row.SettlementDate}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography variant="h6" gutterBottom component="div">
                                    Security
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>ID</TableCell>
                                            <TableCell>ISIN</TableCell>
                                            <TableCell>CUSIP</TableCell>
                                            <TableCell>Issuer</TableCell>
                                            <TableCell>MaturityDate</TableCell>
                                            <TableCell>Coupon</TableCell>
                                            <TableCell>Type</TableCell>
                                            <TableCell>FaceValue</TableCell>
                                            <TableCell>Status</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {row.securities.map((securityRow) => (
                                            <TableRow key={securityRow.id}>
                                                <TableCell component="th" scope="row">
                                                    {securityRow.id}
                                                </TableCell>
                                                <TableCell>{securityRow.ISIN}</TableCell>
                                                <TableCell>{securityRow.CUSIP}</TableCell>
                                                <TableCell>{securityRow.Issuer}</TableCell>
                                                <TableCell>{securityRow.MaturityDate}</TableCell>
                                                <TableCell>{securityRow.Coupon}</TableCell>
                                                <TableCell>{securityRow.Type}</TableCell>
                                                <TableCell>{securityRow.FaceValue}</TableCell>
                                                <TableCell>{securityRow.Status}</TableCell>

                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </React.Fragment>
            
            
        );
    }

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
            <MetaData title={`Trades`} />

            <div className="dashboard">
                <SideBar />
                <div className="productListContainer">
                    <h1 id="productListHeading">Trades</h1>
                    <TableContainer component={Paper}>
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell />
                                    <TableCell>ID</TableCell>
                                    <TableCell>BookID</TableCell>
                                    <TableCell>CounterpartyID</TableCell>
                                    <TableCell>SecurityID</TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Buy_Sell</TableCell>
                                    <TableCell>TradeDate</TableCell>
                                    <TableCell>SettlementDate</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <Row key={row.name} row={row} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </>
    );
};

export default Trade;