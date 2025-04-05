import React, { useState, useEffect } from "react";
import "../../styles/AddBike.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
const EditBikeForm = () => {
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
  const [allBikes, setAllBikes] = useState([]);
  const [selectedBikeId, setSelectedBikeId] = useState("");
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
  useEffect(() => {
    const fetchAllBikes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/v2/explore/bikes"
        );
        setAllBikes(response.data);
      } catch (error) {
        console.error("Error fetching bikes:", error);
      }
    };
    fetchAllBikes();
  }, []);
  const handleModelChange = async (selectedModel) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/v2/api/bike/${selectedModel}`
      );
      const selectedBike = response.data;
      // Set state with selected bike details
      setSelectedBikeId(selectedBike._id);
      setBrand(selectedBike.brand);
      setModel(selectedBike.model);
      setYear(selectedBike.year);
      setType(selectedBike.type);
      setFrameMaterial(selectedBike.frameMaterial);
      setFrameSize(selectedBike.frameSize);
      setColor(selectedBike.color);
      setPrice(selectedBike.price);
      setImageURL(selectedBike.imageURL);
      setDescription(selectedBike.description);
      setFrameType(selectedBike.specifications.frameType);
      setGearSystem(selectedBike.specifications.gearSystem);
      setBrakes(selectedBike.specifications.brakes);
      setSuspension(selectedBike.specifications.suspension);
      setWheelSize(selectedBike.specifications.wheelSize);
      setQuantity(selectedBike.inventory.quantity);
      setIsFeatured(selectedBike.isFeatured);
      setIsAvailable(selectedBike.isAvailable);
    } catch (error) {
      console.error("Error fetching bike details:", error);
    }
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
    const showAlert = ({
