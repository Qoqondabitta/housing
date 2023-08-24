import React from "react";
import {
  CardContent,
  CardDataInnerSection,
  CardDetailsSection,
  CardImage,
  CardInfo,
  CardInfoTitle,
  CardPrice,
  Container,
  IconCardWrap,
  Icons,
  Love,
} from "./style";
import bed from "../../Assets/image/bedblack.png";
import car from "../../Assets/image/carblack.png";
import Group from "../../Assets/image/bathblack.png";
import ruler from "../../Assets/image/rulerblack.png";
import noImage from "../../Assets/image/noimage.png";

const HouseCard = ( { data = {} } ) => {
  const {
    address,
    attachments,
    city,
    country,
    description,
    houseDetails,
    price,
    salePrice,
    category
  } = data;
  return (
    <Container>
      <CardImage src={(attachments && attachments[0]?.imgPath) || noImage} />
      <CardContent>
        <CardInfo>
          <CardInfoTitle>
            <h1 className="subtitle inline">
              {city || "Decent House Nice View"}{" "}
              {country || "Decent House Nice View"}{" "}
              {description || "Decent House Nice View"}
            </h1>
            <h1 className="miniTitle">
              {address || "Quincy St, Brooklyn, NY, USA"} -{" "}
              {category?.name || "Category"}
            </h1>
          </CardInfoTitle>
          <CardDetailsSection>
            <CardDataInnerSection>
              <img src={bed} style={{ width: "19px", height: "19px" }} alt="" />
              <h1 className="miniTitle" style={{ fontWeight: "400" }}>
                {houseDetails?.beds || 0} beds
              </h1>
            </CardDataInnerSection>
            <CardDataInnerSection>
              <img
                src={Group}
                style={{ width: "19px", height: "19px" }}
                alt=""
              />
              <h1 className="miniTitle" style={{ fontWeight: "400" }}>
                {houseDetails?.bath || 0} baths
              </h1>
            </CardDataInnerSection>
            <CardDataInnerSection>
              <img src={car} alt="" style={{ width: "19px", height: "19px" }} />
              <h1 className="miniTitle" style={{ fontWeight: "400" }}>
                {houseDetails?.garage || 0} garage
              </h1>
            </CardDataInnerSection>
            <CardDataInnerSection>
              <img
                src={ruler}
                alt=""
                style={{ width: "19px", height: "19px" }}
              />
              <h1 className="miniTitle" style={{ fontWeight: "400" }}>
                {houseDetails?.area || 0} Sq Ft
              </h1>
            </CardDataInnerSection>
          </CardDetailsSection>
        </CardInfo>

        <CardPrice>
          <CardDataInnerSection style={{ alignItems: "flex-start" }}>
            <h1 className="miniTitle" style={{ fontSize: "12px" }}>
              <del> ${salePrice || 0}/mo</del>
            </h1>
            <h1 className="subtitle">${price || 0}/mo</h1>
          </CardDataInnerSection>

          <IconCardWrap>
            <Icons.Resize />
            <Love>
              <Icons.Heart />
            </Love>
          </IconCardWrap>
        </CardPrice>
      </CardContent>
    </Container>
  );
};

export default HouseCard;
