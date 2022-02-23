import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={styles.btns}
          onPress={() => navigation.navigate("AutosScreen")}
        >
          <Text style={styles.txtBtns}>Auto(s)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btns}
          onPress={() => navigation.navigate("DireccionesScreen")}
        >
          <Text style={styles.txtBtns}>Dirección(es)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btns}
          onPress={() => navigation.navigate("ServiciosScreen")}
        >
          <Text style={styles.txtBtns}>Lista de Servicios</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  btns: {
    backgroundColor: "#2e4053",
    borderRadius: 10,
    padding: 5,
    marginTop: 15,
  },
  txtBtns: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});
