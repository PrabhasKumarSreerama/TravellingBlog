import React from "react";
import "./NewPlaces.css";
import Input from "../../shared/components/FormElements/Input";

const NewPlaces = () => {
  return (
    <div className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[]}
        errorText="Please enter a valid title."
      />
    </div>
  );
};

export default NewPlaces;
