// Aboutscreen.js
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
 
import QRCodeScanner from 'react-native-qrcode-scanner';
import axios from 'axios';


export default class Aboutscreen extends Component {

  onSuccess = (e) => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        alert('O desbloqueio do usuário foi solicitado, pode demorar um ou dois minutos...');
        this.props.navigation.navigate('Home')
      })
  }


  render() {
    return (
      <View style={styles.MainContainer}>
      <QRCodeScanner
        cameraType='front'
        onRead={ this.onSuccess }
        containerStyle={{ marginTop: 10 }}
        cameraStyle={{ height: 300, width: 300, alignSelf: 'center', justifyContent: 'center' }}
        topContent={
          <Text style={styles.centerText}>
            Posicione o QRCode em frente à camera para o desbloqueio do usuário.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={ styles.sectionButton } activeOpacity={0.5}>
            
            <Text style={ styles.TextStyle } 
            onPress={() => this.props.navigation.navigate('Home')}> Voltar </Text>
          </TouchableOpacity>
        }
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#29B5F4',
  },

  centerText: {
    flex: 0.7,
    fontSize: 20,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },

  sectionButton: {
    marginTop: 100,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5CD51',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 200,
    width: 440,
    borderRadius: 20,
    margin: 10
  },
  TextStyle: {
    flex: 1,
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 35,
    fontFamily: 'sans-serif-medium',
    fontWeight: '600',
    color: 'black',
  }
});