import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { HStack, VStack, IconButton, Icon, Text, Box } from "native-base";

function AppBar() {
  return (
    <>
      <StatusBar bg="white" />
      <Box safeAreaTop bg="white" />
      <VStack px="1" py="3" marginX="2" w="full">
        <Box bg="white">
          <Text color="black" fontSize="20" fontWeight="bold">
            Hello, Josephie
          </Text>
        </Box>
        <HStack justifyContent="space-between" alignItems="center">
          <Text color="gray.400" textAlign="left">
            Here you can view overview of your budget
          </Text>
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                mr="4"
                bg="gray.100"
                rounded="full"
                name="notifications"
                size="xl"
                color="black"
              />
            }
          />
        </HStack>
      </VStack>
    </>
  );
}

export default AppBar;
