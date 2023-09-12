import { useState } from "react";
import { GlobalLangContext } from "./Context/LanguageContext";
import Landing from "./Pages/Landing";
import "./App.css";

function App() {
  const [langCode, setLangCode] = useState<string>("en");

  return (
    <GlobalLangContext.Provider value={{ langCode, setLangCode }}>
      <div className="App max-w-[1800px] mx-auto">
        <Landing />
      </div>
    </GlobalLangContext.Provider>
  );
}

export default App;
