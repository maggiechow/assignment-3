var mongoose = require('mongoose');
var SampleSchema = new mongoose.Schema({
  event: String,
  amount: Number,
},
{
    collection: 'work_related_collection'
});
mongoose.model('Sample', SampleSchema);