import { React, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, SectionList, StyleSheet, Text, View } from 'react-native';
import { frutas } from './frutas.js'


export default function App() {

  // setState do botão de filtro
  const [filter, setFilterText] = useState("Filtrar letra R");

  // Frutas
  const DATA = [
    {
      data: (filter == "Filtrar letra R") ? frutas : filtros('r'),
    },
  ];
  
  // Função para filtrar letra
  function filtros(queue) {
    return frutas.filter(fruit => fruit.toLowerCase().indexOf(queue.toLowerCase()) > -1)
  };

  // Componente separardor
  const Separator = ({size}) =>{
    return <View style={{height: size}}></View>
  };

  // Componente das frutas
  const Fruta = ({name}) => {
    return <View><View style={styles.card}>
      <Text>{name}</Text>
    </View><Separator size={3}/></View>
  };

  // Visual do aplicativo
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Frutas</Text>
      <View style={styles.card}><Text>Nome</Text><Pressable onPressIn={()=>{setFilterText((filter == "Filtrar letra R") ? "Remover Filtro" : "Filtrar letra R")}}><Text style={{color: '#7790D9'}}>{filter}</Text></Pressable></View>
      <Separator size={10}/>
      <SectionList
        sections={DATA}
        renderItem={({item})=><Fruta name={item}/>}
      />
      <Separator size={10}/>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor: '#F2F2F2',
    elevation: 2,
  },
  titulo: {
    textAlign: 'center',
    paddingBottom: 30,
    fontSize: 25,
    fontFamily: 'sans-serif'
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5
  }
});
