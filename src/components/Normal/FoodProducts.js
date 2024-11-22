import React, { useEffect, useState} from "react";
import { Button } from "reactstrap";
import {  ToastContainer,toast } from "react-toastify";
import axios from "axios";
import base_url from "../../constants/constants";
import Product from "./Product";



const FoodProducts=()=>{
    var counter=1;
    const loadDataFromServer=()=>
    {
        axios.get(`${base_url}/meds/cat/1`).then
        ((response)=>
        {
            // console.log(response.data);
            
            setProduct(response.data);
            console.log(response.data);
            toast.success("Items Load successfully");
          
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
    },[])
    
        

   
    const [product, setProduct] = useState([]);

    // const testing = () => {
    //     setMedicine([...medicine, { name: "test", desc: "testing descrpitin" },]);
    //     toast.success("Adding new medicine");
    // }
    return (
        <>
        <ToastContainer/>
            <h1>All Food Items</h1>
            <Button  color="primary" >All  Food Items</Button>
            <div>

                {
                    product.length > 0 ? product.map((item) =>
                        <Product key={counter++} product={item} />
                    ) : "No Medicine Available"
                }
            </div>
        </>
    )
}

export default FoodProducts;