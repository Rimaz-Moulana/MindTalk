import { useState, useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
       
        const getUsers = async () => {
            try{
               const response = await axiosPrivate.get('/users', {
                signal: controller.signal
               });
               console.log(response.data);
               isMounted && setUsers(response.data);
            }catch (err){
             
            }
        }

        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        }
    },[])

};

export default Users
