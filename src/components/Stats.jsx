
const Stats = ({ messages, users }) => {
    return (
        <>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-1 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center justify-center">
                        <div className="w-full p-4 md:w-1/4 sm:w-1/2">
                            <div className="px-4 py-6 border-2 border-gray-200 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className="inline-block w-12 h-12 mb-3 text-indigo-500"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm640-480L501-453q-5 3-10.5 4.5T480-447q-5 0-10.5-1.5T459-453L160-640v400h640v-400ZM480-520l320-200H160l320 200ZM160-640v10-59 1-32 32-.5 58.5-10 400-400Z" /></svg>
                                <h2 className="text-3xl font-medium text-gray-900 title-font">{messages}</h2>
                                <p className="leading-relaxed">Messages</p>
                            </div>
                        </div>
                        <div className="w-full p-4 md:w-1/4 sm:w-1/2">
                            <div className="px-4 py-6 border-2 border-gray-200 rounded-lg">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="inline-block w-12 h-12 mb-3 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                                </svg>
                                <h2 className="text-3xl font-medium text-gray-900 title-font">{users}</h2>
                                <p className="leading-relaxed">Users</p>
                            </div>
                        </div>
                        {/* <div className="w-full p-4 md:w-1/4 sm:w-1/2">
                            <div className="px-4 py-6 border-2 border-gray-200 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="inline-block w-12 h-12 mb-3 text-indigo-500" fill="currentColor"><path d="M480-80q-83 0-141.5-58.5T280-280q0-48 21-89.5t59-70.5v-320q0-50 35-85t85-35q50 0 85 35t35 85v320q38 29 59 70.5t21 89.5q0 83-58.5 141.5T480-80Zm-40-440h80v-40h-40v-40h40v-80h-40v-40h40v-40q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240Z" /></svg>
                                <h2 className="text-3xl font-medium text-gray-900 title-font">Offline</h2>
                                <p className="leading-relaxed">Temperature Sensor</p>
                            </div>
                        </div>
                        <div className="w-full p-4 md:w-1/4 sm:w-1/2">
                            <div className="px-4 py-6 border-2 border-gray-200 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="inline-block w-12 h-12 mb-3 text-indigo-500" fill="currentColor"><path d="M80-640v-80q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v180q0 17-11.5 28.5T840-500q-17 0-28.5-11.5T800-540v-180H160v80q0 17-11.5 28.5T120-600q-17 0-28.5-11.5T80-640Zm200 360q-11 0-21-5.5T244-302l-68-138h-55q-17 0-28.5-11.5T81-480q0-17 11.5-28.5T121-520h80q11 0 20.5 6t14.5 16l44 88 124-248q5-10 15-15t21-5q11 0 21 5t15 15l67 134q-18 11-34.5 23T478-474l-38-76-124 248q-5 11-15 16.5t-21 5.5ZM160-160q-33 0-56.5-23.5T80-240v-80q0-17 11.5-28.5T120-360q17 0 28.5 11.5T160-320v80h215q17 0 28.5 11.5T415-200q0 17-11.5 28.5T375-160H160Zm320-320ZM680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm85-257q6-6 6-14t-6-14q-6-6-14-6t-14 6l-63 62q-6 6-6 14.5t6 14.5q6 6 14.5 6t14.5-6l62-63Z" /></svg>
                                <h2 className="text-3xl font-medium text-gray-900 title-font">Offline</h2>
                                <p className="leading-relaxed">Blood Pressure sensor</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Stats
