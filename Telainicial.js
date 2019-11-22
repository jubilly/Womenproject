import React, { Component } from 'react';
import { StackActions, NavigationActions } from 'react-navigation'
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/FontAwesome"
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


export default class Telainicial extends Component {
    static navigationOptions = {
        header: null,
   };
  state = {
    username:''
  };
  handleRelatos = () =>{
    this.props.navigation.navigate("Relatos");
  }
  handleInformes = () =>{
    this.props.navigation.navigate("Informes");
  }
  handleMapa = ()=>{
    this.props.navigation.navigate("Mapa");
  }
  handleContatos = ()=>{
    this.props.navigation.navigate("Contatos");
  }
  handleLeis = () =>{
    this.props.navigation.navigate("Leis");
  }
  handleEdepois = () =>{
    this.props.navigation.navigate("Edepois");
  }

  render() {
    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headertext}>Início</Text>
        </View>
        <View style={styles.content}>
            <TouchableOpacity style={styles.botaoemergencia}>
                    <Text style={styles.textoemergencia}>EMERGÊNCIA</Text>
            </TouchableOpacity> 
            <View style={styles.areaFunconalidades}>
                <TouchableOpacity style={styles.funcoes} onPress={this.handleRelatos}>
                    <Text style={styles.link}>Relatos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.funcoes} onPress={this.handleInformes}>
                    <Text style={styles.link}>Informes</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.funcoes} onPress={this.handleMapa}>
                    <Text style={styles.link}>Mapa</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.funcoes} onPress={this.handleContatos}>
                    <Text style={styles.link}>Contatos</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.funcoes} onPress={this.handleLeis}>
                    <Text style={styles.link}>Leis</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.funcoes} onPress={this.handleEdepois}>
                    <Text style={styles.link}>E depois?</Text> 
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
    backgroundColor: '#AC58FA',
    paddingHorizontal: 20,
    paddingTop:10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
},
headertext:{
    padding: 5,
    color: "#ffffff",
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
    backgroundColor:'#ff00ff',
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