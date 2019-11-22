import React, { Component } from 'react';
import { StackActions, NavigationActions } from 'react-navigation'
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Cadastrosistema from "./Cadastrosistema"
import PropTypes from 'prop-types';
import {
  Container,
  Logo,
  Input,
  ErrorMessage,
  ButtonText,
  SignUpLink,
  SignUpLinkText,
} from './styles';

// import { Container } from './styles';

export default class Login extends Component {
  state = { login: '', senha: '', error: '' };
  static navigationOptions = {
      header: null
  }
  handleLogin = (login) => {
    this.setState({ login });
  };
 // handleEfetuarLogin = async () =>{
    handleEfetuarLogin = () =>{
      this.props.navigation.navigate("Telainicial");
     /*  if (this.state.email.length === 0 || this.state.password.length === 0) {
        this.setState({ error: 'Preencha usuário e senha para continuar!' }, () => false);
      } else {
        try {
          const response = await api.post('/sessions', {
            email: this.state.email,
            password: this.state.password,
          });
            
          await AsyncStorage.setItem('@AirBnbApp:token', response.data.token);
  
          const resetAction = StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Main' }),
            ],
          });
          this.props.navigation.dispatch(resetAction);
        } catch (_err) {
          this.setState({ error: 'Houve um problema com o login, verifique suas credenciais!' });
        }
      }*/
    };
  handleSenha = (senha) => {
    this.setState({ senha });
  };
  CadastroSistema = () =>{
    this.props.navigation.navigate("Cadastrosistema");
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
                onChangeText={this.handleLogin}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                //value={this.state.username}
                onChangeText={this.handleSenha}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
            />
             {this.state.error.length !== 0 && <Text>{this.state.error}</Text>}
            <TouchableOpacity style={styles.button} onPress={this.handleEfetuarLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            
            <Text style={styles.link} onPress={this.CadastroSistema}>
                Deseja se cadastrar?
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

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },

  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    height: 44,
    backgroundColor:'#fff',
    paddingHorizontal: 15,
    alignSelf: "stretch",
    marginTop: 30
  },
  descricao:{
    color: "#AC58FA",
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
  link:{
    padding: 10,
    marginTop: 10,
    color: "#AC58FA",
    fontSize: 16,
    fontWeight: "bold",

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