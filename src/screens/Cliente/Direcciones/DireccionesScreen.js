import { Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button, ListItem } from "react-native-elements";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useNavigation } from "@react-navigation/native";

// import FAB from "react-native-fab";
import { FAB } from "react-native-elements";

const listaDirecciones = [
  {
    id: 1,
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  {
    id: 2,
    street: "Victor Plains",
    suite: "Suite 879",
    city: "Wisokyburgh",
    zipcode: "90566-7771",
    geo: {
      lat: "-43.9509",
      lng: "-34.4618",
    },
  }
];

export default function DireccionesScreen() {
  const navigation = useNavigation();

  const editarDireccion = (id) => {
    let direccion = listaDirecciones.filter((direccion) => direccion.id === id);
    navigation.navigate("EditarDireccionesScreen", {
      params: { direccion },
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
        {listaDirecciones.map((l, i) => (
          <ListItem.Swipeable
            key={i}
            leftContent={
              <Button
                icon={{ type: "font-awesome", name: "gears", color: "white" }}
                buttonStyle={{ minHeight: "100%" }}
                onPress={() => editarDireccion(l.id)}
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
            <Icon type="font-awesome" name="address-book" color="blue" />
            <ListItem.Content>
              <ListItem.Title>{l.street}</ListItem.Title>
              <ListItem.Subtitle>{l.suite}, {l.city}, {l.zipcode}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem.Swipeable>
        ))}
      </ScrollView>

      <FAB
        placement="right"
        icon={{ name: "add", color: "white" }}
        color="#2e4053"
        onPress={() => navigation.navigate("AgregarDireccionesScreen")}
      />
    </>
  );
}
