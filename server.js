var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Message = mongoose.model('Message',{ name : String, message : String})
var app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

//const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://nrochalacerda:SaEZScQ33W5WNEEg@ezopsnrlacerda.6r4wyyb.mongodb.net/?retryWrites=true&w=majority";

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

/*const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
*/

/*
  run().catch(console.dir);
*/
mongoose.connect(uri).then(()=>{
    console.log("Connected to the DB.");
})
.catch((err)=>{
    console.log(err);
})

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    socket.on('message', (msg) => {
        console.log('message: ' + msg);
      });
  });

server.listen(3000, ()=>{
    console.log('server is running on port', server.address().port)
})



app.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find({});
    res.send(messages);
  } catch (error) {
    res.status(500).send('Error fetching messages');
  }
});

app.post('/messages', async (req, res) => {
  try {
    const message = new Message(req.body);
    await message.save();
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});
  

  
/*app.post('/messages', async (req, res) => {
  try {
    const message = new Message(req.body);
    await message.save();
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});*/