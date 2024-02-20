import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import RestaurantInfoCard from "../components/restaurant-info-card-component";
import { styled } from "styled-components";

const isAndroid = Platform.OS === "android";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${isAndroid ? StatusBar.currentHeight + "px" : 0};
`;
const SafeContainer = styled(View)`
  justify-content: center;
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeArea>
      <SafeContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          mode="bar"
          theme={{ colors: { elevation: { level3: "#ededed" } } }}
        />
      </SafeContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};
