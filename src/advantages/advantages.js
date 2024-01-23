import React from "react";
import {
  Cardcontainer,
  Contentstyled,
  Discriptionstyled,
  Headingstyled,
  Imagewrapper,
  Innerwrapper,
  Advantageleftside,
 TextStyled,
  AdvantageSection,
  AdvantageWrapper,
  Advantagerightside,
  ContentDiscription,
  
} from "./advantages.styled";
export function Advantagespage() {
  return (
    <>
     
        <AdvantageSection>
          <AdvantageWrapper>
            <Innerwrapper>
              <Cardcontainer>
                <Advantagerightside>
                  <Imagewrapper src="http://217.160.46.77/assets/images/advantages.png "></Imagewrapper>
                </Advantagerightside>
                <Advantageleftside>
                  <Headingstyled>Your advantages at a glance</Headingstyled>
                  <Discriptionstyled>
                    It is a long established fact that a reader will be
                    distracted
                  </Discriptionstyled>
                  
                  <Contentstyled>
                    <p>
                      <ContentDiscription> <TextStyled>1</TextStyled> </ContentDiscription>
                      <li> Your finances: easier than ever With the</li>
                      <li> best partners at your side </li>
                    </p>
                  </Contentstyled>
                </Advantageleftside>
              </Cardcontainer>
            </Innerwrapper>
          </AdvantageWrapper>
        </AdvantageSection>
      
    </>
  );
}
