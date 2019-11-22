import React, { Component } from 'react';
//import api from '../services/api';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Novoretalo extends Component {
    static navigationOptions = {
        header: null
      };
      handleRelatos = () =>{
        this.props.navigation.navigate("Relatos");
      }
render() {
    return (
    <View style={styles.container}>
      <View style={styles.header}>
            <TouchableOpacity onPress={this.handleRelatos}>
                <Icon name="close" size ={24} color="#f4ddf8"/>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button} 
                onPress={this.handleRelatos}>
            <Text style={styles.buttonText}>Relatar</Text>
            </TouchableOpacity>
      </View>
        <TextInput
            style={styles.input}
            multiline
            placeholder= "O que aconteceu?"
            //value={this.state.newTweet}
            onChangeText={this.handleInputChange}
            placeholderTextColor = "#ffffff"
            //onSubmitEditing="this.handleNewTweet"
        />
    </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF"
    },
  
    header: {
      paddingTop: 10,
      paddingHorizontal: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
  
    button: {
      height: 32,
      paddingHorizontal: 20,
      borderRadius: 16,
      backgroundColor: "#f4ddf8",
      justifyContent: "center",
      alignItems: "center"
    },
  
    buttonText: {
      color: "#FFF",
      fontSize: 16,
      fontWeight: "bold"
    },
  
    input: {
      margin: 20,
      fontSize: 16,
      color: "#000000",
      backgroundColor: "#f4ddf8"
    }
  });
  