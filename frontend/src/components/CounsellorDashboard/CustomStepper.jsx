import React, { useState } from "react";
import { Stepper } from "@progress/kendo-react-layout";
import { DropDownList } from "@progress/kendo-react-dropdowns";

const CustomStepper = ({ items }) => {
  const [value, setValue] = useState(0);
  const [orientation, setOrientation] = useState("horizontal");

  const handleChange = (e) => {
    setValue(e.value);
  };

  const handleOrientationChange = (e) => {
    setOrientation(e.target.value);
  };

  return (
    <div>
      <p>Change the orientation:</p>
      <DropDownList
        data={["horizontal", "vertical"]}
        value={orientation}
        onChange={handleOrientationChange}
      />
      <hr />
      <Stepper
        value={value}
        onChange={handleChange}
        items={items}
        orientation={orientation}
      />
    </div>
  );
};

export default CustomStepper;
