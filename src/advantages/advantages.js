import React from "react";
import {
  Cardcontainer,
  Contentstyled,
  Discriptionstyled,
  Headingstyled,
  Imagewrapper,
  Innerwrapper,
  Advantageleftside,
  AdvantageSection,
  AdvantageWrapper,
  Advantagerightside,
  DataContainer,
  CardIconImage,
  ListData,
} from "./advantages.styled";
import WhyAssect from "../asserts/group-68.png";

export function Advantagespage() {
  return (
    <>
      <AdvantageSection>
        <AdvantageWrapper>
          <Innerwrapper>
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
          </Innerwrapper>
        </AdvantageWrapper>
      </AdvantageSection>
    </>
  );
}
