// CRUD operations= Create, read , update and delete 
// most of the databases are considered to have only these basic opewrations atleast 
use harrykart
db.anothercollections.insertOne({a:89})
// makes the another collection in our database

// updating the currently existing database of only one item
db.items.updateOne({filter item}, {$set: {value to be changed}})


db.items.updateOne({name:"Moto 30s"}, {$set:{price:2}})

// use arrow keys in powershell to move in our command history
db.items.updateMany({name:"Moto 30s"}, {$set:{price:2}})
// update all the items with the given filter item with our details

// can use mongodb compass for all the commands

