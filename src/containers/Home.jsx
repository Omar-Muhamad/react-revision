import { createContext } from "react";
import ContextChallenge from "../components/ContextChallenge";

export const LanguageContext = createContext();

const languages = ["JavaScript", "Ruby"];

const Home = () => {
  return (
    <>
      <div className="h-[calc(100vmin-10vh)] flex justify-center items-center">
        Home page
      </div>
      <LanguageContext.Provider value={languages}>
        <ContextChallenge />
      </LanguageContext.Provider>
    </>
  );
};

export default Home;
