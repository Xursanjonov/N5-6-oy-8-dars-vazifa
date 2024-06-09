import React, { memo, useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import UserWrapper from '../../components/users-wrapper/UserWrapper'

const Users = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3003/users', { headers: { 'Content-Type': 'application/json' } })
            .then(res => res.json())
            .then(res => setData([...res]))
            .catch(er => console.error(er))
    }, [])
    useEffect(() => {
        localStorage.setItem('users-data', JSON.stringify(data))
    }, [])

    return (
        <section>
            <UserWrapper key={nanoid()} title={'Users'} users={data} />
        </section>
    )
}

export default memo(Users)