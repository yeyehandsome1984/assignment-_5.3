import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { TextInput } from 'react-native-web';


function HomeScreen() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const navigate= useNavigation();
  useEffect(()=>{
    console.log("Home screen")
  })
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Home Page!</Text>
      
      <View 
        style={{flexDirection: "row", 
                alignItems: 'center', 
                marginTop: 20,
                marginBottom: 5}}
      >
        <Text style={{flex: 1, 
                      width: 100, 
                      fontWeight: "bold"}}>
            Login name: 
        </Text>
        <TextInput 
          style={{flex: 1,
                  borderWidth: 1, 
                  borderColor: '#000000',
                  borderRadius:5,
                  marginLeft: 10,
                  paddingLeft: 5}}
          placeholder="user"
          value={user}
          onChangeText={(text) => setUser(text)}
        />
      </View>

      <View 
        style={{flexDirection: "row", 
                alignItems: 'center', 
                marginTop: 20,
                marginBottom: 20}}
      >
        <Text style={{flex: 1, 
                      width: 100, 
                      fontWeight: "bold"}}>
            Email id: 
        </Text>
        <TextInput 
          style={{flex: 1,
                  borderWidth: 1, 
                  borderColor: '#000000',
                  borderRadius:5,
                  marginLeft: 10,
                  paddingLeft: 5}}
          placeholder="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <Button 
          title='Login'
          onPress={()=> {
            navigate.navigate("Login", {user:user, email:email});
          }}
        ></Button>
      

    </View>
  );
}

function LoginScreen({route}) {
  const {user, email} = route.params || { user: "Guest", email: "No email"};
  useFocusEffect(()=>{
    console.log("Login screen")
  });
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login!</Text>
      <Text style={{fontWeight: "bold"}}>User: {user}</Text>
      <Text style={{fontWeight: "bold"}}>Email: {email}</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" 
                    component={HomeScreen}/>
        <Tab.Screen name="Login"
                    component={LoginScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
