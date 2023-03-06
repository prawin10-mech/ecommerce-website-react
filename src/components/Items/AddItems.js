import { Button } from "react-bootstrap";
import React, { useState } from "react";

const AddItem = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const addMovieFormHandler = () => {
    console.log(title);
    const obj = { title, imageUrl, price, description };
    console.log(obj);
  };
  return (
    <form
      onSubmit={addMovieFormHandler}
      className="d-flex flex-column w-50 m-auto mb-5"
    >
      <label htmlFor="ititle">Title: </label>
      <input
        type="text"
        name="ititle"
        id="name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="iimageUrl">ImageURL: </label>
      <input
        type="text"
        name="iimageUrl"
        id="iimageUrl"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <label htmlFor="iprice">Price: </label>
      <input
        type="number"
        name="iprice"
        id="iprice"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <label htmlFor="idescription">Description: </label>
      <input
        type="text"
        name="idescription"
        id="idescription"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Button onClick={addMovieFormHandler}>Add Item</Button>
    </form>
  );
};

export default AddItem;
