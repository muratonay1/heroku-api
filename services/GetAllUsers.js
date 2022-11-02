import  PocketFirestore  from "./PocketFirestore.js";
import Pocket from '../pocket-core/Pocket.js';
var db = new PocketFirestore();
var pocket = new Pocket();
export default function getData(callback) {
    db.getAll("users", (pool) => {
        pocket.put("name","murat")
        pocket.put("surname","onay")
        pocket.put("data",pool);
        callback(pocket);
    })
}