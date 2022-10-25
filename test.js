import express from 'express';

const app = express();
app.use(express.json());

app.get("/users",(req,res)=>{
    res.send({"name":"murat","job":"engineer1"});
})

app.listen(process.env.PORT || 5000, () => {
    console.log("server");
})
