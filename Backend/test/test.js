/*
OBS FOR Testing run the npm start in a diffrent 
process
*/
const axios = require('axios')
const expect = require('chai').expect
const baseURL = "http://localhost:3000"

describe('API Test', function(){


    before(function(done){
        done()
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


})
