import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { View, FlatList } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card-component";
import { styled } from "styled-components";
import { SafeArea } from "../../../components/utils/Safe-area.component";

const SafeContainer = styled(View)`
  justify-content: center;
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

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
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
        ]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
        // contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
