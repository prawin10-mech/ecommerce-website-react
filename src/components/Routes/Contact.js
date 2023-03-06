import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const contactFormHandler = async () => {
    const obj = { name, email, phoneNo };
    await axios.post("http://localhost:3000/admin/add-contact-details", obj);
  };

  return (
    <form
      onSubmit={contactFormHandler}
      className="d-flex flex-column w-50 m-auto mb-5"
    >
      <label htmlFor="iname">Name: </label>
      <input
        type="text"
        name="iname"
        id="iname"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="iemail">Email: </label>
      <input
        type="text"
        name="iemail"
        id="iemail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="iphoneNo">Phone No : </label>
      <input
        type="number"
        name="iphoneNo"
        id="iphoneNo"
        value={phoneNo}
        onChange={(e) => setPhoneNo(e.target.value)}
      />
      <Button onClick={contactFormHandler}>Add Item</Button>
    </form>
  );
};

export default Contact;
