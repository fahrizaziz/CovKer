import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CardInfo} from '../../atom';
import api from '../../../api';
interface CardStatus {
  value: number;
  detail: string;
}
interface CardGlobalState {
  confirmed: CardStatus;
  recovered: CardStatus;
  death: CardStatus;
}
const CardGlobal = () => {
  const [data, setData] = useState();
  const getData = async () => {
    try {
      let res = await Axios.get(api.api);
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
        Global
      </Text>
      {console.log('ini data', data)}
      {data && (
        <>
          <View style={{flexDirection: 'row'}}>
            <CardInfo
              colors="yellow"
              status="Confirmed"
              value={data.confirmed.value.toLocaleString()}
            />
            <CardInfo
              colors="green"
              status="Recovered"
              value={data.recovered.value.toLocaleString()}
            />
            <CardInfo
              colors="red"
              status="Death"
              value={data.deaths.value.toLocaleString()}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default CardGlobal;

const styles = StyleSheet.create({
  containerwrapper: {
    backgroundColor: '#0BCAD4',
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
});
