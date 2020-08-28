const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(process.env.MONGODB_URI || uri
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const racquetsRouter = require('./routes/racquets');

app.use('/racquets', racquetsRouter);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});