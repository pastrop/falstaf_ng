var mongoose = require('mongoose');
var storeSchema = require('./store').storeSchema;

var productSchema = {
  name: { type: String, required: true },
  location:{
    country: {
      type: String,
    },
    region:{type: String},
  },
  vintage:{
      type: Number,
      required: true    
  },
  grape:[{type: String}],
  store: [storeSchema]
};

var schema = new mongoose.Schema(productSchema);
schema.index({name:'text', grape: 'text'});
var Product = mongoose.model('Product',schema);

module.exports.Product = Product;

schema.set('toObject', { virtuals: true });
schema.set('toJSON', { virtuals: true }); 


//For the Future
/*  internal: {
    approximatePriceUSD: Number
  }*/

  // FUTURE: Pictures must start with "http://"
  //pictures: [{ type: String, match: /^http:\/\//i }],
  /*price: {
    amount: { type: Number,
              required: true,
              set: function(v) {
                    this.internal.approximatePriceUSD = v;
                    return v;
                  }
    },
    // Only USD for now
    currency: {
      type: String,
      enum: ['USD']
//      required: true
    }
  },*/

/*
 * Human-readable string form of price - "$25" rather
 * than "25 USD"
 
schema.virtual('displayPrice').get(function() {
  return "$" + '' + this.price.amount;
});*/

/*var currencySymbols = {
  'USD': '$',
  'EUR': '€',
  'GBP': '£'
};*/
