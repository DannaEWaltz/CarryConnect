import React, { useState, useContext } from "react"; 
import { Status } from "./Status";
import { useNavigate, Link } from "react-router-dom";
import { FormLabel, Button, Toast, InputGroup } from 'react-bootstrap';

function LogIn(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const auth = useContext(Status);
    const [error, setError] = useState("")

    function handleSubmit(e) {
      e.preventDefault();
      auth.signin(username, password)
        .then((data) => {
          if (data.error) {
            setError(data.error)
          }
          else {
            navigate({ replace: true });
          }
        })
    }

    return(
        <div>
          <form onSubmit={handleSubmit}>
             <div>
                <FormLabel 
                  htmlFor="username"
                  value="Username" />
              </div>
              <InputGroup 
                id="email1"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username..."
                required={true} 
              />
             <div>
              <div>
                <FormLabel 
                  htmlFor="password1"
                  value="Password" />
              </div>
              <InputGroup 
                id="password1"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password..."
                value={password}
                required={true} 
              />
          </div>
          <Button type="submit">Login</Button>
          <Link to="/"><Button>Home</Button></Link>
        </form>
         {error ? ( <Toast> {error} </Toast> ) : null}
      </div>
    
    );
}

export default LogIn;

