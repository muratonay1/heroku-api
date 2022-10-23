import express from 'express';

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send({"name":"murat","surname":"onay","job":"software engineer"});
})

app.listen(process.env.PORT || 5000, () => {
    console.log("server");
})