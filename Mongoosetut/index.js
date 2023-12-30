// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}


// To check if we are connected or not]

// var db=mongoose.connection;
// db.on('error', console.error.bind(console,'connection error:'));
// db.once('open', function(){
//     // We are connected!
//     console.log("We are conected najimi")
// });

// made our own schema

const kittySchema = new mongoose.Schema({
    name: String
  });
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };
//   compiling our schema into a Model.\
const Kitten = mongoose.model('Kitten', kittySchema);


const fluffy = new Kitten({ name: 'fluffy' });
console.log(fluffy.name); // 'fluffy'
fluffy.speak(); // "Meow name is fluffy"

// call backs are executed after our program is completed line by line
// We have talking kittens! But we still haven't saved anything to MongoDB. Each document can be saved to the database by calling its save method. The first argument to the callback will be an error if any occurred.
// Saves the data
fluffy.save(function (err, test) {
    if (err) return console.error(err);
    test.speak();
  });



  Kitten.find( {name:"fluffy"}, function(err,kittens){
      if(err) return console.error(err);
      console.log(kittens);
  })