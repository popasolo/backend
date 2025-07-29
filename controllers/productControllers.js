const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("../models/ProductModel");

//Create Product Model
const createProduct = async (req, res) => {
  try {
    const { name, quantity, price, image } = req.body;
    const existingProduct = await Product.findOne({ name });
    if (existingProduct) {
      console.log("Product already exists");
      res.status(500).json(existingProduct);
    } else {
      const newProduct = await Product.create({ name, quantity, price, image });
      res.status(200).json(newProduct);
      console.log("Product created successfully", newProduct);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Product unsuccessful", err);
  }
  //Get all products
  //Find product by ID
  
  
  
};
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    console.log("Fetched product");
    res.status(200).json(products);
  } catch (err) {
    console.log("Error fetching products", err);
    res.status(500).json({ error: err.message });
  }
};

const findProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      console.log("Product not found");
      return res.status(404).json({ error: "Product not found" });
    }
    console.log("Product found");
    res.status(200).json(product);
  } catch (err) {
    console.log("Error fetching product", err);
    res.status(500).json({ error: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findbyIdandUpdate(req.params.id, req.body);
    if (!product) {
      console.log("Product not found");
      return res.status(404).json({ error: "Product not found" });
    }
    console.log("Product updated successfully");
    res.status(200).json(product);
  } catch (err) {
    console.log("Failed to update product", err);
    res.status(500).json({ error: err.message });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      console.log("Product not found");
      return res.status(404).json({ error: "Product not found" });
    }
    console.log("Product deleted successfully");
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    console.log("Failed to delete product", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createProduct,
  getProducts,
  findProduct,
  updateProduct,
  deleteProduct,
};