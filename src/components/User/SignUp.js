
import React ,{useState,useEffect} from "react";
import {  Form, FormGroup, Label, Input} from "reactstrap";
import {ToastContainer,toast} from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import base_url from "../../constants/constants";


function SignUp(){
    const navigate=useNavigate();
    const [user,setUser]=useState({});
   
   
       

       const submitFunc=(e)=>
        {
           

            console.log(user);
           
        postDataToServer(user);
        
        e.preventDefault();
            

        }
        const postDataToServer=(data)=>{
            axios.post(`${base_url}/user/create`,data).then((response)=>
                {
                    console.log(response)
                    toast.success("User Successfully Registered");
                    navigate(`/user/login`);
                },
              (error)=>{
                toast.error("Something went wrong!!\n"+error);
                console.log(error) (Response)
              }
            )
        }

        //Cheating for validation Password
        const [password, setPassword] = useState('');
        const [cPassword, setCPassword] = useState('');
        const [showErrorMessage, setShowErrorMessage] = useState(false);
        const [cPasswordClass, setCPasswordClass] = useState('form-control');
        const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);
    
        useEffect(() => {
            if (isCPasswordDirty) {
                if (password === cPassword) {
                    setShowErrorMessage(false);
                    setCPasswordClass('form-control is-valid')
                } else {
                    setShowErrorMessage(true)
                    setCPasswordClass('form-control is-invalid')
                }
            }
        }, [cPassword])
    
        const handleCPassword = (e) => {
            setCPassword(e.target.value);
            setIsCPasswordDirty(true);
        }
    
    

    return(
        <div>
        <ToastContainer />
        <h2 className="text-center">SignUp Form </h2>
        <Form onSubmit={submitFunc} action="false">
       
        <FormGroup >
                <Label for="name">Username</Label>
                <Input type="text"
                 placeholder="Enter Username" 
                 name="userName" 
                 id="userName"
                 onChange={(e)=>
                 {
                    setUser({...user,userName:e.target.value});

                 }
                 }
                 />
            </FormGroup>
            <FormGroup >
                <Label for="name">Email</Label>
                <Input type="email" 
                placeholder="Enter Email" 
                name="userEmail" 
                onChange={(e)=>
                    {
                       setUser({...user,userEmail:e.target.value});
   
                    }
                }
                />
            </FormGroup>
            {/* <FormGroup >
                <Label for="name">Password</Label>
                <Input type="password"
                 placeholder="Enter Password" 
                name="userPassword" 
                
                onChange={(e)=>
                    {
                       setUser({...user,userPassword:e.target.value});
                      
   
                    }
                }
                />
            </FormGroup> */}
            <FormGroup >
                {/* <Label for="name">Re-Enter Password</Label>
                <Input type="password"
                 placeholder="Re-Enter Password" 
                name="userPassword2" 
                onClick={(e)=>{
                    setRePass({...rePass,password:e.target.value});
                }}
                
               
                />
            </FormGroup>
           
            <FormGroup>
                <Button color="primary" type="submit" action>Add</Button>
                <Button color="secondary " type="reset">Clear</Button> */}

                {/* Cheating For Validation Password */}
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={password}
                    placeholder="Enter Password"
                        onChange={(e) => { setPassword(e.target.value)
                            setUser({...user,userPassword:e.target.value});
                         }} />
                </div>
                </FormGroup>
                <FormGroup>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" className={cPasswordClass} id="confirmPassword" value={cPassword}
                         placeholder="Re-Enter Password"
                        onChange={handleCPassword} />
                </div>
                {showErrorMessage && isCPasswordDirty ? <div> Passwords did not match </div> : ''}

                <button type="submit" className="btn btn-primary">Submit</button>
               
                <button type="reset" className="btn btn-success">Reset</button>
                


            </FormGroup>
        </Form>
       </div>

    );
}

export default SignUp;