import { useState, useEffect } from 'react';
import { Card } from 'flowbite-react';
import { Input } from '../assets/Shadcn UI Components/Input';
import * as React from 'react';
// import Rating from '@mui/material/Rating';
import { Rating } from '@mantine/core';
import axios from "axios";
import { Button } from '../assets/Shadcn UI Components/button';
import { Link } from 'react-router-dom';

const Cards = () => {

    const [items, SetItems] = useState([])

    const fetchData = ()=> {
        axios.get("https://s53-important-accessories.onrender.com/accessory")
        .then((res)=> {
            SetItems(res.data)
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        fetchData();
    },[])

    return (
        <>
        <Input className="w-[80vw] md:w-[20vw]" type={"search"} placeholder="🔍  Search Items" />
        <div className='grid grid-cols-1 md:grid-cols-2 m-[auto] gap-[3vmin] bg-amber-100 text-center p-5'>
        {items.map((items)=> {
            return (
                <Card className="max-w-sm m-[auto] glass bg-yellow-200 min-h-[45vh]" key={items._id} imgSrc={items.image} horizontal>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {items.category}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {items.description}
                    </p>
                    <p className="font-normal text-gray-800 dark:text-gray-600">
                        Average Buy: {items.averageBuyPrice}
                    </p>
                    <a href={items.amazonLink} target='blank' className="btn btn-primary">Buy Now</a>
                    <div className='flex justify-between'>
                        <Link to={`/update/${items._id}`}>
                            <Button variant="secondary" className="bg-slate-400 hover:bg-slate-500">Update</Button>
                        </Link>
                        <Button variant="destructive" className="bg-red-400 hover:bg-red-500">Delete</Button>
                    </div>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </Card>
        )
        })} 
            </div>
        </>
    )
}

export default Cards;