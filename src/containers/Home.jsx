import Counter from "../components/Counter";
import Counter2 from "../components/Counter2";
import Counter3 from "../components/Counter3";
import Counter4 from "../components/Counter4";

const Home = () => {
  return (
    <main className="h-[calc(100vmin-10vh)] flex justify-center items-center text-center">
      <div className="">
        <h1 className="main-header">Home page</h1>
        <Counter />
        <Counter2 />
        <Counter3 />
        <Counter4 />
      </div>
    </main>
  );
};

export default Home;
