/*
OBS FOR Testing run the npm start in a diffrent 
Terminal
*/
const axios = require('axios')
//import axios from 'axios'
const expect = require('chai').expect
const baseURL = "http://localhost:3000"
const MongoClient = require('mongodb').MongoClient

describe('API Test', function(){


    before(function(done){
        done()
    })

    afterEach(function(done){
        //Cleans up. Deletes Pear!
        MongoClient.connect("mongodb://toDoUser:Hest123@ds119588.mlab.com:19588/todo", function(err,db){
        db.collection("store").deleteOne({name: 'Pear'}, function(err,data){
            done()
            })
        })
    })

    describe('Server Started test', function(){
        it('#if Failed make sure to run npm start from diffrent terminal', function(done){
            axios.get(`${baseURL}`)
            .then(function(response){
                expect(response.status).to.be.equal(200)
                done()
            })
        })
    })

    describe('insert a Document', function(){
        it('insert a dummyObject', function(done){
            var dummyFruit = {name: "Pear", price:12, available: true }
            axios.post(`${baseURL}/api/store`,{ Fruit: dummyFruit })
            .then(function(response){
                expect(response.data._id).to.exist
                expect(response.data.name).to.be.equal("Pear")
                done()
            })
            .catch(function(err){
                //console.log(err)
                expect(false).to.be.equal(true)
                done()
            })
        })
    })

    describe('Edit the Status of an Object', function(){
        it('Edit status', function(done){
             var dummyFruit = {name: "Pear", price:12, available: true }
            axios.post(`${baseURL}/api/store`,{ Fruit: dummyFruit })
            .then(function(response){
                expect(response.data._id).to.exist
                expect(response.data.name).to.be.equal("Pear")
                
                    axios.put(`${baseURL}/api/store`,{FruitName: "Pear", available: false})
                            .then(function(response){
                            expect(response.data.available).to.be.equal(false)
                                    done()
                        })
                        .catch(function(err){
                            console.log(err)
                            expect(false).to.be.equal(true)
                            done()
                        })
            })
        }).timeout(5000) // The response from Mlab tends to be slow.
    })



})
