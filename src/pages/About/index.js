import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {List} from '../../components/molecul';

const About = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <List
          name="Edit Profile"
          desc="Last Update Yesterday"
          type="next"
          icon="edit-Profile"
        />
        <List
          name="Language"
          desc="Avalaible 12 languages"
          type="next"
          icon="language"
        />
        <List
          name="Give Us Rate"
          desc="On Google Play Store"
          type="next"
          icon="rate"
        />
        <List
          name="Help Center"
          desc="Read our gudelines"
          type="next"
          icon="help"
        />
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#112340',
    flex: 1,
  },
  content: {
    backgroundColor: 'white',
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
