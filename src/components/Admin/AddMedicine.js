
import React ,{useState} from "react";
import { Button, Form, FormGroup, Label, Input} from "reactstrap";
import {ToastContainer,toast} from "react-toastify";
import axios from "axios";
import base_url from "../../constants/constants";


const AddMedicine=()=>
{
    const [medicine,setMedicine]=useState({});
    const submitFunc=(e)=>{
       
        if(cat==null)
        {
            toast.error("Choose Category")
        }
        else{

        
        console.log(medicine);
       
        postDataToServer(medicine);
       e.preventDefault();
        }


    }
   

    const postDataToServer=(data)=>
    {
            axios.post(`${base_url}/med/create/${cat}`,data).then
       (
        (response)=>
        {
            console.log(response)
            toast.success("Item Added Successfully");
        },
      (error)=>{
        toast.error("Something went wrong!!\n"+error);
        console.log(error)

    }
       )

    }
    
const [cat,setCat]=useState(null);

    return(
       <div>
        <ToastContainer />
        <h2 className="text-center">Fill the Medicine details correctly </h2>
        <Form onSubmit={submitFunc} >
        <FormGroup>
        <label>Choose Category   </label>
        <select onChange={(e)=>
            {
                setCat(e.target.value)
            }
        }>
            <option value="3" >Medicine</option>
            <option value="1" >Food Item</option>
            
            <option value="4" >Suppilments </option>
            <option value="2" >Cosmetics</option>
        </select>
      </FormGroup>
        <FormGroup >
                <Label for="name">Medicine Batch Number</Label>
                <Input type="text"
                 placeholder="Enter here" 
                 name="medicineBatch" 
                 id="medicineBatch"
                 onChange={(e)=>
                 {
                    setMedicine({...medicine,medicineBatch:e.target.value});

                 }
                 }
                 />
            </FormGroup>
            <FormGroup >
                <Label for="name">Medicine Name</Label>
                <Input type="text" 
                placeholder="Enter Medicine Name" 
                name="medicineName" 
                onChange={(e)=>
                    {
                       setMedicine({...medicine,medicineName:e.target.value});
   
                    }
                }
                />
            </FormGroup>
            <FormGroup >
                <Label for="name">Medicine Use</Label>
                <Input type="text"
                 placeholder="Enter here" 
                name="medicineDesc" 
                
                onChange={(e)=>
                    {
                       setMedicine({...medicine,medicineDesc:e.target.value});
   
                    }
                }
                />
            </FormGroup>
           
            <FormGroup>
                <Button color="primary" type="submit" action>Add</Button>
                <Button color="secondary " type="reset">Clear</Button>
            </FormGroup>
        </Form>
       </div>

    );
}
export default AddMedicine;