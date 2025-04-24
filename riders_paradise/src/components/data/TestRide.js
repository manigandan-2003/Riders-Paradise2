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
      {error && (
        <div className="error-message">
          <p>Error:</p>
          <p>Name: {error.name}</p>
          <p>Message: {error.message}</p>
        </div>
      )}
      <form className="test-ride-form" onSubmit={handleSubmit}>
        <div className="form-column">
          <div className="form-group">
            <label className="form-label" htmlFor="model">
              Model interested in<span className="required">*</span>
            </label>
            <select
              className="form-select"
              id="model"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
            >
              <option value="">Select Model</option>
              {bikes.map((bike) => (
                <option key={bike.id} value={bike.id}>
                  {bike.model}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="city">
              City<span className="required">*</span>
            </label>
            <select
              className="form-select"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
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
            <label className="form-label" htmlFor="name">
              Your Name<span className="required">*</span>
            </label>
            <input
              className="form-input"
              type="text"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="phno">
              Mobile<span className="required">*</span>
            </label>
            <input
              className="form-input"
              type="number"
              id="phno"
              placeholder="Your Mobile"
              value={phno}
              onChange={(e) => setPhno(e.target.value)}
            />
          </div>
        </div>
        <div className="form-column">
          <div className="form-group">
            <label className="form-label" htmlFor="state">
              State<span className="required">*</span>
            </label>
            <select
              className="form-select"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
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
            <label className="form-label" htmlFor="dealer">
              Dealer<span className="required">*</span>
            </label>
            <select
              className="form-select"
              id="dealer"
              value={dealer}
              onChange={(e) => setDealer(e.target.value)}
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
            <label className="form-label" htmlFor="email">
              Email ID<span className="required">*</span>
            </label>
            <input
              className="form-input"
              type="email"
              id="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="remarks">
              Remarks/Suggestions
            </label>
            <textarea
              className="form-textarea"
              id="remarks"
              placeholder="Remarks/Suggestions"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="terms-container">
            <input
              className="form-checkbox"
              type="checkbox"
              id="agreement"
              checked={agreement}
              onChange={(e) => setAgreement(e.target.checked)}
            />
            <label className="form-label terms-label" htmlFor="agreement">
              I agree to the terms and conditions
            </label>
          </div>
        </div>

        <div className="form-buttons">
          <button className="submit-button" type="submit">Submit</button>
          <button className="reset-button" type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
}

export default TestRide;
