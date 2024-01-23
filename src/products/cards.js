import {
    CardButton,
   Cardcontainer,
   Carddiscription,
    CardImage,
    CardImageBox,
    Cardimagebox,
    CardWrapper,
    Carddetails,
  } from "./cards.styled";
  import information from "../asserts/information-button-2.png";
  import { CardData } from "./cardsdata";
  export function CardSection() {
    const ProductMenu = CardData.map((output) => (
      <>    
        <Cardcontainer>
          <Cardimagebox src={information}/>
          <Carddetails>
            <CardImageBox>
              <CardImage src={output.url}/>
            </CardImageBox>
            <Carddiscription>{output.title}</Carddiscription>
            <CardButton>contact</CardButton>
          </Carddetails>
        </Cardcontainer>
      </>
    ));
    return (
      <>
        <CardWrapper>
          {ProductMenu}
          {ProductMenu}
          {ProductMenu}
          {ProductMenu}
          {ProductMenu}
          {ProductMenu}
          {ProductMenu}
          {ProductMenu}
          {ProductMenu}
        </CardWrapper>
      </>
    );
  }