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
    <div className="testride-maincontent">
      {error && (
        <div className="testride-error-message">
          <p>Error:</p>
          <p>Name: {error.name}</p>
          <p>Message: {error.message}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="testride-col1">
          <div className="testride-td">
            <label className="testride-label" for="model">
              Model interested in<span className="testride-span">*</span>
            </label>
          </div>
          <div className="testride-td">
            <select
              className="testride-model"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
            >
              <option value="">Select Model</option>
              {bikes.map((bikes) => (
                <option key={bikes.id} value={bikes.id}>
                  {bikes.model}
                </option>
              ))}
            </select>
          </div>
          <div className="testride-td">
            <label className="testride-label" for="city">
              City<span className="testride-span">*</span>
            </label>
          </div>
          <div className="testride-td">
            <select
              className="testride-city"
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
          <div className="testride-td">
            <label className="testride-label" for="name">
              Your Name<span className="testride-span">*</span>
            </label>
          </div>
          <div className="testride-td">
            <input
              className="testride-input"
              type="text"
              placeholder="Your Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="testride-td">
            <label className="testride-label" for="phno">
              Mobile<span className="testride-span">*</span>
            </label>
          </div>
          <div className="testride-td">
            <input
              className="testride-input"
              type="number"
              id="phno"
              value={phno}
              onChange={(e) => setPhno(e.target.value)}
              placeholder="Your Mobile"
            />
          </div>
        </div>
        <div className="testride-col2">
          <div className="testride-td">
            <label className="testride-label" for="state">
              State<span className="testride-span">*</span>
            </label>
          </div>
          <div className="testride-td">
            <select
              className="testride-state"
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
              <option value="Tripura">Tripura</n              </option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
          <div className="testride-td">
            <label className="testride-label" for="dealer">
              Dealer<span className="testride-span">*</span>
            </label>
          </div>
          <div className="testride-td">
            <select
              className="testride-dealer"
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
          <div className="testride-td">
            <label className="testride-label" for="email">
              Email ID<span className="testride-span">*</span>
            </label>
          </div>
          <div className="testride-td">
            <input
              className="testride-input"
              type="email"
              placeholder="Your Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="testride-td">
            <label className="testride-label">Remarks/Suggestions</label>
          </div>
          <div className="testride-td">
            <textarea
              className="testride-textarea"
              placeholder="Remarks/Suggestions"
              cols="30"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              rows="3"
            ></textarea>
          </div>
        </div>

        <div className="testride-btn">
          <div className="testride-terms-box">
            <div className="testride-td-terms">
              <input
                className="testride-tickboxlabel"
                checked={agreement}
                onChange={(e) => setAgreement(e.target.checked)}
                type="checkbox"
              />
            </div>
            <div className="testride-td-terms">
              <label className="testride-tickbox">
                {" "}
                I agree to the terms and conditions
              </label>
            </div>
          </div>
          <div className="testride-td">
            <div className="testride-td"></div>
            <div className="testride-td">
              <input className="testride-input" type="submit" value="Submit" />
            </div>
            <div className="testride-td">
              <input className="testride-input" type="reset" value="Reset" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TestRide;
