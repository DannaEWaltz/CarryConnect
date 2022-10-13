import '../App.css';
import { Container, Button, Alert, Breadcrumb, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import LogIn from './LogIn';
import React, { useEffect, useState } from 'react';
import Auth from './Auth';
import Status from './Status';
import Home from './Home';
import bgd from "../assets/bgd.bmp";
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
      <Container className="text-center">
       <Auth>
        <Router>
          <NavBar user={user} onLogout={handleLogout}/>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp onLogin={setUser} />} /> 
            <Route path='/login' element={<LogIn />} />
            <Route path='/status' element={<Status />} />
            <Route path='/auth' element={<Auth />} /> 
          </Routes>
        </Router>
      </Auth>
        <Card border="primary" style={{ width: '100%' }} className="bg-dark text-black">
        <Card.Img src={bgd} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className="text-end"><h1>CarryConnect</h1></Card.Title>
        <Card.Text className="text-end">
          <h3>Your surrogacy journey app</h3>
          <h3>For Intended Parents & Gestational Carriers</h3>
        </Card.Text>
      </Card.ImgOverlay>
          <Card.Body>           
            <Button variant="secondary">Read More</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item>Log</Breadcrumb.Item>
          <Breadcrumb.Item>Questions</Breadcrumb.Item>
          <Breadcrumb.Item active>Home</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="primary">What happens here</Alert>
        <Button>Ryan Reynolds</Button>
        </Container>        
      </div>
  );
}

export default App;
