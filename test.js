import express from 'express';

const app = express();
app.use(express.json());

app.get("/users",(req,res)=>{
    res.send({"name":"murat","job":"engineer","testData":"testValue"});
})

app.listen(process.env.PORT || 5000, () => {
    console.log("server");
})
