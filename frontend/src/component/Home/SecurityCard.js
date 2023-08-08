import { React, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch, useSelector } from "react-redux";
import { deleteSecurity, clearErrors } from "../../actions/tradeAction";
import { useAlert } from "react-alert";
import { DELETE_TRADE_RESET } from "../../constants/tradeConstants";
import { loadUser } from "../../actions/userAction";


const SecurityCard = ({ product }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { isAuthenticated,user} = useSelector(
    (state) => state.user
  );

  const {error, error: deleteError,isDeleted } = useSelector((state) => state.product);

  const deleteProductHandler = async() => {
    dispatch(deleteSecurity(product._id));
    alert.success("Product Deleted Successfully");
  }

useEffect(() => {
    if (error) {
        alert.error(error);
        dispatch(clearErrors());
    }
    if (deleteError) {
        alert.error(deleteError);
        dispatch({ type: DELETE_TRADE_RESET });
    }

    if (isDeleted) {
        navigate("/account");
        dispatch({
            type: DELETE_TRADE_RESET
        });
        dispatch(loadUser())
    }
    }, [dispatch, alert, error, navigate, deleteError,isDeleted]);


  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      {/* <img src={product.images[0].url} alt={product.name} /> */}
      <span className="productPriceSpan">{`${product.price}`}</span>
      {/* <p>{product.name}</p> */}
      <p>Dummy</p>

      <div>
        {/* <span className="span">{user.name}</span> */}
        <span className="span">{product.createdAt.substring(0, 10)}</span>
      </div>
    </Link>
  );
};

export default SecurityCard;
