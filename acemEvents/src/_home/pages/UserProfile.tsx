import Navbar from "@/components/Navbar"
import axios from "axios"
import { useEffect, useState } from "react"


const UserProfile = () => {
  const [details, setDetails] = useState({
    username: "",
    email: ""
  })
  useEffect(()=>{
    axios.get("http://localhost:4000/user",{headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
              }}).then((response)=>{
                // console.log("from-userprofile: ",response.data)
                setDetails(response.data)
              })
  },[])
  return (
    <div className='w-screen h-screen px-[5%] md:px-[20%] py-[20px]'>
      <Navbar/>
      <hr  className='my-5'/>
      <div className="flex flex-row gap-4">
      <h2 className="text-2xl">Username: </h2><h2 className="text-2xl text-bold text-primary">{details.username}</h2>
      </div>
      <div className="flex flex-row gap-4">
      <h2 className="text-2xl">Email: </h2><h2 className="text-2xl text-bold text-primary">{details.email}</h2>
      </div>
    </div>
  )
}

export default UserProfile