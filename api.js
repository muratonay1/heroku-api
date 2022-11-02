import express from 'express';
import getData from './services/methods.js';
const app = express();
app.use(express.json());

app.get("/users",(req,res)=>{
    getData((pool)=>{
        res.send(pool);
    })
})
app.listen(process.env.PORT || 5000, () => {
    console.log("server");
})
