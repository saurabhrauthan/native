import React from "react";
import { View, Text, Image } from "react-native";
import { Form, Item, Icon, Body, Input, Button } from "native-base";
//Icons
import { EvilIcons } from "@expo/vector-icons";
// Stylesheet
import styles from "../../components/styles";
// Form Container
import FormContainer from "../../components/FormContainer";
const Login = (props) => (
  <FormContainer>
    <Form style={styles.padding50}>
      <Item rounded style={styles.formitems}>
        <EvilIcons name="user" size={26} color="#6C757D" />
        <Input
          placeholder="Enter username"
          autoCorrect={false}
          autoCompleteType={"off"}
          keyboardType={"numeric"}
          maxLength={10}
          placeholderTextColor={"#6C757D"}
          returnKeyType={"go"}
        />
      </Item>
      <Item rounded style={styles.formitems}>
        <EvilIcons name="lock" size={26} color="#6C757D" />
        <Input
          placeholder="Enter password"
          autoCorrect={false}
          autoCompleteType={"off"}
          keyboardType={"numeric"}
          maxLength={10}
          placeholderTextColor={"#6C757D"}
          returnKeyType={"go"}
        />
      </Item>
      <Button full rounded style={styles.buttonBG} onPress={() => {}}>
        <Text style={styles.whiteText}>Login</Text>
      </Button>
      <Body>
        <Text style={styles.poweredBY}>Powered by BIBHA Supply</Text>
        <Text>Chain services (P). LTD</Text>
      </Body>
    </Form>
  </FormContainer>
);
export default Login;
