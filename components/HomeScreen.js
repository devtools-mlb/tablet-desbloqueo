// Homescreen.js
import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  Button,
} from 'react-native';


export default class Homescreen extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
            
            <View style={ styles.MainContainer }>
              <View style={ styles.sectionContainer }>
                <Text style={ styles.sectionTitle }>DESBLOQUEIO DE USUÁRIO</Text>
                <Text style={ styles.sectionDescription }>
                  Clique abaixo para scanear o seu QRCode
                </Text>
                <Image style={styles.sectionGif}
                    source={{uri: 'https://cdn.dribbble.com/users/1062923/screenshots/3188644/zamok.gif'}}  
                />
              </View>

              {/* <View style={[{ width: "90%", height: "30%", margin: 10, color: "red" }]}>
              <Button
                title="CLIQUE AQUI"
                color="orange"
                accessibilityLabel="Tap to Decrypt Data"
                onPress={() => {
                  this.props.navigation.navigate('About')
                }}
              /> 
          </View> */}

              <TouchableOpacity style={styles.sectionButton} activeOpacity={0.5}>
            
            <Text style={styles.TextStyle} 
            onPress={() => this.props.navigation.navigate('About')}> CLIQUE AQUI </Text>
          </TouchableOpacity>
            </View>
      </>
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
  sectionContainer: {
    marginTop: 0,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 50,
    fontFamily: 'sans-serif-medium',
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'sans-serif-medium',
    fontWeight: '600',
    color: 'black',
  },
  sectionGif: {
    paddingHorizontal: 24,
    width: 600, 
    height: 350,
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