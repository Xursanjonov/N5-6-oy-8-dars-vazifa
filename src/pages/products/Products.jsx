import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'
import ProductsWrapper from '../../components/products-wrapper/ProductsWrapper'
import { postProduct } from '../../context/slice/productsSlice'

export const baseUrl = 'http://localhost:3003'
export const headers = { 'Content-Type': 'application/json' }

const Products = () => {
    const data = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(baseUrl + '/products', { headers })
            .then(res => res.json())
            .then(res => dispatch(postProduct(...res)))
            .catch(er => console.error(er))
    }, [])

    return (
        <section>
            <ProductsWrapper key={nanoid()} data={data} title={'Products'} />
        </section>
    )
}

export default memo(Products)