import React, { useRef } from 'react'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

const NewTask = () => {

    const reftitle = useRef('')
    const refdesc = useRef('')
    const refdate = useRef('')
    const reftime = useRef('')

    const handleSubmit = (even) => {
        even.preventDefault();
        const title = reftitle.current.value;
        const desc = refdesc.current.value;
        const date = refdate.current.value;
        const time = reftime.current.value;

        if ((!title || !desc || !date || !time)) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const product = {
            title: title,
            desc: desc,
            date: date,
            time: time

        }
        console.log(product);
        fetch('https://hexatech-server.herokuapp.com/newTask', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    even.target.reset();
                    toast('task successfully added')
                }
                else {
                    toast('something wrong')
                }
            })

    }


    return (
        <div className='lg:my-40 lg:mx-48'>
            <h1 className='text-3xl flex justify-center my-4'>Task Management</h1>
            <div className="card card-compact w-75 bg-base-300 shadow-xl">
                <div className="card-body">
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 mt-5'>
                        <div className='bg-white p-3'>
                            <h1 className='text-lg'>The Start & End (Due) dates can be provides for tasks</h1>
                            <div className='flex'>
                                <div>
                                    <h1 className='text-lg mt-3 mr-2'>Description:  </h1>
                                </div>
                                <div className='w-6/12'>
                                    <textarea ref={refdesc} type="text" className="input input-bordered w-full" placeholder='task-description'></textarea>
                                </div>
                            </div>
                        </div>


                        <div className='bg-white p-3'>
                            <h1 className='text-lg'>Task Information</h1>
                            <div className='flex'>
                                <div>
                                    <h1 className='text-sm mt-3 mr-2'>Owner:  </h1>
                                </div>
                                <div className='w-6/12'>
                                    <input ref={reftitle} type="text" className="input input-bordered w-full" />
                                </div>
                            </div>
                            <div className="divider "></div>
                            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>
                                <div>
                                    <div className='flex'>
                                        <div>
                                            <h1 className='text-sm mt-3 mr-2 font-light'>Task-tittle:  </h1>
                                        </div>
                                        <div className='w-9/12'>
                                            <input ref={reftitle} type="text" className="input input-bordered w-full" placeholder='task-title' />
                                        </div>
                                    </div>
                                    <div className="divider w-11/12"></div>
                                </div>

                                <div>
                                    <div className='flex'>
                                        <div>
                                            <h1 className='text-sm mt-3 mr-2  font-light'>Date:  </h1>
                                        </div>
                                        <div className='w-9/12'>
                                            <input ref={refdate} type="date" className="input input-bordered w-full" placeholder='Start-date(Day-M-Year)' />
                                        </div>
                                    </div>
                                    <div className="divider w-11/12"></div>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>
                                <div>
                                    <div className='flex'>
                                        <div>
                                            <h1 className='text-sm mt-3 mr-2 font-light'>Time:  </h1>
                                        </div>
                                        <div className='w-9/12'>
                                            <input ref={reftime} type="time" className="input input-bordered w-full" placeholder='Due-date(Day-M-Year)' />
                                        </div>
                                    </div>
                                    <div className="divider w-11/12"></div>
                                </div>
                            </div>
                        <div className='py-3'>
                        <input type="submit" value='Add Task' className="hover:bg-primary rounded text-white font-bold " />
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewTask