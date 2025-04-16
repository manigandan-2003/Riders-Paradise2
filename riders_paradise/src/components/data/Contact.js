import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Contact.css";
import styled from "styled-components";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const ContactInfoContainer = styled.td`
  height: 45vh;
  position: relative;
  background-color: lightblue;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  top: 100px;
  left: 50px;
  font-weight: w100;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
`;

const Divider = styled.div`
  border-top: 1px solid #ccc;
  margin: 10px 0;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
`;

const Icon = styled.img`
  vertical-align: start;
  margin-right: 5px;
`;

const Label = styled.span`
  font-weight: bold;
  width: 80px;
  margin-right: 5px;
`;

const StyledLink = styled.a`
  color: red;
  text-decoration: underline;
`;

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phnno, setPhoneNo] = useState("");
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState({});

  const showAlert = ({ result }) => {
    MySwal.fire({
      title: "Submitted Successfully",
      text: result,
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!name) {
      tempErrors["name"] = "Name is required";
      isValid = false;
    }
    if (!email) {
      tempErrors["email"] = "Email is required";
      isValid = false;
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      tempErrors["email"] = "Email is not valid";
      isValid = false;
    }
    if (!phnno) {
      tempErrors["phnno"] = "Phone number is required";
      isValid = false;
    }
    if (!comment) {
      tempErrors["comment"] = "Comment is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const result = await axios.post(
        "https://riders-paradise.onrender.com/user/contact",
        {
          name: name,
          email: email,
          phnno: phnno,
          comment: comment,
        }
      );

      if (result.data.status === "Success") {
        showAlert(result.data);
        setName("");
        setEmail("");
        setPhoneNo("");
        setComment("");
        setErrors({});
      }
    } catch (err) {
      console.error(err);
      MySwal.fire({
        title: "Error",
        text: "Failed to submit form. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="body-cotactpage">
      <h2 id="cus-contactpage">CONTACT US</h2>
      <table className="contact-table">
        <td id="first-contactpage">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="div-contactpage">
              Name
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>
            <input
              id="box1-contactpage"
              className="w3-input-contactpage w3-border-contactpage w3-round-large-contactpage"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div className="div-contactpage">
              Email
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
            <input
              id="box2-contactpage"
              className="w3-input-contactpage w3-border-contactpage w3-round-large-contactpage"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="div-contactpage">
              Mobile
              {errors.phnno && <p className="error-text">{errors.phnno}</p>}
            </div>
            <input
              id="box3-contactpage"
              className="w3-input-contactpage w3-border-contactpage w3-round-large-contactpage"
              type="tel"
              value={phnno}
              onChange={(e) => setPhoneNo(e.target.value)}
            />

            <div className="div-contactpage">
              Comment
              {errors.comment && <p className="error-text">{errors.comment}</p>}
            </div>
            <textarea
              id="box4-contactpage"
              className="w3-input-contactpage w3-border-contactpage w3-round-large-contactpage"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <div className="div-contactpage">
              <button type="submit" className="submit-button">
                SUBMIT
              </button>
            </div>
          </form>
        </td>
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
      </table>
    </div>
  );
}

export default Contact;