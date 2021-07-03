import React from "react";
import { View, StatusBar, Image } from "react-native";
import { Container, Header, Text, Content, Icon } from "native-base";
import styles from "../styles";
const logoimage = require("../../assets/logo.png");
const FormContainer = (props) => (
  <Container style={styles.container}>
    <Content>
      <View style={styles.formcontainerwrap}>
        <Image source={logoimage} style={styles.logo} />
      </View>
      <View style={{ marginTop: 20 }}>{props.children}</View>
    </Content>
  </Container>
);
export default FormContainer;
