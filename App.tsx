import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import { Welcome } from "./src/pages/Welcome";
import { Home } from "./src/pages/Home";
import { ScrollView } from "react-native";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScrollView>
      <Welcome/>
      <Home/>
      </ScrollView>
      
    </ThemeProvider>
  );
}

