import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { Input, Button, ButtonText, ContainerForm, Title } from "./styles";

export default ({
  changeEmail,
  changePassword,
  buttonPressed,
  email,
  password,
}) => {
  return (
    <ContainerForm>
      <Title>INSIGHTGRAM</Title>
      <Input
        autoCapitalize="none"
        onChangeText={(emailVal) => changeEmail(emailVal)}
        placeholder="Email"
        value={email}
      />
      <Input
        secureTextEntry={true}
        onChangeText={(passwordVal) => changePassword(passwordVal)}
        placeholder="Contraseña"
        value={password}
      />
      <Button onPress={() => buttonPressed()}>
        <ButtonText>Confirmar</ButtonText>
      </Button>
    </ContainerForm>
  );
};
