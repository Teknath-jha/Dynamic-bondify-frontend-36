import React, { useEffect} from 'react';
import Carousel from 'react-material-ui-carousel';
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors, getSecurityDetails} from '../../actions/tradeAction';
import { useAlert } from "react-alert";
import { useParams ,Link} from "react-router-dom";
import Loader from '../layout/Loader/Loader.js';
import MetaData from "../layout/MetaData";
import {
    Button,
} from "@material-ui/core";
import './CSS/SecurityDetails/SecurityDetails.css';



const SecurityDetails = () => {

    const dispatch = useDispatch();
    const alert = useAlert();

    const {user,product,loading, error } = useSelector((state) => state.securityDetails);

    const {isAuthenticated}=useSelector((state)=>state.user)


    // Get the userId param from the URL.
    const { id } = useParams();

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getSecurityDetails(id));
    }, [dispatch,id, error, alert]);

    

    const submitReviewToggle = () => {
        alert.info("Under Development..");
    };

    return (
        <>
            {loading ? <Loader /> : (<>
                <MetaData title={`${product.name}`} />
                <div className='securityDetails'>
                    <div>
                        <Carousel>
                            {product.images &&
                                product.images.map((item, i) => (
                                    <img
                                        className="CarouselImage"
                                        key={i}
                                        src={item.url}
                                        alt={`${i} Slide`}
                                    />
                                ))}
                        </Carousel>
                    </div>

                    <div>
                        <div className="detailsBlock-1">
                            <h2>{product.name}</h2>
                            <p></p>

                        </div>
                        
                        <div className="detailsBlock-3">
                            <h2>{`₹${product.price}`}</h2>
                        </div>

                        <div className="detailsBlock-2">
                          <h2>Description:</h2>
                          <p>{product.description}</p>
                        </div>

                        <div className="detailsBlock-2">
                          <h2>Owner Name:</h2>
                          {isAuthenticated ?
                           (<p>{user.name}</p>):(
                            <p>**********<Link  style={{color:'blue', paddingLeft:10}} to='/login'>See Details</Link></p>
                          )}
                        </div>

                         <div className="detailsBlock-2">
                          <h2>Owner Contact:</h2>
                           {isAuthenticated ?
                           (<><p>Phone: {user.phone}</p>
                            <p>Email: {user.email}</p></>):(
                            <><p>Phone:**********</p>
                            <p>Email:*******</p>
                             <Link style={{color:'blue'}} to='/login'>See Details</Link></>
                           )}
                        </div>

                    </div>
                </div>
            </>)}
        </>
    )
}

export default SecurityDetails;
