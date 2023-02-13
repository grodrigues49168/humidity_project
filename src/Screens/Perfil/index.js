import React from 'react';
import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import Styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Fundo = require("../../assets/Imagens/fundo03.jpg");

export default props => (
    <ImageBackground  source={Fundo} style={Styles.fundo}>
        <View>
  
        <TouchableOpacity 
        style={Styles.btnn} name="sair" 
        onPress={()=> props.navigation.navigate('Login')}>
            <Text style={Styles.textbtn}>
                Clique para sair <Icon color={'#fff'}  name='sign-out-alt' size={16}  />
            </Text>

        </TouchableOpacity>
        </View>
        
 
    </ImageBackground>
     

)