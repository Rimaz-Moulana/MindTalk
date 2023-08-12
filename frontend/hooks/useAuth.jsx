import { useContext } from "react";
import Authcontext from "../src/context/AuthProvider";

const useAuth = () => {
    return useContext(Authcontext);
}

export default useAuth;