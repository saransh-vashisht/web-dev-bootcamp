// Searching for data in MongoDB

use harrykart 
// This query will return all the items
db.items.find({})



// This query will return all the objects with rating 3.5
db.items.find({rating:3.5})

// This query will return pbject greater than and equal to our given values
db.items.find({rating: {$gte: 3.5}})

// This query will return item only greater then the given value
db.items.find({rating: {$gt: 3.5}})

// And operator
// gives items only having both rating and price

db.items.find({rating: {$gt: 3.5}, price:{$gt: 4000}})

// gives items less than and both price variable
db.items.find({rating: {$lt: 3.5}, price:{$gt: 114000}})


// Or operator
db.items.find({$or:[{rating: {$lt: 3.5}}, {price:{$gt: 114000}}]})

// WIll only gives the rating variable of objects having rating greater than 3.5
db.items.find({rating: {$gt: 3.5}}, {rating:1})

// Will only give the rating variable and quantity variable having rating greater than 3.5
db.items.find({rating: {$gt: 3.5}}, {rating:1, qty:1})

show collections
// shows all the collections