import React from 'react';
import { Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView} from 'react-native';
import Styles from './styles';
import firebase from '../../../config/firebase';
import { useState } from 'react';
//import { doc, setDoc, addDoc, collection, deleteDoc, updateDoc, getDocs, getFirestore  } from "firebase/firestore";
//import { addDoc, collection, getFirestore } from "firebase/firestore";


export default function cadastromed({ navigation}, props){
//const databese = firebase.firestore();
const [nome, setNome] = useState('')
const [data, setData] = useState('')
const[qntd, setQntd] = useState('')
const [tempmx, setTempmx] = useState('')
const [tempmn, setTempmn] = useState('')

function addcastromed(){
  //alert("Entrou");
  //const db = getFirestore(app);
  //addDoc(collection(db, "cadastromed"), {
   
  
  const db = firebase.firestore();
    //db.collection("cadastromed").doc("LA").set({
      db.collection("cadastromed").add({
        nome: nome,
        data: data,
        qntd: qntd,
        tempmn: tempmn,
        tempmx: tempmx

    }).then(() => {
      alert("Cadastrado com sucesso")
    }).catch((error) => {
      alert(error);
    })
    
}



return (
    <SafeAreaView  style={Styles.container}>

    
        <ScrollView  style={Styles.scroll}>
    
            <Text style={Styles.text}>Preencha todos os dados! </Text>

            <TextInput style={Styles.input} placeholder=" Nome do medicamento?"  onChangeText={setNome} value={nome} testID="inputNome"/>
    
            <TextInput style={Styles.input} placeholder=" Temperatura máxima suportada?" onChangeText={setTempmx} value={tempmx} testID="inputTempmx"/>

            <TextInput style={Styles.input} placeholder=" Temperatura mínima suportada?" onChangeText={setTempmn} value={tempmn}  testID="inputTempmn"/>

            <TextInput style={Styles.input} placeholder=" Quantidade em estoque?" onChangeText={setQntd} value={qntd} testID="inputQntd"/>

            <TextInput style={Styles.input} placeholder=" Data de validade?" onChangeText={setData} value={data} testID="inputData"/>

            <TouchableOpacity testID="Cadastro" style={Styles.btn} onPress={addcastromed} >
             <Text style={Styles.textbtn} > Cadastrar </Text>
            </TouchableOpacity>

    </ScrollView>    

</SafeAreaView>

)}