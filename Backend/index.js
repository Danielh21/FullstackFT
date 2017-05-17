import Express from 'express'
const app = Express()
const portNum = 3000
import api from './api'
import bodyParser from 'body-parser'


app.listen(portNum,function(){
    console.log(`Sever Started on Port ${portNum}`)
})


// This is allowing Cross Origin since React project runs on other port
    app.use('/', function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3050');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", function(req,res){
   res.send("Server is running")
})

app.use("/api",api)


app.post("/newOrder", function(req,res,next){
       var order = req.body.order
    console.log("Order was Recieved:" + order)
    // It does nothing but print out the order!
    res.send("Succes!")
})

