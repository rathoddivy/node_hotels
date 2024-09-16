const mongoose=require('mongoose');
const bcrypt= require('bcrypt')

const personscema =  new mongoose.Schema({   // passing monggose.scema
    name: {
        type: String,
        required: true,
        unique: true  // Ensure usernames are unique
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
},

username:{

    type:String,
    requried:true
},
password:{
    type:String,
    requried:true

}


})


personscema.pre('save', async function(next) {
    const personData=this;
    
if(!personData.isModified('password')) 
    return next();

    try{
// genrate salt
const salt=await bcrypt.genSalt(10);

//genrate hashpassword
const hashedpassword= await bcrypt.hash(personData.password, salt)


// hashed password ne aapna database ma nakhiye
personData.password= hashedpassword;
console.log("Hashed Password:", personData.password);
next();
    }catch(err){
return next(err);


    }
})

personscema.methods.comparepassword = async function(candidatePassword) {
    try {
        // Log the provided password and the stored (hashed) password
        console.log("Candidate Password:", candidatePassword);
        console.log("Stored Hashed Password:", this.password);

        const ismatch = await bcrypt.compare(candidatePassword, this.password);
        return ismatch;  // true or false
    } catch (err) {
        throw err;
    }
};




//create person model

const person=mongoose.model('person' , personscema);  // so the person have scema now 

module.exports=person;