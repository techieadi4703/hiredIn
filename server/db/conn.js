const { default: mongoose } = require("mongoose");
const DB=process.env.DATABASE;

mongoose.connect(DB,{
    // useNewUrlParser:true,
    // useCreateIndex:true,
    // useUnifiedTopology:true,
    // useFindAndModify:false
}).then(()=>{
    console.log('succsefull db conn');
}).catch((err)=>{
    console.log(err);
    console.log('db not connected');
})