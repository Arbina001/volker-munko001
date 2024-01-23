import {
    Mapscontainer,
    Mapssection,
    Mapswrapper,
    Mapsinnerwrapper,
    MapsBox,
    Mapsdiscription,
    ContactAsset,
    ContactAssetBox,
    VolkerMunko,
    Mapsiconwrapper,
    Mapsicon,
    StyledMapIframe,
  } from "./maps.styled";
 
  export function Mapspage() {
    return (
      <>
        <Mapssection>
          <Mapscontainer>
            <Mapswrapper>
              <Mapsinnerwrapper>
                <MapsBox>
                  <StyledMapIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.811733323151!2d73.12992577388097!3d22.285120379697574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc7dd361f0625%3A0x59326ccefe144813!2sAdrixus%20Tech%20Studio%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1705559938492!5m2!1sen!2sin" />
                </MapsBox>
                <Mapsdiscription>
                  <ContactAssetBox>CONTACT</ContactAssetBox>
                  <VolkerMunko>Volker Munko</VolkerMunko>
                  <Mapsiconwrapper>
                    <Mapsicon src= "https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/154e9544-1767-46a2-907a-b207bbdd7680.svg"/>
                    Office for Allfinanz German investment advice On the heath 8
                    32602 Vlotho
                  </Mapsiconwrapper>
                  <Mapsiconwrapper>
                    <Mapsicon src= "https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/79dab7c0-b2f3-4869-84c8-887485a03c58.svg" />
                    25753 12354
                  </Mapsiconwrapper>
                  <Mapsiconwrapper>
                    <Mapsicon src= "https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/5a05abb9-103c-4cdd-867e-7f7ff1f73be6.svg" />
                    Volker.Munko@allfinanz.ag
                  </Mapsiconwrapper>
                </Mapsdiscription>
              </Mapsinnerwrapper>
            </Mapswrapper>
          </Mapscontainer>
        </Mapssection>
      </>
    );
  }