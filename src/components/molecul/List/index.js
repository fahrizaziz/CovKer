import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IconEditProfile,
  IconHelp,
  IconLanguage,
  IconNext,
  IconRate,
} from '../../../assets';

const List = ({icon, name, desc, type}) => {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <IconEditProfile />;
    }
    if (icon === 'language') {
      return <IconLanguage />;
    }
    if (icon === 'rate') {
      return <IconRate />;
    }
    if (icon === 'help') {
      return <IconHelp />;
    }
    return <IconEditProfile />;
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Icon />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.lastmessage}>{desc}</Text>
      </View>
      {type === 'next' && <IconNext />}
    </TouchableOpacity>
  );
};

export default List;

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
  name: {
    fontSize: 16,
    fontWeight: '400',
    color: '#2D91BC',
  },
  lastmessage: {
    fontSize: 12,
    color: '#7D8797',
    fontWeight: '300',
  },
});
