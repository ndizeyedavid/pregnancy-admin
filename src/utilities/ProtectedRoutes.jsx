import { Outlet, Navigate } from "react-router-dom"
import DecryptSession from "./DecryptSession";
const ProtectedRoutes = () => {
    // const user = null;
    const user = DecryptSession();

    return user ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes