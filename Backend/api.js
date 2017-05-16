import DAO from './dataAccess'
import express from 'express'
const router = express.Router();

router.get("/hej", function(req,res){
    var jsonString = JSON.stringify(DAO.getSomeData())
    res.send(jsonString)
})





export default router