import React, { Component } from 'react';
import { StackActions, NavigationActions } from 'react-navigation'
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/FontAwesome"

// import { Container } from './styles';


export default class Contatos extends Component {
  static navigationOptions = {
    title: 'Contatos',
    headerStyle: {
      backgroundColor: '#AC58FA',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  handleContatosCadastrados = () =>{
    this.props.navigation.navigate("Contatoscadastrados");
  }
  handleEditarContato = () =>{
    this.props.navigation.navigate("Editarcontato");
  }
  handleCadastrarContato = () =>{
    this.props.navigation.navigate("Cadastrarcontato");
  }
  handleExcluirContato = () =>{
    this.props.navigation.navigate("Excluircontato");
  }

  render() {
    return (
    <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.areaFunconalidades}>
                <TouchableOpacity style={styles.funcoes} onPress={this.handleContatosCadastrados}>
                    <Text style={styles.link}>Contatos cadastrados</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.funcoes} onPress={this.handleEditarContato}>
                    <Text style={styles.link}>Editar contatos</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.funcoes} onPress={this.handleCadastrarContato}>
                    <Text style={styles.link}>Cadastrar contatos</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.funcoes} onPress={this.handleExcluirContato}>
                    <Text style={styles.link}>Excluir contatos</Text> 
                </TouchableOpacity>
            </View>
        </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
header:{
    height:60,
    backgroundColor: '#f4ddf8',
    paddingHorizontal: 20,
    paddingTop:10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
},
headertext:{
    padding: 5,
    color: "#AC58FA",
    fontSize: 18,
    fontWeight: "bold",
},
container: {
    flex: 1,
    backgroundColor: "#ffffff" ,
},

content: {
   flex: 1,
   justifyContent: "center",
   alignItems: "center",
   padding: 30
},
areaFunconalidades:{
    flex: 1,
    marginTop:10,
    backgroundColor: "#ffffff",
    flexDirection:"row",
    flexWrap:'wrap',
    alignContent: 'center', 
},
funcoes:{
    width:130,
    height:80,
    margin:10,
    backgroundColor:'#f4ddf8',
},
link:{
    padding: 10,
    marginTop: 10,
    color: "#AC58FA",
    fontSize: 18,
    fontWeight: "bold",
  },
botaoemergencia:{
    alignItems:'center',
    justifyContent:'center',
    width:200,
    height:200,
    backgroundColor:'#ef4374',
    borderRadius:150,
    shadowColor: "#000000",
    shadowOffset: {
        width: 2,
        height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5.46,
    elevation: 8,
},
textoemergencia:{
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "bold",
  },

});