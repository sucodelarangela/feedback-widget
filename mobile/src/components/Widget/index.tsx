// File for the structure of our component
import React, { useRef } from 'react'; // 
import { View, TouchableOpacity } from 'react-native'; // TouchableOpacity = click element
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import { Options } from '../Options';
import { Form } from '../Form';
import { Success } from '../Success';

import { styles } from './styles';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes'

// exporting the type of the keys from feedbackTypes to be used in other components
export type FeedbackType = keyof typeof feedbackTypes

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
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}>

        <Success />
      </BottomSheet>
    </>
  )
}

export default gestureHandlerRootHOC(Widget)

/*
snapPoints={[closed, open]}
handleIndicatorStyle comes from gesture-handler
*/