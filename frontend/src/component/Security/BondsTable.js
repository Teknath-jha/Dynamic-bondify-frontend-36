import React, { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import {
    clearErrors,
    getAdminProduct,
    deleteProduct
} from "../../actions/productAction";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "../Admin/Sidebar";
import "./CSS/ProductList/ProductList.css";
import { DELETE_PRODUCT_RESET } from "../../constants/productConstants";

const BondsTable = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();

    const { error, products } = useSelector((state) => state.products);
    const { error: deleteError, isDeleted } = useSelector((state) => state.product);


    const deleteProductHandler = (id) => {
        dispatch(deleteProduct(id));
    }

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        if (deleteError) {
            alert.error(deleteError);
            dispatch({ type: DELETE_PRODUCT_RESET });
        }

        if (isDeleted) {
            alert.success("Product Deleted Successfully");
            navigate("/admin/products");
            dispatch({
                type: DELETE_PRODUCT_RESET
            });
        }

        dispatch(getAdminProduct());
    }, [dispatch, alert, error, navigate, deleteError, isDeleted]);

    const columns = [
        { field: "id", headerName: "Product ID", minWidth: 200, flex: 0.5 },

        {
            field: "name",
            headerName: "Name",
            minWidth: 350,
            flex: 1,
        },
        {
            field: "price",
            headerName: "Price",
            type: "number",
            minWidth: 270,
            flex: 0.5,
        },

        {
            field: "actions",
            flex: 0.3,
            headerName: "Actions",
            minWidth: 150,
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/update/product/${params.getValue(params.id, "id")}`}>
                            <EditIcon />
                        </Link>

                        <Button className="button"
                            onClick={() => deleteProductHandler(params.getValue(params.id, "id"))}
                        >
                            <DeleteIcon />
                        </Button>
                    </>
                );
            },
        },
    ];

    const rows = [];

    products &&
        products.forEach((item) => {
            rows.push({
                id: item._id,
                price: item.price,
                name: item.name,
            });
        });
    
        rows.push({
            id: "111",
            price: "1289",
            name: "Name 1",
        });
        rows.push({
            id: "112",
            price: "1284",
            name: "Name 2",
        });
        rows.push({
            id: "113",
            price: "1249",
            name: "Name 3",
        });
        rows.push({
            id: "114",
            price: "1286",
            name: "Name 4",
        });
        rows.push({
            id: "115",
            price: "1289",
            name: "Name 5",
        });
        rows.push({
            id: "116",
            price: "1284",
            name: "Name 6",
        });
        rows.push({
            id: "117",
            price: "1249",
            name: "Name 7",
        });
        rows.push({
            id: "118",
            price: "1286",
            name: "Name 8",
        });

    return (
        <>
            <MetaData title={`ALL Bonds - Admin`} />

            <div className="dashboard">
                <SideBar />
                <div className="productListContainer">
                    <h1 id="productListHeading">ALL Bonds</h1>

                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={7}
                        className="productListTable"
                        autoHeight
                    />
                </div>
            </div>
        </>
    );
};

export default BondsTable;
