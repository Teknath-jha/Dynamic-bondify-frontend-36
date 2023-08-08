import React, { useEffect} from 'react';
import { Link } from "react-router-dom";
import "./CSS/Home.css";
import SecurityCard from './SecurityCard.js';
import MetaData from '../layout/MetaData';
import { clearErrors, getSecurity } from '../../actions/tradeAction';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../layout/Loader/Loader.js';
import {useAlert} from 'react-alert';
import CarouselHome from './CarouselHome.js';

const Home = () => {

    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error, products} = useSelector((state) => state.trades)

    // calling product Redux[]
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getSecurity());
    }, [dispatch, error, alert]);

    return (
        <>
            {loading ? <Loader/> :
                <>
                    <MetaData title="Bondify" />
                    
                    <h2 className="homeHeading">Dummy dynamic topics</h2>

                    <div className="container" id="container">
                        {products && products.map((product) =>
                            <SecurityCard key={product._id} product={product} />)}
                    </div>
                    <hr/>
                    <div className='more'>
                        {products && products.length ? (<>
                            <Link to="/products">A table will be here </Link></>):(<></>)}
                    </div>
                    
                </>}
        </>
    );
}




export default Home;
