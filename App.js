import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import RegisterClientScreen from "./src/screens/Auth/RegisterClientScreen";
import LoginClientScreen from "./src/screens/Auth/LoginClientScreen";
import ClientScreen from "./src/screens/Auth/ClientScreen";
import EmployeeScreen from "./src/screens/Auth/EmployeeScreen";
import LoginEmployeScreen from "./src/screens/Auth/LoginEmployeScreen";
import RegisterEmployeScreen from "./src/screens/Auth/RegisterEmploye";
import AutosScreen from "./src/screens/Cliente/AutosScreen";
import DireccionesScreen from "./src/screens/Cliente/DireccionesScreen";
import ModosPagoScreen from "./src/screens/Cliente/ModosPagoScreen";
import ServiciosScreen from "./src/screens/Cliente/ServiciosScreen";
import EditarAutoScreen from "./src/screens/Cliente/EditarAutoScreen";
import AgregarAutoScreen from "./src/screens/Cliente/AgregarAutoScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen 
            name="Inicio" 
            component={HomeScreen}
            options={{
              title: 'Inicio'
            }}
          />
          <Stack.Screen 
            name="RegisterClient" 
            component={RegisterClientScreen}
            options={{
              title: 'Registro de Cliente'
            }}
          />
          <Stack.Screen 
            name="RegisterEmploye" 
            component={RegisterEmployeScreen}
            options={{
              title: 'Registrar Verificador'
            }}
          />
          <Stack.Screen 
            name="LoginEmploye" 
            component={LoginEmployeScreen}
            options={{
              title: 'Inicio Verificador'
            }}
          />
          <Stack.Screen 
            name="LoginClient" 
            component={LoginClientScreen}
            options={{
              title: 'Inicio Cliente'
            }}
          />
          <Stack.Screen 
            name="EmployeeScreen" 
            component={EmployeeScreen}
            options={{
              title: 'Verificador'
            }}
          />
          {/*  CLIENTE */}
          <Stack.Screen 
            name="ClientScreen" 
            component={ClientScreen}
            options={{
              title: 'Cliente'
            }}
          />

            <Stack.Screen 
              name="AutosScreen" 
              component={AutosScreen}
              options={{
                title: 'Autos'
              }}
            />
            <Stack.Screen 
              name="EditarAutoScreen" 
              component={EditarAutoScreen}
              options={{
                title: 'Editar Auto'
              }}
            />
            <Stack.Screen 
              name="AgregarAutoScreen" 
              component={AgregarAutoScreen}
              options={{
                title: 'Agregar Auto'
              }}
            />
            <Stack.Screen 
              name="DireccionesScreen" 
              component={DireccionesScreen}
              options={{
                title: 'Direcciones'
              }}
            />
            <Stack.Screen 
              name="ModosPagoScreen" 
              component={ModosPagoScreen}
              options={{
                title: 'ModosPago'
              }}
            />
            <Stack.Screen 
              name="ServiciosScreen" 
              component={ServiciosScreen}
              options={{
                title: 'Servicios'
              }}
            />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
