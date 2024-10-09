import axios from 'axios'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import CreateSession from '../utilities/CreateSession';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)

    const handleForm = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.target);
        const formObject = Object.fromEntries(formData.entries())
        e.target.reset();
        
        axios.post(import.meta.env.VITE_BACKEND_URL + "/admin/login", formObject)
        // axios.post("http://localhost:3000/admin/login", formObject)
            .then(response => {
                setIsLoading(false);
                const data = response.data;
                if (data.success) {
                    toast.success('Authenticating ' + formObject.email);
                    console.log(data);
                    if (CreateSession(formObject.email)) {
                        navigate('/');
                    }
                } else {
                    toast.error(data.error);
                    // console.log(data);

                }

            })
            .catch(error => {
                setIsLoading(false);
                toast.error(error);
            })


    }
    return (
        <>
            <Toaster />

            <main className='flex flex-col items-center justify-center w-full h-screen px-4'>
                <div className='w-full max-w-sm p-5 bg-gray-100 rounded-sm shadow-lg space-y-5 text-base-content'>
                    <div className='text-center'>
                        { /* logo */}
                        <img src='/images/logo/logo-black.svg' width='150' className='mx-auto' />
                        <div className='mt-5 space-y-2'>
                            <h3 className='text-2xl font-bold text-base-content sm:text-3xl'>Log In</h3>
                        </div>
                    </div>
                    <form onSubmit={handleForm} className='mt-8 space-y-5'>
                        <div>
                            <label className='font-medium'>
                                Email
                            </label>
                            <input type='email' name="email" required className='w-full px-3 py-2 mt-2 bg-transparent border rounded-lg shadow-sm outline-none text-base-content/90 focus:border-primary' />
                        </div>
                        <div>
                            <label className='font-medium'>
                                Password
                            </label>
                            <input type='password' name="password" required className='w-full px-3 py-2 mt-2 bg-transparent border rounded-lg shadow-sm outline-none text-base-content/90 focus:border-primary' />

                        </div>
                        {isLoading ?
                            <button className='w-full text-base duration-150 btn btn-primary' disabled> <span className='text-white loading loading-spinner' /> </button>
                            :
                            <button className='w-full text-base duration-150 btn btn-primary'> Sign in </button>
                        }

                    </form>
                </div>
            </main>
        </>
    )
}

export default Login
