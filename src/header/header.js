import {
    Aboutwrapper,
    Managmentcontact,
    Hadercontainer,
    AssetManagmentHeader,
    AssetManagmentImage,
    Assetsimagebox,
    Hadersection,
    Haederwrapper,
    ContactButton,
    Smallnavigation,
    Navigationwrapper,
    WhyAssetmanagment,
  } from "./header.styled";
 
  export function Header() {
    return (
      <>
        <Hadersection>
          <Hadercontainer>
            <Haederwrapper>
              <AssetManagmentHeader>
                <Assetsimagebox>
                  <AssetManagmentImage src= "https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/64afed14-ed4d-43df-b0f4-c58aa8a1df8f.svg" />
                </Assetsimagebox>
                <Navigationwrapper>
                  <WhyAssetmanagment>
                    Why asset management
                  </WhyAssetmanagment>
                  <Aboutwrapper>About Us</Aboutwrapper>
                  <ContactButton>
                    <Managmentcontact>contact</Managmentcontact>
                  </ContactButton>
                  <Smallnavigation src="https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/a22a9827-da86-48f7-8526-38cf0d7e4c92.svg" />
                </Navigationwrapper>
              </AssetManagmentHeader>
            </Haederwrapper>
          </Hadercontainer>
        </Hadersection>
      </>
    );
  }