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
import axios from 'axios'
import { login } from '@/helper'
import { Link, useNavigate } from 'react-router-dom'
import { useToast } from '@/components/ui/use-toast'

const signInValidation = z.object({
  email: z.string().email({message: "Enter a valid email"}),
  password: z.string().min(6).max(14)
})


const SignIn = () => {
  const {toast} = useToast()
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof signInValidation>>({
    resolver: zodResolver(signInValidation),
    defaultValues: {
      email: "",
      password: ""
  },})

  async function onSubmit(values: z.infer<typeof signInValidation>){
    try{
      axios.post("http://localhost:4000/sign-in",values)
      .then((response)=>{
        console.log("response: ",response.data)
        if(response.data.accessToken){
          login(response.data.accessToken)
          toast({
            description:response.data.message
          })
          navigate("/")
        }
        else{
          
          toast({
            description:response.data.message
          })
        }})
    }
    catch(error){
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

        <Button className='w-full' type="submit">Sign In</Button>
        <p className='text-sm text-center'>
          Don't have an account?
          <Link className='text-primary  font-semibold' to={"/sign-up"}> Sign Up</Link>
        </p>
      </form>
    </Form>
    </div>
  )
}

export default SignIn