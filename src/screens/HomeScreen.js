import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate('LoginClient')}>
        <Text
          style={{
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: 40,
          }}
        >
          Cliente
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('LoginEmploye')}>
        <Text
          style={ styles.txtBtns }
        >
          Verificador
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn1: {
    backgroundColor: "#2e4053",
    borderRadius: 10,
    padding: 10,
  },
  btn2: {
    backgroundColor: "#D35400",
    borderRadius: 10,
    padding: 10,
  },
  txtBtns:{
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 40,
  },
  container: {
    flex: 1,
    backgroundColor: "#fcfcfc",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
});
