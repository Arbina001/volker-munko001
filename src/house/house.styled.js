import styled from "styled-components";
import HouseProtection from "../asserts/house-protection-bank-removebg-preview.png";
import HouseProtectionBackground from "../asserts/group-10818@2x.png";

export const Wealthsection = styled.section`
  position: relative;
  background: url(${HouseProtectionBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  &:before {
    content: "";
    background: url(${HouseProtection});
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 560px 620px;
    width: 560px;
    height: 620px;
    position: absolute;
    right: 0;
    top: 167px;
    @media (max-width: 991px) {
      width: 100%;
      max-width: 270px;
      height: 290px;
      background-size: 270px 290px;
      top: 230px;
    }
  }
`;
export const Wealthcontainer = styled.div``;
export const Wealthwrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;
export const Wealthinnerwrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 180px 0;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 140px 0 70px;
  }
`;
export const Wealthleftsection = styled.div`
  max-width: 530px;
  width: 100%;
`;
export const Wealthleftbox = styled.div``;
export const Wealthheading = styled.div`
  position: relative;
  max-width: 565px;
  width: 100%;
  font-family: "Nunito-Bold";
  font-size: 52px;
  font-weight: 500;
  line-height: 70px;
  color: #FFFFFF;
  margin: 0 0 100px 0;
  padding: 60px 0 0 0;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -50px;
    height: 5px;
    width: 190px;
    background: #FFFFFF;
  }
  @media (max-width: 991px) {
    font-size: 23px;
    line-height: 30px;
    margin: 0 0 30px 0;
    padding: 0;
    &::before {
      width: 95px;
      height: 3px;
      bottom: -30px;
    }
  }
`;
export const Wealthpropertieswrapper = styled.ul`
  list-style: none;
  @media (max-width: 991px) {
    margin: 300px 0 0;
  }
`;
export const WealthDiscriptionData = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  max-width: 490px;
  width: 100%;
  font-family: "Nunito-Regular";
  @media (max-width: 991px) {
    margin: 0 0px 20px -30px;
  }
`;
export const WealthDataIcon = styled.div`
  margin: 30px 30px 0 0;
`;
export const WealthRightBoxInner = styled.div``;
export const WealthDiscription = styled.p`
  font-family: "Nunito-Regular";
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: #F3F3F3;
  @media (max-width: 991px) {
    font-size: 14px;
  }
`;

// export const Wealthheading = styled.p``
export const WealthRightBox = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 0 0 30px;
  @media (max-width: 991px) {
    max-width: 344px;
  }
`;
export const WealthRightBoxList = styled.ul`
  margin: 550px 0 0 0;
  list-style: none;
  @media (max-width: 991px) {
    margin: 0 0 0 -30px;
  }
`;