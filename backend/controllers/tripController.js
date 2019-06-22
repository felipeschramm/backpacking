const mongoose = require("mongoose");
const Trip = require("../models/trip");

class TripController {
  async index(req, res) {
    const products = await Trip.find();
    return res.json(products);
  }
  async store(req, res) {
    const{nome} = req.body;
    
    const product = await Trip.create({
      nome
    });
    
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

  async selectCity(req,res){
    const cidade = await Trip.findOne({"cidade":req.params.cidade});
    return res.json(cidade);
  }
}

module.exports = new TripController();