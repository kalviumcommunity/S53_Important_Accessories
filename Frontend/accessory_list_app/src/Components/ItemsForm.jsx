import React from 'react'
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
import { useNavigate } from 'react-router-dom';

const formSchema = z.object({
  name: z.string().min(3).max(35),
  category: z.string().min(3).max(20),
  description: z.string().min(10),
  image: z.string().url(),
  averageBuyPrice: z.string().min(3, {
    message: "It may not be free 😎"
  }),
  amazonLink: z.string().url()
})

const ItemsForm = () => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      category: "",
      description: "",
      image: "",
      averageBuyPrice: "₹ ",
      amazonLink: ""
    },
  })

  async function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
      await axios.post("https://s53-important-accessories.onrender.com/accessory", values)
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
                  <Input placeholder="Name..." {...field} />
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
                  <Input placeholder="Keyboard / Mouse / ?" {...field} />
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
                  <Textarea placeholder="It is a wonderful item used for..." {...field}/>
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
                  <Input placeholder="" {...field} />
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
                  <Input placeholder="unsplash.com/beautifullImage" {...field} />
                </FormControl>
                <FormMessage className="text-rose-500" />
              </FormItem>
            )}
          />

<FormField
            control={form.control}
            name="amazonLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link to Purchase Item</FormLabel>
                <FormControl>
                  <Input placeholder="amazon.com/greatItem" {...field} />
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

export default ItemsForm;