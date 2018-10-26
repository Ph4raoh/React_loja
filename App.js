import React, { Component } from 'react';
import { Text, View, TextInput, Input, Button, Image, Header, Title, TouchableOpacity, AppRegistry, StyleSheet, KeyboardAvoidingView, ImageBackground, ScrollView} from 'react-native';

export default class Login extends Component {
    render() {
        return (

        <ScrollView>

          <View style={estilo.navbar}>
           <Text style={estilo.titulo}>Loja</Text>
            </View>

             <View style={estilo.items1}></View>

              <View style={estilo.items2}></View>

               <View style={estilo.items3}></View>

               <View style={estilo.items4}></View>

               <View style={estilo.items5}></View>

               <View style={estilo.items6}></View>



        </ScrollView>


        );
    }
}

const estilo = StyleSheet.create({


navbar: {
  flexDirection:'row',
  height: 50,
  backgroundColor: '#673AB7'
},

  titulo: {
  color: '#fff',
  fontSize: 20,
  left: 140,
  top: 10,
  fontWeight: 'bold',
},

items1: {
  height: 120,
  width: 130,
  backgroundColor: '#0652DD',
  top: 15,
  left: 25

},

items2: {
  height: 120,
  width: 130,
  backgroundColor: '#009432',
  top: 25,
  left: 25

},

items3: {
  height: 120,
  width: 130,
  backgroundColor: '#f1c40f',
  top: 35,
  left: 25

},

items4: {
  height: 120,
  width: 120,
  backgroundColor: '#b71540',
  top: -345,
  left: 175

},

items5: {
  height: 120,
  width: 120,
  backgroundColor: '#d35400',
  top: -335,
  left: 175

},

items6: {
  height: 120,
  width: 120,
  backgroundColor: '#192a56',
  top: -325,
  left: 175

}


  });


AppRegistry.registerComponent('Login', () => Login);
