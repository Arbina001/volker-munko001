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
  Detailsbox,
  Numberslogo,
  Numbersdetails,
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
                  <Detailsbox>
                    <Numberslogo>
                      <Numbersdetails>1</Numbersdetails>
                    </Numberslogo>
                    You take center stage
                  </Detailsbox>
                  <Detailsbox>
                    <Numberslogo>
                      <Numbersdetails>2</Numbersdetails>
                    </Numberslogo>
                    You take center stage
                  </Detailsbox>
                  <Detailsbox>
                    <Numberslogo>
                      <Numbersdetails>3</Numbersdetails>
                    </Numberslogo>
                    You take center stage
                  </Detailsbox>
                </Contentstyled>
              </Advantageleftside>
            </Cardcontainer>
          </Advantageinerwrapper>
        </Advantagewrapper>
      </Advantagesection>
    </>
  );
}
