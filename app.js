const express = require('express');                 //** express package for fast coding
const {PubSub} = require('@google-cloud/pubsub');   //** pubsub package */
const pubsub = new PubSub();
const app = express();

app.use(express.static(__dirname + '/views'));      //get static files (html,css,js) from "views" folder
app.use(express.urlencoded({ extended: true}));     //Load bodyParser for forms
app.use(express.json());        

const port = process.env.PORT || 8080;

const server = app.listen(port, ()=> {
  console.log(`App listening on port ${port}`);
  console.log('Press Ctrl+C to quit.');
});
const io = require('socket.io')(server);            //** socket.io package to demo console.log in browser (not needed as in, real work implementation)


const TOPIC = "mountkirk-stream-mdh";               //pubsub topic enter here 
const topic = pubsub.topic(TOPIC);
//=========express GET request=============================================
app.get('/', (req, res) => {                        //default get request call index.html
  res.status(204).send();
});

app.get('/stream', async (req, res) => {            //get request using (ipaddress)/stream
	startinterval()
	res.sendfile('views/stream.html');
});

//===========(not needed as in, real work implementation)==================
//TODO: add streaming config here                   //When console.log starts, it will stream the logging data to web browser for demo.
var events = require('events');                     //in stream.html, include https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.1.3/socket.io.js
var eventEmitter = new events.EventEmitter();       //in stream.html, include some jquery code to append console.log data to <ul id="messages"></ul>
eventEmitter.on('logging', function(message) {
  io.emit('log_message', message);
});

// Override console.log
var originConsoleLog = console.log;
console.log = function(data) {
  eventEmitter.emit('logging', data);
  originConsoleLog(data);
};

//==========Generate streaming data (json) and sent data to pubsub===========================================
let gameitem = ['Machine Gun', 'Laser Gun', 'Alien Gun', 'GunBlade', 
'Thunder Spear', 'Sniper Rifle', 'Chainsaw', 'Godzilla Axe'];

function startinterval(){
    var count=0;
	refreshIntervalId = setInterval(function() {

        //simulating streaming data in json format. Data are generated randomly
	    const payload = '{'+
                    '"userID":'+ (Math.floor(Math.random() * 100000) + 5) +
                    ',"regionID":'+ (Math.floor(Math.random() * 1000) + 5) +
                    ',"deviceType":"mobile"' +
                    ',"gameItemID":"'+ gameitem[Math.floor(Math.random() * gameitem.length)] +
                    '","pickUp":'+ (Math.floor(Math.random() * 100000) + 5) +
                    ',"pickUpLocation":'+Math.floor(Math.random() * Math.floor(10)) +
                    ',"runTime":'+Math.floor(Math.random() * Math.floor(100)) +
                    ',"timestamp":"'+new Date().toISOString() +'"'+
                    '}';
        const data = Buffer.from(payload);
        
          try {
                const messageId = topic.publish(data);      //sent data to pubsub
            } catch (error) {
                next(error);
            }

        console.log(payload);
        if (++count === 5) {
           clearInterval(refreshIntervalId);
        }
    }, 3000);
}
