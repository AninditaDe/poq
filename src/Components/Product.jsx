import styled from "styled-components";

import StockDisplay from "./StockDisplay";

const Img = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
`;
const Price = styled.span`
  font-weight: 800;
  padding: 5px;
  justify-content: center;
`;
const PriceWas = styled.span`
  font-weight: 800;
  padding: 5px;
  text-decoration: line-through;
  text-decoration-thickness: 2px;
  color: red;
  justify-content: center;
`;
const Title = styled.span`
  display: flex;
  flex-wrap: nowrap;
  padding: 10px;
  justify-content: flex-start;
`;
const DiscountWrapper = styled.div`
  background-color: rgba(255, 0, 0, 0.5);
  margin: 0px;
  width: 100%;
  z-index: 10;
  display: flex;
  height: 40px;
  justify-content: flex-start;
  padding-left: 10px;
  align-items: center;
  box-sizing: border-box;
  margin-top: -42px;
  z-index: 10;
  position: relative;
`;
const Discount = styled.h2`
  font-weight: 700;
  color: white;
  text-align: left;
`;
const ProductInfo = styled.div`
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 150px;
`;

export default function Product({ product }) {
  return (
    <div>
      <Img src={product.imageUrl} alt="" />
      {product.promotionBadge && (
        <DiscountWrapper>
          <Discount>{product.promotionBadge}</Discount>
        </DiscountWrapper>
      )}
      <ProductInfo>
        <Title>{product.name}</Title>
        <div>
          <Price>£{product.price}</Price>
          <PriceWas>£{product.priceWas}</PriceWas>
        </div>
        <StockDisplay
          available={product.available}
          qty={product.quantity}
          lowOnStock={product.lowOnStock}
        />
      </ProductInfo>
    </div>
  );
}
