import React, { Component } from 'react';
import { StackActions, NavigationActions } from 'react-navigation'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {
  Container,
  Logo,
  Input,
  ErrorMessage,
  ButtonText,
  SignUpLink,
  SignUpLinkText,
} from './styles';
export default class Cadastrosistema extends Component {
  state = {
    username:''
  };
  static navigationOptions = {
      header: null
  }
  handleLogin = () =>{
    this.props.navigation.navigate("Login");
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
        <Logo source={require('./testeicon.png')} resizeMode="contain"/>
        <Text style={styles.descricao}>Por que toda mulher tem direito à vida, à liberdade e à segurança pessoal </Text>  
            <TextInput
                style={styles.input}
                placeholder="Nome do usuário"
                //value={this.state.username}
                onChangeText={this.handleInputChange}
                onSubmitEditing={this.handleLogin}
            />
             <TextInput
                style={styles.input}
                placeholder="Senha"
                //value={this.state.username}
                onChangeText={this.handleInputChange}
                onSubmitEditing={this.handleLogin}
                secureTextEntry
            />
             <TextInput
                style={styles.input}
                placeholder="Nome completo"
                //value={this.state.username}
                onChangeText={this.handleInputChange}
                onSubmitEditing={this.handleLogin}
            />
            <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <Text style={styles.link} onPress={this.handleLogin}>
                Voltar ao login
            </Text>
          </View>
        </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  link:{
    padding: 10,
    marginTop: 10,
    color: "#AC58FA",
    fontSize: 16,
    fontWeight: "bold",

  },
  descricao:{
    color: "#AC58FA",
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },

  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    backgroundColor: "#fff",
    borderRadius: 5,
    height: 44,
    paddingHorizontal: 15,
    alignSelf: "stretch",
    marginTop: 30
  },

  button: {
    height: 44,
    alignSelf: "stretch",
    marginTop: 20,
    backgroundColor: "#AC58FA",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  }
});