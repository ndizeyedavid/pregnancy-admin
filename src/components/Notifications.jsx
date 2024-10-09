
const Notifications = ({ newUser, unread }) => {
    return (
        <>
            <section className='max-w-screen-xl mx-auto py-14'>
                <div className='relative px-4 mx-4 overflow-hidden text-black bg-gray-100 py-14 rounded-2xl md:px-8 md:mx-8'>
                    <div className='relative z-10 max-w-xl mx-auto sm:text-center'>
                        <div className='space-y-3'>
                            <h3 className='text-3xl font-bold'>
                                Recent Activities
                            </h3>
                        </div>
                    </div>

                    <div className="flex items-center w-full h-4 gap-3 mt-16">
                        <div className="bg-green-50 border-l-4 w-[50%] border-green-500 text-green-700 p-4" role="alert">
                            <p className="font-bold">New User</p>
                            <p>{newUser} just created a new account</p>
                        </div>
                        {/* <hr className="w-full h-full" /> */}
                        <div className="bg-green-50 border-l-4 w-[50%] border-green-500 text-green-700 p-4" role="alert">
                            <p className="font-bold">Messages</p>
                            <p>You have {unread} unread message(s)</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Notifications
