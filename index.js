const express = require('express')

const app = express()
const port = 3000

app.use(express.json())
app.use(express.static("public"))

const {MongoClient} = require('mongodb')

// Update this url to reflect your MongoDB info
const url = "mongodb+srv://mmendoza5:SebasTian12@cluster0.wjicg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const client = new MongoClient(url)


app.get('/users/:searchBy/:input', (req, res) => {
  
  async function find() {
    try {
      // ***** Add your code here to find the document(s)
      const searchBy = req.params.searchBy
      const inputStr = req.params.input

      await client.connect()
      const collection = client.db('sample_analytics').collection('customers')
      const doc = await collection.findOne({[searchBy]: inputStr})
      await client.close()
      res.send(doc)
    } 
    catch(err) {
      console.log(err)
      res.sendStatus(400)
    }
  }
  find()
})


app.listen(port)