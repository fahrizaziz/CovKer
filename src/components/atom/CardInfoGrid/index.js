import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
interface Props {
  status: string;
  value: string;
  colors: String;
}
const CardInfroGrid: FC<Props> = (props) => {
  return (
    <View style={{marginVertical: 4, flex: 1}}>
      <Text style={{fontSize: 18, color: props.colors, fontWeight: '800'}}>
        {props.status}
      </Text>
      <Text style={{fontSize: 22, color: 'white'}}>{props.value}</Text>
    </View>
  );
};

export default CardInfroGrid;

const styles = StyleSheet.create({});
