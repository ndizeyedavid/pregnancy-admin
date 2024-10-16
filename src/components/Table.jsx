
const Table = ({ rows }) => {
    function search() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("searchInp");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[2];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    return (
        <>
            <div className='px-20 mx-auto'>

                <div className='flex items-center justify-center'>
                    <div className='flex flex-col items-end justify-center max-w-lg'>
                        <h3 className='text-3xl font-bold text-right text-base-content'>Users registerd in the system</h3>

                        <form onSubmit={e => { e.preventDefault(); }} className='w-[600px] mx-auto mt-8'>
                            <div className='relative'>
                                <svg xmlns='http://www.w3.org/2000/svg' className='absolute top-0 bottom-0 w-6 h-6 my-auto text-base-content left-3' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                                </svg>
                                <input type='text' id="searchInp" onKeyUp={() => search()} placeholder='Search' className='w-full py-3 pl-12 pr-4 border rounded-md outline-none text-base-content bg-base-200 focus:bg-base-100 focus:border-primary' />
                            </div>
                        </form>

                    </div>
                </div>
                <div className='relative mt-8 overflow-auto h-max'>
                    <table id="myTable" className='w-full text-sm text-left table-auto'>
                        <thead className='font-medium border-b text-base-content'>
                            <tr>
                                <th className='py-3 pr-6'>#</th>
                                <th className='py-3 pr-6'>user Id</th>
                                <th className='py-3 pr-6'>Name</th>
                                <th className='py-3 pr-6'>Phone</th>
                                {/* <th className='py-3 pr-6'>Pregnancy Date</th> */}
                                <th className='py-3 pr-6'>Temperature</th>
                                <th className='py-3 pr-6'>Heart Beat Rate</th>
                                <th className='py-3 pr-6'>Sensors</th>
                                {/* <th className='py-3 pr-6' /> */}
                            </tr>
                        </thead>
                        <tbody className='divide-y text-base-content'>
                            {rows.map((data, index) => (
                                <tr key={index}>
                                    <td className='py-4 pr-6 base-100space-nowrap'>{index + 1}</td>
                                    <td className='py-4 pr-6 base-100space-nowrap'>{data.user_id}</td>
                                    <td className='py-4 pr-6 base-100space-nowrap'>{data.user_name}</td>
                                    <td className='py-4 pr-6 base-100space-nowrap'>{data.phone}</td>
                                    {/* <td className='py-4 pr-6 base-100space-nowrap'>{data.pregnant_date}</td> */}
                                    <td className='py-4 pr-6 base-100space-nowrap'>{data.temperature}</td>
                                    <td className='py-4 pr-6 base-100space-nowrap'>{data.blood_pressure}</td>
                                    <td className='py-4 pr-6 base-100space-nowrap'>{data.blood_pressure != 0 ? <p className="text-green-500">Online</p> : <p className="text-red-500">Offline</p>}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Table
