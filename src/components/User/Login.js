
import React,{useState}  from "react";
import { useNavigate } from "react-router-dom";
import {  Form, FormGroup, Label, Input} from "reactstrap";
import {ToastContainer} from "react-toastify";


function Login(){
    const navigate=useNavigate();
    const [loginData,setLoginData]=useState({});
    const submitFunc=()=>{
        console.log(loginData);
    }
    return(
        <div>
        <ToastContainer />
        <h2 className="text-center">SignUp Form </h2>
        <Form onSubmit={submitFunc} action="false" class="text-center">
            <div className="card">
       
        <FormGroup >
                <Label for="name"><h3>Username</h3></Label>
                <Input type="text"
                 placeholder="Enter Username" 
                 name="userName" 
                 id="userName"
                 onChange={(e)=>
                 {
                    setLoginData({...loginData,userName:e.target.value});

                 }
                 }
                 />
            </FormGroup>
            <FormGroup>
            <div className="mb-3">
                    <label htmlFor="password" className="form-label"><h3>Password</h3></label>
                    <input type="password" className="form-control" id="password"
                    placeholder="Enter Password"
                        onChange={(e) => {
                            setLoginData({...loginData,userPassword:e.target.value});
                         }} />
                </div>
            </FormGroup>
            <FormGroup>
                <div class="text-center">
            <button type="submit" className="btn btn-primary">Login</button>
               
               <button type="reset" className="btn btn-success" onClick={()=>{
                navigate(`/home`);
               }}>cancel</button>
               </div>
               </FormGroup>
               </div>
            </Form>
            </div>
    )

}


export default Login;