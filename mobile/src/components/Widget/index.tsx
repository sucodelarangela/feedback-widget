// File for the structure of our component
import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

export function Widget() {
  // The style of our component will be the container in styles.ts
  return <View style={styles.container}></View>;
}
