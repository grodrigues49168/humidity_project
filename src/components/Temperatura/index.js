import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Paho from 'paho-mqtt';
import Styles1 from '../Umidade/styles';
import Styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const client = new Paho.Client('10.44.1.35', 9001, '/');

export default function App() {
  const [moisture, setMoisture] = useState(0);

  useEffect(() => {
    const onMessageArrived = (message) => {
      if (message.destinationName === 'esp32/moisture') {
        setMoisture(parseFloat(message.payloadString));
      }
    };

    const onConnect = () => {
      client.subscribe('esp32/moisture');
    };

    client.connect({ onSuccess: onConnect });
    client.onMessageArrived = onMessageArrived;

    return () => {
      client.disconnect();
    };
  }, []);

  return (
    <View style={Styles1.container}>
      <Text style={Styles1.text}>umidade do solo</Text>
      <Text style={Styles1.text}> {moisture}% <Icon color={'#fff'}  name='burn' size={14}  /></Text>
    </View>
  );
}
