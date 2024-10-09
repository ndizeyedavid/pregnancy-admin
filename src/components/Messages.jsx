import axios from "axios"
import SingleChat from "./SingleChat"
import { useEffect, useState } from "react"
const Messages = () => {

    const [users, setUsers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [chat, setChat] = useState('');

    const [selectedId, setSelectedId] = useState(0);
    const [selectedUser, setSelectedUser] = useState('')

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + '/admin/message/view/all')
            .then(response => {
                const data = response.data;
                setUsers(data)
            })
    }, []);

    function markAsRead(id) {
        axios.get(import.meta.env.VITE_BACKEND_URL + '/admin/message/view/read?id=' + id)
            .catch(error => {
                console.log("An error occurred");
            })

    }

    function getMessages(id, name) {
        setSelectedId(id)
        setSelectedUser(name)
        axios.get(import.meta.env.VITE_BACKEND_URL + '/admin/message/view/single?id=' + id)
            .then(response => {
                const data = response.data;
                setChat(name)
                setMessages(data)
                markAsRead(data[0].sender_id);
            })
    }

    const handleForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formObject = Object.fromEntries(formData.entries());
        // console.log(formObject);
        e.target.reset();
        axios.post(import.meta.env.VITE_BACKEND_URL + "/admin/message/send", formObject)
            .then((response) => {
                const data = response.data;
                setMessages(data)
                // console.log(data);

            })


    }

    return (
        <>
            <div className="container relative mx-auto -top-7 px-9">
                <div className="min-w-full border rounded lg:grid lg:grid-cols-3">
                    <div className="border-r border-gray-300 lg:col-span-1">
                        <div className="mx-3 my-3">
                            <div className="relative text-gray-600">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        viewBox="0 0 24 24" className="w-6 h-6 text-gray-300">
                                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </span>
                                <input type="search" className="block w-full py-2 pl-10 bg-gray-100 rounded outline-none" name="search"
                                    placeholder="Search" required />
                            </div>
                        </div>

                        <ul className="overflow-auto h-[32rem]">
                            <h2 className="my-2 mb-2 ml-2 text-lg text-gray-600">Patients</h2>
                            <li>
                                {users.map((data, index) => (
                                    <SingleChat key={index} patientId={data.sender_id} onClick={getMessages} name={data.user_name} isRead={data.isRead} />
                                ))}
                            </li>
                        </ul>
                    </div>

                    <div className="hidden lg:col-span-2 lg:block">
                        {messages.length > 0 ?
                            <div className="w-full">
                                <div className="relative flex items-center p-3 border-b border-gray-300">
                                    <img className="object-cover w-10 h-10 rounded-full"
                                        src="/images/logo/logo-pink.svg" alt="username" />
                                    <span className="block ml-2 font-bold text-gray-600">{chat}</span>
                                </div>
                                <div className="relative w-full p-6 overflow-y-auto" style={{ height: "calc(100vh - 250px)" }}>
                                    <ul className="space-y-2">
                                        {messages.map((data, index) => (

                                            <div key={index}>
                                                {data.sender_id != 'admin' ?
                                                    <li className="flex justify-start">
                                                        <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                                                            <span className="block">{data.message}</span>
                                                        </div>
                                                    </li>
                                                    :

                                                    <li className="flex justify-end">
                                                        <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                                                            <span className="block">{data.message}</span>
                                                        </div>
                                                    </li>
                                                }
                                            </div>
                                        ))}
                                    </ul>
                                </div>

                                <form method="POST" onSubmit={handleForm} className="flex items-center justify-between w-full p-3 border-t border-gray-300">

                                    <input type="hidden" name="receiver_id" value={messages[0].sender_id} />

                                    <input type="text" placeholder="Message"
                                        className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                                        name="message" required />
                                    <button>

                                    </button>
                                    <button type="submit">
                                        <svg className="w-5 h-5 text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                            :
                            <div className="flex items-center justify-center h-full"><p>Select a patient</p></div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Messages
