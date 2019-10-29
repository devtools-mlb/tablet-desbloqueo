import React from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
          
          <View style={styles.MainContainer}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>DESBLOQUEIO DE USUÁRIO</Text>
              <Text style={styles.sectionDescription}>
                Clique abaixo e scanear o seu QRCode
              </Text>
              <Image style={styles.sectionGif}
                  source={{uri: 'https://cdn.dribbble.com/users/1062923/screenshots/3188644/zamok.gif'}}  
              />
            </View>
            <TouchableOpacity style={styles.sectionButton} activeOpacity={0.5}>
          
          <Text style={styles.TextStyle} 
          onPress={() => Alert.alert('Simple Button pressed')}> CLIQUE AQUI </Text>
        </TouchableOpacity>
          </View>
    </>
  );
};

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
    fontSize: 24,
    fontFamily: 'sans-serif-medium',
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    textAlign: 'center',
  },
  sectionGif: {
    paddingHorizontal: 24,
    width: 300, 
    height: 250
  },
  sectionButton: {
    marginTop: 100,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5CD51',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 100,
    width: 220,
    borderRadius: 20,
    margin: 10
  },
  TextStyle: {
    flex: 1,
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'sans-serif-medium',
    fontWeight: '600',
    color: 'black',
  }
});

export default App;
