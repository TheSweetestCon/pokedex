import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { Home } from './src/global/styles/pages/home';
//import { Welcome } from './src/global/styles/pages/welcome';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/*<Welcome/>*/}
      <Home/>
    </ThemeProvider>
  );
}
