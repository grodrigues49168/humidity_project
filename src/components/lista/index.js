import React, { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet, 
  ScrollView,
  SafeAreaView
} from "react-native";
import firebase from '../../config/firebase'
import { useNavigation } from "@react-navigation/native"
import Styles from './styles'

export default function MedCad() {
  const [cadastromed, setCadastromed] = useState([]);
  const database = firebase.firestore();
  const navigation = useNavigation();

  function deleteTask(id) {
    database.collection("cadastromed").doc(id).delete();
  }
  useEffect(() => {
    database.collection("cadastromed").onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setCadastromed(list);
      
    });
           
  }, []);
  
  return(
    <SafeAreaView  style={Styles.container}>
        <ScrollView  style={Styles.scroll}>
        <FlatList 
       
         showsVerticalScrollIndicator={false}
        data = { cadastromed }
        renderItem={({ item }) => {
            return(
                <View style={Styles.med}>
                
                        <Text sytle={Styles.textsub}>Nome: {item.nome}</Text>
                        <Text sytle={Styles.textsub}>Quantidade: {item.qntd}</Text>
                        <Text sytle={Styles.textsub}>Data de validade: {item.data}</Text>
                        <Text sytle={Styles.textsub}>Temperatuar maxima suportada: {item.tempmx}</Text>
                        <Text sytle={Styles.textsub}>Temperatura mínima suportada: {item.tempmn}</Text>
                        
                        <View style={Styles.btns}>
                        <TouchableOpacity style={Styles.btn_dele} onPress={()=> {
                          deleteTask(item.id)

                        }}><Text style={Styles.textbtn}> DELETAR  <Icon color={'#fff'}  name='trash' size={14}  /></Text></TouchableOpacity>
                 
                <TouchableOpacity style={Styles.btn_edit} onPress={()=> {
                        //  deleteTask(item.id)

                        }}><Text style={Styles.textbtn}> EDITAR  <Icon color={'#fff'}  name='edit' size={14}  /></Text></TouchableOpacity>
                 </View>
                 </View>
            )
        }}
        />
           </ScrollView>  
    </SafeAreaView>
  )
}
