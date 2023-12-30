const express=require("express")
const path= require("path")
const fs= require("fs");


const app= express();
const port=80;
// static files are those files which are acessed by anyone with the link without any authentication
// Express specific stuff
app.use('/static', express.static('static'))// For serving static files
app.use(express.urlencoded())
// pug specific stuff

app.set('view engine', 'pug')// set the template engine as pug
 

app.set('views', path.join(__dirname, 'views'))// set the views directory// can also be called  template

// Our pug demo endpoint
// app.get("/demo", (req,res)=>{
//     res.status(200).render('demo', { title: 'Hey Siri', message: 'Hello there and thanks for telling me how to use pug!' })
// });

// app.get("/", (req,res)=>{
//     res.status(200).send("This is my homepage of my first express app with Saransh");
// });
// app.get("/about", (req,res)=>{
//     res.send("This is about page of  first express app with Saransh");
// });
// app.post("/about", (req,res)=>{
//     res.send("This is post request about page of  first express app with Saransh");
// });
// app.get("/this", (req,res)=>{
//     res.status(404).send("This page is not found on my website ");
// });

app.get('/', (req,res)=>{
    const con="This is the best content on the internet so  far so use it wisely "
    const params={'title' : 'Pubg id the best game ', "content":con}
    res.status(200).render('index.pug', params);
});
app.post('/', (req,res)=>{
    name=req.body.name
    age=req.body.age
    gender=req.body.gender
    address=req.body.address
    more=req.body.more
    let OutputtoWrite= `The name of the client is ${name} , ${age} years old, ${gender} , residing at ${address} . More about him/her: ${more}`
    fs.writeFileSync(`output.txt` , OutputtoWrite)
    const params={'message' : 'Your Form has been submitted sucessfully '}
    res.status(200).render('index.pug', params);
})
// Start the server

app.listen(port, () => {
    console.log(`THe application started sucessfully on port ${port}`);
})