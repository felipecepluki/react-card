import styled from "styled-components";
import { Marginer } from "../marginer";

import NikeImg from "../../assets/images/nike-logo.png";

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5em 6px 0 6px;
  line-height: 1.4;
`;

const MediumText = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
  text-align: justify;
`;

const Price = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
`;

const SmallText = styled.span`
  font-size: 11px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BuyButton = styled.button`
  padding: 10px 16px;
  background-color: #a8160c;
  color: #000;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;

  &:hover {
    background-color: transparent;
    color: #fff;
    border: 3px solid #a8160c;
  }
`;

const NikeLogo = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;

  img {
    width: auto;
    height: 13px;
  }
`;

export function ShoesDetails(props) {
  return (
    <DetailsContainer>
      <SmallText>NIKE AIR</SmallText>
      <SpacedHorizontalContainer>
        <MediumText>OFF WHITE X AIR JORDAN 1 CHICAGO</MediumText>
      </SpacedHorizontalContainer>
      <Marginer direction="vertical" margin="1.2em" />
      <SpacedHorizontalContainer>
        <MediumText>AWESOME SNEAKER</MediumText>
        <BuyButton>BUY</BuyButton>
      </SpacedHorizontalContainer>
      <NikeLogo>
        <img src={NikeImg} alt="Nike Logo" />
      </NikeLogo>
    </DetailsContainer>
  );
}
