import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";
import { StackParamList } from "./_layout";

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  return (
    <View>
      <Text>Hello World</Text>
      <Button
        onPress={() => navigation.navigate("History")}
        title="Show History"
      />
    </View>
  );
};

export default HomeScreen;
