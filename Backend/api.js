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
    console.log("HIT THE URL!")
    let FruitToBeUpdated = req.body
    console.log(FruitToBeUpdated)
    DAO.updateStoreObject(FruitToBeUpdated,function(data){
        res.send(data)
    })
})






export default router