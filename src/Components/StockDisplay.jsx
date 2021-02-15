import styled from "styled-components";

const Quantity = styled.span`
  display: block;
  font-weight: 500;
  padding: 5px;
  color: green;
`;
const LowOnStock = styled.span`
  display: block;
  font-weight: 500;
  padding: 5px;
  color: #ffc107;
`;
const OutOfStock = styled.span`
  display: block;
  font-weight: 500;
  padding: 5px;
  color: red;
`;
const StockDisplay = ({ available, qty, lowOnStock }) => {
  return (
    <>
      {(available === "FALSE" || qty === 0) && (
        <OutOfStock>OUT OF STOCK</OutOfStock>
      )}
      {available === "TRUE" && qty > 0 && (
        <>
          {lowOnStock === "TRUE" && <LowOnStock>LOW ON STOCK</LowOnStock>}
          <Quantity>{qty} in stock</Quantity>
        </>
      )}
    </>
  );
};

export default StockDisplay;
