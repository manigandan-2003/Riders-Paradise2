import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Contact.css";
import styled from "styled-components";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const ContactInfoContainer = styled.div`
  position: relative;
  background-color: #f9f9f9;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;

  @media (min-width: 768px) {
    width: 400px; /* Adjust as needed */
    margin: 20px auto; /* Center the container */
  }
`;

const Divider = styled.div`
  border-top: 1px solid #ccc;
  margin: 15px 0;
  width: 80%;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const Label = styled.span`
  font-weight: bold;
  width: 120px;
  margin-right: 10px;
  text-align: left;
  color: #333;
`;

const StyledLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phnno, setPhoneNo] = useState();
  const [comment, setComment] = useState();
  const [error, setError] = useState();

  const showAlert = ({ result }) => {
    MySwal.fire({
      title: "Submitted Succesfully",
      text: { result },
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post("https://riders-paradise.onrender.com/user/contact", {
          name: name,
          email: email,
          phnno: phnno,
          comment: comment,
        })
        .then((result) => {
          if (result.data.status === "Success") {
            showAlert(result.data.message);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="body-cotactpage">
      <h2 id="cus-contactpage">CONTACT US</h2>
      <div className="contact-container">
        <div className="form-container">
          {error && (
            <div className="error-message">
              <p>Error:</p>
              <p>Name: {error.name}</p>
              <p>Message: {error.message}</p>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="div-contactpage">Name</div>
            <input
              id="box1-contactpage"
              className="w3-input-contactpage w3-border-contactpage w3-round-large-contactpage"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <div className="div-contactpage">Email</div>
            <input
              id="box2-contactpage"
              className="w3-input-contactpage w3-border-contactpage w3-round-large-contactpage"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className="div-contactpage">Mobile</div>
            <input
              id="box3-contactpage"
              className="w3-input-contactpage w3-border-contactpage w3-round-large-contactpage"
              type="text"
              value={phnno}
              onChange={(e) => {
                setPhoneNo(e.target.value);
              }}
            />
            <div className="div-contactpage">comment</div>
            <input
              id="box4-contactpage"
              className="w3-input-contactpage w3-border-contactpage w3-round-large-contactpage"
              type="text"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
            <div className="div-contactpage">
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>

        <ContactInfoContainer>
          <Divider />

          <ContactItem>
            <Icon src="images/pin.png" alt="Address" />
            <Label>Address:</Label>
            <StyledLink href="#" className="details-contactpage">
              Riders Paradise Chennai TamilNadu
            </StyledLink>
          </ContactItem>

          <ContactItem>
            <Icon src="images/call.png" alt="Phone" />
            <Label>Phone:</Label>
            <StyledLink
              href="tel:+919717785190"
              className="details1-contactpage"
            >
              +91-1234567890
            </StyledLink>
          </ContactItem>

          <ContactItem>
            <Icon src="images/mail.png" alt="Email" />
            <Label>Email:</Label>
            <StyledLink
              href="mailto:admin@ridersparadise.com"
              className="details2-contactpage"
            >
              admin@ridersparadise.com
            </StyledLink>
          </ContactItem>

          <ContactItem>
            <Icon src="images/mail.png" alt="Nodal Officer" />
            <Label>Nodal Officer:</Label>
            <StyledLink
              href="mailto:eshop.support@heromotocorp.com"
              className="details2-contactpage"
            >
              Varun Venkateshs
            </StyledLink>
          </ContactItem>

          <ContactItem>
            <Icon src="images/mail.png" alt="Grievance Officer" />
            <Label>Grievance Officer:</Label>
            <StyledLink className="details2-contactpage">
              Manigandan
            </StyledLink>
          </ContactItem>
        </ContactInfoContainer>
      </div>
    </div>
  );
}

export default Contact;