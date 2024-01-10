import { useContext, useState } from "react";
import { LanguageContext } from "../containers/Home";

const ContextChallenge = () => {
  const languages = useContext(LanguageContext);
  const [language, setLanguage] = useState(languages[0])

  return (
    <button onClick={() => {language === languages[0] ? setLanguage(languages[1]) : setLanguage(languages[0])}}>
      {language}
    </button>
  );
};

export default ContextChallenge;
