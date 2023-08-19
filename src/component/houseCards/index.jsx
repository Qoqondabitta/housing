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

const HouseCard = ({url, title, beds, bath, garage, size, info}) => {
  return (
    <Container>
      <CardImage src={url || noImage} />
      <CardContent>
        <CardInfo>
          <CardInfoTitle>
            <h1 className="subtitle">{ title || "New Apartment Nice View" }</h1>
            <h1 className="miniTitle">{ info || "Quincy St, Brooklyn, NY, USA" }</h1>
          </CardInfoTitle>
          <CardDetailsSection>
            <CardDataInnerSection>
              <img src={bed} style={{ width: "19px", height: "19px" }} alt="" />
              <h1 className="miniTitle" style={{ fontWeight: "400" }}>
                {beds || 0} beds
              </h1>
            </CardDataInnerSection>
            <CardDataInnerSection>
              <img
                src={Group}
                style={{ width: "19px", height: "19px" }}
                alt=""
              />
              <h1 className="miniTitle" style={{ fontWeight: "400" }}>
                {bath || 0} baths
              </h1>
            </CardDataInnerSection>
            <CardDataInnerSection>
              <img src={car} alt="" style={{ width: "19px", height: "19px" }} />
              <h1 className="miniTitle" style={{ fontWeight: "400" }}>
                {garage || 0} garage
              </h1>
            </CardDataInnerSection>
            <CardDataInnerSection>
              <img
                src={ruler}
                alt=""
                style={{ width: "19px", height: "19px" }}
              />
              <h1 className="miniTitle" style={{ fontWeight: "400" }}>
                {size || 0} Sq Ft
              </h1>
            </CardDataInnerSection>
          </CardDetailsSection>
        </CardInfo>

        <CardPrice>
          <CardDataInnerSection style={{ alignItems: "flex-start" }}>
            <h1 className="miniTitle" style={{ fontSize: "12px" }}>
              <del> $2,800/mo</del>
            </h1>
            <h1 className="subtitle">$7,500/mo</h1>
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
