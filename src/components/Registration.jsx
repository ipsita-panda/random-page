import React from "react";
import Input from "./Input";

const Registration = () => {
  return (
    <div>
      <form className="container1">
        <Input name="Username" placeholder="Username" />
        <Input name="Password" placeholder="Password" />
        <Input name="confirm-password" placeholder="Confirm Password" />

        <button class="btn  btn-light btn-lg buttonExtraStyle" type="button">
          Button
        </button>
      </form>
    </div>
  );
};

export default Registration;
