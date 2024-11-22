import React, { useEffect, useState} from "react";
import Product from "./Product";
import { Button } from "reactstrap";
import {  ToastContainer,toast } from "react-toastify";
import axios from "axios";
import base_url from "../../constants/constants";





const AllProducts = () => {
   
    
    
    const loadDataFromServer=()=>
    {
        axios.get(`${base_url}/meds`).then
        ((response)=>
        {
            // console.log(response.data);
            
            setProduct(response.data);
            toast.success("All Product Load successfully");
          
        }
        ,
        (error)=>
        {
            console.log("Something went wrong from server site");
        }
    )
    };

    useEffect(()=>
    {
        loadDataFromServer();
       
    },[]);
    
        

   
    const [product, setProduct] = useState([]);

    // const testing = () => {
    //     setMedicine([...medicine, { name: "test", desc: "testing descrpitin" },]);
    //     toast.success("Adding new medicine");
    // }
    return (
        <>
        <ToastContainer/>
            <h1>All Items are as follows</h1>
            <Button  color="primary" >All  Products</Button>
            <div>

                {
                    product.length > 0 ? product.map((item) =>
                        <Product key={item.medicineId} product={item}/>
                    ) : "No Product Available"
                }
            </div>
        </>
    )
}
export default AllProducts;