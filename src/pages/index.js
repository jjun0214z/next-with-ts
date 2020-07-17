import { useContext, useEffect } from "react";
import { stroe } from "../contexts/contextProvider";

function App() {
  const globalState = useContext(stroe);
  const { state, dispatch } = globalState;

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div>
      <button onClick={() => dispatch({ type: "TEST_ACTION_A" })}>버튼</button>
    </div>
  );
}
export default App;
