const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const racquetSchema = new Schema({
  name: {type: String, required: true},
  headsize: { type: Number, required: true },
  length: { type: Number, required: true },
  weight: { type: Number, required: true },
  swingweight: { type: Number, required: true },
  balancepoint: { type: String, required: true },
  stringpattern: { type: String, required: true },
  image: {type: String, required: true}
}, {
  timestamps: true,
});

const Racquet = mongoose.model('Racquet', racquetSchema);

module.exports = Racquet;