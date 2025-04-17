import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Contact.css";
import styled from "styled-components";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const ContactInfoContainer = styled.td`
  height: auto;
  position: relative;
  background-color: #fff; /* Changed to white */
  font-size: 1em;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  font-weight: w100;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 100%;
  vertical-align: top; /* Added to align to the top */
`;

const Divider = styled.div`
  border-top: 1px solid #ccc;
  margin: 10px 0;
  width: 80%;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  width: 100%;
`;

const Icon = styled.img`
  vertical-align: start;
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;

const Label = styled.span`
  font-weight: bold;
  width: 120px;
  margin-right: 5px;
  text-align: left;
`;

const StyledLink = styled.a`
  color: #007bff;
  text-decoration: underline;
  &:hover {
    color: #0056b3;
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
    <div className="body-cotactpage" style={{ marginBottom: '100px' }}>
      <h2 id="cus-contactpage">CONTACT US</h2>
      <table style={{ width: '100%', borderSpacing: '20px' }}>
        {error && (
          <div className="error-message">
            <p>Error:</p>
            <p>Name: {error.name}</p>
            <p>Message: {error.message}</p>
          </div>
        )}
        <tbody style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start', width: '100%' }}>
          <td id="first-contactpage" style={{ width: '45%' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
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
              <div className="div-contactpage">Comment</div>
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
          </td>
          <td style={{ width: '45%' }}>
            <div className="raised-container">
              <ContactInfoContainer>
                <Divider />

                <ContactItem>
                  <Icon src="images/pin.png" alt="" />
                  <Label>Address:</Label>
                  <StyledLink href="#" className="details-contactpage">
                    Riders Paradise Chennai TamilNadu
                  </StyledLink>
                </ContactItem>

                <ContactItem>
                  <Icon src="images/call.png" alt="" />
                  <Label>Phone:</Label>
                  <StyledLink
                    href="tel:+919717785190"
                    className="details1-contactpage"
                  >
                    +91-1234567890
                  </StyledLink>
                </ContactItem>

                <ContactItem>
                  <Icon src="images/mail.png" alt="" />
                  <Label>Email:</Label>
                  <StyledLink
                    href="mailto:admin@ridersparadise.com"
                    className="details2-contactpage"
                  >
                    admin@ridersparadise.com
                  </StyledLink>
                </ContactItem>

                <ContactItem>
                  <Icon src="images/mail.png" alt="" />
                  <Label>Nodal Officer:</Label>
                  <StyledLink
                    href="mailto:eshop.support@heromotocorp.com"
                    className="details2-contactpage"
                  >
                    Varun Venkateshs
                  </StyledLink>
                </ContactItem>

                <ContactItem>
                  <Icon src="images/mail.png" alt="" />
                  <Label>Grievance Officer:</Label>
                  <StyledLink className="details2-contactpage">
                    Manigandan
                  </StyledLink>
                </ContactItem>
              </ContactInfoContainer>
            </div>
          </td>
        </tbody>
      </table>
    </div>
  );
}

export default Contact;
