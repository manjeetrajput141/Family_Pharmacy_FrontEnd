import React, { Fragment } from "react";
import { Button, Card, CardBody, CardFooter, CardSubtitle, CardText, Container } from "reactstrap";
import axios from "axios";
import { useNavigate} from "react-router-dom"

import base_url from "../../constants/constants";

const Medicine=({medicine,update})=>
{
    
    let navigate=useNavigate();
    const routeChange=()=>{
        let path=`/med/update`;
        
        navigate(path,{state:{id:medicine.medicineId,name:medicine.medicineName,batch:medicine.medicineBatch,desc:medicine.medicineDesc,category:medicine.categoryDto.categoryName}});
    
       }

 
    const deleteFunction=(id)=>{
      
    
        axios.delete(`${base_url}/med/delete/${id}`).then(
        (response)=>{
       //     toast.success("Deleted Successfully!!");
       update(id);

        }
        ,
        (error)=>{
            console.log("Not Deleted Something went wrong");
        }
   )
   
 }
    return(
        <Fragment>
        
        <Card className="text-center" >
            <CardBody style={{background:"#e2e2e2",padding:30}}>
            <CardFooter>Category :{medicine.categoryDto.categoryName}</CardFooter>
            <CardText><h6>Batch No. </h6>{medicine.medicineBatch}</CardText>
                <CardSubtitle><h3>{medicine.medicineName}</h3></CardSubtitle>
                <CardText>{medicine.medicineDesc}</CardText>
                
                
                <Container className="text-center">
                    <Button color="warning " onClick={()=>{
                        routeChange()} 
                    }
>Update</Button>
                    <Button color="danger ml-3 " 
                    onClick={()=>{
                        
                        deleteFunction(medicine.medicineId);
                    }}

                    >Delete</Button>
                </Container>
            </CardBody>
        </Card>
        </Fragment>

    );
}
export default Medicine;