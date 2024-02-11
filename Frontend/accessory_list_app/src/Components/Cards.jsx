import { Card } from 'flowbite-react';
import { Input } from '../assets/Shadcn UI Components/Input';
import * as React from 'react';
// import Rating from '@mui/material/Rating';
import { Rating } from '@mantine/core';


const Cards = () => {
    return (
        <>
            <Input className="w-[80vw] md:w-[20vw]" type={"search"} placeholder="🔍  Search Items" />
            <div className='grid grid-cols-1 md:grid-cols-2 m-[auto] gap-[3vmin] bg-amber-100 text-center p-5'>
                <Card className="max-w-sm m-[auto] glass bg-yellow-200" imgSrc="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" horizontal>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                    <button className="btn btn-primary">Buy Now</button>
                    {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
                </Card>
            </div>
        </>
    )
}

export default Cards;