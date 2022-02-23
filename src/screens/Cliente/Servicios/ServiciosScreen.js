import { useNavigation } from "@react-navigation/native";
import { FAB } from "react-native-elements";
import { Button, ListItem } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { StyleSheet, Text, View } from "react-native";

// status_servicio (agendado, en proceso, concluido, cancelado)

const listaServiciosRecientes = [
  {
    id: 1,
    id_auto: 2,
    id_cliente: 1,
    fecha_servicio: "2021-12-11",
    hora_inicio: "12:00",
    hora_finalza: "15:00",
    marca: "Nissan Versa",
    modelo: "2015",
    placas: "123SDF",
    status_servicio: "proceso",
    coordenadas_servicio: {
      ini: {
        lat: "19.4156144",
        lng: "-99.1463691",
      },
      end: {
        lat: "19.4156144",
        lng: "-99.1463691",
      },
    },
  },
  {
    id: 2,
    id_auto: 3,
    id_cliente: 1,
    fecha_servicio: "2021-11-01",
    marca: "Ford Mustang",
    modelo: "1969",
    placas: "321FSD",
    status_servicio: "agendado",
    coordenadas_servicio: {
      ini: {
        lat: "19.4156144",
        lng: "-99.1463691",
      },
      end: {
        lat: "19.4156144",
        lng: "-99.1463691",
      },
    },
  },
  {
    id: 11,
    id_auto: 124,
    id_cliente: 1,
    fecha_servicio: "2021-08-14",
    marca: "Ford Explorer",
    modelo: "2010",
    placas: "LKJ987",
    status_servicio: "concluido",
    coordenadas_servicio: {
      ini: {
        lat: "19.4156144",
        lng: "-99.1463691",
      },
      end: {
        lat: "19.4156144",
        lng: "-99.1463691",
      },
    },
  },
  {
    id: 13,
    id_auto: 124,
    id_cliente: 1,
    fecha_servicio: "2021-08-14",
    marca: "Ford Explorer",
    modelo: "2010",
    placas: "LKJ987",
    status_servicio: "cancelado",
    coordenadas_servicio: {
      ini: {
        lat: "19.4156144",
        lng: "-99.1463691",
      },
      end: {
        lat: "19.4156144",
        lng: "-99.1463691",
      },
    },
  },
];

export default function ServiciosScreen() {
  const navigation = useNavigation();
  
  const editarServicio = servicio => {
    navigation.navigate("EditarServicioScreen", {
      params: { servicio },
    });
  }
  
  const eliminarServicio = (id) => {
    console.log(id);
  };

  return (
    <>
      <ScrollView>
        {listaServiciosRecientes.map((l, i) => {
          let dt = new Date(l.fecha_servicio);
          let options = { year: "numeric", month: "long", day: "numeric" };

          return (
            <ListItem.Swipeable
              key={i}
              leftContent={
                <Button
                  icon={{ type: "font-awesome", name: "gears", color: "white" }}
                  buttonStyle={{ minHeight: "100%" }}
                  onPress={() => editarServicio(l)}
                />
              }
              rightContent={
                <Button
                  title="Borrar"
                  icon={{ name: "delete", color: "white" }}
                  buttonStyle={{ minHeight: "100%", backgroundColor: "red" }}
                  onPress={() => eliminarServicio(l.id)}
                />
              }
            >
              <Icon type="font-awesome" name="leaf" color="green" />
              <ListItem.Content
                style={{
                  flex: 1,
                  flexDirection: "column",
                  alignItems: "flex-start",
                  alignContent: 'space-between'
                }}
              >
                <ListItem.Title style={{
                  flex: 1,
                }}
                
                >
                  <View>
                    <Text>{dt.toLocaleDateString("es-ES", options)}</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      width: 100,
                      alignItems: 'flex-end'
                    }}
                  >
                    {l.status_servicio === "agendado" ? (
                      <Icon type="font-awesome" name="book" color="#00bfff" />
                    ) : l.status_servicio === "proceso" ? (
                      <Icon type="font-awesome" name="bolt" color="#00ff00" />
                    ) : l.status_servicio === "concluido" ? (
                      <Icon type="font-awesome" name="check" color="#ffbf00" />
                    ) : (
                      <Icon type="font-awesome" name="ban" color="#ff0000" />
                    )}
                  </View>
                </ListItem.Title>
                <ListItem.Subtitle>
                  {l.marca} {l.modelo} {l.placas}
                </ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem.Swipeable>
          );
        })}
      </ScrollView>
      <FAB
        placement="right"
        icon={{ name: "add", color: "white" }}
        color="#2e4053"
        onPress={() => navigation.navigate("AgregarServicioScreen")}
      />
    </>
  );
}

const styles = StyleSheet.create({
  listAgendado: {
    backgroundColor: "#00bfff",
  },
  listProceso: {
    backgroundColor: "#00ff00",
  },
  listConcluido: {
    backgroundColor: "#ffbf00",
  },
  listCancelado: {
    backgroundColor: "#ff0000",
  },
});
