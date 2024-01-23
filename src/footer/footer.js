import {
    Footercontainer,
    Footerdiscription,
    Footerend,
    FooterHorizontal,
    FooterLogo,
    Footerinnerwrapper,
    Footerwrapper,
    Footersection,
    Rightsection,
    Verticalline,
  } from "./footer.styled";
  
  export function Footerpage() {
    return (
      <>
        <Footersection>
          <Footercontainer>
            <Footerwrapper>
              <Footerinnerwrapper>
                <FooterLogo src="https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/a4514f4a-0aa0-446d-82af-8003b0b198ec.svg" />
                <Footerdiscription>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters
                </Footerdiscription>
              </Footerinnerwrapper>
            </Footerwrapper>
            <FooterHorizontal />
            <Footerend>
              @2020 Volker Munko
              <Rightsection>
                Privacy policy
                <Verticalline/>
                Imprint
                <Verticalline />
                Cookie Policy
              </Rightsection>
            </Footerend>
          </Footercontainer>
        </Footersection>
      </>
    );
  }
  