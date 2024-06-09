import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/react.svg'

const Header = () => {
    return (
        <header className='py-4 mb-8 text-black bg-white shadow-md'>
            <nav className='max-w-[1480px] w-[100%] mx-auto flex items-center justify-between'>
                <Link to={`/`} className='text-2xl font-bold flex items-center gap-2'> <img src={logo} /> React </Link>
                <ul className='text-xl font-semibold text-blue-700 flex items-center justify-center gap-8'>
                    <Link to={`/`} > Home </Link>
                    <Link to={`/users`} > Users </Link>
                    <Link to={`/create`} > Create </Link>
                </ul>
                <div className="flex items-center justify-center gap-4">
                    <Link to={`/login`}
                        className='px-4 py-1 text-xl font-semibold rounded-lg text-white bg-blue-600 border-2 border-blue-500'>
                        Login
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default memo(Header)