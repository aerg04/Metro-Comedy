import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
    screenOptions={{

      title: 'MetroComedy',

      headerStyle:{
        backgroundColor: '#FF4500'
      },

      headerTintColor: '#00000',

      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
