import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors} from '../../actions/tradeAction';
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";
import SecurityCard from '../Home/SecurityCard';
import Loader from '../layout/Loader/Loader.js';
import MetaData from "../layout/MetaData";
import './CSS/MySecurities.css';

const MySecurities = () => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { user, loading, error,isAuthenticated} = useSelector((state) => state.user);

    // Get the userId param from the URL.
    const { keyword } = useParams();


    useEffect(() => {
        if (error || !isAuthenticated) {
            alert.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, error,isAuthenticated,alert, keyword]);

    return (
        <>
            {loading ? (<Loader />) : (<>
                <MetaData title="My Securities" />
                <h2 className="productsHeading">My Securities</h2>
                <div className="container">
                    {user.products.length && user.products.map((product,index) => {
                        return <SecurityCard key={index} product={product} />
                    })}
                </div>
            </>)}
        </>
    )
}

export default MySecurities;
