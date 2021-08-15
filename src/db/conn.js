const mongoose= require('mongoose')

mongoose.connect('mongodb://localhost:27017/olympic',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("CONNECTION SUCESSFUL")
}).catch((e)=>{
    console.log("NOT connection ")
})