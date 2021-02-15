import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";

import getProductList from "../Utils/Api";
import Product from "./Product";
import RemoveProduct from "./RemoveProduct";
import SelectedProduct from "./SelectedProduct";

const Container = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  @media (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }
  background-color: lavender;
`;
const ImageCard = styled.div`
  border: 1px solid lightgray;
  border-radius: 20px;
  background-color: white;
  margin: 20px;
`;

const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const items = await getProductList();
    setLoading(false);
    setData(items);
  }, []);

  useEffect(() => fetchData(), [fetchData]);

  const removeProducts = useCallback(() => {
    const filteredData = data.filter(
      (item) => !selectedItem.includes(item.productId)
    );
    setData(filteredData);
    setSelectedItem([]);
  }, [data, selectedItem]);

  if (loading === false) {
    return (
      <>
        {selectedItem.length > 0 && (
          <RemoveProduct onClick={removeProducts}>
            {`Remove ${selectedItem.length} selected products`}
          </RemoveProduct>
        )}
        <Container>
          {data.map((product) => {
            return (
              <ImageCard key={product.productId}>
                <SelectedProduct
                  onChange={(selected) => {
                    if (selected) {
                      setSelectedItem([...selectedItem, product.productId]);
                    } else {
                      setSelectedItem([...selectedItem, product.productId]);
                      setSelectedItem(
                        selectedItem.filter((id) => id !== product.productId)
                      );
                    }
                  }}
                />
                <Product product={product} />
              </ImageCard>
            );
          })}
        </Container>
      </>
    );
  }
  return <p>Loading...</p>;
};
export default ProductList;
