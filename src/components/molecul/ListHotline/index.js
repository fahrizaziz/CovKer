import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IconHotline, IconLocation} from '../../../assets';
import {Gap} from '../../atom';

const ListHotline = ({icon, name}) => {
  const Icon = () => {
    if (icon === 'pengaduan') {
      return <IconHotline />;
    }
    return <IconLocation />;
  };
  return (
    <View style={styles.container}>
      <Icon />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
};

export default ListHotline;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    marginLeft: 16,
  },
  wrapper: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
});
