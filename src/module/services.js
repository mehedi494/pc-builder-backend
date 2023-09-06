const { Products } = require("./model");




/* find all  product and find by category=cpu/ram */

const getAllProducts = async (category) => {
  console.log(category);
  const result = await Products.find(category);
  return result;
};


const getSingleProduct =async(id)=>{
    console.log(id);
const result = await Products.findById(id)
return result  
 }


const Service = { getAllProducts,getSingleProduct };

module.exports = { Service };
