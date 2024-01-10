import { useContext, useState } from "react";
import { LanguageContext } from "../containers/Home";

const ContextChallenge = () => {
  const languages = useContext(LanguageContext);
  const [language, setLanguage] = useState(languages[0])

  return (
    <button onClick={() => {setLanguage(() => language === languages[0] ? languages[1] : languages[0])}}>
      {language}
    </button>
  );
};

export default ContextChallenge;
