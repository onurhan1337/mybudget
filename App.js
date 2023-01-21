import { NativeBaseProvider } from "native-base";
import React from "react";

import AppBar from "./components/appBar";

export default function App() {
  return (
    <NativeBaseProvider>
      <AppBar />
    </NativeBaseProvider>
  );
}
