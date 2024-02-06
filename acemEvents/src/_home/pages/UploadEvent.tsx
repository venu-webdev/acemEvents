import Navbar from "@/components/Navbar"
import { Button } from '@/components/ui/button'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import { useToast } from '@/components/ui/use-toast'
import { createRef, useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

const eventDataValidation = z.object({
    eventType: z.enum(["Announcements", "Academics", "Cultural", "Community", "Career", "Sports", "Alumni", "Celebrations", "Others"]),
    title: z.string().min(1,{message:'This is required'}).max(50),
    description: z.string().min(1,{message:'This is required'}).max(300),
    eventDate: z.string(),
    eventTime: z.string().max(100),
    eventLocation: z.string().max(100),
    dateString: z.string().max(50),
    imgUrl: z.string(),
    postUrl: z.string(),
    moreData: z.string().max(1000),
    extlinks: z.string()
  })
  
const UploadEvent = () => {
  // const file = createRef()
      // const [eventType, setEventType] = useState("Anouncements")
          const {toast} = useToast()
          // const [file, setFile] = useState()
          // const navigate = useNavigate();
          const form = useForm<z.infer<typeof eventDataValidation>>({
            resolver: zodResolver(eventDataValidation),
            defaultValues: {
                title: "",
                description: "",
                eventDate: "",
                eventTime: "",
                eventLocation: "",
                dateString: "",
                imgUrl: "",
                postUrl: "",
                moreData: "",
                extlinks: ""}
            })
    async function onSubmit(values: z.infer<typeof eventDataValidation>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log("values: ", values)
        // const formData = new FormData();
        // formData.append('file', file)
        // console.log("test 2 :",values.img.files[0])
        // console.log("{values}: ",{ values})
        // console.log("{values}: ",values.eventType)
        // const {title, description, eventDate, eventTime, eventLocation, imgUrl, postUrl, dateString, moreData, extlinks} = values 
        // console.log("detructured: ",title, description, eventDate)
        try{
           await axios.post(`http://localhost:4000/addEvent/${values.eventType}`,values,{headers: {
                'authorization': 'Bearer ' + localStorage.getItem('accessToken'),
                // "Content-Type":"multipart/form-data",
              }}).then((response)=>{
                // console.log("got the resonse")
                console.log("displaying from uploadEvents.tsx: ",response.data)
                toast({
                  description: response.data.message,
                })
              })
          
        }catch(error){
          console.log("ue.tsx: inside catch block")
          console.log("error:",error)
        }
      }
      return (
        <div className='w-screen h-screen px-[5%] md:px-[20%] py-[20px]'>
          <Navbar/>
          <hr  className='my-5'/>
          <div className="md:w-[500px]">
            <h2 className="text-3xl font-semibold">Upload Event</h2>
            <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} encType="multipart/form-data" className="space-y-8">
        
            <FormField
              control={form.control}
              name="eventType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Type</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type"/>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Announcements">Announcements</SelectItem>
                      <SelectItem value="Academics">Academics</SelectItem>
                      <SelectItem value="Career">Career</SelectItem>
                      <SelectItem value="Cultural">Cultural</SelectItem>
                      <SelectItem value="Sports">Sports</SelectItem>
                      <SelectItem value="Celebrations">Celebrations</SelectItem>
                      <SelectItem value="Community">Community</SelectItem>
                      <SelectItem value="Alumni">Alumni</SelectItem>
                      <SelectItem value="Others">Others</SelectItem>
                    </SelectContent>
                    <FormMessage />
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Event title here: " {...field} />
                  </FormControl>
                  <FormMessage />
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
                  <Textarea
                      placeholder="Describe about the event"
                      {...field}
                  />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="eventDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Date</FormLabel>
                  <FormControl>
                  <Input
                      placeholder="event date"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="eventTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Time</FormLabel>
                  <FormControl>
                  <Input
                      placeholder="event time"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="eventLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Location</FormLabel>
                  <FormControl>
                  <Input
                      placeholder="event location"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dateString"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date String</FormLabel>
                  <FormControl>
                  <Input
                      placeholder="enter date in continuous format "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="imgUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Img Url</FormLabel>
                  <FormControl>
                  <Input
                      placeholder="image url"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="postUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Post Url</FormLabel>
                  <FormControl>
                  <Input
                      placeholder="post url"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="moreData"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>More Data</FormLabel>
                  <FormControl>
                  <Textarea
                      placeholder="more data"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="extlinks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>External Links</FormLabel>
                  <FormControl>
                  <Textarea
                      placeholder="external links"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />



          {/* <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">Upload Image</Label>
                <Input name="file" type="file" onChange={(e)=>{
                  setFile(e.target.files[0])
                }} />
                <Input id="picture" name="file" type="file" ref={file} />
              </div> */}
          
            <Button className='w-full' type="submit">Submit</Button>
          </form>
        </Form>
          </div>
        </div>
      )
}

export default UploadEvent