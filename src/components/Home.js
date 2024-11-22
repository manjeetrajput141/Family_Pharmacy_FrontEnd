import React from "react";
import { Button, Card, CardBody,CardText,CardTitle } from "reactstrap";

function Home(){
    return(

   <div>
    <Card>
    <CardBody>
      <CardTitle tag="h5">
        Family Pharmacy 
      </CardTitle>
      <CardText>
        We provide all the Medicines online as well as offline Please visit our pharmacy.
        You can easily check that medicines are available in shop or not </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </CardText>
    </CardBody>
    </Card>
   </div>
    );
}
export default Home;