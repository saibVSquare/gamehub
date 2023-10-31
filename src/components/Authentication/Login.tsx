import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// @ts-ignore
import React, {useState} from "react";
import axios from "axios";

const Login = () => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleForm = (e) => {
        e.preventDefault();
        const DataU = {
            email: loginData.email,
            password: loginData.password
        }
        axios.post("https://7d80-125-209-73-146.ngrok-free.app/login", DataU).then((response) => {
            console.log(response.status, response.data);
        });
    }

    
    return (
        <div className='container mt-5'>
            <h1>Login Form</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => {
                        setLoginData({...loginData, email: e.target.value})
                    }}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => {
                        setLoginData({...loginData, password: e.target.value})
                    }}/>
                </Form.Group>

                <Button variant="primary" type="button" onClick={handleForm}>
                    Login
                </Button>
            </Form>
        </div>
    );
}
export default Login;