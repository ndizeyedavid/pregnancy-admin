import { NavLink, useNavigate } from "react-router-dom"

const NavBar = () => {
    const navigate = useNavigate();
    function logOut() {
        if (confirm('Are you sure?')) {
            localStorage.removeItem('session_admin')
            navigate('/login')
        }
    }
    return (
        <>
            <div className='shadow-xl mb-14 navbar bg-base-100 rounded-box'>
                <div className='navbar-start'>
                    <div className='dropdown'>
                        <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
                            <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h8m-8 6h16' />
                            </svg>
                        </div>
                        <ul tabIndex={0} className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'>
                            <li>
                                <NavLink to="/">
                                    <button>Dashboard</button>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/users">
                                    <button>Users</button>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/messages">
                                    <button>Messages</button>
                                </NavLink>
                            </li>

                            {/* <li>
                                <NavLink to="/profile">
                                    <button>Profile</button>
                                </NavLink>
                            </li> */}
                        </ul>
                    </div>
                    <button className='text-xl btn btn-ghost hover:bg-base-100'>
                        <img src="/images/logo/logo-black.svg" className="w-full h-full" alt="" />
                    </button>
                </div>
                <div className='hidden navbar-center lg:flex'>
                    <ul className='px-1 menu menu-horizontal'>

                        <li>
                            <NavLink to="/">
                                <button>Dashboard</button>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/users">
                                <button>Users</button>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/messages">
                                <button>Messages</button>
                            </NavLink>
                        </li>

                        {/* <li>
                            <NavLink to="/profile">
                                <button>Profile</button>
                            </NavLink>
                        </li> */}

                    </ul>
                </div>
                <div onClick={() => logOut()} className='navbar-end'><button className='btn btn-outline btn-error'>Logout</button></div>
            </div >
        </>
    )
}

export default NavBar
