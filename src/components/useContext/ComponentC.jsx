import { JobContext, UserContext } from "../../containers/Home";

// Render props Pattern used before Hooks

const ComponentC = () => {
  return (
    <div className="">
      <UserContext.Consumer>
        {(user) => {
          return (
            <JobContext.Consumer>
              {(job) => {
                return (
                  <div>
                    The username is: {user} and he is: a {job} from ComponentC
                  </div>
                );
              }}
            </JobContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default ComponentC;
