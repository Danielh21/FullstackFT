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

}


export default new DataAccessObject()