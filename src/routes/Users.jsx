import { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import Table from "../components/Table"
import axios from "axios";
const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + '/admin/users')
            .then(response => {
                const data = response.data;
                setUsers(data)
                console.log(data);

            })
    }, []);
    return (
        <>
            <NavBar />
            <Table rows={users} />
        </>
    )
}

export default Users
