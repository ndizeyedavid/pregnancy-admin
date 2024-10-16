import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import Table from "../components/Table"
import axios from "axios";
const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        function get_users(){
            axios.get(import.meta.env.VITE_BACKEND_URL + '/admin/users')
                .then(response => {
                    const data = response.data;
                    setUsers(data)
                    console.log(data);
                })
        }
        get_users();
        setInterval(get_users, 2000);
    }, []);
    return (
        <>
            <NavBar />
            <Table rows={users} />
        </>
    )
}

export default Users
