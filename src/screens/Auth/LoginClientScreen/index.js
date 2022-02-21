import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Input, Icon, Button } from "react-native-elements";

export default function LoginClientScreen() {
  const [text, setText] = useState("");
  const navigation = useNavigation();

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Input 
          label="Usuario"
          placeholder="Usuario" 
          rightIcon={{type:'font-awesome', name:'user'}}
          />
        <Input 
          label="Contraseña"
          placeholder="Contraseña" 
          rightIcon={{type:'font-awesome', name:'lock'}}
          />
          
        <Button
          title="Entrar"
          buttonStyle={{
            borderWidth: 0,
            borderColor: "transparent",
            borderRadius: 20,
            paddingHorizontal: 20
          }}
          icon={{
            name: "arrow-right",
            type: "font-awesome",
            size: 15,
            color: "white",
          }}
          iconRight
          iconContainerStyle={{ marginLeft: 10, marginRight: 10 }}
          onPress={ () => navigation.navigate('ClientScreen')}
        />
      </View>

      <Button
        title="Registrar"
        buttonStyle={{
          backgroundColor: '#cccccc',
          borderWidth: 0,
          borderColor: "transparent",
          borderRadius: 20,
          color: '#000000'
        }}
        titleStyle={{
          color: 'black',
          marginHorizontal: 20,
        }}
        containerStyle={{
          marginVertical: 10,
        }}
        icon={{
          name: "arrow-right",
          type: "font-awesome",
          size: 15,
          color: "black",
        }}
        iconRight
        iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
        onPress={() => navigation.navigate('RegisterClient')}
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
