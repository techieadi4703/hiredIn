const express = require('express')
const route = express.Router()
const bcrypt=require('bcryptjs')
require('./../db/conn')
const cookieParser = require('cookie-parser');
app.use(cookieParser());
require('../middlewares/auth')
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

route.post('/signin', async(req,res)=>{
    try{
        // let token;
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({error: "Please fill all fields."});
        }
        const userExist = await User.findOne({email:email});
        // console.log(userExist);
        
        if(!userExist){
            return res.status(400).json({error: "Invalid mcredentials."});
        }
        else{
            const match = await bcrypt.compare(password,userExist.password);
            const token= await userExist.generateAuthToken();
            console.log(token);
            res.cookie("jwToken",token,{
                expires:new Date(Date.now()+ 25892000000), // 30 days
                httpOnly:true,
                sameSite: "none",
                secure: true,
            });
            if(!match){
                return res.status(400).json({error: "Invalid pcredentials."});
            }
            else{
                console.log(userExist);
                // console.log('my token is',token);
                res.json({'message':'welcome beta'})
                console.log('welcome mr.',userExist.name)
            }
        }
        

    }catch(err){
        console.log(err);
    }
})


route.get('/about',auth, (req, res) =>{
    console.log("Hello about!");
    res.send('Hello about!');
})


module.exports= route;
