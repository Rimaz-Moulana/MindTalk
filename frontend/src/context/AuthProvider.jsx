import { createContext, useState } from "react";

const Authcontext = createContext({})

export const AuthProvider = ({children }) => {
    const [auth, setAuth] = useState({});

    return (
        <Authcontext.Provider value={{auth, setAuth}}>
            {children}
        </Authcontext.Provider>
    )
}

export default Authcontext;