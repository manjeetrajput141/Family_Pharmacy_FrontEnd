import React,{useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input} from "reactstrap";
import {ToastContainer,toast} from "react-toastify";
import axios from "axios";
import base_url from "../../constants/constants";

const UpdateProduct=()=>
    {
        const location = useLocation();
        const navigate= useNavigate();
   
        const [medicine,setMedicine]=useState({});
        const submitFunc=(e)=>{
           
            
            console.log(medicine);
           
          postDataToServer(medicine);
           e.preventDefault();
       
    
    
        }
       
    
        const postDataToServer=(data)=>
        {
            
                axios.put(`${base_url}/med/update/${location.state.id}`,data).then
           (
            (response)=>
            {
                console.log(response)
                toast.success("Medicine Updated Successfully");
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
           <h4> <label>Category cannot be updated : {location.state.category} and PID :{location.state.id}</label><br/></h4>
            <small>If you wish to change category then you just need to delete the item and then re-create</small>
          
          </FormGroup>
            <FormGroup >
                    <Label for="name">Update Medicine Batch Number</Label>
                    <Input type="text"
                     placeholder={location.state.batch} 
                     name="medicineBatch" 
                     id="medicineBatch" required
                     onChange={(e)=>
                     {
                        setMedicine({...medicine,medicineBatch:e.target.value});
    
                     }
                     }
                     />
                </FormGroup>
                <FormGroup >
                    <Label for="name">Update Medicine Name</Label>
                    <Input type="text" 
                    placeholder={location.state.name} 
                    name="medicineName" required
                    onChange={(e)=>
                        {
                           setMedicine({...medicine,medicineName:e.target.value});
       
                        }
                    }
                    />
                </FormGroup>
                <FormGroup >
                    <Label for="name">Update Medicine Use</Label>
                    <Input type="text"
                     placeholder={location.state.desc} 
                    name="medicineDesc"  required
                    
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
 


export default UpdateProduct;