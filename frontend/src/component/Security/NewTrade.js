import React, { useEffect, useState } from "react";
import Loader from "../layout/Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { clearErrors, createProduct } from "../../actions/tradeAction";
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

    const [counterpartyName, setCounterpartyName] = useState("");
    const [isin, setIsin] = useState("");
    const [issuer, setIssuer] = useState("");
    const [maturityDate, setMaturityDate] = useState("");
    const [coupon, setCoupon] = useState("");
    const [type, setType] = useState("");
    const [faceValue, setFaceValue] = useState("");
    const [status, setStatus] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");


    const securityType = ["government", "corporation"];
    const securityStatus = ["completed","incomple","matured"];
    const categories = [
        "Calculator",
        "SmartPhones",
        "Laptop",
        "Books",
        "Drafter",
        "Apron",
        "Keyboard",
        "Mouse",
        "Camera",
        "other"
   ];

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


    const createTradeSubmitHandler = (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.set("counterpartyName", counterpartyName);
        myForm.set("isin", isin);
        myForm.set("issuer", issuer);
        myForm.set("maturityDate", maturityDate);
        myForm.set("coupon", coupon);
        myForm.set("type", type);
        myForm.set("faceValue", faceValue);
        myForm.set("status", status);
        myForm.set("quantity", quantity);
        myForm.set("price", price);
        
        dispatch(createSecurity(myForm));
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
                            <input
                                type="text"
                                placeholder="counter party name"
                                required
                                name="counterpartyName"
                                value={counterpartyName}
                                onChange={(e) => setCounterpartyName(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="ISIN"
                                required
                                name="isin"
                                value={isin}
                                onChange={(e) => setIsin(e.target.value)}
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
                            <input
                                type="date"
                                placeholder="maturityDate"
                                required
                                name="maturityDate"
                                value={maturityDate}
                                onChange={(e) => setMaturityDate(e.target.value)}
                            />
                        </div>
                        {/* doubt on coupon */}
                        <div>
                            <input
                                type="text"
                                placeholder="coupan"
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
                        

                        <div>
                             <select onChange={(e) => setStatus(e.target.value)} required>
                                <option value="">Choose Type</option>
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
                        

                       


                        <Button
                            id="createProductBtn"
                            type="submit"
                            disabled={loading ? true : false}
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
