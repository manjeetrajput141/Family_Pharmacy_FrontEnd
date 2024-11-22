import React, { useEffect, useState} from "react";
import Medicine from "./Medicine";
import { Button } from "reactstrap";
import {  ToastContainer,toast } from "react-toastify";
import axios from "axios";
import base_url from "../../constants/constants";



const FoodItems=()=>{
    var counter=1;
    const loadDataFromServer=()=>
    {
        axios.get(`${base_url}/meds/cat/1`).then
        ((response)=>
        {
            // console.log(response.data);
            
            setMedicine(response.data);
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
    
        

   
    const [medicine, setMedicine] = useState([]);

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
                    medicine.length > 0 ? medicine.map((item) =>
                        <Medicine key={counter++} medicine={item} />
                    ) : "No Medicine Available"
                }
            </div>
        </>
    )
}

export default FoodItems;