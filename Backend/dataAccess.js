
var url = "mongodb://toDoUser:Hest123@ds119588.mlab.com:19588/todo"

class DataAccessObject{

    getURL(){
        return url
    }

    getSomeData(){
        return {title:"this is a object!"}
    }

}


export default new DataAccessObject()