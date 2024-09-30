import { createContext, useContext } from "react";

//Create Context
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// Everyone part is aware of it 
export const ThemeProvider = ThemeContext.Provider;

// Custom Hook 
export default function useTheme() {
  return useContext(ThemeContext);
}
