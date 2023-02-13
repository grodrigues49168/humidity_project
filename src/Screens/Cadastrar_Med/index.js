import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Styles from './styles';
import Cadastrar from '../../components/Forms/Cadastrar';


const Fundo = require("../../assets/Imagens/fundo01.jpg");

export default props => (
    <ImageBackground imageStyle={{opacity:0.3}} source={Fundo} resizeMode='cover' style={Styles.fundo}>
  
        <Cadastrar/>   

    
        
    </ImageBackground>

)