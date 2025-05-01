import React, { useState, useEffect } from "react";
import "../../styles/Registration.css";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  TextField,
  Button,
  Select,
  MenuItem,
} from '@mui/material';

const MySwal = withReactContent(Swal);

const Registration = () => {
  const [selectedModel, setSelectedModel] = useState("");
  const [userName, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [ownershipStatus, setOwnershipStatus] = useState("");
  const [financeRequired, setFinanceRequired] = useState("");
  const [dateofBirth, setdateofBirth] = useState("");
  const [email, setEmail] = useState("");
  const [bikes, setBikes] = useState([]);
  const [dealer, setDealer] = useState("");

  const dealers = [
    "Riders Paradise ",
    "Riders Bikes",
    "Paradise Hub",
    "Speedy Bikes",
    "Golden Wheels",
  ];

  const cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Ahmedabad",
    "Pune",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Pimpri-Chinchwad",
    "Patna",
    "Vadodara",
    "Ghaziabad",
    "Ludhiana",
    "Agra",
    "Nashik",
    "Faridabad",
  ];

  const paymentMethods = ["UPI", "Card", "EMI"];

  const showAlert = ({ result }) => {
    MySwal.fire({
      title: "Added Succesfully",
      text: { result },
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/explore/bikes"
        );
        setBikes(response.data);
      } catch (error) {
        console.error("Error fetching bikes:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      model: selectedModel,
      state: state,
      address: address,
      country: country,
      city: city,
      pincode: pincode,
      dealer: dealer,
      name: userName,
      email: email,
      phno: mobileNumber,
      paymentMethod: paymentMethod,
      ownershipStatus: ownershipStatus,
      financeRequired: financeRequired,
    };
    console.log(formData);
    axios
      .post("http://localhost:4000/v2/user/bookbike", formData)
      .then((result) => {
        if (result.data.status === "Success") {
          showAlert(result.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-r">
      <h1 style={{ position: "relative", left: "500px" }}>Bike Registration</h1>
      <div className="sec-container-r">
        <form onSubmit={handleSubmit}>
          <div className="form-r">
            <div className="details personal-r">
              <div className="fields-r">
                <TextField label="Full Name" variant="outlined" fullWidth margin="normal" value={userName} onChange={(e) => setName(e.target.value)}/>
                <TextField label="Date of birth" type="date" variant="outlined" fullWidth margin="normal" value={dateofBirth} onChange={(e) => setdateofBirth(e.target.value)}/>
                <TextField label="Email" type="email" variant="outlined" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <TextField select label="Selected Model" variant="outlined" fullWidth margin="normal" value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
                  {bikes.map((bike) => (
                    <MenuItem key={bike.id} value={bike.id}>
                      {bike.model}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField select label="Selected Dealer" variant="outlined" fullWidth margin="normal" value={dealer} onChange={(e) => setDealer(e.target.value)}>
                  {dealers.map((dealer, index) => (
                    <MenuItem key={index} value={dealer}>
                      {dealer}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField label="Mobile Number" type="tel" variant="outlined" fullWidth margin="normal" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)}/>
                <TextField label="Address" variant="outlined" fullWidth margin="normal" value={address} onChange={(e) => setAddress(e.target.value)}/>
                <TextField label="Country" variant="outlined" fullWidth margin="normal" value={country} onChange={(e) => setCountry(e.target.value)}/>
                <TextField label="State" variant="outlined" fullWidth margin="normal" value={state} onChange={(e) => setState(e.target.value)}/>
                <TextField label="PinCode" variant="outlined" fullWidth margin="normal" value={pincode} onChange={(e) => setPincode(e.target.value)}/>
                <TextField select label="City" variant="outlined" fullWidth margin="normal" value={city} onChange={(e) => setCity(e.target.value)}>
                  {cities.map((city, index) => (
                    <MenuItem key={index} value={city}>
                      {city}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField label="Ownership type" variant="outlined" fullWidth margin="normal" value={ownershipStatus} onChange={(e) => setOwnershipStatus(e.target.value)}/>
                <TextField label="Finance" variant="outlined" fullWidth margin="normal" value={financeRequired} onChange={(e) => setFinanceRequired(e.target.value)}/>
                <TextField select label="Payment" variant="outlined" fullWidth margin="normal" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                  {paymentMethods.map((paymentMethod, index) => (
                    <MenuItem key={index} value={paymentMethod}>
                      {paymentMethod}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </div>
          </div>
          <div className="button-submit">
            <Button type="submit" variant="contained" color="primary">Register Bike</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;