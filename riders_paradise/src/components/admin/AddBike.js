import React, { useState } from "react";
import "../../styles/AddBike.css";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
const AddBikeForm = () => {
  const [error, setError] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("Mountain");
  const [frameMaterial, setFrameMaterial] = useState("");
  const [frameSize, setFrameSize] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [frameType, setFrameType] = useState("");
  const [gearSystem, setGearSystem] = useState("");
  const [brakes, setBrakes] = useState("");
  const [suspension, setSuspension] = useState("");
  const [wheelSize, setWheelSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  const resetForm = () => {
    setBrand("");
    setModel("");
    setYear("");
    setType("Mountain");
    setFrameMaterial("");
    setFrameSize("");
    setColor("");
    setPrice("");
    setImageURL("");
    setDescription("");
    setFrameType("");
    setGearSystem("");
    setBrakes("");
    setSuspension("");
    setWheelSize("");
    setQuantity("");
    setIsFeatured(false);
    setIsAvailable(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const bikeData = {
      brand,
      model,
      year,
      type,
      frameMaterial,
      frameSize,
      color,
      price,
      imageURL,
      description,
      specifications: {
        frameType,
        gearSystem,
        brakes,
        suspension,
        wheelSize,
      },
      inventory: {
        quantity,
        location: "",
      },
      isFeatured,
      isAvailable,
    };
    const showAlert = ({ result }) => {
      MySwal.fire({
        title: "Added Succesfully",
        text: { result },
        icon: "success",
        confirmButtonText: "OK",
      });
    };
    axios
      .post("http://localhost:4000/v2/admin/addbike", bikeData)
      .then((result) => {
        console.log(result);
        if (result.status === 201) {
          showAlert(result.data.message);
          resetForm();
        }
      })
      .catch((err) => setError(err));
  };
  return (
    <div className="parent-addbike">
      <div className="container-addbike">
        <div className="form-box-addbike">
          <h2>Add Bike</h2>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="column">
              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="text"
                  name="brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  required
                />
                <label htmlFor="brand">Brand Name</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="text"
                  name="model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  required
                />
                <label htmlFor="model">Model Name</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="text"
                  name="year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required
                />
                <label htmlFor="year">Year</label>
              </div>
              <div
