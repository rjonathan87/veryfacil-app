import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../../screens/HomeScreen";
import RegisterClientScreen from "../../screens/Auth/RegisterClientScreen";
import LoginClientScreen from "../../screens/Auth/LoginClientScreen";
import ClientScreen from "../../screens/Auth/ClientScreen";
import EmployeeScreen from "../../screens/Auth/EmployeeScreen";
import LoginEmployeScreen from "../../screens/Auth/LoginEmployeScreen";
import RegisterEmployeScreen from "../../screens/Auth/RegisterEmploye";

import AutosScreen from "../../screens/Cliente/Autos/AutosScreen";
import EditarAutoScreen from "../../screens/Cliente/Autos/EditarAutoScreen";
import AgregarAutoScreen from "../../screens/Cliente/Autos/AgregarAutoScreen";

import DireccionesScreen from "../../screens/Cliente/Direcciones/DireccionesScreen";
import AgregarDireccionesScreen from "../../screens/Cliente/Direcciones/AgregarDireccionesScreen";
import EditarDireccionesScreen from "../../screens/Cliente/Direcciones/EditarDireccionesScreen";

import ServiciosScreen from "../../screens/Cliente/Servicios/ServiciosScreen";
import AgregarServicioScreen from "../../screens/Cliente/Servicios/AgregarServicioScreen";
import EditarServicioScreen from "../../screens/Cliente/EditarServicioScreen";

export default function StackNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicio"
          component={HomeScreen}
          options={{
            title: "Inicio",
          }}
        />
        <Stack.Screen
          name="RegisterClient"
          component={RegisterClientScreen}
          options={{
            title: "Registro de Cliente",
          }}
        />
        <Stack.Screen
          name="RegisterEmploye"
          component={RegisterEmployeScreen}
          options={{
            title: "Registrar Verificador",
          }}
        />
        <Stack.Screen
          name="LoginEmploye"
          component={LoginEmployeScreen}
          options={{
            title: "Inicio Verificador",
          }}
        />
        <Stack.Screen
          name="LoginClient"
          component={LoginClientScreen}
          options={{
            title: "Inicio Cliente",
          }}
        />
        <Stack.Screen
          name="EmployeeScreen"
          component={EmployeeScreen}
          options={{
            title: "Verificador",
          }}
        />
        {/*  CLIENTE */}
        <Stack.Screen
          name="ClientScreen"
          component={ClientScreen}
          options={{
            title: "Cliente",
          }}
        />
        <Stack.Screen
          name="AutosScreen"
          component={AutosScreen}
          options={{
            title: "Autos",
          }}
        />
        <Stack.Screen
          name="EditarAutoScreen"
          component={EditarAutoScreen}
          options={{
            title: "Editar Auto",
          }}
        />
        <Stack.Screen
          name="AgregarAutoScreen"
          component={AgregarAutoScreen}
          options={{
            title: "Agregar Auto",
          }}
        />
        <Stack.Screen
          name="DireccionesScreen"
          component={DireccionesScreen}
          options={{
            title: "Direcciones",
          }}
        />
        <Stack.Screen
          name="AgregarDireccionesScreen"
          component={AgregarDireccionesScreen}
          options={{
            title: "Agregar Dirección",
          }}
        />
        <Stack.Screen
          name="EditarDireccionesScreen"
          component={EditarDireccionesScreen}
          options={{
            title: "Editar Dirección",
          }}
        />
        <Stack.Screen
          name="ServiciosScreen"
          component={ServiciosScreen}
          options={{
            title: "Servicios",
          }}
        />
        <Stack.Screen
          name="AgregarServicioScreen"
          component={AgregarServicioScreen}
          options={{
            title: "Agregar Servicios",
          }}
        />
        <Stack.Screen
          name="EditarServicioScreen"
          component={EditarServicioScreen}
          options={{
            title: "Editar Servicios",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
