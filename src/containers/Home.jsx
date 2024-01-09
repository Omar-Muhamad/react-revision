// import Counter from "../components/useState/Counter";
// import Counter2 from "../components/useState/Counter2";
// import Counter3 from "../components/useState/Counter3";
// import Counter4 from "../components/useState/Counter4";

import { createContext } from "react";
import ComponentA from "../components/useContext/ComponentA";

export const UserContext = createContext()
export const JobContext = createContext()

const Home = () => {
  return (
    <main className="h-[calc(100vmin-10vh)] flex justify-center items-center text-center">
      <div className="">
        <h1 className="main-header">Home page</h1>
        {/* <Counter />
        <Counter2 />
        <Counter3 />      // learn useState
        <Counter4 /> */}
      {/* <UserContext.Provider value={'Omar Muhammad'}>
        <JobContext.Provider value={'Fullstack Developer'}>
          <ComponentA />          // learn useContext
        </JobContext.Provider>
      </UserContext.Provider> */}
      </div>
    </main>
  );
};

export default Home;
