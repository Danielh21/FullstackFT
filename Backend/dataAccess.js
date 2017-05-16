var url = "mongodb://toDoUser:Hest123@ds119588.mlab.com:19588/todo"
import {MongoClient} from 'mongodb'
import assert from 'assert'

class DataAccessObject{

    getURL(){
        return url
    }

    getAllProducts(callback){
        MongoClient.connect(url,function(err,db){
            assert.equal(null,err)
            db.collection('store').find({}).toArray(function(err,data){
                assert.equal(null,err)
                db.close()
                callback(data)
            })
        })
    }

    createStoreObject(storeObj,callback){
        MongoClient.connect(url,function(err,db){
            assert.equal(null,err)
            db.collection('store').insertOne({name:storeObj.name, price:storeObj.price, available: storeObj.available},
            function(err,data){
                assert.equal(err,null)
                var result = data.ops[0]
                callback(result)
            })
        })
    }

    updateStoreObject(updateObj,callback){
        MongoClient.connect(url,function(err,db){
            assert.equal(null,err)
            db.collection('store').findOneAndUpdate({name:updateObj.FruitName}, 
            {$set:{available:updateObj.available}},
            { returnOriginal: false},
            function(err, data){
                assert.equal(err,null)
                var result = data.value
                callback(result)
            })
        })
    }

}


export default new DataAccessObject()