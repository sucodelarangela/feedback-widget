import React from "react";
import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageProps,
  Text
} from "react-native";

import { styles } from "./styles";

// Extending TouchableOpacity types and Image types using props
interface Props extends TouchableOpacityProps {
  title: string;
  image: ImageProps;
}

// Using ...rest (spread operator) to get all other properties from TouchableOpacity to be passed as properties for the component
export function Option({ title, image, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      <Image
        source={image}
        style={styles.image}
      />

      <Text
        style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}