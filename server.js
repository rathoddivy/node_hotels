// backend server 

const express= require('express');
const app=express();  // use app variable for use "express"
const db=require('./db')




// scema is here in  person
const person=require('./models/person')  //person scema 


const bodypaser =require('body-parser');  // all body parser data saved in   ----(req.body)
app.use(bodypaser.json());


// think data coming from /person link

app.post('/person' , async (req , res)   =>{



try{
    const data= req.body  //data transfer into data variable 

    const newperson=new person(data);  // scema tranfer into newperson
    
    // newperson.name = data.name 
    // newperson.age =  data.age
    // newperson.email = data.email                --- aavu na karvu pade tena mate data ne new person ma pass kari didhu
    // newperson.work = data.work
    // newperson.mobile = data.mobile
    // newperson.salary = data.salary
    // newperson.adress = data.adress
    
    const response = await newperson.save();  // wait karo jub tuk data nai aata if send errore so , go directly in catch function .
    console.log('data is saved ');
    res.status(200).json(response)


}catch(err){  // catch errore


    console.log(err);
res.status(500).json({error :'internal server error'});
}
   



})


app.get('/person' , async (req, res)=>{

  try{

    const data= await person.find()
    res.json(data)
    console.log("data fetch succesfully")

  }catch{
res.json(err)


  }
})


// fix router 

const router= require('./routerofperson');  
const router2 = require('./routerofmenu');// router file 

app.use('/menu', router2);  // the live server express can use also / for get, post etc..........
  

app.use('/person', router);



// hello my  self divyaraj (this msg only for testing)














// some apis for practices ❤
app.get('/express' , function(req , res){

    res.send("wellcome you are in server 😁")
})
app.get('/menu' , (req , res)=>{ 
var menu  =  {
drinks:'soup ,water ,tomato soup',
dinner :'tandoori , panerr tikka , paneerr chilli',
swite:'icecream , pan'
    }
 res.send(menu)
})



app.listen(3000 , ()=>{
    console.log('listening on port 3000')
})