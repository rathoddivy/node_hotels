const mongoose=require('mongoose');


const menuscema =  new mongoose.Schema({ 

name :{
    type :String , 
    required :true
},

price :{

    type :String,
    required :true
},
taste:{
    type:String,
    required :true,
    enum : ['spicey' , 'normal' , 'mirchi']
},
is_drink:{
    type:Boolean,
    default:false,
},

ingredients :{

    type:String,
    enum :['chicken wings' ,'spices', 'haldi','mirchi']  ,
    required :true
},
num_sales:{

    type:Number,
    default:0,
}




})

const menu=mongoose.model('menu' , menuscema)
module.exports=menu;