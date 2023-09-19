import { useState, useEffect } from "react";
import { GlobalLangContext } from "./Context/LanguageContext";
import Landing from "./Pages/Landing";
import { Crisp } from "crisp-sdk-web";
import { CRISP_WEBSITE_ID } from "./Const/Keys";
import "./App.css";

function App() {
  const [langCode, setLangCode] = useState<string>("en");

  useEffect(() => {
    Crisp.configure(CRISP_WEBSITE_ID);
  }, []);

  return (
    <GlobalLangContext.Provider value={{ langCode, setLangCode }}>
      <div className="App max-w-[1800px] mx-auto overflow-hidden">
        <Landing />
      </div>
    </GlobalLangContext.Provider>
  );
}

export default App;
