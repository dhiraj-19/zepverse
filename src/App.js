import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Theme } from "./services/Theming";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage/Home.Page";
import NavBarComponents from "./Components/Header/NavBar.Components";

export const theme = createTheme({
  palette: {
    primary: {
      main: Theme.primary,
    },
    secondary: {
      main: Theme.secondary,
    },
  },
  typography: {
    fontFamily: `'Poppins', 'sans-serif'`,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBarComponents />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
