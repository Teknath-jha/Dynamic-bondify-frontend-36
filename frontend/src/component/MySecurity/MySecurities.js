import axios from "axios";
import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors} from '../../actions/tradeAction';
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import { Grid, Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import Loader from '../layout/Loader/Loader.js';
import MetaData from "../layout/MetaData";
import './CSS/MySecurities.css';

const MySecurities = () => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { user, loading, error,isAuthenticated} = useSelector((state) => state.user);

    // Get the userId param from the URL.
    const { keyword } = useParams();
    const [feedTable, setFeedTable] = useState([]);
    const [securitesHeaders, setSecuritesHeaders] = useState([]);

    useEffect(async () => {
        const id = 401
        await axios.get('http://localhost:8080/api/v1/securities/get?securityId=401')
          .then(response => {
            setFeedTable(response.data);
            console.log("Hello world");
            console.log(response.data);
            setSecuritesHeaders(Object.keys(response.data[0]));

          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });

        if (error || !isAuthenticated) {
            alert.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, error,isAuthenticated,alert, keyword]);

    // const securites = [
    //     {"id":1, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"completed"},
    //     {"id":2, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"completed"},
    //     {"id":3, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"completed"},
    //     {"id":4, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"pending"},
    //     {"id":5, "ISIN":"123456", "CUSIP":"78904563", "Issuer":"Dog", "MaturityDate":"01-01-2023", "Coupon":"hello", "Type":"Government", "FaceValue":"89000", "Status":"pending"}
    // ]
    
   

    return (
        <>
            {loading ? (<Loader />) : (<>
                <MetaData title="My Securities" />
                <h2 className="productsHeading">My Securities</h2>
                <div className="container">
                    <Table>
                            <TableHead>
                                <TableRow>
                                    {securitesHeaders.map(header => (
                                        <TableCell key={header}>{header}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {feedTable.map((row, rowIndex) => (
                                    <TableRow key={rowIndex}>
                                        {securitesHeaders.map(header => (
                                            <TableCell key={header}>{row[header]}</TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                </div>
            </>)}
        </>
    )
}

export default MySecurities;
