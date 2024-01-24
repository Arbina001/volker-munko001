import React from "react";
import {
  Cardcontainer,
  Contentstyled,
  Discriptionstyled,
  Headingstyled,
  Imagewrapper,
  Advantageinerwrapper,
  Advantageleftside,
 Advantagesection,
 Advantagewrapper,
  Advantagerightside,
  DataContainer,
  CardIconImage,
  ListData,
} from "./advantages.styled";
import WhyAssect from "../asserts/group-68.png";

export function Advantagespage() {
  return (
    <>
      <Advantagesection>
        <Advantagewrapper>
          <Advantageinerwrapper>
            <Cardcontainer>
              <Advantagerightside>
                <Imagewrapper src={WhyAssect} alt="advantageimg"></Imagewrapper>
              </Advantagerightside>
              <Advantageleftside>
                <Headingstyled>Your advantages at a glance</Headingstyled>
                <Discriptionstyled>
                  It is a long established fact that a reader will be distracted
                </Discriptionstyled>
                <Contentstyled>
                  <DataContainer>
                    <CardIconImage>
                      <ListData>1</ListData>
                    </CardIconImage>
                    You take center stage
                  </DataContainer>
                  <DataContainer>
                    <CardIconImage>
                      <ListData>2</ListData>
                    </CardIconImage>
                    You take center stage
                  </DataContainer>
                  <DataContainer>
                    <CardIconImage>
                      <ListData>3</ListData>
                    </CardIconImage>
                    You take center stage
                  </DataContainer>
                </Contentstyled>
              </Advantageleftside>
            </Cardcontainer>
          </Advantageinerwrapper>
        </Advantagewrapper>
      </Advantagesection>
    </>
  );
}
