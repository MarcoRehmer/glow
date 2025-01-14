import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HistoryScreen from "./history";
import HomeScreen from "./home";

export type StackParamList = {
  Home: undefined;
  History: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Glow" }}
      />
      <Stack.Screen
        name="History"
        component={HistoryScreen}
        options={{ title: "History", animation: "slide_from_bottom" }}
      />
    </Stack.Navigator>
  );
};

export default App;
