import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

export function Copyright() {
  return (
    <View>
      <Text style={styles.text}>
        Feito com ♥ por {''}
        {/* <a
        // className="underline underline-offset-2"
        // href="https://angelacaldas.vercel.app"
        // target="_blank"
        > */}
        Angela Caldas
        {/* </a> */}
      </Text>
    </View >
  )
}