import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../assets/Shadcn UI Components/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../assets/Shadcn UI Components/form";
import { Input } from "../assets/Shadcn UI Components/Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(35, { message: "Name cannot exceed 35 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
});

const UserSignUpForm = ({setUser}) => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    await axios
      .post(
        "https://s53-important-accessories.onrender.com/user/signup",
        values
      )
      .then((res) => {
        console.log(res.data);
        document.cookie = `token=${res.data.accessToken}`;
        setUser(res.data._id)
        // console.log(values);
        // navigate('/items')
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>UserName</FormLabel>
                <FormControl>
                  <Input placeholder="Name..." {...field} />
                </FormControl>
                <FormDescription>Please provide your user name</FormDescription>
                <FormMessage className="text-rose-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input placeholder="You@email.com" {...field} />
                </FormControl>
                <FormMessage className="text-rose-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="passsword" {...field} />
                </FormControl>
                <FormDescription>
                  Password should have at least 6 characters, one uppercase letter, one lowercase letter, one digit, and one special character.
                </FormDescription>
                <FormMessage className="text-rose-500" />
              </FormItem>
            )}
          />
          <Button type="submit" className="text-white">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default UserSignUpForm;