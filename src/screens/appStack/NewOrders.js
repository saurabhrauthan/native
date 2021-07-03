import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { OrdersCard } from "../../components";

const orders = [
  {
    id: 82331,
    packagesNo: 5,
    date: "22 june 2021",
    time: "10:00 am",
    status: "New",
    weight: 8.3,
    pickupAddress: "Easy dAY branch sec:31",
    delieveryAddress: "19/4 Sec 31, Faridabad, Haryana",
  },
  {
    id: 82331,
    packagesNo: 5,
    date: "22 june 2021",
    time: "10:00 am",
    status: "New",
    weight: 8.3,
    pickupAddress: "Easy dAY branch sec:31",
    delieveryAddress: "19/4 Sec 31, Faridabad, Haryana",
  },
  {
    id: 82331,
    packagesNo: 5,
    date: "22 june 2021",
    time: "10:00 am",
    status: "New",
    weight: 8.3,
    pickupAddress: "Easy dAY branch sec:31",
    delieveryAddress: "19/4 Sec 31, Faridabad, Haryana",
  },
];

const NewOrders = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {orders.map((order) => {
          return (
            <OrdersCard
              id={order.id}
              packagesNo={order.packagesNo}
              date={order.date}
              weight={order.weight}
              pickupAddress={order.pickupAddress}
              delieveryAddress={order.delieveryAddress}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default NewOrders;

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});
