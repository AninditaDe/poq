import styled from "styled-components";

const Button = styled.button`
  background-color: #9400d3;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
`;
const RemoveProduct = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};
export default RemoveProduct;
