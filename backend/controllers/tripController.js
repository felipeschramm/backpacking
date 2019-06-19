const mongoose = require("mongoose");
const Trip = require("../models/trip");

class TripController {
  async index(req, res) {
    const products = await Trip.find();
    return res.json(products);
  }
  async store(req, res) {
    const product = await Trip.create(req.body);
    
    return res.json(product);
  }
  async show(req, res) {
    const product = await Trip.findById(req.params.id);
    return res.json(product);
  }
  async update(req, res) {
    const product = await Trip.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(product);
  }
  async destroy(req, res) {
    await Trip.findByIdAndRemove(req.params.id);
    return res.send({ deleted: true });
  }
}

module.exports = new TripController();