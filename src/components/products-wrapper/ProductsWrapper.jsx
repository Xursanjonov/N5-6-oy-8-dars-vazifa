import React, { memo } from 'react'
import ProductsItem from './ProductsItem'

const ProductsWrapper = ({ data, title }) => {
    return (
        <div className='flex flex-col gap-5'>
            <h1 className='text-2xl font-bold text-blue-700'>{title}</h1>
            <div className="products-data grid grid-cols-4 gap-5">
                {
                    data?.map(product => (
                        <ProductsItem key={product.id} el={product} />
                    ))
                }
            </div>
        </div>
    )
}


export default memo(ProductsWrapper)