import React from "react";
import {
  Wealthsection,
  Wealthcontainer,
  Wealthwrapper,
  Wealthinnerwrapper,
  Wealthleftsection,
  Wealthleftbox,
  Wealthheading,
  Wealthpropertieswrapper,
  WealthRightBox,
  WealthRightBoxInner,
  WealthRightBoxList,
} from "./house.styled";
import { WealthProps } from "./housedata";
import { WealthData, WealthDataSecond } from "./houseiddata";
export const Housepage = () => {
  return (
    <>
      <Wealthsection>
        <Wealthcontainer>
          <Wealthwrapper>
            <Wealthinnerwrapper>
              <Wealthleftsection>
                <Wealthleftbox>
                  <Wealthheading>
                    Wealth management consulting with a seal of approval in
                    Vlotho
                  </Wealthheading>
                  <Wealthpropertieswrapper>
                    {WealthData.map((output) => (
                      <WealthProps
                        key={output.id}
                        WealthIcon={output.WealthIcon}
                        WealthText={output.WealthText}
                      />
                    ))}
                  </Wealthpropertieswrapper>
                </Wealthleftbox>
              </Wealthleftsection>
              <WealthRightBox>
                <WealthRightBoxInner>
                  <WealthRightBoxList>
                    {WealthDataSecond.map((output) => (
                      <WealthProps
                        key={output.id}
                        WealthIcon={output.WealthIcon}
                        WealthText={output.WealthText}
                      />
                    ))}
                  </WealthRightBoxList>
                </WealthRightBoxInner>
              </WealthRightBox>
            </Wealthinnerwrapper>
          </Wealthwrapper>
        </Wealthcontainer>
      </Wealthsection>
    </>
  );
};