import ThemeDisplay from "./components/ThemeDisplay"
import ThemeToggle from "./components/ThemeToggle";
import { useTheme } from "./context/ThemeContext";


function App() {
 
  // const ThemedContainer = () => {
  const { theme } = useTheme();

  return (
    <>
       <div className={`App ${theme === 'dark'? 'dark-theme' : ''}`}>  {/* */}
        <h1>Change theme using useContext React's Hook</h1>

        <ThemeDisplay />
        <ThemeToggle />
        {/* <ThemedContainer /> */}
      </div>
    </>
  )
}

export default App
