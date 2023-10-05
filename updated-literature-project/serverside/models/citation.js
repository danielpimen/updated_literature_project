const mongoose = require('mongoose');

const citationSchema = new mongoose.Schema({
    citeID: {type: String, required: true},
    authors:  { type: String, required: true},
    year:  { type: String, required: true},
    title:  { type: String, required: true},
    publication:  { type: String, required: true},
    page_numbers:  { type: String, required: true},
    section:  { type: String, required: true},
    full_citation:  { type: String, required: true},
   
});

//Parameters: (model_name, schema_to_use, collection_name)
//module.exports is used to allow external access to the model  
module.exports = mongoose.model('Citation', citationSchema,'sources');