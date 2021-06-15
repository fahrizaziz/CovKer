import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, ListHotline} from '../../components';

const Contact = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <View style={styles.containerwrapper}>
          <Text>Kontak Layanan Untuk Covid-19</Text>
          <Gap height={8} />
          <Text>Kementrian Kesehatan</Text>
          <ListHotline icon="pengaduan" name="119 ext 9 " />
          <Gap height={8} />
          <Text>DKI Jakarta</Text>
          <ListHotline
            icon="pengaduan"
            name="112, 081112112112, atau 081388376955 "
          />
          <Gap height={8} />
          <Text>Jawa Tengah</Text>
          <ListHotline
            icon="pengaduan"
            name="(024) 3580713, 082373600560, atau 1500649 "
          />
          <Gap height={8} />
          <Text>Jawa Barat</Text>
          <ListHotline icon="pengaduan" name="119 " />
        </View>
      </View>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  containerwrapper: {
    backgroundColor: '#0BCAD4',
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  content: {
    backgroundColor: 'white',
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  page: {
    backgroundColor: '#112340',
    flex: 1,
  },
});
