import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";

function App() {
  const html = document.querySelector("html").classList;
  const [thememode, setthememode] = useState("light");

  const lightTheme = () => {
    setthememode("light");
  };

  const darkTheme = () => {
    setthememode("dark");
  };

  useEffect(() => {
    html.remove("light", "dark");
    html.add(thememode);
  }, [thememode]);

  return (
    <ThemeProvider value={{ thememode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
