import React from 'react';
import * as Font from 'expo-font';
import { 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground,
  Image,
  TextInput,
  Button
} 
  from 'react-native';
export default function Login()  {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function login(username, password){
    //this will go into actions
    console.log(username, password)
  }

  function handleSubmit(e){
    e.preventDefault()
    login(username,password)
  }
  return (
  <View style={styles.container}>
    <ImageBackground source={require('./assets/365/greensplash.png')} style={styles.bg}/>
    <Image source={require('./assets/365/365logo.png')}/>
    <Text style={styles.header}>#login</Text>
    <View style={styles.overlay}>
    </View>
    <View style={styles.form}>
      <Text style={{marginTop: '10%', fontSize: 15, marginLeft: '5%',}}>Username:</Text>
      <TextInput
      placeholder='Username'
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white', width: '90%', marginLeft: '5%', borderRadius: 5, padding: 10 }}
      onChangeText={text => setUsername(text)}
      value={username}
      />
      <Text style={{marginTop: '5%', fontSize: 15, marginLeft: '5%'}}>Password:</Text>
      <TextInput
      placeholder= 'Password'
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white', width: '90%', marginLeft: '5%', borderRadius: 5, padding: 10}}
      onChangeText={text => setPassword(text)}
      value={password}
      />
      <Text style={{fontSize: 13, color: 'black', textAlign: 'center', marginTop: '5%', marginBottom: '5%'}}>New to us? 
      {/* <Link to='/signup'>Sign Up</Link> ------- when we merge link will work*/}
      </Text>
      <View style={{ borderWidth: 1, borderColor: 'black', backgroundColor: '#f4e662', borderRadius: 8, width: 100, height: 40, display: 'flex', justifyContent: 'center', marginLeft: '34%'}}>
      <Button
        // style={{marginTop: '10%', borderWidth: 1, borderColor: 'black', backgroundColor: '#f4e662', color: 'black'}} ----- styles arent working
        style={styles.loginbutton}
        color= 'black'
        backgroundColor= '#f4e662'
        title="LOG IN"
        onPress={handleSubmit}
      ></Button>
      </View>
    </View>
  </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    },
    bg: {
      width: '100%', 
      height: '100%', 
      opacity: 0.25,
      position:'absolute'
    },
    overlay: {
      width: '80%',
      height: '60%',
      backgroundColor: '#F4E662',
      borderRadius: 15,
      position: 'absolute',
      left: 30,
      top: 275
    },
    form: {
      width: '80%',
      height: '60%',
      backgroundColor: '#3077E0',
      borderRadius: 15,
      position: 'relative',
      left: 10,
      top: 10
    },
    header: {
      fontSize: 36
    },
    loginbutton: {
      marginTop: '10%', 
      borderWidth: 1, 
      borderColor: 'black', 
      backgroundColor: '#f4e662', 
      color: 'black',
      height: 50,
      width: '40%'
      // this isnt working???? 
    }
  });
