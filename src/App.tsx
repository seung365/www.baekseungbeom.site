import { ThemeProvider } from "@emotion/react"
import { useState } from "react"
import Home from "./pages/Home"
import { darkTheme, lightTheme } from "./styles/theme"

const App = () => {
  const [isDark, setIsDark] = useState(true)
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Home isDark={isDark} setIsDark={setIsDark} />
    </ThemeProvider>
  )
}

export default App
