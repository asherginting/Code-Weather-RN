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
import {useSelector} from 'react-redux';

const Home = ({navigation}: {navigation: any}) => {
  const location = useSelector((state: any) => state.weather.location);

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
        <Text
          style={
            styles.txtLocation
          }>{`Location: ${location?.latitude}, ${location?.longitude}`}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Image
            source={require('../assets/icons/filter.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.viewHeader}>
        <View style={styles.viewCloud}>
          <Image
            source={require('../assets/icons/cloud.png')}
            style={styles.icon}
          />
          <View style={styles.viewTitle}>
            <Text>Few Clouds</Text>
            <Text style={styles.txtGray}>Light Air</Text>
          </View>
        </View>
        <Text style={styles.txtDegree}>28°C</Text>
        <Text style={styles.txtGray}>Feels like 33°C</Text>
        <View style={styles.viewWarning}>
          <Text style={styles.txtWarning}>Waspada Hujan Lebat - Moderate</Text>
        </View>
      </View>

      <TouchableOpacity>
        <View style={styles.viewHours}>
          <Text style={styles.txtGray}>22:00</Text>
          <Image
            source={require('../assets/icons/cloud.png')}
            style={styles.icon}
          />
          <Text>28°C</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.viewDate}>
        <TouchableOpacity style={styles.btnDate}>
          <Text style={styles.txtDate}>Thu May 18</Text>
          <View style={styles.viewItemRight}>
            <Text style={styles.txtRight}>31 / 27°C</Text>
            <Image
              source={require('../assets/icons/cloud.png')}
              style={styles.iconRight}
            />
            <Image
              source={require('../assets/icons/right.png')}
              style={styles.iconRight}
            />
          </View>
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
  iconRight: {
    width: 25,
    height: 25,
    marginBottom: 20,
    tintColor: 'gray',
  },
  txtLocation: {
    marginRight: 260,
  },
  viewHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  viewCloud: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewTitle: {
    marginLeft: 10,
  },
  txtGray: {
    color: 'gray',
  },
  txtDegree: {
    fontSize: 80,
    fontWeight: '100',
  },
  viewWarning: {
    backgroundColor: '#FF5F15',
    height: 30,
    width: 260,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  txtWarning: {
    color: 'white',
    fontSize: 15,
  },
  viewHours: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  viewDate: {
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  btnDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtDate: {
    flex: 1,
    marginBottom: 20,
    textAlign: 'left',
  },
  viewItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtRight: {
    marginRight: 5,
    marginBottom: 20,
  },
});
