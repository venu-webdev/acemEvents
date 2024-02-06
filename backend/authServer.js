require('dotenv').config()

const express = require("express")
const cors = require("cors")
const jwt = require('jsonwebtoken');

const app = express()

const port = 5000

app.use(express.json())
app.use(cors())

let refreshTokens = []

app.post("/token", (req,res)=>{
    const refreshToken = req.body.token
    if(refreshToken == null) return res.sendStatus(401)
    if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403)

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err,user)=>{
        if(err) return res.sendStatus(401)
        const accessToken = generateAccessToken({email: user.email})
        res.json({
            "accessToken": accessToken
        })
    })
})

app.delete("/logout", (req,res)=>{
    refreshTokens = refreshTokens.filter((token)=> token !== req.body.token)
    res.sendStatus(201)
})
app.post("/register", (req,res)=>{
    //generate access token
    const email = req.body.email.toLowerCase()
    const user = {email: email}

    const accessToken = generateAccessToken(user)
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN)
    refreshTokens.push(refreshToken)
    res.json({
        "AccessToken": accessToken,
        "RefreshToken": refreshToken
    })
})

//to sign in the user
app.get("/sign-in",authenticationToken, (req,res)=>{
    // console.log(req.email)
    res.json(users.filter((user)=> user.email === req.email))
})

function authenticationToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    if(token == null) return res.sendStatus(401) //no token is sent
    console.log("token: ", token)
    jwt.verify(token, process.env.ACCESS_TOKEN, (err,email)=>{
        if(err) return res.sendStatus(403) //not valid token so don't have access
        console.log("user in fun: ", email)
        req.email = email
        next()
    })

}

function generateAccessToken(user){
    return jwt.sign(user,process.env.ACCESS_TOKEN, {expiresIn: '15s'})
}

app.listen(port, ()=>console.log("Server running on port", port))
