const { Service } = require("./services");

const test = async (req, res) => {
  try {
    res
      .status(200)
      .json({ status: "success", message: "server Working properly!" });
  } catch (error) {
    new Error(error);
    console.log(error);
  }
};

const getAllProducts = async (req, res) => {
  try {

    console.log(req.query);
    const category = req.query
    const result = await Service.getAllProducts(category);

    res
      .status(200)
      .json({
        status: "success",
        message: "data retrive successfull",
        data: result,
      });
  } catch (error) {
    new Error(error);
    console.log(error);
  }
};
const getSingleProduct = async (req, res) => {
  try {

    // console.log(req.params);
    const {id} = req.params
    // console.log(id);
    const result = await Service.getSingleProduct(id);

    res
      .status(200)
      .json({
        status: "success",
        message: "single data retrive successfull",
        data: result,
      });
  } catch (error) {
    new Error(error);
    console.log(error);
  }
};

const controller = {
  test,
  getAllProducts,
  getSingleProduct
};

module.exports = { controller };
