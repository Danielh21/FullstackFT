import Express from 'express'
const app = Express()
const portNum = 3000
import api from './api'

app.listen(portNum,function(){
    console.log(`Sever Started on Port ${portNum}`)
})

app.use("/api",api)

