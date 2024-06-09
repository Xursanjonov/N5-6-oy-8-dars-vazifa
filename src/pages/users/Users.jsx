import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'
import { baseUrl, headers } from '../products/Products'
import UserWrapper from '../../components/users-wrapper/UserWrapper'
import { postUser } from '../../context/slice/usersSlice'

const Users = () => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(baseUrl + '/users', { headers })
            .then(res => res.json())
            .then(res => dispatch(postUser(...res)))
            .catch(er => console.error(er))
    }, [])

    return (
        <section>
            <UserWrapper key={nanoid()} title={'Users'} users={users} />
        </section>
    )
}

export default memo(Users)