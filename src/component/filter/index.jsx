import React, { useState, useRef } from "react";
import "./design.css";
import {
  Container,
  FilterInputWrap,
  FilterWrap,
  FilterButtonWrap,
  IconsGenerics,
  PostContainer,
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
import uzeReplace from "../../hooks/useReplace";
import { useLocation, useNavigate } from "react-router-dom";
import useSearch from "../../hooks/useSearch";

const Filter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = useSearch();
  const countryRef = useRef();
  const cityRef = useRef();
  const regionRef = useRef();
  const zipRef = useRef();
  const roomRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();
  const minRef = useRef();
  const maxRef = useRef();
  const [display, setDisplay] = useState(false);
  console.log(query.get("region"));
  const onChange = ({ target: { name, value } }) => {
    // console.log(name, value );
    navigate(`${location.pathname}${uzeReplace(name, value)}`);
  };
  // console.log(useReplace("address", "toshkent"));
  return (
    <Container>
      <PostContainer>
        <FilterWrap>
          <FilterInputWrap>
            <img src={House} alt="" />
            <InputGeneral
              id="filterMediaBorder"
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
                    <InputGeneral
                      onChange={onChange}
                      defaultValue={query.get("country")}
                      name="country"
                      id="inputFilterAdopt"
                      ref={countryRef}
                      width="200px"
                      placeholder="Country"
                    />
                    <InputGeneral
                      onChange={onChange}
                      defaultValue={query.get("region")}
                      name="region"
                      id="inputFilterAdopt"
                      ref={regionRef}
                      width="203px"
                      placeholder="Region"
                    />
                    <InputGeneral
                      onChange={onChange}
                      defaultValue={query.get("city")}
                      name="address"
                      id="inputFilterAdopt"
                      ref={cityRef}
                      width="203px"
                      placeholder="City"
                    />
                    <InputGeneral
                      onChange={onChange}
                      defaultValue={query.get("zip_code")}
                      name="zip_code"
                      id="inputFilterAdopt"
                      ref={zipRef}
                      width="205px"
                      placeholder="Zip code"
                    />
                  </DropInputWrap>
                </DropSection>
                <DropSection>
                  <DropSectionTitles className="subtitle">
                    Apartment Info
                  </DropSectionTitles>
                  <DropInputWrap>
                    <InputGeneral
                      ref={roomRef}
                      width="200px"
                      placeholder="Rooms"
                    />
                    <InputGeneral
                      ref={sizeRef}
                      width="203px"
                      placeholder="Size"
                    />
                    <InputGeneral
                      ref={sortRef}
                      width="203px"
                      placeholder="Sort"
                    />
                  </DropInputWrap>
                </DropSection>
                <DropSection>
                  <DropSectionTitles className="subtitle">
                    Apartment Info
                  </DropSectionTitles>
                  <DropInputWrap>
                    <InputGeneral
                      ref={minRef}
                      width="200px"
                      placeholder="Min Price"
                    />
                    <InputGeneral
                      ref={maxRef}
                      width="203px"
                      placeholder="Max Price"
                    />
                  </DropInputWrap>
                </DropSection>
                <DropFooterWrap>
                  <Button
                    type="cancelMode"
                    onClick={() => setDisplay(!display)}
                  >
                    Cancel
                  </Button>
                  <Button>Submit</Button>
                </DropFooterWrap>
              </DropWrap>
            </Container>
          )}
        </FilterWrap>
      </PostContainer>
    </Container>
  );
};

export default Filter;
