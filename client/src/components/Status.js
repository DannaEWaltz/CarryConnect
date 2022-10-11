import React from "react";

export const Status = React.createContext({ 
    user: null,
    signin: () => {},
    signout: () => {}
});