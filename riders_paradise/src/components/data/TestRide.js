import React, { useEffect, useState } from "react";
import "../../styles/TestRide.css";
import axios from "axios";

function TestRide() {
  const [bikes, setBikes] = useState([]);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [dealer, setDealer] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [remarks, setRemarks] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");
  const [error, setError] = useState("");
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://riders-paradise.onrender.com/explore/bikes"
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
      city: city,
      dealer: dealer,
      name: name,
      email: email,
      phno: phno,
      remarks: remarks,
      agreeTerms: agreement,
    };
    axios
      .post("https://riders-paradise.onrender.com/user/testride", formData)
      .then((result) => {
        if (result.data.status === "Success") {
          console.log(result);
        }
      })
      .catch((err) => setError(err));
  };

  return (
    <div className="test-ride-container">
      <h2>Book a Test Ride</h2>
      {error && (
        <div className="error-message">
          <p>Error:</p>
          <p>Name: {error.name}</p>
          <p>Message: {error.message}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="test-ride-form">
        <div className="form-group">
          <label htmlFor="model">Model Interested In:</label>
          <select
            id="model"
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            required
          >
            <option value="">Select Model</option>
            {bikes.map((bike) => (
              <option key={bike.id} value={bike.model}>
                {bike.model}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <select
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          >
            <option value="">Select City</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <select
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          >
            <option value="">Select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadar and Nagar Haveli">
              Dadar and Nagar Haveli
            </option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dealer">Dealer:</label>
          <select
            id="dealer"
            value={dealer}
            onChange={(e) => setDealer(e.target.value)}
            required
          >
            <option value="">Select Dealer</option>
            {dealers.map((dealer, index) => (
              <option key={index} value={dealer}>
                {dealer}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email ID:</label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phno">Mobile:</label>
          <input
            type="number"
            id="phno"
            placeholder="Your Mobile"
            value={phno}
            onChange={(e) => setPhno(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="remarks">Remarks/Suggestions:</label>
          <textarea
            id="remarks"
            placeholder="Remarks/Suggestions"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={agreement}
              onChange={(e) => setAgreement(e.target.checked)}
              required
            />
            I agree to the terms and conditions
          </label>
        </div>
        <div className="buttons">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
}

export default TestRide;
