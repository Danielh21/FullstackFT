import Hello from './hello'
import Express from 'express'
const app = Express()
const portNum = 3000

app.listen(portNum,function(){
    console.log(`Sever Started on Port ${portNum}`)
})