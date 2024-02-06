import { Navigate } from "react-router-dom"
import { isLogin } from "./helper"


const PublicRoute = ({component:Component, restricted, ...rest}) => {

    if(isLogin()){
        return <Navigate to="/" />
    }
    return (
        <Component {...rest}/>
    )
}

export default PublicRoute