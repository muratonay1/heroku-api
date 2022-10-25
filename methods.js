import  PocketFirestore  from "./PocketFirestore.js";
var db = new PocketFirestore();

export default function getData(callback) {
    db.getAll("users", (pool) => {
        callback(pool);
    })
}