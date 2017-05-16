import DAO from './dataAccess'
import express from 'express'
const router = express.Router();

router.get("/store", function(req,res){
    DAO.getAllProducts(function(data){
        res.send(data)
    })
})






export default router