import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CardInfoGrid from '../../atom/CardInfoGrid';
import Axios from 'axios';
import api from '../../../api';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
interface CardStatus {
  value: number;
  detail: string;
}
interface CardIndonesiaState {
  perawatan: CardStatus;
  meninggal: CardStatus;
  sembuh: CardStatus;
  jumlahKasus: CardStatus;
}
const CardIndo = () => {
  const navigation = useNavigation();
  const [data, setData] = useState();
  const getData = async () => {
    try {
      let res = await Axios.get(api.apiId);
      setData(res.data);
    } catch (e) {
      console.warn('error', e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.containerwrapper}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '800',
          fontSize: 30,
          marginBottom: 20,
          color: 'white',
        }}>
        Indonesia
      </Text>
      <View style={{flexDirection: 'row'}}>
        {data && (
          <>
            <View style={{flex: 1, alignItems: 'center'}}>
              <CardInfoGrid
                colors="orange"
                status="Total"
                value={data.jumlahKasus.toLocaleString()}
              />
              <CardInfoGrid
                colors="#267B2F"
                status="Sembuh"
                value={data.sembuh.toLocaleString()}
              />
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <CardInfoGrid
                colors="#D98C18"
                status="Perawatan"
                value={data.perawatan.toLocaleString()}
              />
              <CardInfoGrid
                colors="#FF0000"
                status="Meninggal"
                value={data.meninggal.toLocaleString()}
              />
            </View>
          </>
        )}
      </View>
      <Text style={{textAlign: 'right', marginVertical: 10, color: 'white'}}>
        {data && data.lastUpdate}
      </Text>
      <TouchableOpacity
        style={styles.wrapperdetail}
        onPress={() => navigation.navigate('IndonesiaCase')}>
        <View style={styles.detail}>
          <Text style={styles.textDetail}>Detail</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardIndo;

const styles = StyleSheet.create({
  containerwrapper: {
    backgroundColor: '#0BCAD4',
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  detail: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#263D7B',
    width: 300,
    height: 40,
    borderRadius: 20,
  },
  wrapperdetail: {
    alignItems: 'center',
    marginBottom: 30,
  },
  textDetail: {
    color: '#0BCAD4',
    fontSize: 16,
  },
});
