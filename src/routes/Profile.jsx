import NavBar from "../components/NavBar"
const Profile = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="p-3 mx-56 rounded-md shadow-lg">
                    <h3 className="text-3xl font-semibold text-center">Profile Update</h3>
                    <form method="POST" className="flex flex-col gap-6 mt-3">

                        <div className="flex flex-col items-start gap-y-3">
                            <label htmlFor="name" className="mx-2 text-sm font-medium cursor-pointer">
                                Name
                            </label>
                            <input id="name" type="name" className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none" placeholder="Enter your Name" />
                        </div>

                        <div className="flex flex-col items-start gap-y-3">
                            <label htmlFor="email" className="mx-2 text-sm font-medium cursor-pointer">
                                E-mail
                            </label>
                            <input id="email" type="email" className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none" placeholder="Enter your email" />
                        </div>

                        <div className="flex flex-col items-start gap-y-3">
                            <label htmlFor="pswd" className="mx-2 text-sm font-medium cursor-pointer">
                                Password
                            </label>
                            <input id="pswd" type="password" className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none" placeholder="Enter your password" />
                        </div>

                        <button type="submit" className="btn btn-primary">Update</button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Profile
