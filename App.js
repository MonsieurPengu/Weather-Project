import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
//import {SearchBar} from 'react-native-elements';
import SearchBar from "./components/SearchBar"



export default function App() {
  const [text, setText] = useState('');
  const [currentWeather,setCurrentWeather]=useState(null)
  const [unitsSystem,setUnitSystem] =useState('imperial')   
  const WEATHER_API_KEY= '2811822b97e2b02b7e2ea768d305ab75'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'
const weatherUrl =`api.openweathermap.org/data/2.5/weather?q=${text}&appid=${WEATHER_API_KEY}`

useEffect(()=>{
  load();
},[])
async function load(){
const response = await fetch(weatherUrl)
const results = await response.json()
if(response.ok){
  setCurrentWeather(results)
}
else{

  setErrorMessage(result.message)
  alert(error.message)
}
}

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
     <SearchBar></SearchBar>
    </View>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
