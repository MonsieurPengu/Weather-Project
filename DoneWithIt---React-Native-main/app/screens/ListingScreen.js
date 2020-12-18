import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingApi from "../api/listings";

const listings = [
  {
    _id: 1,
    title: "Red Jacket for sale",
    price: 100,
    images: [
      {
        _id: 1,
        image: require("../assets/jacket.jpg"),
      },
    ],
  },
  {
    _id: 2,
    title: "Couch in a great condition",
    price: 1000,
    images: [
      {
        _id: 1,
        image: require("../assets/couch.jpg"),
      },
    ],
  },
];

function ListingScreen({ navigation }) {
  // const [listings, setListings] = useState([]);

  // useEffect(() => {
  //   loadListings();
  // }, []);

  // // const loadListings = async () => {
  // //   const response = await listingApi.getListings();
  // //   setListings(response.data);
  // // };
  // const loadListings = async () => {
  //   const response = await listingApi.getListings();
  //   console.log(response.data);
  // };
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing._id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            image={require("../assets/couch.jpg")}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
