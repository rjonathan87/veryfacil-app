import { Button, Input } from 'react-native-elements';

export default function EditarDireccionesScreen({route}) {
  const direccion = route.params?.params.direccion;

  return (
    <>
      <Input 
        label="Calle"
        placeholder="Calle" 
      />
      <Input 
        label="Número"
        placeholder="Número" 
      />
      <Input 
        label="Alcaldía"
        placeholder="Alcaldía" 
      />
      <Input 
        label="Código Postal"
        placeholder="Código Postal" 
      />
      <Input 
        label="Entidad"
        placeholder="Entidad" 
      />
      <Button
        title="Agregar"
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
        onPress={ () => console.log('Guardar direccion')}
      />
    </>
  );
};
