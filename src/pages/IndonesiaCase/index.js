import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import api from '../../api';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
interface Status {
  value: number;
  detail: string;
}

interface IndonesianState {
  fid: Status;
  kodeProvi: Status;
  kasusPosi: Status;
  kasusSemb: Status;
  kasusMeni: Status;
}
const IndonesiaCase = () => {
  const [data, setData] = useState();
  const getData = async () => {
    try {
      let res = await Axios.get(api.apiId + '/provinsi');
      setData(res.data.data);
    } catch (e) {
      console.warn('error', e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          margin: 8,
          padding: 10,
          borderRadius: 8,
          backgroundColor: 'white',
        }}>
        <Text style={{fontSize: 18, marginBottom: 8, fontWeight: '800'}}>
          {item.provinsi}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              flex: 1,
              backgroundColor: '#267B2F',
              color: 'white',
              padding: 4,
              textAlign: 'center',
              fontWeight: '800',
            }}>
            Positif {item.kasusPosi}
          </Text>
          <Text
            style={{
              flex: 1,
              backgroundColor: '#D98C18',
              color: 'white',
              padding: 4,
              textAlign: 'center',
              fontWeight: '800',
            }}>
            Sembuh {item.kasusSemb}
          </Text>
          <Text
            style={{
              flex: 1,
              backgroundColor: '#FF0000',
              color: 'white',
              padding: 4,
              textAlign: 'center',
              fontWeight: '800',
            }}>
            Meninggal {item.kasusMeni}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, i) => i.toString()}
      />
    </SafeAreaView>
  );
};

export default IndonesiaCase;
