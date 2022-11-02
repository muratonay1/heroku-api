import Pocket from './pocket-core/Pocket.js';
import  PocketFirestore  from "./pocket-core/PocketFirestore.js";
import PocketUtility from './pocket-core/PocketUtility';
import cron from 'node-cron';

var pocket = new Pocket();
var db = new PocketFirestore();
pocket.put("isim","şenol");
pocket.put("soyisim","onay");


cron.schedule('* * * * *', () => {
    db.put("users",PocketUtility.GenerateOID(),pocket);
    console.log('added successfully');
});