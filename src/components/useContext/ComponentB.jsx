import { useContext } from "react";
import ComponentC from "./ComponentC";
import { JobContext, UserContext } from "../../containers/Home";

const ComponentB = () => {
  // useContext Method

  const user = useContext(UserContext);
  const job = useContext(JobContext);
  return (
    <>
      <div>
        The username is: {user} and he is: a {job} from ComponentB
      </div>
      <ComponentC />
    </>
  );
};

export default ComponentB;
