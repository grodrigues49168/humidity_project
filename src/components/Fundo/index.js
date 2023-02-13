import React from 'react';
import { View, Text, SafeAreaView, ImageBackground, ImageBackgroundComponent } from 'react-native';
import Styles from './styles';


const Fundo = require("../../assets/Imagens/fundo03.jpg");

export default props => (
    <ImageBackgroundComponent imageStyle={{opacity:0.3}}  source={Fundo}  resizeMode='cover' style={Styles.fundo}>
  
      
 
    </ImageBackgroundComponent>
)