import axios from "axios";
import { useState } from "react";

const Table = ({ rows }) => {

    const [loading, setLoading] = useState(false);
    
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
    
    function calculate_bpm(crs){
        let bpm;
        if (crs > 8400){
            bpm = Math.floor(Math.random()*120);
            return bpm;

            // console.log(bpm);
        }else{
            bpm = Math.round(crs * 100 / 10400);
            return bpm;
            // console.log(bpm);
            // setBloodPressure(bpm);
        }
    }
    
    function calculate_pressure(crs){
        var heart = Number(calculate_bpm(crs)) - 10;
        if (heart > 0){
            return heart;
        }else{
            return 0;
        }
    }

    function verify_user(shouldI, id){
        setLoading(true);
        axios.post(import.meta.env.VITE_BACKEND_URL + '/admin/verify', {
            verify: shouldI ? 1 : 0,
            user_id: id
        })
        .then(response => {
            const data = response.data;
            setLoading(false);
            console.log(data);
        })
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
                                <th className='py-3 pr-6'>Blood Pressure</th>
                                <th className='py-3 pr-6'>Status</th>
                                <th className='py-3 pr-6'>Sensors</th>
                                <th className='py-3 pr-6'>Action</th>
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
                                    <td className='py-4 pr-6 base-100space-nowrap'>{calculate_bpm(data.blood_pressure)}</td>
                                    <td className='py-4 pr-6 base-100space-nowrap'>{calculate_pressure(data.blood_pressure)}</td>
                                    <td className='py-4 pr-6 base-100space-nowrap'>{data.verified == 0 ? <p className="badge badge-warning animate-pulse">Pending</p> : <p className="badge badge-success">Active</p>}</td>
                                    <td className='py-4 pr-6 base-100space-nowrap'>{data.blood_pressure != 0 ? <p className="text-green-500">Online</p> : <p className="text-red-500">Offline</p>}</td>
                                    <td className='py-4 pr-6 base-100space-nowrap'>{data.verified == 0 ? <button onClick={()=>verify_user(true, data.user_id)} className="btn btn-success btn-sm">{loading ? <span className="loading loading-spinner"></span> : "Activate"}</button> : <button onClick={()=>verify_user(false, data.user_id)} className="btn btn-outline btn-error btn-sm">{loading ? <span className="loading loading-spinner"></span> : "Dectivate"}</button>}</td>
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
