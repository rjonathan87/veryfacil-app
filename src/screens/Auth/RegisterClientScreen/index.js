import { useState } from "react";
import { View } from "react-native";
import { Button, Input } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

export default function RegisterClientScreen() {
  const [data, setData] = useState([]);

  return (
      <ScrollView>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Input
            label="Nombre"
            placeholder="Nombre"
            rightIcon={{ type: "font-awesome", name: "user" }}
          />
          <Input label="Apellido Paterno" placeholder="Apellido Paterno" />
          <Input label="Apellido Materno" placeholder="Apellido Materno" />
          <Input
            label="Usuario"
            placeholder="Usuario"
            rightIcon={{ type: "font-awesome", name: "user" }}
          />
          <Input
            label="Contraseña"
            placeholder="Contraseña"
            rightIcon={{ type: "font-awesome", name: "lock" }}
            secureTextEntry={true}
          />
          <Input
            label="Repita contraseña"
            placeholder="Repita contraseña"
            rightIcon={{ type: "font-awesome", name: "lock" }}
            secureTextEntry={true}
          />

          <Button
            title="Registrar"
            buttonStyle={{
              borderWidth: 0,
              borderColor: "transparent",
              borderRadius: 20,
              paddingHorizontal: 20,
            }}
            icon={{
              name: "arrow-right",
              type: "font-awesome",
              size: 15,
              color: "white",
            }}
            iconRight
            iconContainerStyle={{ marginLeft: 10, marginRight: 10 }}
          />
        </View>
      </ScrollView>
  );
}
