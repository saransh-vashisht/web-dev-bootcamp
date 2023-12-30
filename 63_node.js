// console.log("Hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Javascript|  Date and Time</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet">
      <style>
      
         
          .container{
              font-size: 23px;
              background-color: #916BBF;
  ;
              border: 2px solid #3D2C8D;
              border-width: 4px;
              padding: 34px;
             
              text-align: center;
              border-radius: 23px;
              margin: auto;
    width: 50%;
    color: #FFAB76
  ;
              font-family: 'Oswald', sans-serif;
            margin-top: 300px;
     
          }
          #time{
              font-weight: bold;
             
          }
      </style>
  </head>
  <body>
      <div class="car">
  
          <div class="container">
              
              Current Time is <span id="time"></span>
          </div>
      </div>
      <script>
          console.log("This is date and time tutorial");
          let now= new Date();
          // now=constructor and date is object
          console.log(now);
          let dt= new Date(0);
          // gives the date from which it is initialized
          console.log(dt);
          // let newDate= new Date(year,month, date, hours,minutes,seconds,milliseconds);
  
          // let newDate= new Date("2022-7-9");
          // can use this to get specific date
          let newDate= new Date(3020,4,6,9,3,34);
          console.log(newDate);
          let yr=newDate.getFullYear();
          console.log("The year is ", yr);
          // tells the year given to the function
          let dat=newDate.getDate();
          console.log("The year is ", dat);
          let month=newDate.getMonth();
          console.log("The month is ", month);
          let hours=newDate.getHours();
          console.log("The hours is ", hours);
  
          newDate.setDate(5);
          // sets the date and  also adds the date up to next month if it bigger than moonths date
          // console.log(newDate);
          // Date.now()
          // number of   millisconds spent from initial reference
          // can use it to give ttime differnce in two differences
          
          newDate.setMinutes(25);
          console.log(newDate);
          setInterval(updateTime,1000);
          function updateTime() {
              time.innerHTML= new Date();
          }
      </script>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
