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

const CategoryCard = ({ onClick, data = {} }) => {
  const { name } = data;
  return (
    <Container onClick={onClick}>
      <CategoryImage src={category || noImage} />
      <CategoryWrap>
        <Blur />
        <CategoryTitle>{name || "Category Name"}</CategoryTitle>
      </CategoryWrap>
    </Container>
  );
};

export default CategoryCard;
