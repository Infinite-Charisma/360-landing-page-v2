import { useState } from "react";
import { GlobalLangContext } from "./Context/LanguageContext";
import Landing from "./Pages/Landing";
import "./App.css";

function App() {
  const [langCode, setLangCode] = useState<string>("en");

  return (
    <GlobalLangContext.Provider value={{ langCode, setLangCode }}>
      <div>
        {/* <video
        id="background-video"
        className="background-video"
        autoPlay
        loop
        muted
      >
        <source
          src="https://worshiphousemedia.s3.amazonaws.com/previews/s/mo/dan/mo/3dlines.mp4"
          type="video/mp4"
        />
      </video> */}
        <div className="App max-w-[1800px] mx-auto">
          <Landing />
        </div>
      </div>
    </GlobalLangContext.Provider>
  );
}

export default App;
