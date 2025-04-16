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
  background-color: lightblue;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
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
`;

const StyledLink = styled.a`
  color: red;
  text-decoration: underline;
  word-break: break-word;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 20px;
  border-radius: 10px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const TextAreaField = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #367c39;
  }
`;

const ErrorText = styled.p`
  color: red;
  margin-top: -10px;
  margin-bottom: 10px;
`;

const ContactPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ContactSection = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
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
    <ContactPageContainer>
      <h2 style={{ marginBottom: "20px", textAlign: "center" }}>CONTACT US</h2>
      <ContactSection>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              {errors.name && <ErrorText>{errors.name}</ErrorText>}
            </div>
            <InputField
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div>
              <label htmlFor="email">Email</label>
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </div>
            <InputField
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div>
              <label htmlFor="phnno">Mobile</label>
              {errors.phnno && <ErrorText>{errors.phnno}</ErrorText>}
            </div>
            <InputField
              type="tel"
              id="phnno"
              value={phnno}
              onChange={(e) => setPhoneNo(e.target.value)}
            />

            <div>
              <label htmlFor="comment">Comment</label>
              {errors.comment && <ErrorText>{errors.comment}</ErrorText>}
            </div>
            <TextAreaField
              id="comment"
              rows="4"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <div>
              <SubmitButton type="submit">SUBMIT</SubmitButton>
            </div>
          </form>
        </FormContainer>

        <ContactInfoContainer>
          <Divider />

          <ContactItem>
            <Icon src="images/pin.png" alt="Address" />
            <Label>Address:</Label>
            <StyledLink href="#">Riders Paradise Chennai TamilNadu</StyledLink>
          </ContactItem>

          <ContactItem>
            <Icon src="images/call.png" alt="Phone" />
            <Label>Phone:</Label>
            <StyledLink href="tel:+911234567890">+91-1234567890</StyledLink>
          </ContactItem>

          <ContactItem>
            <Icon src="images/mail.png" alt="Email" />
            <Label>Email:</Label>
            <StyledLink href="mailto:admin@ridersparadise.com">
              admin@ridersparadise.com
            </StyledLink>
          </ContactItem>

          <ContactItem>
            <Icon src="images/mail.png" alt="Nodal Officer" />
            <Label>Nodal Officer:</Label>
            <StyledLink href="mailto:eshop.support@heromotocorp.com">
              Varun Venkateshs
            </StyledLink>
          </ContactItem>

          <ContactItem>
            <Icon src="images/mail.png" alt="Grievance Officer" />
            <Label>Grievance Officer:</Label>
            <StyledLink>Manigandan</StyledLink>
          </ContactItem>
        </ContactInfoContainer>
      </ContactSection>
    </ContactPageContainer>
  );
}

export default Contact;
