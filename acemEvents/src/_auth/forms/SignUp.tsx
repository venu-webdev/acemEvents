import { Button } from '@/components/ui/button'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Navbar from '@/components/Navbar'
import axios from "axios"
import { login } from '@/helper'
import { Link, useNavigate } from 'react-router-dom'
import { useToast } from '@/components/ui/use-toast'
// import { createUserAccount } from '@/lib/appwrite/api'

const signUpValidation = z.object({
  email: z.string().email({message: "Enter a valid email"}),
  username: z.string().min(2,{
    message: 'username must be atleast two characters'
  }).max(40,{
    message: "username can't be more than 40 characters"
  }),
  password: z.string().min(6).max(14)
})


const SignUp = () => {
  const {toast} = useToast()
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof signUpValidation>>({
    resolver: zodResolver(signUpValidation),
    defaultValues: {
      email: "",
      username: "",
      password: ""
  },})

  async function onSubmit(values: z.infer<typeof signUpValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try{
      axios.post("http://localhost:4000/register",values).then((response)=>{
      // console.log("response: ",response.data)
      if(response.data.accessToken){
        login(response.data.accessToken)
        toast({
          description: response.data.message,
        })
        return navigate("/")
      }
      toast({
        description: response.data.message,
      })
      
    })
    }catch(error){
      console.log("inside up catch block")
      console.log(error)
    }
  }

  return (
    <div className='w-screen px-8 py-8 md:w-[500px]'>

      <Navbar></Navbar>
      <hr className='my-4'/>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type='email' placeholder="johndoe@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
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
                <Input type='password' placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className='w-full' type="submit">Register</Button>
        <p className='text-sm text-center'>
          Already have an account? 
          <Link className='text-primary  font-semibold' to={"/sign-in"}> Sign In</Link>
        </p>
      </form>
    </Form>
    </div>
  )
}

export default SignUp