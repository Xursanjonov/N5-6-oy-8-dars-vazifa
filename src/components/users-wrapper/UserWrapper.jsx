import React, { memo } from 'react'
import UserItem from './UserItem'

const UserWrapper = ({ title, users }) => {
    return (
        <div className='flex flex-col gap-5'>
            <h1 className='text-2xl font-bold text-blue-700'>{title}</h1>
            <div className="products-data grid grid-cols-4 gap-5">
                {
                    users?.map(user => (
                        <UserItem key={user.id} user={user} />
                    ))
                }
            </div>
        </div>
    )
}

export default memo(UserWrapper)