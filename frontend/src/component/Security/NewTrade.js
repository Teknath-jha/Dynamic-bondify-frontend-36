import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../layout/Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { clearErrors, createSecurity } from "../../actions/tradeAction";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import { loadUser} from '../../actions/userAction';
import "./CSS/NewTrade/NewTrade.css";
import { NEW_TRADE_RESET } from "../../constants/tradeConstants";

const NewTrade = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();

    const { loading, error, success,product} = useSelector((state) => state.newTrade);

    
    // Security
    const [securityId, setSecurityId] = useState("");
    const [isin, setIsin] = useState("");
    const [cusip, setCusip] = useState("");
    const [issuer, setIssuer] = useState("");
    const [maturityDate, setMaturityDate] = useState("");
    const [coupon, setCoupon] = useState("");
    const [type, setType] = useState("");
    const [faceValue, setFaceValue] = useState("");
    const [status, setStatus] = useState("");
    const [quantity, setQuantity] = useState("");


    // Trade
    const [price, setPrice] = useState("");
    const [counterPartyId, setCounterpartyId] = useState("");
    const [tradeId, setTradeId] = useState("");
    const [bookId, setBookId] = useState("");
    const [buy_sell, setBuySell] = useState("");
    const [tradeDate, setTradeDate] = useState("");
    const [settlementDate, setSettlementDate] = useState("");


    const securityType = ["government", "corporation"];
    const securityStatus = ["completed","incomple","matured"];
    

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (success) {
            alert.success("Trade Created Successfully");
            dispatch(loadUser());
            navigate(`/product/${product._id}`);
            dispatch({type: NEW_TRADE_RESET});
        }
    }, [dispatch, alert, error, success, product,navigate]);


    const createTradeSubmitHandler = async(e) => {
        e.preventDefault();
        const myTrade = new FormData();
        const mySecurity = new FormData();

        mySecurity.set("securityId", securityId);
        mySecurity.set("isin", isin);
        mySecurity.set("cusip", cusip);
        mySecurity.set("issuer", issuer);
        mySecurity.set("maturityDate", maturityDate);
        mySecurity.set("coupon", coupon);
        mySecurity.set("type", type);
        mySecurity.set("faceValue", faceValue);
        mySecurity.set("status", status);

        // trade
        myTrade.set("price", price);
        myTrade.set("counterPartyId", counterPartyId);
        myTrade.set("tradeId", tradeId);
        myTrade.set("securityId", securityId);
        myTrade.set("bookId", bookId);
        myTrade.set("buy_sell", buy_sell);
        // myTrade.set("tradeDate", tradeDate);
        // myTrade.set("settlementDate", settlementDate);
        myTrade.set("quantity", quantity);
        myTrade.set("status", status);
        
        try {
            await axios.post('http://localhost:8080/api/v1/securities/add', mySecurity);
            await axios.post('http://localhost:8080/api/v1/trades/add', myTrade);
            console.log('Post request successful');
          } catch (error) {
            console.error('Error making post request:', error);
          }

    }
    return (
        <>
         {loading ?<Loader /> : <>
            <MetaData title="Trade" />
                <div className="newProductContainer">
                    <form
                        className="createProductForm"
                        encType="multipart/form-data"
                        onSubmit={createTradeSubmitHandler}
                    >
                        <h1>Create New Trade</h1>

                        <div>
                            <h3>Security</h3>
                            <input
                                type="number"
                                placeholder="securityId"
                                required
                                name="securityId"
                                value={securityId}
                                onChange={(e) => setSecurityId(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="number"
                                placeholder="isin"
                                required
                                name="isin"
                                value={isin}
                                onChange={(e) => setIsin(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="number"
                                placeholder="cusip"
                                required
                                name="cusip"
                                value={cusip}
                                onChange={(e) => setCusip(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="issuer"
                                required
                                name="issuer"
                                value={issuer}
                                onChange={(e) => setIssuer(e.target.value)}
                            />
                        </div>
                        <div>
                            <h4>Maturity Date</h4>
                            <input
                                type="date"
                                placeholder="maturityDate"
                                required
                                name="maturityDate"
                                value={maturityDate}
                                onChange={(e) => setMaturityDate(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="number"
                                placeholder="coupon"
                                required
                                name="coupon"
                                value={coupon}
                                onChange={(e) => setCoupon(e.target.value)}
                            />
                        </div>
                       

                        <div>
                             <select onChange={(e) => setType(e.target.value)} required>
                                <option value="">Choose Type</option>
                                {securityType.map((cate) => (
                                    <option key={cate} value={cate}>
                                        {cate}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <input
                                type="number"
                                placeholder="faceValue"
                                required
                                name="faceValue"
                                value={faceValue}
                                onChange={(e) => setFaceValue(e.target.value)}
                            />
                        </div>
                        

                                    <h3>Trade Form</h3>
                            <div>
                            <input
                                type="number"
                                placeholder="tradeId"
                                required
                                name="tradeId"
                                value={tradeId}
                                onChange={(e) => setTradeId(e.target.value)}
                            />
                        </div>
                            <div>
                            <input
                                type="number"
                                placeholder="bookId"
                                required
                                name="bookId"
                                value={bookId}
                                onChange={(e) => setBookId(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="number"
                                placeholder="counterPartyId"
                                required
                                name="counterPartyId"
                                value={counterPartyId}
                                onChange={(e) => setCounterpartyId(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="number"
                                placeholder="quantity"
                                required
                                name="quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </div>
                        
                        <div>
                             <select onChange={(e) => setStatus(e.target.value)} required>
                                <option value="">Choose Status</option>
                                {securityStatus.map((cate) => (
                                    <option key={cate} value={cate}>
                                        {cate}
                                    </option>
                                ))}
                            </select>
                        </div>


                        <div>
                            <input
                                type="number"
                                placeholder="quantity"
                                required
                                name="quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="number"
                                placeholder="price"
                                required
                                name="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="buy_sell"
                                required
                                name="buy_sell"
                                value={buy_sell}
                                onChange={(e) => setBuySell(e.target.value)}
                            />
                        </div>
                        {/* <div>
                            <input
                                type="date"
                                placeholder="tradeDate"
                                required
                                name="tradeDate"
                                value={tradeDate}
                                onChange={(e) => setTradeDate(e.target.value)}
                            />
                        </div> */}
                        {/* <div>
                            <input
                                type="date"
                                placeholder="settlementDate"
                                required
                                name="settlementDate"
                                value={settlementDate}
                                onChange={(e) => setSettlementDate(e.target.value)}
                            />
                        </div> */}

                        <Button
                            id="createProductBtn"
                            type="submit"
                        >
                            Create
                        </Button>
                    </form>
                </div>
            </>}
        </>
    )
}

export default NewTrade;
