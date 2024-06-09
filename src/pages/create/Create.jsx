import React, { memo, useState } from 'react'

const Create = () => {
    const [show, setShow] = useState(false)

    return (
        <section className='felx flex-col items-start gap-4'>
            <div className="flex items-center justify-start gap-10">
                <h1 className={`w-[250px] pb-1 text-2xl font-bold text-${show ? 'orange' : 'blue'}-500`}>Create new {show ? 'User' : 'Product'} </h1>
                <button onClick={() => setShow(p => !p)} className="w-[120px] px-4 py-1 text-xl font-bold rounded-md text-black border-2 border-blue-600">
                    {!show ? 'User' : 'Product'}
                </button>
            </div>
            <form className="w-[480px] mt-10 font-semibold flex flex-col justify-start gap-2">
                <input required className='input w-[100%] input-info bg-white' type="text" name="title" placeholder="Title" />
                <input required className='input w-[100%] input-info bg-white' type="text" name="brand" placeholder="Brand" />
                <input required className='input w-[100%] input-info bg-white' type="text" name="category" placeholder="Category" />
                <input required className='input w-[100%] input-info bg-white' type="text" name="oldPrice" placeholder="Old Prcie" />
                <input required className='input w-[100%] input-info bg-white' type="text" name="newPrice" placeholder="New Prcie" />
                <input required className='input w-[100%] input-info bg-white' type="text" name="count" placeholder="Count" />
                <input required className='input w-[100%] input-info bg-white' type="text" name="info" placeholder="Description" />
                <input required className='input w-[100%] input-info bg-white' type="text" name="img" placeholder="Image" />
                <button type='submit' className="w-[100%] text-lg font-bold btn btn-success">Create</button>
            </form>
        </section>
    )
}

export default memo(Create)