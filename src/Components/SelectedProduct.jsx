import styled from "styled-components";
import React from "react";

const StyledCheckBox = styled.input`
  margin: 10px;
  color: white;
  position: absolute;
  display: block;
  border-radius: 4px;
  outline: none;
  transition-duration: 0.3s;
  background-color: white;
  cursor: pointer;
  z-index: 10;
`;

const SelectedProduct = ({ onChange }) => {
  const [selected, setSelected] = React.useState(false);

  return (
    <>
      <StyledCheckBox
        type="checkbox"
        selected={selected}
        onChange={() => {
          setSelected(!selected);
          onChange(!selected);
        }}
      />
    </>
  );
};

export default SelectedProduct;
