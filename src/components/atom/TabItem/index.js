import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconAnjuran,
  IconAnjuranAktif,
  IconBeranda,
  IconBerandaAktif,
  IconPengaturan,
  IconPengaturanAktif,
} from '../../../assets';

const TabItem = ({title, active, onLongPress, onPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <IconBerandaAktif /> : <IconBeranda />;
    }
    if (title === 'Hotline') {
      return active ? <IconAnjuranAktif /> : <IconAnjuran />;
    }
    if (title === 'Setting') {
      return active ? <IconPengaturanAktif /> : <IconPengaturan />;
    }
    return <IconBeranda />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      {active && <Text style={styles.title(active)}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: (active) => ({
    color: active ? '#0BCAD4' : 'white',
    fontSize: 10,
    marginTop: 4,
  }),
});
