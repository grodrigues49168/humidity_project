import React, { useState } from 'react';
import { View, Text, SafeAreaView,} from 'react-native';
import Styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Paho from 'paho-mqtt';
import Styles1 from '../Umidade/styles';




var entrada;
var entrada1
var mensagem2;


const client = new Paho.Client(
    'broker.emqx.io',
    8083,
    '/'
  )
  
  try{
  client.connect({
      onSuccess: function () {
          console.log("conectado")
          //client.subscribe("esp32/output")
          //client.subscribe("esp32/counter")
          client.subscribe("temperatura");
          client.subscribe("umidade");
          
        const message1 = new Paho.Message('connected')
       //const message2 = new Paho.Message('connected')
        
       
        message1.destinationName = "temperatura"
        //message2.destinationName = "umidade"
       
       
        client.send(message1)
        //client.send(message2)
       
       
      },
      onFailure: function () {
          console.log("Desconectado")
      }, 
      //userName: 'emqx',
      //password: 'public',
      //useSSL: true,
  })} catch (error) {
    alert(error);
  }



export default props => {
   

    const [msg, setMsg] = useState("22");
    const [msg1,setMsg1] = useState("70");
    


    client.onMessageArrived = function (messageX) {
        //alert("Entrou")
        console.log('Topic:' + messageX.destinationName + ", Message:" + messageX.payloadString);
        entrada = messageX.destinationName;
        if(messageX.destinationName == "temperatura"){
          setMsg(messageX.payloadString);
        }else{
          setMsg1(messageX.payloadString);
        }
        //mensagem2 = messageX.payloadString;
        //setMsg(messageX.payloadString);
        //setMsg1(messageX.payloadString);
      
      };

/*
      var peso = {msg};
      var status = "";
     
      if (peso < 15) {
         status = "Temperatura baixa"
      } else if (peso >= 29) {
        status = "Temperatura alta"
      } else{
         status = "Temperatura Normal"
      } ;

*/


return (

   

   <View>
         
                       
            
  
      
      
        <View style={Styles1.container}>
          <Text style={Styles1.text}>Umidade: </Text>
          <Text style={Styles1.text}> {msg1} % <Icon color={'#fff'}  name='burn' size={14}  /> </Text>
        </View>
    </View>

    
 
)};
