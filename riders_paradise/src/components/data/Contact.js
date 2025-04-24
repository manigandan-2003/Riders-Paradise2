import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Contact.css";
import styled from "styled-components";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const ContactInfoContainer = styled.div`
  height: auto;
  position: relative;
  background-color: #23272a; /* Discord background color */
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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  width: 100%;
  color: #fff; /* White text for readability on dark background */
`;

const Divider = styled.div`
  border-top: 1px solid #7289da; /* Discord accent color */
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
  filter: invert(1); /* Invert icon colors to be visible on dark background */
`;

const Label = styled.span`
  font-weight: bold;
  width: 120px;
  margin-right: 5px;
  text-align: left;
  color: #fff; /* White label color */
`;

const StyledLink = styled.a`
  color: #fff;
  text-decoration: underline;
  &:hover {
    color: #add8e6;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #36393f; /* Discord darker background color for the form */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const InputField = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #7289da; /* Discord accent color */
  border-radius: 4px;
  font-size: 16px;
  color: #fff;
  background-color: #424549; /* Slightly lighter background for input fields */

  &:focus {
    border-color: #add8e6;
    outline: none;
  }
`;

const TextAreaField = styled.textarea`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #7289da; /* Discord accent color */
  border-radius: 4px;
  font-size: 16px;
  color: #fff;
  background-color: #424549; /* Slightly lighter background for text area */
  min-height: 100px;

  &:focus {
    border-color: #add8e6;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background-color: #7289da; /* Discord accent color */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #677bc4;
  }
`;

const SectionTitle = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 20px;
  color: #fff;
  text-align: center;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContactSection = styled.div`
  width: 45%;
  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 20px;
  }
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
        .post('http://localhost:4000/v2/user/contact', {         
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
    <div className="body-cotactpage" style={{ backgroundColor: '#36393f', color: '#fff', marginBottom: '100px' }}>
      <SectionTitle id="cus-contactpage">CONTACT US</SectionTitle>
      <ContactContainer>
        <ContactSection>
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
        </ContactSection>

        <ContactSection>
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
        </ContactSection>
      </ContactContainer>
    </div>
  );
}

export default Contact;
