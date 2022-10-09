//import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <h1>Page Count: {count}</h1>
      <header className="App-header">
        <Container>
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
        <Card className="mb-3" style={{ color: "#000" }}>
          <Card.Img src="https://picsum.photos/200/100"/>
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
      </header>
    </div>
  );
}

export default App;
