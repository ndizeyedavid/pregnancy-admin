
const SingleChat = ({ name, isRead, onClick, patientId }) => {
    // console.log(onClick);

    return (
        <>
            <a href="#!" onClick={() => onClick(patientId, name)}
                className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                <img className="object-cover w-10 h-10 rounded-full"
                    src="/images/logo/logo-pink.svg" alt="username" />
                <div className="w-full pb-2">
                    <div className="flex justify-between">
                        <span className="block ml-2 font-semibold text-gray-600">{name}</span>
                        {/* <span className="indicator-item indicator-bottom indicator-end badge badge-secondary" /> */}
                    </div>
                    {isRead == 0 ?
                        <span className="block ml-2 text-sm text-gray-600">New Message</span>
                        :
                        null
                    }
                </div>
            </a>
        </>
    )
}

export default SingleChat
