const mongoose=require('mongoose');


const personscema =  new mongoose.Schema({   // passing monggose.scema
name :{
    type:String,
    requried: true
},

age:{
    type:Number
},

work :{

    type:String,
    enum :['chef', 'waiter' , 'manager'],
    requried:true
},

mobile:{
    type: String,
    requried:true
},

email:{
    type :String, 
    requried:true,
    unique:true   // email is unique requried  
},

adress:{

    type:String 
},

salary:{

    type:Number,
    requried:true
}


})

//create person model

const person=mongoose.model('person' , personscema);  // so the person have scema now 

module.exports=person;