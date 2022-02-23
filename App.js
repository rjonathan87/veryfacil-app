import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Provider } from "react-redux";
import { store } from "./src/store/store";

import StackNavigator from "./src/components/StackNavigator/StackNavigator";

export default function App() {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StackNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}
