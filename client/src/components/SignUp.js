import React, { useState } from "react"; 
import { useNavigate, Link} from "react-router-dom";
import { FormLabel, Button, Toast, InputGroup } from 'react-bootstrap';

function SignUp(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username, 
                email,
                name,
                password
            }),
        })
        .then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then(() => navigate("/login"));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
               <form onSubmit={handleSubmit} >
                    <div>
                        <div>
                            <FormLabel 
                                htmlFor="username"
                                value="Username" />
                        </div>
                        <InputGroup 
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username..."
                            required={true} />
                    </div>
                    <div>
                        <div>
                            <FormLabel
                                htmlFor="name"
                                value="Name" />
                        </div>
                        <InputGroup
                            id="name"
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your Name..."
                            value={name}
                            required={true}
                        />
                    </div>
                    <div>
                        <div>
                            <FormLabel
                                htmlFor="email"
                                value="Email" />
                        </div>
                        <InputGroup
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email..."
                            required={true} />
                    </div>
                    <div>
                        <div>
                            <FormLabel
                                htmlFor="password"
                                value="Password" />
                        </div>
                        <InputGroup
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password..."
                            required={true} />
                    </div>             
                <Button type="submit" >
                    {isLoading ? "Loading ..." : "Signup"}
                </Button>
                <Link to="/">
                    <Button>
                        Return to Homepage
                    </Button>
                </Link>
                {errors ? (
                    <Toast>
                        <div >
                            {errors}
                        </div>
                        
                    </Toast>
                ) : null}
                </form>
           
    )
}

export default SignUp;