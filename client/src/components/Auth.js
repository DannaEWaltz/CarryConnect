import React, { useState } from "react";
import { Status } from "./Status";

function Auth ({ children }) {
    let [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    let signin = async (username, password) => {

        return fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
            .then((r) => r.json())
            .then((data) => {
                if (!data.error) {
                    setUser(data);
                    localStorage.setItem("user", JSON.stringify(data))
                }
                return data
            })
            .catch((error) => { console.log(error) })
    };

    let signout = async () => {
        return fetch("/logout", {
            method: "DELETE",
        }).then(() => {
            setUser(null);
            localStorage.removeItem("user");
        })
    };

    let value = { user, signin, signout };

    return <Status.Provider value={value}>{children}</Status.Provider>;
}

export default Auth

