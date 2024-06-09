import React, { memo, useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import ProductsWrapper from '../../components/products-wrapper/ProductsWrapper'

const Products = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3003/products', { headers: { 'Content-Type': 'application/json' } })
            .then(res => res.json())
            .then(res => setData([...res]))
            .catch(er => console.error(er))
    }, [])
    console.log(data);
    useEffect(() => {
        localStorage.setItem('products-data', JSON.stringify(data))
    }, [data])

    return (
        <section>
            <ProductsWrapper key={nanoid()} data={data} title={'Products'} />
        </section>
    )
}

export default memo(Products)