import React, { useState, useEffect } from "react";
import "../../styles/Registration.css";
import classNames from "classnames";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  Input,
  Label,
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@shadcn/ui";

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
                <div className="input-field-r">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" type="text" value={userName} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
                </div>
                <div className="input-field-r">
                  <Label htmlFor="dob">Date of birth</Label>
                  <Input id="dob" type="date" value={dateofBirth} onChange={(e) => setdateofBirth(e.target.value)} placeholder="Enter your DOB" />
                </div>
                <div className="input-field-r">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Emailid" />
                </div>
                <div className="input-field-r">
                  <Label htmlFor="model">Selected Model</Label>
                  <Select value={selectedModel} onValueChange={setSelectedModel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Model" />
                    </SelectTrigger>
                    <SelectContent>
                      {bikes.map((bike) => (
                        <SelectItem key={bike.id} value={bike.id}>
                          {bike.model}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="input-field-r">
                  <Label htmlFor="dealer">Selected Dealer</Label>
                  <Select value={dealer} onValueChange={setDealer}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Dealer" />
                    </SelectTrigger>
                    <SelectContent>
                      {dealers.map((dealer, index) => (
                        <SelectItem key={index} value={dealer}>
                          {dealer}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="input-field-r">
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input id="mobile" type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder="Enter mobile Number" />
                </div>
                <div className="input-field-r">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter mobile Number" />
                </div>
                <div className="input-field-r">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Enter mobile Number" />
                </div>
                <div className="input-field-r">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder="Enter mobile Number" />
                </div>
                <div className="input-field-r">
                  <Label htmlFor="pincode">PinCode</Label>
                  <Input id="pincode" type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder="Enter Pincode" />
                </div>
                <div className="input-field-r">
                  <Label htmlFor="city">City</Label>
                  <Select value={city} onValueChange={setCity}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select City" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city, index) => (
                        <SelectItem key={index} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="input-field-r">
                  <Label htmlFor="ownership">Ownership type</Label>
                  <Input id="ownership" type="text" value={ownershipStatus} onChange={(e) => setOwnershipStatus(e.target.value)} placeholder="Ownership status" />
                </div>
                <div className="input-field-r">
                  <Label htmlFor="finance">Finance</Label>
                  <Input id="finance" type="text" value={financeRequired} onChange={(e) => setFinanceRequired(e.target.value)} placeholder="Enter if finance req" />
                </div>
                <div className="input-field-r">
                  <Label htmlFor="payment">Payment</Label>
                  <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                    <SelectTrigger>
                      <SelectValue placeholder="Enter Payment Mode" />
                    </SelectTrigger>
                    <SelectContent>
                      {paymentMethods.map((paymentMethod, index) => (
                        <SelectItem key={index} value={paymentMethod}>
                          {paymentMethod}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <div className="button-submit">
            <Button type="submit">Register Bike</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;