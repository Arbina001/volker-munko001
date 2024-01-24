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
import Headermanagment from "../asserts/vm-logo@3x.png";
export function Header() {
  return (
    <>
      <Hadersection>
        <Hadercontainer>
          <Haederwrapper>
            <AssetManagmentHeader>
              <Assetsimagebox>
                <AssetManagmentImage
                  src={Headermanagment}
                  alt="volkermunkoimg"
                />
              </Assetsimagebox>
              <Navigationwrapper>
                <WhyAssetmanagment>Why asset management</WhyAssetmanagment>
                <Aboutwrapper>About us</Aboutwrapper>
                <ContactButton>
                  <Managmentcontact>contact</Managmentcontact>
                </ContactButton>
                <Smallnavigation
                  src="https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/a22a9827-da86-48f7-8526-38cf0d7e4c92.svg"
                  alt="navigationimg"
                />
              </Navigationwrapper>
            </AssetManagmentHeader>
          </Haederwrapper>
        </Hadercontainer>
      </Hadersection>
    </>
  );
}
