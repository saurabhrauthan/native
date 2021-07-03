import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { authStack, appStack } from "./Routes";
export const Navigator = () => {
  return <NavigationContainer>{appStack()}</NavigationContainer>;
};
