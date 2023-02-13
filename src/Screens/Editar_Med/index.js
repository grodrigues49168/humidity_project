import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Styles from './styles';
import Versao from '../../components/versao';



const Fundo = require("../../assets/Imagens/fundo03.jpg");

export default props => (
    <ImageBackground  source={Fundo}  style={Styles.fundo}>
  
       
    <Versao/>
        
    </ImageBackground>
    

)