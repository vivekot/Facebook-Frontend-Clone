import react from 'react'

function Header(){
    return(
        <div>
            <header className='bg-blue-600 p-4 flex justify-between items-center'>
                <div className='text-white text-2xl font-bold'>Facebook</div>
                <div className='flext space-x-4'>
                    <input
                    type='text'
                    placeholder='Email or Phone'
                    className='p-2 rounded'
                    />
                    <input
                    type='password'
                    placeholder='password'
                    className='p-2 rounded'
                    />
                    <button className='bg-blue-800 text-white p-2 rounded'>Log In</button>
                </div>
            </header>
        </div>
    )
}

export default Header;