import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// interface Ievents {
//   _id: string;
//   eventType:string,
// events:{
//     type:[{
//         eventId: Number,
//         title: {type: string, required: true},
//         subtitle:string,
//         description: string,
//         uploadDate: string,
//         eventDate: string,
//         eventLocation: string,
//         eventTime: string,
//         imgUrl: string,
//         moreData: string,
//         posterUrl: string,
//         dateString:string,
//     }]
// } 
// }

const Home = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  function fetchData(ref:string){
    try{
      axios.get(`http://localhost:4000/${ref}`,{headers: {
                'authorization': 'Bearer ' + localStorage.getItem('accessToken')
              }}).then((response)=>{
                // console.log("got the resonse")
                // console.log("from: ",response.data)
                setData(response.data.data)
              })
    }catch(error){
      console.log(error)
    }
    // console.log("data[0].events:",data[0]["events"][0])
  }
  useEffect(()=>{
    try{
      axios.get("http://localhost:4000/events/Important",{headers: {
                'authorization': 'Bearer ' + localStorage.getItem('accessToken')
              }}).then((response)=>{
                console.log("got the resonse")
                console.log("from: ",response.data)
                setData(response.data.data)
              })
    }catch(error){
      console.log(error)
    }
  },[])
  return (
    <div className='w-screen h-screen px-[5%] md:px-[20%] py-[20px]'>
      <Navbar/>
      <hr  className='my-5'/>
      <div className='m-auto flex flex-row gap-2 border-transparent border-[1px] p-2 rounded-md w-[fit-content]'>
        <Button variant={'outline'} onClick={()=>{
          navigate("/")
          fetchData("events/Important")
        }} className='opacity-80 focus:font-semibold focus:bg-red-800 focus:text-white'>
          Important
        </Button>
        <Button variant={'outline'} onClick={()=>{navigate("/")
        fetchData("events/Academics")}} className='opacity-80 focus:font-semibold focus:bg-blue-800 focus:text-white'>
          Academics
        </Button>
        <Button variant={'outline'} onClick={()=>{navigate("/")
        fetchData("events/Cultural")}} className='opacity-80 focus:font-semibold focus:bg-blue-800 focus:text-white'>
          Cultural
        </Button>
        <Button variant={'outline'} onClick={()=>{navigate("/")
        fetchData("events/Social")}} className='opacity-80 focus:font-semibold focus:bg-blue-800 focus:text-white'>
          Social
        </Button>
        <Button variant={'outline'} onClick={()=>{navigate("/")
        fetchData("events/Academics")}} className='opacity-80 focus:font-semibold focus:bg-blue-800 focus:text-white'>
          Academics
        </Button>
      </div>
      <div>
        data is {data?"rendered": "not rendered"}
      </div>
      <div>{Array.isArray(data)?(data).map(event=>{
        // console.log("dat: ",dat)
        return(
          <div>
            <div>{event.title}</div>
            <div>{event.description?event.description: ""}</div>
            <div>{event.imgUrl?event.imgUrl: ""}</div>
            <img src={event.imgUrl?event.imgUrl: ""} alt="" />
            <hr />
          </div>
        )
      }): "not rendered"}</div>
    </div>
  )
}


export default Home