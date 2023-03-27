import React from 'react';
import { View, Text, SafeAreaView, ImageBackground, Alert, } from 'react-native';
import Styles from './styles';
import Temperatura from '../../components/Umidade';
//import Avisos from '../../components/Avisos';

const Fundo = require("../../assets/Imagens/fundo03.jpg");



export default props => (
    <ImageBackground  source={Fundo}  style={Styles.fundo}>
        
   
        <SafeAreaView style={Styles.temp_umi}>
        <Temperatura/>
        
        </SafeAreaView>
        
 
    </ImageBackground>
)