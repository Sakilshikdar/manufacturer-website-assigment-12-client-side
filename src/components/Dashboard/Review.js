import React from 'react'
import { toast } from 'react-toastify'

const Review = () => { 
    const handleSubmit = (even) => {
        even.preventDefault();
        const ratting = {
            name: even.target.name.value,
            ratting: even.target.ratting.value,
        }
        fetch('https://sleepy-shore-49038.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ratting)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast('review done')
                }
                else {
                    toast('review not done')
                }

            })
    }

    return (
        <div className=" bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='lg:ml-64'>
                    <h1 >Reviews</h1>
                </div>
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 mt-5'>
                            <input placeholder= 'Your name' name='name' type="text" className="input input-bordered w-full " />
                            <input name='ratting' placeholder='reviews in 1-5'   type="number" className="input input-bordered w-full " />
                            <input type="submit"  value='submit' className="btn btn-secondary w-full" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;