import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'

const Create = () => {
    const [data, setData] = useState([])
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    console.log(data);

    const handleCreate = (e) => {
        e.preventDefault()
        let product = new FormData(e.target)
        const fromData = Object.fromEntries(product.entries())
        if (show) {
            let { title, brand, category, oldPrice, newPrice, count, info, img } = fromData
            setData(p => [...p, { id: nanoid(), title, brand, category, count, info, img, price: { oldPrice, newPrice } }])
            navigate('/')
        }
        else {
            setData(p => [...p, { id: nanoid(), ...fromData }]);
            navigate('/users')
        }
    }

    return (
        <section className='felx flex-col items-start gap-4'>
            <div className="flex items-center justify-start gap-10">
                <h1 className={`w-[250px] pb-1 text-2xl font-bold text-${show ? 'orange' : 'blue'}-500`}>Create new {show ? 'Product' : 'User'} </h1>
                <button onClick={() => setShow(p => !p)} className="w-[120px] px-4 py-1 text-xl font-bold rounded-md text-black border-2 border-blue-600">
                    {!show ? 'Product' : 'User'}
                </button>
            </div>
            {
                show ? (
                    <form onSubmit={handleCreate} className="w-[480px] mt-10 font-semibold flex flex-col justify-start gap-2">
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
                ) : (
                    <form onSubmit={handleCreate} className="w-[480px] mt-10 font-semibold flex flex-col justify-start gap-2">
                        <input required className='input w-[100%] input-info bg-white' type="text" name="fullName" placeholder="Full Name" />
                        <input required className='input w-[100%] input-info bg-white' type="text" name="username" placeholder="username" />
                        <input required className='input w-[100%] input-info bg-white' type="text" name="phoneNumber" placeholder="PhoneNumber" />
                        <input required className='input w-[100%] input-info bg-white' type="text" name="age" placeholder="Age" />
                        <input required className='input w-[100%] input-info bg-white' type="text" name="email" placeholder="Email" />
                        <input required className='input w-[100%] input-info bg-white' type="text" name="password" placeholder="Password" />
                        <div className="flex items-center justify-between">
                            <select name="gender" className='w-[200px] select select-info bg-white'>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            <select name="isMarried" className='w-[200px] select select-info bg-white'>
                                <option value="true">IsMarried: True</option>
                                <option value="false">IsMarried: False</option>
                            </select>
                        </div>
                        {/* <input required className='input w-[100%] input-info bg-white' type="text" name="isMarried" placeholder="IsMarried" /> */}
                        <button type='submit' className="w-[100%] text-lg font-bold btn btn-success">Create</button>
                    </form>
                )
            }
        </section>
    )
}

export default memo(Create)