import { View, Text, Alert } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Button, ListItem } from "react-native-elements";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useNavigation } from "@react-navigation/native";

// import FAB from "react-native-fab";
import { FAB } from 'react-native-elements';
import { useState } from "react";

const listaAutos = [
  {
    id: 1,
    placas: "ACG123",
    modelo: "Audi",
  },
  {
    id: 2,
    placas: "DFG123",
    modelo: "Vento",
  },
  {
    id: 3,
    placas: "CVB123",
    modelo: "Toyota",
  },
  {
    id: 4,
    placas: "DFG654",
    modelo: "Golf",
  },
  {
    id: 5,
    placas: "DFG654",
    modelo: "VW",
  },
  {
    id: 6,
    placas: "KJH789",
    modelo: "Setra",
  },
  {
    id: 7,
    placas: "POI567",
    modelo: "Bi Smart",
  },
  {
    id: 8,
    placas: "ERT567",
    modelo: "Avanza",
  },
  {
    id: 9,
    placas: "098WER",
    modelo: "Frontier",
  },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  const editarAuto = (id) => {
    let auto = listaAutos.filter( auto => auto.id === id)
    navigation.navigate("EditarAutoScreen", {
      params: { auto },
    });
  };
  const eliminarAuto = (id) => {
    Alert.alert("Alerta!", "Está seguro de eliminar?", [
      {
        text: "Si",
        onPress: () => Alert.alert("Eliminando"),
        style: "ok",
      },
      {
        text: "No",
        onPress: () => Alert.alert("Cancelado"),
        style: "cancel",
      },
    ]);
  };

  return (
    <>
      <ScrollView>
        {listaAutos.map((l, i) => (
          <ListItem.Swipeable
            key={i}
            leftContent={
              <Button
                icon={{ type: "font-awesome", name: "gears", color: "white" }}
                buttonStyle={{ minHeight: "100%" }}
                onPress={() => editarAuto(l.id)}
              />
            }
            rightContent={
              <Button
                title="Borrar"
                icon={{ name: "delete", color: "white" }}
                buttonStyle={{ minHeight: "100%", backgroundColor: "red" }}
                onPress={() => eliminarAuto(l.id)}
              />
            }
          >
            <Icon type="font-awesome" name="car" color="tomato" />
            <ListItem.Content>
              <ListItem.Title>{l.modelo}</ListItem.Title>
              <ListItem.Subtitle>{l.placas}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem.Swipeable>
        ))}
      </ScrollView>

      <FAB
          placement="right"
          icon={{ name: 'add', color: 'white' }}
          color="#2e4053"
          onPress={() => navigation.navigate("AgregarAutoScreen")}
        />
    </>
  );
}
