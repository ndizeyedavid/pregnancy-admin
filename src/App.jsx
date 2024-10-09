import Login from "./routes/Login"
import Home from "./routes/Home"
import Users from "./routes/Users"
import Messages from "./routes/Messages"
import Profile from "./routes/Profile"
import ErrorPage from "./routes/ErrorPage"
import ProtectedRoutes from "./utilities/ProtectedRoutes"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<ProtectedRoutes />}>
            <Route element={<Home />} path="/"></Route>
            <Route element={<Users />} path="/users"></Route>
            <Route element={<Messages />} path="/messages"></Route>
            <Route element={<Profile />} path="/profile"></Route>
          </Route>

          <Route element={<Login />} path="/login"></Route>

          {/* error route */}
          <Route element={<ErrorPage />} path="*"></Route>
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <Users /> */}
      {/* <Messages /> */}
      {/* <Profile /> */}
    </>
  )
}

export default App
