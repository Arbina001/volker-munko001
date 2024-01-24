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
  Wealthrightside,
  Wealthrightsideinnerbox,
  Wealthrightboxdata,
} from "./house.styled";
import { WealthProps } from "./housedata";
import { Data, DataSecond } from "./houseiddata";
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
                    {Data.map((data) => (
                      <WealthProps
                        key={data.id}
                        svg={data.WealthIcon}
                        Title={data.Title}
                      />
                    ))}
                  </Wealthpropertieswrapper>
                </Wealthleftbox>
              </Wealthleftsection>
              <Wealthrightside>
                <Wealthrightsideinnerbox>
                  <Wealthrightboxdata>
                    {DataSecond.map((data) => (
                      <WealthProps
                        key={data.id}
                        svg={data.WealthIcon}
                        Title={data.Title}
                      />
                    ))}
                  </Wealthrightboxdata>
                </Wealthrightsideinnerbox>
              </Wealthrightside>
            </Wealthinnerwrapper>
          </Wealthwrapper>
        </Wealthcontainer>
      </Wealthsection>
    </>
  );
};
