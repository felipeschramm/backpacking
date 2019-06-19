const mongoose = require("mongoose");
const User = require("../models/user");

class UserController {
  async index(req, res) {
    const products = await User.find();
    return res.json(products);
  }
  async store(req, res) {
    const product = await User.create(req.body);
    
    return res.json(product);
  }
  async show(req, res) {
    const product = await User.findById(req.params.id);
    return res.json(product);
  }
  async update(req, res) {
    const product = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(product);
  }
  async destroy(req, res) {
    await User.findByIdAndRemove(req.params.id);
    return res.send({ deleted: true });
  }
}

module.exports = new UserController();