import React, { Component } from 'react';

import { View, Text } from 'react-native';

// import { Container } from './styles';

export default class Edepois extends Component {
  static navigationOptions = {
    title: 'O que fazer pós violência ou abusos?',
    headerStyle: {
      backgroundColor: '#AC58FA',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (<View>
        <Text>
            E depois
        </Text>
    </View>);
  }
}
