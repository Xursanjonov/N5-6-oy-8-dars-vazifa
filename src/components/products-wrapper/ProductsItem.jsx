import React, { memo } from 'react'

const ProductsItem = ({ el }) => {
    return (
        <div className="w-[300px] h-[360px] mx-auto border-2 flex flex-col gap-4 rounded-xl">
            <figure className='w-[296px] h-[200px]'>
                <img className='w-[100%] h-[100%] mx-auto object-cover rounded-t-xl'
                    src={el.img} alt={el.title} />
            </figure>
            <div className="product-info px-5 flex flex-col gap-2">
                <h4 className='text-lg font-semibold'>{el.title}</h4>
                <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                        <s className='font-semibold italic text-gray-300'>${el.price?.oldPrice}</s>
                        <p className='text-lg font-semibold text-red-500'>${el.price?.newPrice}</p>
                    </div>
                    <p>Count: {el.count}</p>
                </div>
                <div className="flex items-center justify-end gap-4">
                    <button className="p-2 flex items-center justify-center btn-outline rounded-md bg-gray-100 text-black">
                        <i className="fa-regular fa-heart"></i>
                    </button>
                    <button className="p-2 flex items-center justify-center btn-outline rounded-md bg-green-300 text-black">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default memo(ProductsItem)