const test = async (req, res) => {
try {
    res
    .status(200)
    .json({ status: "success", message: "server Working properly!" });
} catch (error) {
    new Error(error)
    console.log(error);
}
};



const controller = {
  test,
};

module.exports = { controller };
