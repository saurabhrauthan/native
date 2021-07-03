import React from "react";
import { StatusBar } from "expo-status-bar";
import { Navigator } from "./src/utilities/navigation/Navigator";
import { Provider as PaperProvider } from "react-native-paper";
export default function App() {
  return (
    <PaperProvider>
      <Navigator />
      <StatusBar style="light" />
    </PaperProvider>
  );
}
