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
import VMvolker from "../asserts/vm-logo-2.png";

export function Footerpage() {
  return (
    <>
      <Footersection>
        <Footercontainer>
          <Footerwrapper>
            <Footerinnerwrapper>
              <FooterLogo src={VMvolker} alt="volkermunkoimg" />
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
              <Verticalline />
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
