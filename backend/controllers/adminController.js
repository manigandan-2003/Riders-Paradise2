const Bike = require("../models/bikeSchema");
const TestRide = require("../models/testRideSchema");
const BookNow = require("../models/bookNowSchema");
const Contact = require("../models/ContactSchema");

const addBike = async (req, res) => {
  try {
    const newBike = await Bike.create(req.body);
    res.status(201).json({ message: "Bike added successfully", bike: newBike });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const editBike = async (req, res) => {
  const bikeId = req.params._id;

  try {
    const updatedBike = await Bike.findByIdAndUpdate(
      bikeId,
      req.body,
      { new: true } // This option returns the updated document
    );

    if (updatedBike) {
      res.status(200).json({
        message: "Bike updated successfully",
        status: "Success",
        bike: updatedBike,
      });
    } else {
      res.status(404).json({ error: "Bike not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteBike = async (req, res) => {
  const bikeId = req.params.id;

  try {
    const deletedBike = await Bike.findByIdAndDelete(bikeId);

    if (deletedBike) {
      res
        .status(200)
        .json({ message: "Bike deleted successfully", bike: deletedBike });
    } else {
      res.status(404).json({ error: "Bike not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getTestRides = async (req, res) => {
  try {
    const testRides = await TestRide.find();
    res.json(testRides);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getBooked = async (req, res) => {
  try {
    const booked = await BookNow.find();
    res.json(booked);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getContact = async (req, res) => {
  try {
    const contactreq = await Contact.find();
    res.json(contactreq);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addBike,
  editBike,
  deleteBike,
  getTestRides,
  getBooked,
  getContact,
};