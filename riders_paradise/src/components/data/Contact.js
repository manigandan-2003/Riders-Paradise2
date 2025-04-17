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
  background-color: #f9f9f9; /* Changed to light gray */
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
  color: #333; /* Changed label color to dark gray */
`;

const StyledLink = styled.a`
  color: #007bff;
  text-decoration: underline;
  &:hover {
    color: #0056b3;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputField = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  color: #555;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const TextAreaField = styled.textarea`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  color: #555;
  min-height: 100px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const SectionTitle = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phnno, setPhoneNo] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState();

  const showAlert = ({ result }) => {
    MySwal.fire({
      title: 'Submitted Succesfully',
      text: { result },
      icon: 'success',
      confirmButtonText: 'OK',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post('https://riders-paradise.onrender.com/user/contact', {
          name: name,
          email: email,
          phnno: phnno,
          comment: comment,
        })
        .then((result) => {
          if (result.data.status === 'Success') {
            showAlert(result.data.message);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="body-cotactpage" style={{ marginBottom: '100px' }}>
      <SectionTitle id="cus-contactpage">CONTACT US</SectionTitle>
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
            <FormContainer onSubmit={handleSubmit}>
              <div className="div-contactpage">Name</div>
              <InputField
                id="box1-contactpage"
                className="w3-input-contactpage w3-border-contactpage w3-round-large-contactpage"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <div className="div-contactpage">Email</div>
              <InputField
                id="box2-contactpage"
                className="w3-input-contactpage w3-border-contactpage w3-round-large-contactpage"
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div className="div-contactpage">Mobile</div>
              <InputField
                id="box3-contactpage"
                className="w3-input-contactpage w3-border-contactpage w3-round-large-contactpage"
                type="text"
                value={phnno}
                onChange={(e) => {
                  setPhoneNo(e.target.value);
                }}
              />
              <div className="div-contactpage">Comment</div>
              <TextAreaField
                id="box4-contactpage"
                className="w3-input-contactpage w3-border-contactpage w3-round-large-contactpage"
                type="text"
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
              <div className="div-contactpage">
                <SubmitButton type="submit">SUBMIT</SubmitButton>
              </div>
            </FormContainer>
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
