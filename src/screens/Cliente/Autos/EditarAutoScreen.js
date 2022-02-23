import { Button, Input } from 'react-native-elements';

export default function EditarAutoScreen({route}) {
  const auto = route.params?.params.auto;

  return (
    <>
      <Input 
        label="Marca"
        placeholder="Marca" 
        value='lll'
      />
      <Input 
        label="Modelo"
        placeholder="Modelo" 
      />
      <Input 
        label="Placas"
        placeholder="Placas" 
      />
      <Input 
        label="Color"
        placeholder="Color" 
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
        onPress={ () => console.log('Guardar Auto')}
      />
    </>
  );
};
