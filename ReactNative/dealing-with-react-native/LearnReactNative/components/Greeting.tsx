import React from 'react';
import {Text, View} from 'react-native';

interface GreetingProps {
  name: string;
}

function Greeting(props: GreetingProps) {
  return (
    <View>
      <Text>안녕하세요 {props.name}</Text>
    </View>
  );
}

export default Greeting;
