const ErrorPage = () => {

    return (
        <>
            <main>
                <div className='flex flex-col items-center justify-center h-screen max-w-screen-xl px-4 mx-auto md:px-8'>
                    <div className='max-w-lg mx-auto text-center'>
                        <div className='pb-6'>
                            { /* logo */}
                            <img src='/images/logo/logo-black.svg' className='w-[160px] mx-auto' />
                        </div>
                        <h3 className='text-4xl font-semibold text-base-content sm:text-5xl'>
                            Ooh! Snap 😖
                        </h3>
                        <p className='mt-3 text-base-content/95'>
                            An error occured and this page is unable to display. Contact the server provider for further assistance
                        </p>
                        <button onClick={() => window.history.back()} className="mt-3 text-white bg-black btn hover:bg-black hover:bg-opacity-80">Refresh</button>
                    </div>
                    {/* <b className="absolute bottom-0 left-7">Error: <span className="font-normal">{error.statusText || error.message}</span></b> */}
                </div>
            </main>
        </>
    )
}

export default ErrorPage
