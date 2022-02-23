import { Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';

export default function EditarServicioScreen({route}) {
  const servicio = route.params?.params.servicio;

  console.log("desde Editar Servicios", servicio)

  return (
    <>
      <Input 
        label="Marca"
        placeholder="Marca" 
      />

      <Input 
        label='Fecha Servicio'
        placeholder='Fecha Servicio'
      />
      <Input 
        label='Hora Inicio'
        placeholder='Hora Inicio'
      />
      <Input 
        label='Hora Finalza'
        placeholder='Hora Finalza'
      />
      <Input 
        label='Marca'
        placeholder='Marca'
      />
      <Input 
        label='Modelo'
        placeholder='Modelo'
      />
      <Input 
        label='Placas'
        placeholder='Placas'
      />
      <Input 
        label='Status Servicio'
        placeholder='Status Servicio'
      />
      <Button
        title="Guardar"
        buttonStyle={{
          borderWidth: 0,
          borderColor: "transparent",
          borderRadius: 20,
          paddingHorizontal: 20
        }}
        icon={{
          name: "save",
          type: "font-awesome",
          size: 15,
          color: "white",
        }}
        iconRight
        iconContainerStyle={{ marginLeft: 10, marginRight: 10 }}
        onPress={ () => console.log('Guardar Auto')}
      />
    </>
  );
};
