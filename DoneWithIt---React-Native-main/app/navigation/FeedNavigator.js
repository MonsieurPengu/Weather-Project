import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import routes from "./routes";

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.LISTINGS} component={ListingScreen} />
    <Stack.Screen
      name={routes.LISTING_DETAILS}
      component={ListingDetailsScreen}
      options={({ route }) => ({ title: route.params.title })}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
