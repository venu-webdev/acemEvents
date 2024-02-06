import { isLogin } from "@/helper"
import { Outlet, Navigate } from "react-router-dom"

const AuthLayout = () => {


  return (
    <>
      {isLogin() ? (
        <Navigate to = "/"/>
      ):(
        <>
          <section className="flex flex-1 justify-start items-center flex-col h-screen">
            <Outlet/> 
          </section>
        </>
      )}
    </>
  )
}

export default AuthLayout