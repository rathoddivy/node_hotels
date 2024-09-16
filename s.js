
// this only for practice


const hello= require('express');
const app=hello();

const db=require('./db')

// some apis for practices ❤
app.get('/express' , function(req , res){

    res.send("wellcome you are in server 😁")
})
app.get('/menu' , (req , res)=>{ 
var ok  =  {
drinks:'soup ,water ,tomato soup',
dinner :'tandoori , panerr tikka , paneerr chilli',
swite:'icecream , pan'
    }
 res.send(ok)
})

app.listen(3000 , ()=>{
    console.log('listening on port 3000')
})