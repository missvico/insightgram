import React, { useState } from "react";
import { Alert } from "react-native";
import Login from "./Login";
import { Container } from "./styles";
import { connect } from "react-redux";
import { loginUser } from "../../../redux/actions/users";

const LoginForm = ({ loginUser, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = email => {
    setEmail(email);
  };

  const changePassword = password => {
    setPassword(password);
  };

  const buttonPressed = () => {
    if (email && password) {
      loginUser(email, password).then(response => {
        console.log("Token", response);
        navigation.navigate("FeedsStack");
      });
    } else {
      Alert.alert("¡ERROR! Completá todos los campos");
    }
  };

  return (
    <Container>
      <Login
        changeEmail={changeEmail}
        changePassword={changePassword}
        buttonPressed={buttonPressed}
        email={email}
        password={password}
      />
    </Container>
  );
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    loginUser: (email, password) => dispatch(loginUser(email, password))
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
