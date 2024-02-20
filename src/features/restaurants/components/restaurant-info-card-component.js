import { View, Text } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import { styled } from "styled-components";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";

const RestaurantCard = styled(Card)`
  padding: ${(props) => props.theme.space[0]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  margin: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};



`;
const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;
const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = ["https://picsum.photos/700"],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard
      elevation={5}
      onLongPress={(e) => {
        console.log(e);
      }}
    >
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <SvgXml xml={star} width={20} height={20}/>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
