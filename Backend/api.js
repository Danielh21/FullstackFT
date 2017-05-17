import DAO from './dataAccess'
import express from 'express'
const router = express.Router();


router.get("/store", function(req,res){
    DAO.getAllProducts(function(data){
        res.send(data)
    })
})

router.post("/store", function(req,res){
    let storeObj = req.body.Fruit
    DAO.createStoreObject(storeObj,function(data){
        res.send(data)
    })
})

router.put("/store",function(req,res){
    let FruitToBeUpdated = req.body
    DAO.updateStoreObject(FruitToBeUpdated,function(data){
        res.send(data)
    })
})


router.post("/neworder"), function(req,res){
    var order = req.body.order
    console.log("Order was Recieved:" + order)
    // It does nothing but print out the order!
    res.send("Succes!")
}






export default router