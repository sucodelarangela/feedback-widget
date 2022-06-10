import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

import { Widget } from './src/components/Widget';
import { theme } from './src/theme';

export default function App() {
  // from docs.expo.dev doc - Loads the fonts we need
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

  // keeping splash screen as long as fonts are still being loaded
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background
      }}
    >
      <Widget />

      <StatusBar
        style="light"
        backgroundColor='transparent'
        translucent />
    </View>
  );
}

// StatusBar is the one from your own mobile phone. The style "light" turns it into white color and 'transparent' and 'translucent' make it appear on top of the app for a better experience