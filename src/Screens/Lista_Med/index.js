import React from 'react';
import { View, Text, SafeAreaView, ImageBackground } from 'react-native';
import Styles from './styles';
import Temperatura from '../../components/Temperatura';
import Avisos from '../../components/Avisos';
import Lista from '../../components/lista'

const Fundo = require("../../assets/Imagens/fundo01.jpg");

export default props => (
    <ImageBackground imageStyle={{opacity:0.3}} source={Fundo}  resizeMode='cover' style={Styles.fundo}>
  
     <Lista/>
 
    </ImageBackground>
)