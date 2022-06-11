// File for the structure of our component
import React, { useRef } from 'react'; // 
import { View, TouchableOpacity } from 'react-native'; // TouchableOpacity = click element
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import { styles } from './styles';
import { theme } from '../../theme';

function Widget() {
  // anotates bottomSheet reference so we don't need to use states
  const bottomSheetRef = useRef<BottomSheet>(null)

  // using bottomSheet to open/close menu
  function handleOpen() {
    bottomSheetRef.current?.expand()
    // current? checks if it's null or not
  }

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={handleOpen}>
        <ChatTeardropDots
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color} />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}>
      </BottomSheet>
    </>
  )
}

export default gestureHandlerRootHOC(Widget)

/* snapPoints={[closed, open]} */