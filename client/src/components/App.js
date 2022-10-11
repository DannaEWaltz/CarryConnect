import '../App.css';
import { Container, Row, Col, Button, Image, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import LogIn from './LogIn';
import React, { useEffect, useState } from 'react';
import Auth from './Auth';
import CCoval from "../assets/CCoval.jpg";

function App() {

	const [user, setUser] = useState(null)
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogout(){
    setUser(null);
  }

  return (
    <div className="App">
      <Container>
      <Auth>
        <Router>
          <NavBar user={user} onLogout={handleLogout}/>
          <Routes>
            <Route path='/' element={<Header />} />
            <Route path='/signup' element={<SignUp onLogin={setUser} />} /> 
            <Route path='/login' element={<LogIn />} />
          </Routes>
        </Router>
      </Auth>
         <Form>
          <Row>
            <Col md>
          <Form.Group controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="example@email.com" />
            <Form.Text className="text-muted">We'll never share your email address</Form.Text>
          </Form.Group>
          </Col>
          <Col md>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
            </Col>
          </Row>
          <Button variant="secondary" type="submit">Login</Button>
        </Form>
        <Image src={CCoval} width="auto" height="300" className="align-left" alt="logo"/>
        <Card className="mb-3" style={{ color: "#000" }}>
          <Card.Body>
            <Card.Title>Card Example</Card.Title>
            <Card.Text>This is an example of Bootstrap cards</Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item>Test 2</Breadcrumb.Item>
          <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="secondary">This is a button</Alert>
        <Button>Test Button</Button>
        </Container>        
      </div>
  );
}

export default App;
