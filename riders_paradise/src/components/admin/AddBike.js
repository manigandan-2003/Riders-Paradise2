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
                className="input-box select-box"
                onChange={(e) => setType(e.target.value)}
              >
                <span className="icon"></span>
                <select value={type}>
                  <option value="Mountain">Mountain</option>
                  <option value="Road">Road</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Gravel">Gravel</option>
                  <option value="E-bike">E-bike</option>
                </select>
                <label htmlFor="type">Bike Type</label>
              </div>
            </div>
            <div className="column">
              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="text"
                  name="frameMaterial"
                  value={frameMaterial}
                  onChange={(e) =>
                    setFrameMaterial(e.target.value)
                  }
                  required
                />
                <label htmlFor="frameMaterial">Frame Material</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="text"
                  name="frameSize"
                  value={frameSize}
                  onChange={(e) => setFrameSize(e.target.value)}
                  required
                />
                <label htmlFor="frameSize">Frame Size</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="text"
                  name="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  required
                />
                <label htmlFor="color">Color</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="number"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
                <label htmlFor="price">Price</label>
              </div>
            </div>
            <div className="input-box">
              <span className="icon"></span>
              <input
                type="text"
                name="imageURL"
                value={imageURL}
                onChange={(e) => setImageURL(e.target.value)}
                required
              />
              <label htmlFor="imageURL">Image URL</label>
            </div>
            <div className="input-box">
              <span className="icon"></span>
              <textarea
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              <label htmlFor="description">Description</label>
            </div>
            <div className="column">
              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="text"
                  name="frameType"
                  value={frameType}
                  onChange={(e) => setFrameType(e.target.value)}
                  required
                />
                <label htmlFor="frameType">Frame Type</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="text"
                  name="gearSystem"
                  value={gearSystem}
                  onChange={(e) => setGearSystem(e.target.value)}
                  required
                />
                <label htmlFor="gearSystem">Gear System</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="text"
                  name="brakes"
                  value={brakes}
                  onChange={(e) => setBrakes(e.target.value)}
                  required
                />
                <label htmlFor="brakes">Brakes</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="text"
                  name="suspension"
                  value={suspension}
                  onChange={(e) => setSuspension(e.target.value)}
                  required
                />
                <label htmlFor="suspension">Suspension</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="text"
                  name="wheelSize"
                  value={wheelSize}
                  onChange={(e) => setWheelSize(e.target.value)}
                  required
                />
                <label htmlFor="wheelSize">Wheel Size</label>
              </div>
            </div>
            <div className="column">
              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="number"
                  name="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
                <label htmlFor="quantity">Quantity</label>
              </div>
              <div className="checkbox-group">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="isFeatured"
                    checked={isFeatured}
                    onChange={() => setIsFeatured(!isFeatured)}
                  />
                  <label htmlFor="isFeatured">Featured</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="isAvailable"
                    checked={isAvailable}
                    onChange={() => setIsAvailable(!isAvailable)}
                  />
                  <label htmlFor="isAvailable">Available</label>
                </div>
              </div>
            </div>
            <button type="submit">Add Bike</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddBikeForm;