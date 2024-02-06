
// let accessToken = "";
export function login(token:string){
    localStorage.setItem('accessToken', token)
}

export function logout(){
    localStorage.removeItem('accessToken')
}

export function isLogin(){
    if(localStorage.getItem('accessToken')){
        return true
    }
    return false
}
