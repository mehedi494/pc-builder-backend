const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: String,
  status: {
    type: String,
    enum: ["in-stock", "out-of-stock"],
    price:String,
    rating:String,
    category:String,
    image:String,
    description:String,
    individualRating:String,
    avgRating:String,
    review:String,
    keyFeature:{type:[{String}]}

  },
});

const Products = mongoose.model("Products", ProductSchema);

module.exports = { Products };
