import { NativeBaseProvider, Box } from "native-base";
import React from "react";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box>Hello world</Box>
    </NativeBaseProvider>
  );
}
