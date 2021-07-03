import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import NewOrders from "../../screens/appStack/NewOrders";
import Settings from "../../screens/appStack/Settings";
import PendingOrders from "../../screens/appStack/PendingOrders";
import CompltedOrders from "../../screens/appStack/CompltedOrders";
import Icon from "react-native-vector-icons/Ionicons";

// Auth Screen
import Login from "../../screens/authStack/Login";

// Bottom Tab
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
// Stack navigator
const Stack = createStackNavigator();
export const authStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Login"}
      headerMode={false}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ed683d",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
export const appStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Orders"}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#2E3092",
        },
        headerTitleAlign: "center",
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="Orders" component={Bottamnav} />
    </Stack.Navigator>
  );
};
export const Bottamnav = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={"Orders"}
      activeColor="#2E3092"
      barStyle={{
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        zIndex: 8,
        overflow: "hidden",
      }}
      inactiveColor="#606770"
    >
      <BottomTab.Screen
        name="Orders"
        component={OrdersTopTab}
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" color={color} size={20} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <Icon name="settings-outline" color={color} size={20} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
export const OrdersTopTab = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="New Orders" component={NewOrders} />
      <TopTab.Screen name="Pending" component={PendingOrders} />
      <TopTab.Screen name="Completed" component={CompltedOrders} />
    </TopTab.Navigator>
  );
};
