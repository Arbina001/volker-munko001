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
import { Wealthmanagmentprops } from "./housedata";
import { Data, Detailsdata } from "./houseiddata";
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
                      <Wealthmanagmentprops
                        key={data.id}
                        svg={data.Managmentlogo}
                        Title={data.Title}
                      />
                    ))}
                  </Wealthpropertieswrapper>
                </Wealthleftbox>
              </Wealthleftsection>
              <Wealthrightside>
                <Wealthrightsideinnerbox>
                  <Wealthrightboxdata>
                    {Detailsdata.map((data) => (
                      <Wealthmanagmentprops
                        key={data.id}
                        svg={data.Managmentlogo}
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
