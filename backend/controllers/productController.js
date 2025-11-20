import Product from "../models/productModel.js";

export const createProduct = async (req,res) =>{
    try
    {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    }
    catch(error)
    {
        res.status(500).json({message:error.message});
    }
};
export const getProducts = async(req,res)=>{
    try
    {
        const products = await Product.find().sort({createdAt:-1});
        res.json(products);
    }
    catch(error)
    {
        res.status(500).json({message:error.message});
    }
};
export const getProductById = async(req,res)=>{
    try
    {
        const product = await Product.findById(req.params.id);
        if(!product) return res.status(404).json({message:"Product not found"});
        res.json(product);
    }
    catch(error)
    {
        res.status(500).json({message:error.message});
    }
};
export const updateProduct = async(req,res)=>{
    try
    {
        const updated = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updated) return res.status(404).json({message:"Product not found"});
        res.json(updated);
    }
    catch(error)
    {
        res.status(500).json({message:error.message});
    }
};
export const deleteProduct = async (req,res)=>{
    try
    {
        const removed = await Product.findByIdAndDelete(req.params.id);
        if(!removed) return res.status(404).json({message:"Product not found"});
        res.json({message:"Product Deleted"});
    }
    catch(error)
    {
        res.status(500).json({message:error.message});
    }
};