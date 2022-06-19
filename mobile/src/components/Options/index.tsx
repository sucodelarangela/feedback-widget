import React from "react";
import { View, Text } from "react-native";
import { Copyright } from "../Copyright";
import { Option } from "../Option";

import { feedbackTypes } from '../../utils/feedbackTypes'
import { styles } from "./styles";
import { FeedbackType } from "../Widget";

interface Props {
  onFeedbackTypeChange: (FeedbackType: FeedbackType) => void
}

export function Options({ onFeedbackTypeChange }: Props) {
  return (
    <View style={styles.container}>
      <Text
        style={styles.title}>
        Deixe seu feedback
      </Text>

      <View style={styles.options}>
        {/* Iterating through feedbackTypes Object to show them on the widget */}
        {
          Object
            .entries(feedbackTypes)
            .map(([key, value]) => (
              <Option
                key={key}
                title={value.title}
                image={value.image}
                onPress={() => onFeedbackTypeChange(key as FeedbackType)} />
            ))
        }
      </View>

      <Copyright />
    </View>
  )
}