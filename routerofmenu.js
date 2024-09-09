const express=require('express')
const router=express.Router();


const menu= require('./models/menu')




router.post('/' , async ( req,res) =>{

    try{
        const menudata= req.body 
      const new_menu=new menu(menudata); 
    
      const result= await new_menu.save();
    
      console.log("Your order is Saved")
     res.status(200).json(result)
     
    }catch(err){
        res.status(500).json({error :'internal server error'});
    }
    } )
    
    
    router.get('/', async (req, res)=>{
    try{
    
    const get=await menu.find()
    res.json(get)
    console.log("your data is fetched from database")
    
    }catch(err){
    res.status(500).json({error:"internal errore  he bhai dont worry, go to the vs code"})
    
    }
    
    })







    router.get('/:Taste' , async (req , res)=>{
        try{
        
            const taste = req.params.Taste;
            if (taste=='mirchi' || taste == 'spicey' || taste=='Normal'){
        const response =await menu.find({taste:taste})
        res.status(200).json(response)
            }else{
                res.status(500).json({error:"invalid taste"})
            }
        
        }catch(err){
        
            res.status(400).json({error : "internal server error"})
        
        }
          
        })

        
module.exports=router;