import React from "react";
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity
} from "react-native";

import { ArrowLeft } from "phosphor-react-native";

// importing the types from Widget
import { FeedbackType } from '../../components/Widget'
import { ScreenshotButton } from '../../components/ScreenshotButton'
import { Button } from '../../components/Button'

import { styles } from "./styles";
import { theme } from "../../theme";
import { feedbackTypes } from '../../utils/feedbackTypes'

// creating an interface to define the properties for the Form component
interface Props {
  feedbackType: FeedbackType
}

export function Form({ feedbackType }: Props) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Back button */}
        <TouchableOpacity>
          <ArrowLeft
            size={24}
            weight='bold'
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          {/* Dinamically showing the images: */}
          <Image
            source={feedbackTypeInfo.image}
            style={styles.image} />
          <Text style={styles.titleText}>
            {/* Dinamically showing the titles: */}
            {feedbackTypeInfo.title}
          </Text>
        </View>
      </View>

      <TextInput
        multiline
        style={styles.input}
        placeholder='Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...'
        placeholderTextColor={theme.colors.text_secondary}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          onTakeShot={() => { }}
          onRemoveshot={() => { }}
          screenshot=''
        />

        <Button isLoading={false} />
      </View>
    </View>
  )
}