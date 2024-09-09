const mongoose=require('mongoose');


const menuscema =  new mongoose.Schema({ 

name :{
    type :String , 
    required :true
},

price :{

    type :String,

},
taste:{
    type:String,
    
    enum : ['spicey' , 'normal' , 'mirchi']
},
is_drink:{
    type:Boolean,
    default:false,
},

ingredients :{

    type:String,
    enum :['chicken wings' ,'spices', 'haldi','mirchi']  ,
    
},
num_sales:{

    type:Number,
    default:0,
}




})

const menu=mongoose.model('menu' , menuscema)
module.exports=menu;