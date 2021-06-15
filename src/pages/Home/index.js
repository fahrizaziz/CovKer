import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {CardGlobal, CardIndo} from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView style={styles.container}>
        <CardGlobal />
        <CardIndo />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  page: {
    backgroundColor: '#112340',
    flex: 1,
  },
});
