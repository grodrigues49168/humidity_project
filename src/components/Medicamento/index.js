import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Styles from './styles';

export default props => (
    <SafeAreaView style={Styles.border}>
    <SafeAreaView style={Styles.container}>
        <Text style={Styles.text}>Avisos e Alertas:</Text>
        <Text style={Styles.textsub}>Avisos Importantes Temperatura máxima suportada atingida!</Text>
    </SafeAreaView>
    </SafeAreaView>
)