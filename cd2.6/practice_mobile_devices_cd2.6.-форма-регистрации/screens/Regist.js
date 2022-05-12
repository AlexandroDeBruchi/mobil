import React from 'react';
import { Text, View, Image, TextInput, Button, Alert } from 'react-native';
import Icon from '@expo/vector-icons/Foundation' 
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
export default class Register extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
     
          padding: 40,
          paddingTop: 70,
          backgroundColor: '#FF0000'
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Image
            source={require('../assets/bg.png')}
            style={{
              width: "100%",
              height: 175,
               borderRadius: 100 / 2,
               display:"block"
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          Регистрация
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#000000',
            marginBottom: 50,
            marginTop:20,
          }}>
          Введите, пожалуйста, свои персональные данные для дальнейшей персонализации. Это необходимо только один раз. 
        </Text>

        <View
          style={{
            
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 2,
            marginBottom: 10,
            paddingHorizontal: 10,
            borderColor: '#152647',
            paddingVertical: 5,
            borderRadius: 15,
            backgroundColor:'#000000'
          }}>
          <MaterialCommunityIcons name="email-outline" size={24} color="#ffffff" />
          <TextInput placeholder="Email"  placeholderTextColor='#ffffff' style={{ paddingHorizontal: 10, color:'#b4bccc' }} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 2,
            marginBottom: 10,
            paddingHorizontal: 10,
            borderColor: '#152647',
            paddingVertical: 5,
            borderRadius: 15,
            backgroundColor:'#000000'
          }}>
          <AntDesign name="lock" size={24} color="#ffffff" />
          <TextInput
            placeholder="Пароль"
            placeholderTextColor='#ffffff'
            secureTextEntry
            style={{ paddingHorizontal: 10 }}
          />
        </View>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 2,
          marginBottom: 30,
          paddingHorizontal: 10,
          borderColor: '#152647',
          paddingVertical: 5,
          borderRadius: 15,
          backgroundColor:'#000000'
        }}>
          <AntDesign name="lock" size={24} color="#ffffff" />
          <TextInput 
            placeholder="Повторите пароль"
            placeholderTextColor='#ffffff'
            secureTextEntry
            style={{paddingHorizontal: 10}}
          />
        </View>

        <Button 
          title="Регистрация"
          color="black"
         
          onPress={() => Alert.alert('Вы успешно зарегистрированы!')} 
        />
        <View style={{alignItems:'center', marginTop:20,}}>
        <Text style={{fontSize:16, color:"#152647"}}>Уже есть профиль?</Text>
        <Text 
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 16,
            marginTop: 10,
            color: '#b4bccc'
          }}
          onPress={() =>
            this.props.navigation.navigate('Login')
          }
        >
          Войти
        </Text>
        </View>
        

      </View>
    );
  }
}