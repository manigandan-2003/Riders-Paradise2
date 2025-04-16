const express = require("express");
const router = express.Router();
const mySchemas = require("../models/schemas");
const bikeController = require("../controllers/bikeController");
const adminController = require("../controllers/adminController");

/* Bike Routes */
router.get("/explore/bikes", bikeController.getAllBikes);
router.get("/explore/bikes/:_id", bikeController.getBikeById);

/* Admin Routes */
router.post("/admin/addbike", adminController.addBike);
router.put("/admin/editbike/:_id", adminController.editBike);
router.delete("/admin/deletebike/:_id", adminController.deleteBike);
router.get("/admin/gettestrides", adminController.getTestRides);
router.get("/admin/getbooked", adminController.getBooked);
router.get("/admin/getcontact", adminController.getContact);

/* User Routes */
router.post("/user/bookbike", async (req, res) => {
  try {
    const bookNow = await mySchemas.BookNow.create(req.body);
    res.json({
      status: "Success",
      bookNow,
      message: "Booked successfully",
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/user/testride", async (req, res) => {
  try {
    const testRide = await mySchemas.TestRide.create(req.body);
    res.json({ status: "Success", testRide });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/user/contact", async (req, res) => {
  try {
    const contactnow = await mySchemas.ContactNow.create(req.body);
    res.json({
      status: "Success",
      contactnow,
      message: "Request added successfully",
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/api/bike/:model", async (req, res) => {
  const model = req.params.model;

  try {
    const bike = await mySchemas.Bike.findOne({ model });

    if (bike) {
      res.status(200).json(bike);
    } else {
      res.status(404).json({ error: "Bike not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;