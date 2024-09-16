const express=require('express')
const router=express.Router();
const { passport, authenticated } = require('./auth'); // Import from auth.js
const bodypaser =require('body-parser');  // all body parser data saved in   ----(req.body)
router.use(bodypaser.json());


const person=require('./Scemas/person')  //person scema 
router.get('/',authenticated,async (req, res) => {
  try {
      const data = await person.find();
      res.json(data);
      console.log('Data fetched successfully');
  } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
  }
});





  router.post('/', async (req, res) => {
    try {
      const dataofperson = req.body;
      const persondata = new person(dataofperson);
      const response = await persondata.save();
      console.log('Your person is saved');
      res.json(response);
    } catch (err) {
      console.error(err); // Log the actual error for debugging
      res.status(500).json({ error: 'Internal server error' });
    }
  })







router.get('/:worktype', async (req,res)=>{
try{
  const work = req.params.worktype;  // worktype paramiter ne work ma naki didhu

  if(work =='chef'|| work =='waiter'||work =='manager')
  {
const response =await person.find({work:work})
res.status(200).json(response)


  }else[
    res.status(500).json({error:"invalid worktype"})
  ]

}catch(err){

res.status(600).json({error:"internal server errore"})
}

})



// how to update data of database ?
router.put("/:id" , async (req , res)=>{

try{
  const personid = req.params.id;

  const data=req.body;
 
 
   response = await person.findByIdAndUpdate(personid, data,{

    new:true,
    runValidators:true,
   })

   if(!response){
    return res.status(404).json({error:"person not found"})
   }
   res.status(200).json(response)

}catch(err){
res.status(500).json({error : "internal server errore"})

}
  

})

// delete the record 
router.delete("/:id" , async (req , res) =>{
  try{

    const personid = req.params.id;
    const response =await person.findByIdAndDelete(personid)
    res.status(200).json(response)


  }catch(err){

    res.status(500).json({error : "internal server errore"})

  }
})


module.exports=router;