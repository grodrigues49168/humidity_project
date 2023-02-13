import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Styles from './style'

export default props => (
   
    <SafeAreaView style={Styles.container}>
        <Text style={Styles.text}>Versão</Text>
        <Text style={Styles.textsub}> 1.0.1</Text>
    </SafeAreaView>
  
)