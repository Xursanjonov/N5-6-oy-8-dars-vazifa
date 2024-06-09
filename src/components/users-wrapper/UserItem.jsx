import React, { memo } from 'react'

const UserItem = ({ user }) => {
    return (
        <div className="w-[300px] h-[540px] mx-auto border-2 flex flex-col gap-4 rounded-xl">
            <figure className='w-[296px] h-[300px]'>
                <img className='w-[100%] h-[100%] mx-auto object-cover rounded-t-xl'
                    src={user.img} alt={user.fullName} />
            </figure>
            <div className="product-info px-5 flex flex-col gap-2">
                <h4 className='text-lg font-semibold'>
                    <span> Name: </span> {user.fullName}
                </h4>
                <h4 className='text-lg font-semibold'>
                    <span> username: </span> {user.username}
                </h4>
                <h4 className='text-lg font-semibold'>
                    <span> Phone: </span> {user.phoneNumber}
                </h4>
                <h4 className='text-lg font-semibold'>
                    <span> Age: </span> {user.age}
                </h4>
                <h4 className='text-lg font-semibold'>
                    <span> Gender: </span> {user.gender}
                </h4>
                <div className="flex items-center justify-between">
                    <h4 className='text-lg font-bold'>
                        IsMarreid: {user.isMarried ? '✅' : '❌'}
                    </h4>
                    <button className='px-2 py-1 rounded-md bg-orange-500' > <i class="fa-solid fa-trash"></i> </button>
                    <button className='px-2 py-1 rounded-md bg-orange-500' > edit </button>
                </div>
            </div>
        </div>
    )
}

export default memo(UserItem)