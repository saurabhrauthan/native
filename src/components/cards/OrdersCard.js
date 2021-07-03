import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Button } from "react-native-paper";

const OrderCard = (order) => {
  return (
    <View>
      <Card style={styles.orderCard}>
        <Card.Content style={styles.OrderCardContent}>
          <Text style={styles.orderDetail}>
            Order Id :{" "}
            <Text style={styles.orderDetailValues}>{`#${order.id}`}</Text>
          </Text>
          <Text style={styles.orderDetail}>
            No. of Items :{" "}
            <Text style={styles.orderDetailValues}>{order.packagesNo}</Text>
          </Text>
          <Text style={styles.orderDetail}>
            Weight :{" "}
            <Text style={styles.orderDetailValues}>{`${order.weight} kg`}</Text>
          </Text>
          <Text style={styles.orderDetail}>
            Creation Date :{" "}
            <Text style={styles.orderDetailValues}>{order.date}</Text>
          </Text>
          <Text style={styles.orderDetail}>
            Creation Time :{" "}
            <Text style={styles.orderDetailValues}>{order.time}</Text>
          </Text>
          <Text style={styles.orderDetail}>
            Pickup Location :{" "}
            <Text style={styles.orderDetailValues}>{order.pickupAddress}</Text>
          </Text>
          <Text style={styles.orderDetail}>
            Delievery Location :{" "}
            <Text style={styles.orderDetailValues}>
              {order.delieveryAddress}
            </Text>
          </Text>
          <View style={styles.buttonsCard}>
            <Button
              onPress={() => console.log("Pressed")}
              style={styles.btnAccept}
              mode="contained"
            >
              Accept
            </Button>
            <Button
              onPress={() => console.log("Pressed")}
              style={styles.btnReject}
              mode="contained"
            >
              Reject
            </Button>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  orderCard: {
    marginBottom: 20,
  },
  OrderCardContent: {
    paddingLeft: 20,
    borderLeftWidth: 5,
    borderLeftColor: "#C80815",
  },
  orderDetail: {
    marginBottom: 10,
  },
  orderDetailValues: {
    color: "#808080",
    fontWeight: "800",
  },
  buttonsCard: {
    display: "flex",
    flexDirection: "row",
  },
  btnAccept: {
    backgroundColor: "green",
    color: "#fff",
    marginRight: 10,
  },
  btnReject: {
    backgroundColor: "#C80815",
    color: "#fff",
    marginRight: 10,
  },
});
