import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// @ts-ignore
import React, {useState} from "react";
import axios from "axios";

const Signup = () => {
    const [userData, setUserData] = useState({
        first_name: "",
        last_name: "",
        email: '',
        password: ''
    });

    const handleForm = (e) => {
        e.preventDefault();
        const DataU = {
            first_name: userData.first_name,
            last_name: userData.last_name,
            email: userData.email,
            password: userData.password
        }
        axios.post("https://7d80-125-209-73-146.ngrok-free.app/signup", DataU).then((response) => {
            console.log(response.status, response.data);
        });
    }

    return (
        <div className='container mt-5'>
            <h1>Signup Form</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name"
                                  onChange={(e) => setUserData({...userData, first_name: e.target.value})}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last"
                                  onChange={(e) => setUserData({...userData, last_name: e.target.value})}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                                  onChange={(e) => setUserData({...userData, email: e.target.value})}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                                  onChange={(e) => setUserData({...userData, password: e.target.value})}/>
                </Form.Group>

                <Button variant="primary" type="button" onClick={handleForm}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Signup;