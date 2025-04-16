const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const bikeController = require("../controllers/bikeController");

/* Admin Functions */

router.post("/admin/addbike", adminController.addBike);

router.put("/admin/editbike/:_id", adminController.editBike);

router.delete("/admin/deletebike/:_id", adminController.deleteBike);

router.get("/admin/gettestrides", adminController.getTestRides);

router.get("/admin/getbooked", adminController.getBooked);

router.get("/admin/getcontact", adminController.getContact);

/* Data Fetch Functions */

router.get("/explore/bikes", bikeController.exploreBikes);

router.get("/explore/bikes/:_id", bikeController.getBikeById);

router.post("/user/bookbike", bikeController.bookBike);

/* User Functions */

router.post("/user/testride", bikeController.testRide);

router.post("/user/contact", bikeController.contact);

router.get("/api/bike/:model", bikeController.getBikeByModel);

module.exports = router;