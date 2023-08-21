import React from "react";
import {
  Blur,
  Container,
  CategoryWrap,
  CategoryImage,
  CategoryTitle,
} from "./style";
import noImage from "../../Assets/image/noimage.png";
import category from "../../Assets/image/villa.png";

const Category = ({ data = {} }) => {
  const { name } = data;
  return (
    <Container>
      <CategoryImage src={category || noImage} />
      <CategoryWrap>
      <Blur />
        <CategoryTitle>{name || "Category Name"}</CategoryTitle>
      </CategoryWrap>
    </Container>
  );
};

export default Category;
