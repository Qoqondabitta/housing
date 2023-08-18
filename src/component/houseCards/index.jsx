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
} from "./style";
import bed from "../../Assets/image/bedblack.png";
import car from "../../Assets/image/carblack.png";
import Group from "../../Assets/image/bathblack.png";
import ruler from "../../Assets/image/rulerblack.png";
import noImage from "../../Assets/image/noimage.png";

const HouseCard = ({url}) => {
  return (
    <Container>
      <CardImage src={url || noImage}/>
      <CardContent>
        <CardInfo>
          <CardInfoTitle>
            <h1 className="subtitle">New Apartment Nice View</h1>
            <h1 className="miniTitle">Quincy St, Brooklyn, NY, USA</h1>
          </CardInfoTitle>
          <CardDetailsSection>
            <CardDataInnerSection>
              <img src={bed} style={{ width: "19px", height: "19px" }} alt="" />
              <h1 className="miniTitle" style={{ fontWeight: "400" }}>
                4 beds
              </h1>
            </CardDataInnerSection>
            <CardDataInnerSection>
              <img
                src={Group}
                style={{ width: "19px", height: "19px" }}
                alt=""
              />
              <h1 className="miniTitle" style={{ fontWeight: "400" }}>
                5 baths
              </h1>
            </CardDataInnerSection>
            <CardDataInnerSection>
              <img src={car} alt="" style={{ width: "19px", height: "19px" }} />
              <h1 className="miniTitle" style={{ fontWeight: "400" }}>
                1 garage
              </h1>
            </CardDataInnerSection>
            <CardDataInnerSection>
              <img
                src={ruler}
                alt=""
                style={{ width: "19px", height: "19px" }}
              />
              <h1 className="miniTitle" style={{ fontWeight: "400" }}>
                1200 Sq Ft
              </h1>
            </CardDataInnerSection>
          </CardDetailsSection>
        </CardInfo>

        <CardPrice>
          <CardDataInnerSection style={{alignItems: "flex-start"}}>
            <h1 className="miniTitle" style={{ fontSize: "12px" }}>
              $2,800/mo
            </h1>
            <h1 className="subtitle">$7,500/mo</h1>
          </CardDataInnerSection>
          <IconCardWrap></IconCardWrap>
        </CardPrice>
      </CardContent>
    </Container>
  );
};

export default HouseCard;
