const express = require("express");
const { createProduct, getProducts, findProduct, deleteProduct, updateProduct} = require("../controllers/productControllers");

const router = express.Router();
router.use(express.json());

//Allow url encoding
router.use(express.urlencoded({ extended: true }));

//post("/create", createproduct);

router.post("/createproduct", createProduct);
router.get("/getproducts", getProducts);
router.get("/findproduct/:id", findProduct);
router.put("/updateproduct/:id", updateProduct);
router.delete("/deleteproduct/:id", deleteProduct);





module.exports = router;

