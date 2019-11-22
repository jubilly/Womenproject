import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons"
export default class Relatos extends Component {
  static navigationOptions = ({navigation}) => ({
    title : "Relatos", 
    headerStyle: {
        backgroundColor: '#AC58FA',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    headerRight:(
      <TouchableOpacity onPress={()=>navigation.navigate('Novorelato')}>
      <Icon
      style={{marginRight: 20}}
      name="add-circle-outline" size ={24}
      color="#ffffff"
      />
      </TouchableOpacity>
    )   
});
  render() { 
      const { tweet } = this.props;
    return (
    <View style={styles.container}>
        <Text style={styles.author}>Oi</Text>
    </View>    
    );
  }
}
const styles = StyleSheet.create({
    container: {
      padding: 20,
      borderBottomWidth: 1,
      borderColor: "#eeeeee"
    },
  
    author: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#1C2022"
    },
  
    content: {
      fontSize: 15,
      lineHeight: 20,
      color: "#1C2022",
      marginVertical: 10
    },
  
    likeButton: {
      flexDirection: "row",
      alignItems: "center"
    },
  
    likeText: {
      color: "#999999",
      marginLeft: 5
    }
  });