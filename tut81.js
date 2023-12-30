// Inserting data in MongoDB
// use harrykart 
// harrykart database will be created and get start using 


// mongod - acitvates the server
// another window mongo make it usable
db.items.insertOne({name: "Samsung 30s" , price: 22000,rating:4.5, qty: 233, sold:98})


db.items.insertMany([{name: "Samsung 30s" , price: 22000,rating:4.5, qty: 233, sold:98},{name: "Moto 30s" , price: 29000,rating:3.5, qty: 133, sold:598},{name: "Iphone 13 pro max" , price: 129000,rating:4.8, qty: 633, sold:98}])

db.items.find()- also known as query 
helps to find the objects in the databases

// can also add items in unique fashion 


