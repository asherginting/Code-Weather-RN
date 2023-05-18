import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.view}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Image
            source={require('../assets/icons/search.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.txtLocation}>Location</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Image
            source={require('../assets/icons/filter.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: 'white',
    flex: 1,
  },
  view: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    width: 25,
    height: 25,
  },
  txtLocation: {
    marginRight: 220,
  },
});
