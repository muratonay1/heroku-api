import Pocket from './pocket-core/Pocket.js';
import  PocketFirestore  from "./pocket-core/PocketFirestore.js";
import PocketUtility from './pocket-core/PocketUtility.js';
import cron from 'node-cron';

var pocket = new Pocket();
var db = new PocketFirestore();
pocket.put("insertTime",PocketUtility.GetRealTime());
pocket.put("insertDate",PocketUtility.GetRealDate());


cron.schedule('* * * * *', () => {
    db.put("users",PocketUtility.GenerateOID(),pocket,(response)=>{
        console.log("batch triggered and works successfully.");
    });
});
