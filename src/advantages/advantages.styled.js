import styled from "styled-components";

export const AdvantageSection = styled.div`
  width: 100%;
  max-width: 1050px;
  margin: 0 auto;
  background-color: #ffffff;
  
@media (max-width: 991px) {
    padding: 0;
  }
`;

export const AdvantageWrapper = styled.div`
  margin: 20px;
  position: relative;
`;

export const Innerwrapper = styled.div`
  display: flex;
`;

export const Advantagerightside = styled.div`
  width: 50%;
  height: 650px;
  background-size: 660px 640px;
  background-position: right 20px bottom 10px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Advantageleftside = styled.div`
  width: 50%;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Headingstyled = styled.div`
  color: #000000;
  font-size: 55px;
  font-weight: normal;
  line-height: 70px;
  padding: 9px 9px 20px 15px;

  @media (max-width: 991px) {
    font-size: 39px;
    line-height: 35px;
  }  
`;

export const Discriptionstyled = styled.p`
  height: 13px;
  font-size: 16px;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: -0.16px;
  text-align: left;
  color: #37415c;
  padding: 0px 0px 0px 25px;
`;

export const Contentstyled = styled.div`
  margin: 4px 0 3px 28px;
  color: #37415c;
    font-size: 24px;
    font-weight: 600;
    line-height: 3.72;
    letter-spacing: -0.18px;
    margin: 0;

    @media (max-width: 991px) {
font-size: 13px;
margin:  0 0 0 18px;
    }
`;

export const ContentDiscription = styled.li`
background-color: #000000;
color: #ffffff;
border-radius: 50% ;
border: 2px solid ;
height: 20px;
width: 20px;
`;

export const TextStyled = styled.span`
color: #ffffff;
`;

export const Imagewrapper = styled.img`
  width: 100%;
  max-width: 477px;
  padding: 16px 0px 0px 10px;

  @media (max-width: 991px) {
    padding: 38px 0px 0px 0px;
    max-width: 400px;
  }
`;

export const Cardcontainer = styled.div`
  display: flex;
  width: 100%;
  height: 590px;
  margin: 19px 0 0;
  border-radius: 24px;
  box-shadow: 0 8px 40px 0 #0000001a;
  background-color: #ffffff;

  @media (max-width: 991px) {
    flex-direction: column;
    width: 100%;
    height: 720px;
    margin: 0 auto;
  }
`;
