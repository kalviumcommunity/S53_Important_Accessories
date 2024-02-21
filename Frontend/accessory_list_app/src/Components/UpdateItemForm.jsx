import React, { useEffect, useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "../assets/Shadcn UI Components/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../assets/Shadcn UI Components/form"
import { Input } from "../assets/Shadcn UI Components/Input"
import { Textarea } from "../assets/Shadcn UI Components/textarea"
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';

const formSchema = z.object({
  name: z.string().min(3).max(35),
  category: z.string().min(3).max(20),
  description: z.string().min(10),
  image: z.string().url(),
  averageBuyPrice: z.string().min(3, {
    message: "It may not be free 😎"
  }),
  amazonBuyLink: z.string().url()
})

const UpdateItemForm = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [averageBuyPrice, setAverageBuyPrice] = useState("")
  const [amazonBuyLink, setAmazonBuyLink] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true);
    axios.get(`https://s53-important-accessories.onrender.com/accessory/${id}`)
    .then((res)=>{
      setName(res.data.name);
      setCategory(res.data.category);
      setDescription(res.data.description);
      setImage(res.data.image);
      setAverageBuyPrice(res.data.averageBuyPrice);
      setAmazonBuyLink(res.data.amazonBuyLink);
      setLoading(false);
    })
    .catch((err)=>{
      setLoading(false);
      console.log(err);
    });
  },[])

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      category: "",
      description: "",
      image: "",
      averageBuyPrice: "₹ ",
      amazonBuyLink: ""
    },
  })

  async function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
      await axios.patch(`https://s53-important-accessories.onrender.com/accessory/${id}`, values)
      .then(()=>{
        console.log(values);
        navigate('/items')
      })
      .catch((err)=>{
        console.log(err)
      })

    }
  

  return (
    <div className='bg-[#E8D5B5] p-[3vmin]'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[90vw] sm:w-[70vw] p-[10vmin] m-[auto] glass">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name of Item</FormLabel>
                <FormControl>
                  <Input value={name} onChange={(e)=>setName(e.target.value)} {...field} />
                </FormControl>
                <FormDescription>
                  Please provide name of the item.
                </FormDescription>
                <FormMessage className="text-rose-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category of your Item</FormLabel>
                <FormControl>
                  <Input value={category} onChange={(e)=>setCategory(e.target.value)} {...field} />
                </FormControl>
                <FormDescription>
                  What would you call item in general ?
                </FormDescription>
                <FormMessage className="text-rose-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  {/* <Input placeholder="Name..." {...field}/> */}
                  <Textarea value={description} onChange={(e)=>setDescription(e.target.value)} {...field}/>
                </FormControl>
                <FormDescription>
                  Describe what purpose, the serves...
                </FormDescription>
                <FormMessage className="text-rose-500" />
              </FormItem>
            )}
          />

<FormField
            control={form.control}
            name="averageBuyPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Average Buy Price</FormLabel>
                <FormControl>
                  <Input value={averageBuyPrice} onChange={(e)=>setAverageBuyPrice(e.target.value)} {...field} />
                </FormControl>
                <FormDescription>
                  What would you call item in general ?
                </FormDescription>
                <FormMessage className="text-rose-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image Link of item</FormLabel>
                <FormControl>
                  <Input value={image} onChange={(e)=>setImage(e.target.value)} {...field} />
                </FormControl>
                <FormMessage className="text-rose-500" />
              </FormItem>
            )}
          />

<FormField
            control={form.control}
            name="amazonBuyLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link to Purchase Item</FormLabel>
                <FormControl>
                  <Input value={amazonBuyLink} onChange={(e)=>setAmazonBuyLink(e.target.value)} {...field} />
                </FormControl>
                <FormDescription>
                  What would you call item in general ?
                </FormDescription>
                <FormMessage className="text-rose-500" />
              </FormItem>
            )}
          />
          <Button type="submit" className="text-white">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default UpdateItemForm;