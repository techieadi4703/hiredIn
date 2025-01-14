const express = require('express')
const route = express.Router()
const bcrypt=require('bcryptjs')
require('./../db/conn')
// const cookieParser = require('cookie-parser');
// app.use(cookieParser());
const auth=require('../middlewares/auth')
const User = require("./../model/userSchema");
const jwt=require('jsonwebtoken')

route.get('/', (req, res) =>{
    console.log('router working')
    res.send('Hello World!');
})

//using Promises
/*
route.post('/register', (req, res) =>{
    const {name, email,phone, work, password, cpassword} = req.body;

    if(!name|| !email|| !phone|| !work|| !password|| !cpassword){
        return res.status(422).json({error: "Please fill all fields."})
    }

    User.findOne({email:email})
        .then((userExist=>{
            if(userExist){
                return res.status(422).json({error: "Email already exist."});
            }
            else if(passwod!=cpassword){
                return res.status(422).json({error: "Password and confirm password should be same."})
            }
            const user=new User({name, email,phone, work, password, cpassword});
            user.save()
                .then(() => {
                res.status(201).json({message: "User registred successfully!"});
                console.log('hello mr.',name)
                })
                .catch((err) => {
                    res.status(400).json({message: "Failed to register user!"});
                });
    }))
    .catch((err)=>{
        console.log(err);
    })

})
*/


//using async await
route.post('/register', async (req, res) =>{
   console.log("hello world");
    try{
        console.log(req.body);
        const {name, email,phone, work, password, cpassword} = req.body;
        if(!name|| !email|| !phone|| !work|| !password|| !cpassword){
            return res.status(422).json({error: "Please fill all fields."})
        }

        try{
            const userExist=await User.findOne({email:email});

            if(userExist){
                return res.status(422).json({error: "Email already exist."});
            }
            else if(password!=cpassword){
                return res.status(422).json({error: "Password and confirm password should be same."})
            }
            const user=new User({name, email,phone, work, password, cpassword});
            await user.save()
            res.status(201).json({message: "User registred successfully!"});  
            console.log('Thanks for registering mr.',name)  
            console.log('your password is',password)
        }catch(error){
            console.log(error);
        }
    }catch(err){
        console.log(err);
    }
})

route.post('/signin', async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ error: "Please fill all fields." });
      }
  
      const userExist = await User.findOne({ email: email });
      if (!userExist) {
        return res.status(400).json({ error: "Invalid ucredentials." });
      }
  
      const match = await bcrypt.compare(password, userExist.password);
      if (!match) {
        return res.status(400).json({ error: "Invalid passcredentials." });
      }
  
      const token = await userExist.generateAuthToken();
      console.log("Generated Token:", token);
  
      res.cookie("jwToken", token, {
        expires: new Date(Date.now() + 25892000000), // 30 days
        httpOnly: true,
        sameSite: "strict",
        secure: false, // Set to true for production with HTTPS
      });
  
      res.json({ message: "Sign-in successful!" });
      console.log("User signed in:", userExist.name);
    } catch (err) {
      console.log(err);
      res.status(500).send("Server error");
    }
  });
  

route.get('/about',auth, (req, res) =>{
    console.log("Hello about!");
    res.send(req.rootUser);
})
route.get('/contact',auth, (req, res) =>{
    console.log("Hello contact!");
    res.send(req.rootUser);
})
route.post('/cont',auth, async (req, res) =>{
    console.log("Hello contact!");
    try{
        const {name,email,phone,message}=req.body;
        if(!name||!email||!phone||!message){
            console.log("error in contact form");
            return res.status(400).json({error:"Please fill all contact fields."})
        }
        const userContact=await User.findOne({_id:req.userID})
        if(userContact){
            const userMessage=await userContact.addMessage(name,email,phone,message);
            await userContact.save();
            console.log("Message added");
            res.status(201).json({message:"user contaxct succesful"})
        }
    }catch(err){
        console.log(err);
    }
})
module.exports= route;
