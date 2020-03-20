import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight
} from "react-native";
import {
  InputText,
  Input,
  Button,
  ButtonText,
  ContainerForm,
  Title
} from "./styles";

export default ({
  changeEmail,
  changePassword,
  buttonPressed,
  email,
  password
}) => {
  return (
    <ContainerForm>
      <Title>INSIGHTGRAM</Title>
      <Input
        autoCapitalize="none"
        onChangeText={email => changeEmail(email)}
        placeholder="Email"
        value={email}
      />
      <Input
        secureTextEntry={true}
        onChangeText={password => changePassword(password)}
        placeholder="Contraseña"
        value={password}
      />
      <Button onPress={() => buttonPressed()}>
        <ButtonText>Confirmar</ButtonText>
      </Button>
    </ContainerForm>
  );
};
