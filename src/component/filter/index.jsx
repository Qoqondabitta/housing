import React, { useState, useRef } from "react";
import "./design.css";
import {
  Container,
  FilterInputWrap,
  FilterWrap,
  FilterButtonWrap,
  IconsGenerics,
} from "./style";
import Search from "../../Assets/image/loupe.png";
import House from "../../Assets/icon/advancedIcon.svg";
import {
  DropFooterWrap,
  DropInputWrap,
  DropSection,
  DropSectionTitles,
  DropWrap,
} from "./stylesecond";
import { Button, InputGeneral } from "../generics";

const Filter = () => {
  const countryRef = useRef()
  const cityRef = useRef()
  const regionRef = useRef();
  const zipRef = useRef();
  const roomRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();
  const minRef = useRef();
  const maxRef = useRef();
  const [display, setDisplay] = useState(false);
  return (
    <Container>
      <FilterWrap>
        <FilterInputWrap>
          <img src={House} alt="" />
          <InputGeneral
            type="filter"
            placeholder="Enter an address, neighborhood, city or ZIP Code"
          />
        </FilterInputWrap>
        <FilterButtonWrap>
          {/* <Dropdown
            overlay={FilterDropdown}
            placement="bottomRight"
            arrow={{ pointAtCenter: true }}
          >
            <div>
              <Button type="lightmode">
                <IconsGenerics.AdvancedIcon /> Advanced
              </Button>
            </div>
          </Dropdown> */}
          <Button type="lightmode" onClick={() => setDisplay(!display)}>
            <IconsGenerics.AdvancedIcon /> Advanced
          </Button>
          <Button type="bluemode" width="180px">
            <img style={{ marginRight: "8px" }} src={Search} alt="" />
            Search
          </Button>
        </FilterButtonWrap>
        {display && (
          <Container>
            <DropWrap>
              <DropSection>
                <DropSectionTitles className="subtitle">
                  Address
                </DropSectionTitles>
                <DropInputWrap>
                  <InputGeneral ref={countryRef} width="200px" placeholder="Country" />
                  <InputGeneral ref={regionRef} width="203px" placeholder="Region" />
                  <InputGeneral ref={cityRef} width="203px" placeholder="City" />
                  <InputGeneral ref={zipRef} width="205px" placeholder="Zip code" />
                </DropInputWrap>
              </DropSection>
              <DropSection>
                <DropSectionTitles className="subtitle">
                  Apartment Info
                </DropSectionTitles>
                <DropInputWrap>
                  <InputGeneral ref={roomRef} width="200px" placeholder="Rooms" />
                  <InputGeneral ref={sizeRef} width="203px" placeholder="Size" />
                  <InputGeneral ref={sortRef} width="203px" placeholder="Sort" />
                </DropInputWrap>
              </DropSection>
              <DropSection>
                <DropSectionTitles className="subtitle">
                  Apartment Info
                </DropSectionTitles>
                <DropInputWrap>
                  <InputGeneral ref={minRef} width="200px" placeholder="Min Price" />
                  <InputGeneral ref={maxRef} width="203px" placeholder="Max Price" />
                </DropInputWrap>
              </DropSection>
              <DropFooterWrap>
                <Button type="cancelMode" onClick={() => setDisplay(!display)}>
                  Cancel
                </Button>
                <Button>Submit</Button>
              </DropFooterWrap>
            </DropWrap>
          </Container>
        )}
      </FilterWrap>
    </Container>
  );
};

export default Filter;
