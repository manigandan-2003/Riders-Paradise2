import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Contact.css";
import styled from "styled-components";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import styles from "./Contact.module.css";

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
    <div className={styles.bodyCotactpage}>
      <h2 id="cus-contactpage" className={styles.contactTitle}>CONTACT US</h2>
      <table className={styles.contactTable}>
        {error && (
          <div className="error-message">
            <p>Error:</p>
            <p>Name: {error.name}</p>
            <p>Message: {error.message}</p>
          </div>
        )}
        <td id="first-contactpage" className={styles.contactForm}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formDiv}>Name</div>
            <input
              id="box1-contactpage"
              className={`w3-input-contactpage w3-border-contactpage w3-round-large-contactpage ${styles.formInput}`}
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <div className={styles.formDiv}>Email</div>
            <input
              id="box2-contactpage"
              className={`w3-input-contactpage w3-border-contactpage w3-round-large-contactpage ${styles.formInput}`}
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className={styles.formDiv}>Mobile</div>
            <input
              id="box3-contactpage"
              className={`w3-input-contactpage w3-border-contactpage w3-round-large-contactpage ${styles.formInput}`}
              type="text"
              value={phnno}
              onChange={(e) => {
                setPhoneNo(e.target.value);
              }}
            />
            <div className={styles.formDiv}>comment</div>
            <input
              id="box4-contactpage"
              className={`w3-input-contactpage w3-border-contactpage w3-round-large-contactpage ${styles.formInput}`}
              type="text"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
            <div className={styles.submitButtonDiv}>
              <button type="submit" className={styles.submitButton}>SUBMIT</button>
            </div>
          </form>
        </td>
        <div className={styles.raisedContainer}>
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
