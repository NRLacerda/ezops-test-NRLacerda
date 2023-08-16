var express = require('express');
var mongoose = require('mongoose');


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://nrochalacerda:SaEZScQ33W5WNEEg@ezopsnrlacerda.6r4wyyb.mongodb.net/?retryWrites=true&w=majority";

var app = express();

app.use(express.static(__dirname));

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
mongoose.connect(uri).then(()=>{
    console.log("Connected.");
})
.catch((err)=>{
    console.log(err);
})
  var Message = mongoose.model('Message',{ name : String, message : String})
/*
  run().catch(console.dir);*/
var server = app.listen(3000, ()=>{
    console.log('server is running on port', server.address().port)
})

