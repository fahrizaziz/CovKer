import React, {FC} from 'react';
import {View, Text} from 'react-native';
interface Props {
  status: string;
  value: string;
  colors: string;
}

const CardInfo: FC<Props> = (props) => {
  return (
    <View style={{marginVertical: 4}}>
      <Text style={{fontSize: 18, color: props.colors, fontWeight: '700'}}>
        {props.status}
      </Text>
      <View style={{marginRight: 10}}>
        <Text style={{fontSize: 24, color: 'white'}}>{props.value}</Text>
      </View>
    </View>
  );
};

export default CardInfo;
