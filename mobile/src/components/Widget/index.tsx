// File for the structure of our component
import React from 'react';
import { View, TouchableOpacity } from 'react-native'; // TouchableOpacity = click element
import { ChatTeardropDots } from 'phosphor-react-native';

import { styles } from './styles';
import { theme } from '../../theme';

export function Widget() {
  // The style of our component will be the container in styles.ts
  return (
    <>
      <TouchableOpacity
        style={styles.button}>
        <ChatTeardropDots
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color} />
      </TouchableOpacity>
    </>
  )
}
