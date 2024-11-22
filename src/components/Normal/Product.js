import React, { Fragment, useState } from "react";
import { Button, Card, CardBody, CardFooter, CardSubtitle, CardText, Container } from "reactstrap";

import { useNavigate} from "react-router-dom"

const Product=({product})=>
{
    
    let navigate=useNavigate();
    const [cart,setCart]=useState({});
    const routeChange=()=>{
        let path=`/med/update`;
        
      
       }

 
    return(
        <Fragment>
        
        <Card className="text-center" >
            <CardBody style={{background:"#e2e2e2",padding:30}}>
            <CardFooter>Category :{product.categoryDto.categoryName}</CardFooter>
            <CardText><h6>Batch No. </h6>{product.medicineBatch}</CardText>
                <CardSubtitle><h3>{product.medicineName}</h3></CardSubtitle>
                <CardText>{product.medicineDesc}</CardText>
                
                
                <Container className="text-center">
                    <Button color="warning " onClick={()=>{
                        
                    } 
                    }
>Add</Button>
                
                </Container>
            </CardBody>
        </Card>
        </Fragment>

    );
}
export default Product;