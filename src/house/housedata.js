import React from "react";
import { WealthdetailsData, Data, Wealthdetails } from "./house.styled";
export const WealthProps = (props) => {
  return (
    <>
      <WealthdetailsData>
        <Data>
          <img src={props.svg} alt="correctimg" />
        </Data>
        <Wealthdetails>{props.Title}</Wealthdetails>
      </WealthdetailsData>
    </>
  );
};
