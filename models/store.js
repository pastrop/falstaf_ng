var mongoose = require('mongoose');

var storeSchema = {
  _id: { type: String },
  location: {
  	city:{
  		type: String,
    	ref: 'Store'
  	},
  	area:{
  		type: String,
    	ref: 'Store'
  	}, 
  	address:{
  		type: String,
    	ref: 'Store'
  	}  	 	
  }
};
var Store_Schema = new mongoose.Schema(storeSchema);
var Store = mongoose.model('Store', Store_Schema);

//module.exports.Store = Store;
module.exports.storeSchema = storeSchema;
module.exports.stuff = 'some stupid stuff';

