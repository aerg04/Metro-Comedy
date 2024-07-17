import TarjetaComediante from "@/components/TarjetaComediante";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <TarjetaComediante></TarjetaComediante>

    </View>
  );
}
